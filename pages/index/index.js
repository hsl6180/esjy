import { observable } from 'mobx';
import { createPage } from '../../common/weapp-page'
import { concatClassList, px2rpx } from '../../common/style'
import { app } from '../../app/weapps-api'
import { index as handlers } from '../../app/handlers'
// import index from '../../lowcode/index/index'
import lifecyle from '../../lowcode/index/lifecycle'
import state from '../../lowcode/index/state'
import computed from '../../lowcode/index/computed'
import { $page } from './api'

const $app = app;
const context = observable({});

const widgetProps = {
  id132: {
    style: {},
    classList: [],
    title: '',
    _parentId: undefined,
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id1: {
    style: {},
    classList: [ 'index-div' ],
    title: '',
    _parentId: 'id132',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id2: {
    style: { width: '100%', height: '372rpx' },
    classList: [],
    title: '',
    _parentId: 'id1',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id4: {
    style: { display: 'flex', alignItems: 'center', flexDirection: 'row' },
    classList: [ 'index-search' ],
    title: 'contenteditable',
    _parentId: 'id2',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id153: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id4',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id16: {
    style: { width: '100%', height: '100%' },
    classList: [ 'index-search-image' ],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: '',
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: 'https://main.qcloudimg.com/raw/8e0bc11da063242478c7adbf7100a871.png',
    webp: false,
    _parentId: 'id153',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id154: {
    style: { width: '100%' },
    classList: [],
    formType: '',
    initialValues: {},
    layout: 'horizontal',
    varPath: '',
    _parentId: 'id4',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Form'
  },
  id203: {
    style: {},
    classList: [],
    clearable: true,
    disabled: false,
    focus: false,
    formauto: 'formRadio',
    label: '商品名称',
    labelVisible: true,
    layout: '',
    maxLength: 140,
    password: false,
    placeholder: '请输入',
    required: false,
    requiredFlag: '',
    requiredMsg: '该项为必填项',
    rules: [],
    size: 'l',
    type: 'text',
    validateStatus: 'success',
    value: '',
    _parentId: 'id154',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:FormInput'
  },
  id7: {
    style: { width: '100%', height: '100%' },
    classList: [],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: '',
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: '/resources/2022-04/lowcode-340965',
    webp: false,
    _parentId: 'id2',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id19: {
    style: {},
    classList: [ 'index-grid' ],
    title: '',
    _parentId: 'id1',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id20: {
    style: { paddingTop: '10rpx', paddingBottom: '5rpx' },
    classList: [],
    columnRatio: '3:3:3:3',
    gutter: 20,
    mobileLayout: 'horizontal',
    rowGutter: 0,
    slot0: '',
    slot1: '',
    slot10: '',
    slot11: '',
    slot2: '',
    slot3: '',
    slot4: '',
    slot5: '',
    slot6: '',
    slot7: '',
    slot8: '',
    slot9: '',
    _parentId: 'id19',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:GridLayout'
  },
  id22: {
    style: {},
    classList: [ 'index-grid-div' ],
    title: '',
    _parentId: 'id20',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id21: {
    style: {},
    classList: [ 'index-grid-image' ],
    alt: '',
    fit: 'cover',
    imgPreview: '',
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: '/resources/2022-04/lowcode-342793',
    webp: false,
    _parentId: 'id22',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id36: {
    style: {},
    classList: [ 'index-grid-title' ],
    title: '',
    _parentId: 'id22',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id23: {
    style: { fontSize: '24rpx', whiteSpace: 'pre-line' },
    classList: [],
    decode: false,
    level: '0',
    maxLines: 1,
    selectable: false,
    space: '',
    text: '排行榜',
    textAlign: 'left',
    textColor: 'rgb(0, 0, 0)',
    userSelect: true,
    _parentId: 'id36',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id24: {
    style: {},
    classList: [ 'index-grid-div' ],
    title: '',
    _parentId: 'id20',
    _order: undefined,
    widgetType: 'gsd-h5-react:Container'
  },
  id25: {
    style: {},
    classList: [ 'index-grid-image' ],
    alt: '',
    fit: 'cover',
    imgPreview: '',
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: '/resources/2022-04/lowcode-342792',
    webp: false,
    _parentId: 'id24',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id35: {
    style: {},
    classList: [ 'index-grid-title' ],
    title: '',
    _parentId: 'id24',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id26: {
    style: { fontSize: '24rpx', whiteSpace: 'pre-line' },
    classList: [],
    decode: false,
    maxLines: 2,
    selectable: false,
    space: '',
    text: '特惠秒杀',
    userSelect: true,
    _parentId: 'id35',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id27: {
    style: {},
    classList: [ 'index-grid-div' ],
    title: '',
    _parentId: 'id20',
    _order: undefined,
    widgetType: 'gsd-h5-react:Container'
  },
  id28: {
    style: {},
    classList: [ 'index-grid-image' ],
    alt: '',
    fit: 'cover',
    imgPreview: '',
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: '/resources/2022-04/lowcode-342795',
    webp: false,
    _parentId: 'id27',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id34: {
    style: {},
    classList: [ 'index-grid-title' ],
    title: '',
    _parentId: 'id27',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id29: {
    style: { fontSize: '24rpx', whiteSpace: 'pre-line' },
    classList: [],
    decode: false,
    maxLines: 2,
    selectable: false,
    space: '',
    text: '热门活动',
    userSelect: true,
    _parentId: 'id34',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id30: {
    style: {},
    classList: [ 'index-grid-div' ],
    title: '',
    _parentId: 'id20',
    _order: undefined,
    widgetType: 'gsd-h5-react:Container'
  },
  id31: {
    style: {},
    classList: [ 'index-grid-image' ],
    alt: '',
    fit: 'cover',
    imgPreview: '',
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: '/resources/2022-04/lowcode-342790',
    webp: false,
    _parentId: 'id30',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id33: {
    style: {},
    classList: [ 'index-grid-title' ],
    title: '',
    _parentId: 'id30',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id32: {
    style: { fontSize: '24rpx', whiteSpace: 'pre-line' },
    classList: [],
    decode: false,
    maxLines: 2,
    selectable: false,
    space: '',
    text: '新人专区',
    userSelect: true,
    _parentId: 'id33',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id209: {
    style: {},
    classList: [],
    _parentId: 'id19',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id227: {
    style: {},
    classList: [],
    datasource: {
      name: 'dbdx_w3c513v',
      type: 'datamodal',
      extra: {
        params: {},
        viewId: 'view-2x222fjs0w',
        methodName: 'wedaGetRecords'
      }
    },
    orderBy: '',
    orderType: '',
    pageSize: 3,
    pagination: 'loadMoreButton',
    template: 'imageTextList',
    where: [],
    _parentId: 'id209',
    _order: 2,
    widgetType: 'gsd-h5-react:ListView'
  },
  id235: {
    style: {
      width: '100%',
      padding: '15PX 18PX 14PX 16PX',
      background: 'rgb(255, 255, 255)',
      position: 'relative',
      boxSizing: 'border-box',
      borderBottom: '1rpx dashed #acacac'
    },
    classList: [],
    _parentId: 'id227',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id236: {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      boxSizing: 'border-box'
    },
    classList: [],
    _parentId: 'id235',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id237: {
    style: { fontSize: '16PX', flex: '1', wordBreak: 'break-all' },
    classList: [],
    _parentId: 'id236',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id238: {
    style: {
      width: 'auto',
      display: '-webkit-box',
      color: 'rgba(0, 0, 0, 0.9)',
      lineHeight: '20PX',
      fontWeight: '600',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '1rpx'
    },
    classList: [],
    level: '0',
    maxLines: 1,
    space: false,
    textAlign: 'left',
    textColor: 'rgb(0, 0, 0)',
    userSelect: true,
    _parentId: 'id237',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id239: {
    style: {
      width: 'auto',
      marginTop: '12PX',
      display: '-webkit-box',
      color: 'rgb(207, 5, 0)',
      fontSize: '18PX',
      lineHeight: '20PX',
      opacity: 0.4,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '2rpx'
    },
    classList: [],
    level: '0',
    maxLines: 2,
    space: false,
    textAlign: 'left',
    textColor: 'rgb(0, 0, 0)',
    userSelect: true,
    _parentId: 'id237',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id240: {
    style: {
      width: '24PX',
      height: '24PX',
      marginLeft: '10PX',
      display: 'inline-block',
      lineHeight: '1rpx',
      opacity: 0.3,
      verticalAlign: 'middle'
    },
    classList: [],
    _parentId: 'id236',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id241: {
    style: {},
    classList: [],
    color: '',
    name: 'chevronright',
    size: 48,
    src: '',
    _parentId: 'id240',
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:Icon'
  },
  id242: {
    style: {
      width: '52PX',
      height: '52PX',
      marginRight: '10PX',
      position: 'relative'
    },
    classList: [],
    _parentId: 'id236',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id243: {
    style: { width: '100%', height: '100%' },
    classList: [],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: false,
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: '',
    _parentId: 'id242',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id244: {
    style: {
      marginTop: '20rpx',
      marginBottom: '20rpx',
      fontSize: '40rpx',
      textAlign: 'center',
      background: 'rgb(251, 249, 249)',
      position: 'static',
      whiteSpace: 'pre-line'
    },
    classList: [],
    level: '0',
    maxLines: 2,
    space: false,
    text: '热门推荐',
    userSelect: true,
    _parentId: 'id19',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id37: {
    style: {},
    classList: [ 'index-hot-title-div' ],
    title: '',
    _parentId: 'id1',
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id56: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id37',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id157: {
    style: {},
    classList: [ 'index-hot-card-div' ],
    _parentId: 'id56',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id43: {
    style: {},
    classList: [ 'index-hot-card' ],
    title: '',
    _parentId: 'id157',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id46: {
    style: { height: '200rpx' },
    classList: [],
    title: '',
    _parentId: 'id43',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id50: {
    style: {},
    classList: [ 'index-hot-card-image' ],
    alt: '',
    fit: 'cover',
    imgPreview: '',
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    webp: false,
    _parentId: 'id46',
    _order: 1,
    widgetType: 'gsd-h5-react:Image'
  },
  id47: {
    style: {},
    classList: [ 'index-hot-card-title' ],
    title: '',
    _parentId: 'id43',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id51: {
    style: { width: '100%', height: '100%' },
    classList: [ 'index-hot-card-desc' ],
    decode: false,
    maxLines: 2,
    selectable: false,
    space: '',
    userSelect: true,
    _parentId: 'id47',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id48: {
    style: {},
    classList: [ 'index-hot-card-btn-div' ],
    title: '',
    _parentId: 'id43',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id54: {
    style: {},
    classList: [ 'index-hot-card-btn' ],
    title: '',
    _parentId: 'id48',
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id55: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'index-hot-card-price-title' ],
    decode: false,
    level: '0',
    maxLines: 2,
    selectable: false,
    space: '',
    text: '预约',
    textAlign: 'center',
    textColor: '#fff',
    userSelect: true,
    _parentId: 'id54',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id159: {
    style: { display: 'flex', alignItems: 'center' },
    classList: [],
    title: '',
    _parentId: 'id48',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id158: {
    style: {
      color: 'rgb(181, 109, 204)',
      fontSize: '28rpx',
      lineHeight: '52rpx',
      textAlign: 'left',
      fontFamily: 'PingFang-SC-Heavy',
      letterSpacing: '0rpx'
    },
    classList: [],
    level: '0',
    maxLines: 1,
    space: false,
    text: '￥',
    textAlign: 'left',
    textColor: '#B56DCC',
    userSelect: true,
    _parentId: 'id159',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id52: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'index-hot-card-price' ],
    decode: false,
    level: '0',
    maxLines: 2,
    selectable: false,
    space: '',
    textAlign: 'left',
    textColor: '#B56DCC',
    userSelect: true,
    _parentId: 'id159',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id85: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id37',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id161: {
    style: { width: '320rpx', height: '320rpx' },
    classList: [],
    alt: '[图片]',
    fit: 'cover',
    imgPreview: false,
    lazyLoad: false,
    maskClosable: true,
    mode: 'scaleToFill',
    showMenuByLongpress: '',
    src: 'https://main.qcloudimg.com/raw/c85c9a875e9754545ee19f20438b2caa.svg',
    _parentId: 'id85',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id78: {
    style: { background: 'rgb(242, 243, 245)' },
    classList: [],
    title: '',
    _parentId: 'id1',
    _order: 4,
    widgetType: 'gsd-h5-react:Container'
  },
  id79: {
    style: {},
    classList: [ 'index-hot-desc-div' ],
    title: '',
    _parentId: 'id78',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id80: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'index-hot-title' ],
    decode: false,
    level: '0',
    maxLines: 2,
    selectable: false,
    space: '',
    text: '本店信息',
    userSelect: true,
    _parentId: 'id79',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id84: {
    style: {},
    classList: [ 'index-shop-div' ],
    title: '',
    _parentId: 'id78',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id86: {
    style: {},
    classList: [ 'index-shop-shop-logo-div' ],
    title: '',
    _parentId: 'id84',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id90: {
    style: { position: 'relative', top: '16rpx' },
    classList: [],
    title: '',
    _parentId: 'id86',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id92: {
    style: {},
    classList: [ 'index-shop-mini-logo' ],
    alt: '[图片]',
    lazyLoad: false,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: 'https://main.qcloudimg.com/raw/698cc19bc038096f576c2368243fbdee.png',
    webp: false,
    _parentId: 'id90',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id91: {
    style: {},
    classList: [ 'index-shop-desc' ],
    title: '',
    _parentId: 'id86',
    _order: undefined,
    widgetType: 'gsd-h5-react:Container'
  },
  id116: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id91',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id98: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id116',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id182: {
    style: { whiteSpace: 'pre-line' },
    classList: [],
    level: '0',
    maxLines: 2,
    space: false,
    text: '每天上午8：00到晚上6：00',
    userSelect: true,
    _parentId: 'id98',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id97: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'index-shop-title' ],
    decode: false,
    selectable: false,
    text: '营业时间',
    _parentId: 'id116',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id87: {
    style: {},
    classList: [ 'index-shop-shop-logo-div' ],
    title: '',
    _parentId: 'id84',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id93: {
    style: { position: 'relative', top: '16rpx' },
    classList: [],
    title: '',
    _parentId: 'id87',
    _order: undefined,
    widgetType: 'gsd-h5-react:Container'
  },
  id94: {
    style: {},
    classList: [ 'index-shop-mini-logo' ],
    alt: '[图片]',
    lazyLoad: false,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: 'https://main.qcloudimg.com/raw/175389bf919245a342d10b1ab2721418.png',
    webp: false,
    _parentId: 'id93',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id100: {
    style: {},
    classList: [ 'index-shop-desc' ],
    title: '',
    _parentId: 'id87',
    _order: undefined,
    widgetType: 'gsd-h5-react:Container'
  },
  id108: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id100',
    _order: 3,
    widgetType: 'gsd-h5-react:Container'
  },
  id110: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id108',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id113: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'index-shop-title' ],
    decode: false,
    selectable: false,
    text: '打电话',
    _parentId: 'id110',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id111: {
    style: { height: '40rpx' },
    classList: [ 'index-shop-right-logo-div' ],
    title: '',
    _parentId: 'id108',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id109: {
    style: {},
    classList: [ 'index-shop-right-logo' ],
    alt: '[图片]',
    lazyLoad: false,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: 'https://main.qcloudimg.com/raw/437737661340d4b67b6dd4c7f8cc8e99.png',
    webp: false,
    _parentId: 'id111',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id114: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id100',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id101: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'index-shop-title' ],
    decode: false,
    selectable: false,
    text: '联系电话',
    _parentId: 'id114',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id102: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id114',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id181: {
    style: { whiteSpace: 'pre-line' },
    classList: [],
    maxLines: 2,
    space: false,
    text: '1022-591578200',
    userSelect: true,
    _parentId: 'id102',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id88: {
    style: {},
    classList: [ 'index-shop-shop-logo-div' ],
    title: '',
    _parentId: 'id84',
    _order: 2,
    widgetType: 'gsd-h5-react:Container'
  },
  id95: {
    style: { position: 'relative', top: '16rpx' },
    classList: [],
    title: '',
    _parentId: 'id88',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id96: {
    style: {},
    classList: [ 'index-shop-mini-logo' ],
    alt: '[图片]',
    lazyLoad: false,
    mode: 'scaleToFill',
    showMenuByLongpress: false,
    src: 'https://main.qcloudimg.com/raw/91e5e9fa187dd165fdf6df84675a044a.png',
    webp: false,
    _parentId: 'id95',
    _order: 0,
    widgetType: 'gsd-h5-react:Image'
  },
  id104: {
    style: {},
    classList: [ 'index-shop-desc' ],
    title: '',
    _parentId: 'id88',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id106: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id104',
    _order: 0,
    widgetType: 'gsd-h5-react:Container'
  },
  id105: {
    style: { whiteSpace: 'pre-line' },
    classList: [ 'index-shop-title' ],
    decode: false,
    selectable: false,
    text: '门店地址',
    _parentId: 'id106',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id115: {
    style: {},
    classList: [],
    title: '',
    _parentId: 'id106',
    _order: 1,
    widgetType: 'gsd-h5-react:Container'
  },
  id180: {
    style: { whiteSpace: 'pre-line' },
    classList: [],
    maxLines: 2,
    space: false,
    text: '沈阳市浑南区\n东北大学',
    userSelect: true,
    _parentId: 'id115',
    _order: 1,
    widgetType: 'gsd-h5-react:Text'
  },
  id123: {
    style: {},
    classList: [ 'index-footer-title' ],
    title: '',
    _parentId: 'id1',
    _order: 6,
    widgetType: 'gsd-h5-react:Container'
  },
  id125: {
    style: { whiteSpace: 'pre-line' },
    classList: [],
    decode: false,
    maxLines: 2,
    selectable: false,
    space: '',
    text: 'Copyright © 2013 - 2018 Tencent Cloud. All Right Reserved.\nweda 版权所有',
    userSelect: true,
    _parentId: 'id123',
    _order: 0,
    widgetType: 'gsd-h5-react:Text'
  },
  id207: {
    style: {},
    classList: [],
    _parentId: 'id1',
    _order: 7,
    widgetType: 'gsd-h5-react:Container'
  },
  id156: {
    style: { zIndex: '9999' },
    classList: [],
    back: false,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    center: '',
    end: '',
    home: false,
    iconTheme: 'black',
    mode: 'default',
    start: '',
    textColor: 'rgba(0, 0, 0, 1)',
    textSize: 32,
    title: '校园二手交易平台',
    _parentId: undefined,
    _order: 2,
    widgetType: 'CLOUDBASE_STANDARD:NavBar'
  },
  id184: {
    style: {},
    classList: [],
    activeColor: '#006EFF',
    backgroundColor: '#FFF',
    backgroundImage: '',
    backgroundType: 'color',
    color: '#444444',
    iconSize: 40,
    layoutType: 'iconText',
    position: 'bottom',
    route: false,
    routeType: 'redirectTo',
    tabbar: '',
    tabs: [
      {
        icon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-342801',
        name: 'index',
        title: '主页',
        iconFont: 'custom',
        __sortid__: '4vUtpu-Ztqy5fsvFZ_BFh',
        activeIcon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-342801',
        withParams: false
      },
      {
        icon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-343484',
        name: 'u_xiao_xi',
        title: '消息',
        iconFont: 'custom',
        __sortid__: 'lZZtiVNOuAX0HLz5IQfo_',
        activeIcon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-343484',
        withParams: false
      },
      {
        icon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-342803',
        name: 'mine',
        title: '我的',
        iconFont: 'custom',
        __sortid__: 'SI1tC_sIviundzUJz9cfk',
        activeIcon: 'https://lowcode-4gmep78m8d245924-1305094338.tcloudbaseapp.com/resources/2022-04/lowcode-342803',
        withParams: false
      }
    ],
    value: '',
    _parentId: undefined,
    _order: 0,
    widgetType: 'CLOUDBASE_STANDARD:TabBar'
  }
}
/** widget event listeners **/
const evtListeners = {
  onid153$tap: [
    {
      key: 'wam4sukibvvg',
      handler:  handlers.navigateService ,
      data: { target: '' },
      boundData: {}
    },{
      key: 'wad3mugpc4g8',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { pageId: 'u_sou_suo_jie_guo', params: {} },
      boundData: {}
    },
  ],
  onid203$change: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.value = event.detail.value } ,
      data: {},
      boundData: {}
    },{
      key: 'wa5jglvlt7ho',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.name' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        event.detail.value
      )},
        }
    },
  ],
  onid203$blur: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = false } ,
      data: {},
      boundData: {}
    },
  ],
  onid203$focus: [
    {
      key: '',
      handler:  function({event, lists, forItems, $context}, $page){const $for = forItems; return event.currentTarget.focus = true } ,
      data: {},
      boundData: {}
    },
  ],
  onid203$clear: [
    {
      key: 'wae7ms64clq8',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { val: '""', varPath: '$global.name' },
      boundData: {}
    },
  ],
  onid22$tap: [
    {
      key: 'waokhhrhavfg',
      handler:  handlers.navigateService ,
      data: {},
      boundData: {'target':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        $page.dataset.state.category[0]
      )},
        }
    },
  ],
  onid24$tap: [
    {
      key: 'waetrjmso82g',
      handler:  handlers.navigateService ,
      data: {},
      boundData: {'target':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        $page.dataset.state.category[1]
      )},
        }
    },
  ],
  onid27$tap: [
    {
      key: 'waegmc3ghp',
      handler:  handlers.navigateService ,
      data: {},
      boundData: {'target':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        $page.dataset.state.category[2]
      )},
        }
    },
  ],
  onid30$tap: [
    {
      key: 'wajgut23q0to',
      handler:  handlers.navigateService ,
      data: {},
      boundData: {'target':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        $page.dataset.state.category[3]
      )},
        }
    },
  ],
  onid227$onDataChange: [
    {
      key: '',
      handler:  ({event})=>{
          app.utils.set(context, 'id227.data', event?.detail?.data);
        } ,
      data: {},
      boundData: {}
    },
  ],
  onid235$tap: [
    {
      key: 'waq6p8q3nbao',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.sp_id' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id235._id
      )},
        }
    },{
      key: 'wa6c8orj7ch',
      handler:  function({data}){ return app._setStateVal(data)} ,
      data: { varPath: '$global.mj_name' },
      boundData: {'val':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id235.mjmc
      )},
        }
    },{
      key: 'wa0gds2d679g',
      handler:  function({data}){ return app.navigateTo(data)} ,
      data: { mode: 'weDa', pageId: 'u_shang_pin_xiang_qin_1', params: {} },
      boundData: {}
    },
  ],
  onid46$tap: [
    {
      key: 'wam60se5mda8',
      handler:  handlers.toDetail ,
      data: {},
      boundData: {'target':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id43._id
      )},
        }
    },
  ],
  onid47$tap: [
    {
      key: 'wa94rb6l7qro',
      handler:  handlers.toDetail ,
      data: {},
      boundData: {'target':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id43._id
      )},
        }
    },
  ],
  onid54$tap: [
    {
      key: 'wat8un87dt0g',
      handler:  handlers.navigateReserve ,
      data: {},
      boundData: {'target':($page, lists, forItems, event, $context) => {const $for = forItems; return (
        forItems.id43
      )},
        }
    },
  ],
  onid108$tap: [
    {
      key: 'wal95e2t202g',
      handler:  handlers.callNum ,
      data: { target: '' },
      boundData: {}
    },
  ],
}
const dataBinds = {
  id203: { 
    name: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      app.dataset.state.name
    ); },
  },
  id22: { 
    _waIf: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      // 判断是否有数据 若无则不展示 
$page.dataset.state.category[0]?.icon
    ); },
  },
  id24: { 
    _waIf: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $page.dataset.state.category[1]?.icon
    ); },
  },
  id27: { 
    _waIf: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $page.dataset.state.category[2]?.icon
    ); },
  },
  id30: { 
    _waIf: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $page.dataset.state.category[3]?.icon
    ); },
  },
  id235: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $context.id227.data
    ); },
  },
  id238: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id235.spmc
    ); },
  },
  id239: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id235.spjg
    ); },
  },
  id243: { 
    src: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id235.sptp
    ); },
  },
  id56: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $page.dataset.state.esjy[0].sptp
    ); },
  },
  id43: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $page.dataset.state.topServerList
    ); },
  },
  id50: { 
    src: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id43.image
    ); },
  },
  id51: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      forItems.id43.name
    ); },
  },
  id52: { 
    text: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      `${forItems.id43.salePrice/100}`
    ); },
  },
  id85: { 
    _waFor: function ($page, lists, forItems, event, $context) {const $for = forItems; return (
      $page.dataset.state.esjy[0].sptp
    ); },
  },
}

createPage('index', 'index', widgetProps, {}, lifecyle, state, computed, evtListeners, dataBinds, app, handlers, $page, context)
