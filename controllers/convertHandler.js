function ConvertHandler() {
  this.getNum = function (input) {
    try {
      const match = input.match(/[\d\/\.]+/);
      if (!match) {
        return 1; // Default to 1 if no numerical input
      }
      const numberStr = match[0];
      const numbers = numberStr.split("/");
      if (numbers.length > 2) {
        throw new Error("Double-fraction not allowed");
      }
      let result;
      if (numbers.length === 2) {
        if (!isNaN(numbers[0]) && !isNaN(numbers[1])) {
          result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        } else {
          throw new Error("Invalid number");
        }
      } else {
        if (!isNaN(numbers[0])) {
          result = parseFloat(numbers[0]);
        } else {
          throw new Error("Invalid number");
        }
      }
      return result;
    } catch (error) {
      return "invalid number";
    }
  };

  this.getUnit = function (input) {
    const match = input.match(/[a-zA-Z]+$/);
    if (!match) {
      return "invalid input";
    }

    const validUnits = ["mi", "km", "lbs", "kg", "gal", "L"];

    let unit = match[0];

    unit = unit === 'l' || unit === 'L' ? 'L' : unit.toLowerCase();

    // Check if the unit is valid
    if (validUnits.includes(unit)) {
      return unit;
    } else {
      return "invalid unit"
    }
  };

  this.getReturnUnit = function (initUnit) {
    const units = {
      gal: "L",
      L: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs",
    };
    return units[initUnit];
  };

  this.spellOutUnit = function (unit) {
    const units = {
      gal: "gallons",
      L: "liters",
      mi: "miles",
      km: "kilometers",
      lbs: "pounds",
      kg: "kilograms",
    };
    return units[unit];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const conversion = {
      gal: galToL,
      L: 1 / galToL,
      mi: miToKm,
      km: 1 / miToKm,
      lbs: lbsToKg,
      kg: 1 / lbsToKg,
    };
    return Number((initNum * conversion[initUnit]).toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
