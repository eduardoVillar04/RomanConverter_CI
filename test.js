const expect = chai.expect;

describe('intToRoman', function () {

  describe('Boundary – lower bound', function () {
    it('TC-01: intToRoman(1) should return "I"', function () {
      expect(intToRoman(1)).to.equal('I');
    });
    it('TC-02: intToRoman(2) should return "II"', function () {
      expect(intToRoman(2)).to.equal('II');
    });
  });

  describe('Boundary – upper bound', function () {
    it('TC-03: intToRoman(3998) should return "MMMCMXCVIII"', function () {
      expect(intToRoman(3998)).to.equal('MMMCMXCVIII');
    });
    it('TC-04: intToRoman(3999) should return "MMMCMXCIX"', function () {
      expect(intToRoman(3999)).to.equal('MMMCMXCIX');
    });
  });

  describe('Valid partition – units (1–9)', function () {
    it('TC-05: intToRoman(1) should return "I"', function () {
      expect(intToRoman(1)).to.equal('I');
    });
    it('TC-06: intToRoman(4) should return "IV"', function () {
      expect(intToRoman(4)).to.equal('IV');
    });
    it('TC-07: intToRoman(5) should return "V"', function () {
      expect(intToRoman(5)).to.equal('V');
    });
    it('TC-08: intToRoman(9) should return "IX"', function () {
      expect(intToRoman(9)).to.equal('IX');
    });
  });

  describe('Valid partition – tens (10–90)', function () {
    it('TC-09: intToRoman(10) should return "X"', function () {
      expect(intToRoman(10)).to.equal('X');
    });
    it('TC-10: intToRoman(40) should return "XL"', function () {
      expect(intToRoman(40)).to.equal('XL');
    });
    it('TC-11: intToRoman(50) should return "L"', function () {
      expect(intToRoman(50)).to.equal('L');
    });
    it('TC-12: intToRoman(90) should return "XC"', function () {
      expect(intToRoman(90)).to.equal('XC');
    });
  });

  describe('Valid partition – hundreds (100–900)', function () {
    it('TC-13: intToRoman(100) should return "C"', function () {
      expect(intToRoman(100)).to.equal('C');
    });
    it('TC-14: intToRoman(400) should return "CD"', function () {
      expect(intToRoman(400)).to.equal('CD');
    });
    it('TC-15: intToRoman(500) should return "D"', function () {
      expect(intToRoman(500)).to.equal('D');
    });
    it('TC-16: intToRoman(900) should return "CM"', function () {
      expect(intToRoman(900)).to.equal('CM');
    });
  });

  describe('Valid partition – thousands (1000–3000)', function () {
    it('TC-17: intToRoman(1000) should return "M"', function () {
      expect(intToRoman(1000)).to.equal('M');
    });
    it('TC-18: intToRoman(2000) should return "MM"', function () {
      expect(intToRoman(2000)).to.equal('MM');
    });
    it('TC-19: intToRoman(3000) should return "MMM"', function () {
      expect(intToRoman(3000)).to.equal('MMM');
    });
  });

  describe('Valid partition – combined values', function () {
    it('TC-20: intToRoman(8) should return "VIII"', function () {
      expect(intToRoman(8)).to.equal('VIII');
    });
    it('TC-21: intToRoman(14) should return "XIV"', function () {
      expect(intToRoman(14)).to.equal('XIV');
    });
    it('TC-22: intToRoman(42) should return "XLII"', function () {
      expect(intToRoman(42)).to.equal('XLII');
    });
    it('TC-23: intToRoman(99) should return "XCIX"', function () {
      expect(intToRoman(99)).to.equal('XCIX');
    });
    it('TC-24: intToRoman(399) should return "CCCXCIX"', function () {
      expect(intToRoman(399)).to.equal('CCCXCIX');
    });
    it('TC-25: intToRoman(1994) should return "MCMXCIV"', function () {
      expect(intToRoman(1994)).to.equal('MCMXCIV');
    });
    it('TC-26: intToRoman(2024) should return "MMXXIV"', function () {
      expect(intToRoman(2024)).to.equal('MMXXIV');
    });
  });

});

