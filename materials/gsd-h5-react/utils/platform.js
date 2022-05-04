/**
 * 文件字节转换
 */
export const transSize = (size) => {
  const b = parseInt(size) || 0;
  const getBig = (d) => Math.ceil(d / 1024) || 0;
  if (b < 1024) {
    return `${size}B`;
  }
  const k = getBig(size);
  if (k < 1024) {
    return `${k}K`;
  }
  const m = getBig(k);
  if (m < 1024) {
    return `${m}M`;
  }
  const g = getBig(m);
  return `${g}G`;
};

/**
 * 判断是否是url
 */
const reg =
  // eslint-disable-next-line no-useless-escape
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path) => reg.test(path);

/**
 * 生成随机数
 */
export const uuid = () => {
  var s = [];
  var hexDigits = '0123456789abcdef';
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';
  var uuid = s.join('');
  return uuid;
};
