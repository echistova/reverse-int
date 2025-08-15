module.exports = function reverse(number) {
  const strfromnumber = Math.abs(number).toString();
  return strfromnumber.split('').reverse().join('');
};
