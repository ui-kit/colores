var Color = require('color');

module.exports = function(base, count) {
  base = new Color(base);

  if (count == 1) return base;
  if (count == 2) return [
    base,
    base.rotate(60)
  ];

  return [];
};
