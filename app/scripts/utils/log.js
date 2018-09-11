const getCloloByLevel = level => {
  let color = '#ff00ff';
  switch (level) {
    case 1:
    default:
      color = '#ff0074';
      break;
    case 2:
      color = '#005eff';
      break;
    case 3:
      color = '#00ffb8';
      break;
    case 4:
      color = '#e81510';
      break;
  }
  return color;
};

/**
 * console.logをスタイル付きで出す
 * @param str       { string }  コンソール文言
 * @param level     { number }  スタイルのレベル, 1, 2, 3, 4  4はerrorなどに使う
 */
export const log = (str, level = 1) => {
  // developmentのみ実行させる。
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  const color = getCloloByLevel(level);
  console.log(
    `%c${str}`,
    `color:${color};background:#3f3f3f;font-size:20px;padding:.25em;`
  );
};
