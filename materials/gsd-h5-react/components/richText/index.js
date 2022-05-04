import { getCloudInstance } from '../../utils/tcb';

Component({
  options: {
    virtualHost: true,
  },
  data: {
    __html: '',
  },
  properties: {
    value: {
      type: String,
      value: '这是一个富文本',
    },
    className: {
      type: String,
      value: '',
    },
    style: {
      type: String,
      value: '',
    },
  },
  methods: {
    async getSrc(img) {
      const regex = new RegExp(/<img [^>]*src=\\*"([^"]*?)\\*"/g);
      const url = img.replace(regex, '$1');
      if (img.includes('cloud://')) {
        const tcb = await getCloudInstance();
        const { fileList } = await tcb.getTempFileURL({
          fileList: [url],
        });
        if (fileList && fileList[0] && fileList[0].tempFileURL) {
          this.setData({
            __html: this.data.__html.replace(
              new RegExp(url, 'g'),
              fileList[0].tempFileURL
            ),
          });
        }
      }
    },
    updateValue() {
      const regex = new RegExp(/<img [^>]*src=\\*"([^"]*?)\\*"/g);
      let tempValue = this.properties.value
        .toString()
        .replace(/<img /g, `<img style="max-width:100%;height:auto" `)
        .replace(/<pre>/g, `<pre class="pre">`)
        .replace(/<blockquote>/g, `<blockquote class="blockquote">`);
      this.setData({ __html: tempValue });
      try {
        const imgs = this.properties.value.match(regex);

        if (imgs && imgs.length > 0) {
          imgs.forEach((img) => {
            this.getSrc(img);
          });
        }
      } catch (e) {}
    },
  },
  observers: {
    value() {
      this.updateValue();
    },
  },
});