describe('romanToInt', function () {

  describe('Boundary – lower bound', function () {
    it('TC-27: romanToInt("I") should return 1', function () {
      expect(romanToInt('I')).to.equal(1);
    });
    it('TC-28: romanToInt("II") should return 2', function () {
      expect(romanToInt('II')).to.equal(2);
    });
  });

  describe('Boundary – upper bound', function () {
    it('TC-29: romanToInt("MMMCMXCVIII") should return 3998', function () {
      expect(romanToInt('MMMCMXCVIII')).to.equal(3998);
    });
    it('TC-30: romanToInt("MMMCMXCIX") should return 3999', function () {
      expect(romanToInt('MMMCMXCIX')).to.equal(3999);
    });
  });

  describe('Valid partition – units (1–9)', function () {
    it('TC-31: romanToInt("IV") should return 4', function () {
      expect(romanToInt('IV')).to.equal(4);
    });
    it('TC-32: romanToInt("V") should return 5', function () {
      expect(romanToInt('V')).to.equal(5);
    });
    it('TC-33: romanToInt("IX") should return 9', function () {
      expect(romanToInt('IX')).to.equal(9);
    });
  });

  describe('Valid partition – tens (10–90)', function () {
    it('TC-34: romanToInt("X") should return 10', function () {
      expect(romanToInt('X')).to.equal(10);
    });
    it('TC-35: romanToInt("XL") should return 40', function () {
      expect(romanToInt('XL')).to.equal(40);
    });
    it('TC-36: romanToInt("L") should return 50', function () {
      expect(romanToInt('L')).to.equal(50);
    });
    it('TC-37: romanToInt("XC") should return 90', function () {
      expect(romanToInt('XC')).to.equal(90);
    });
  });

  describe('Valid partition – hundreds (100–900)', function () {
    it('TC-38: romanToInt("C") should return 100', function () {
      expect(romanToInt('C')).to.equal(100);
    });
    it('TC-39: romanToInt("CD") should return 400', function () {
      expect(romanToInt('CD')).to.equal(400);
    });
    it('TC-40: romanToInt("D") should return 500', function () {
      expect(romanToInt('D')).to.equal(500);
    });
    it('TC-41: romanToInt("CM") should return 900', function () {
      expect(romanToInt('CM')).to.equal(900);
    });
  });

  describe('Valid partition – thousands (1000–3000)', function () {
    it('TC-42: romanToInt("M") should return 1000', function () {
      expect(romanToInt('M')).to.equal(1000);
    });
    it('TC-43: romanToInt("MMM") should return 3000', function () {
      expect(romanToInt('MMM')).to.equal(3000);
    });
  });

  describe('Valid partition – combined values', function () {
    it('TC-44: romanToInt("XIV") should return 14', function () {
      expect(romanToInt('XIV')).to.equal(14);
    });
    it('TC-45: romanToInt("MCMXCIV") should return 1994', function () {
      expect(romanToInt('MCMXCIV')).to.equal(1994);
    });
    it('TC-46: romanToInt("MMXXIV") should return 2024', function () {
      expect(romanToInt('MMXXIV')).to.equal(2024);
    });
  });

  describe('Special form – invalid Roman numeral format (returns null)', function () {
    it('TC-47: romanToInt("IIII") should return null', function () {
      expect(romanToInt('IIII')).to.equal(null);
    });
    it('TC-48: romanToInt("IIV") should return null', function () {
      expect(romanToInt('IIV')).to.equal(null);
    });
    it('TC-49: romanToInt("VV") should return null', function () {
      expect(romanToInt('VV')).to.equal(null);
    });
    it('TC-50: romanToInt("LL") should return null', function () {
      expect(romanToInt('LL')).to.equal(null);
    });
    it('TC-51: romanToInt("DD") should return null', function () {
      expect(romanToInt('DD')).to.equal(null);
    });
    it('TC-52: romanToInt("IC") should return null', function () {
      expect(romanToInt('IC')).to.equal(null);
    });
    it('TC-53: romanToInt("IL") should return null', function () {
      expect(romanToInt('IL')).to.equal(null);
    });
    it('TC-54: romanToInt("XM") should return null', function () {
      expect(romanToInt('XM')).to.equal(null);
    });
    it('TC-55: romanToInt("MMMM") should return null (result 4000 is out of range)', function () {
      expect(romanToInt('MMMM')).to.equal(null);
    });
  });

  describe('Round-trip symmetry', function () {
    it('TC-56: romanToInt(intToRoman(1)) should return 1', function () {
      expect(romanToInt(intToRoman(1))).to.equal(1);
    });
    it('TC-57: romanToInt(intToRoman(1994)) should return 1994', function () {
      expect(romanToInt(intToRoman(1994))).to.equal(1994);
    });
    it('TC-58: romanToInt(intToRoman(3999)) should return 3999', function () {
      expect(romanToInt(intToRoman(3999))).to.equal(3999);
    });
    it('TC-59: intToRoman(romanToInt("XIV")) should return "XIV"', function () {
      expect(intToRoman(romanToInt('XIV'))).to.equal('XIV');
    });
    it('TC-60: intToRoman(romanToInt("MMMCMXCIX")) should return "MMMCMXCIX"', function () {
      expect(intToRoman(romanToInt('MMMCMXCIX'))).to.equal('MMMCMXCIX');
    });
  });

});