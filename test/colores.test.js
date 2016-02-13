var should = require('should');
var Color = require('color');
var colores = require('../');

describe('colores', function() {
  var tests = {
    'hsl(0, 0%, 0%)': [
      'hsl(0, 0%, 0%)',
      'hsl(0, 0%, 100%)'
    ],
    'hsl(0, 50%, 50%)': [
      'hsl(0, 50%, 50%)',
      'hsl(60, 50%, 50%)'
    ]
  };

  for (var k in tests) {
    it('should generate [' + tests[k].join(', ') + '] for ' + k, function(expected) {
      var set = colores(k, expected.length).map(toHSL);
      set.should.eql(expected.map(toHSL));
    }.bind(this, tests[k]));
  }
});

function toHSL(color) {
  return Color(color).hslArray();
}
