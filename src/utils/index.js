export function getMoble () {
  const prefixArray = [
    '130',
    '131',
    '132',
    '133',
    '135',
    '137',
    '138',
    '170',
    '173',
    '181',
    '186',
    '187',
    '189'
  ]
  const i = parseInt(10 * Math.random());
  let prefix = prefixArray[i];
  for (var j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10);
  }
  return prefix
}
