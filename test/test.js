const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Employee = require("../employee");
const Manager = require("../manager");

describe("The calculateBonus(multiplier) test phase 5:", () => {
  let hobbes;
  let calvin;
  let susie;
  let lily;
  let clifford;
  const multiplier = 0.05;
  beforeEach(() => {
    hobbes = new Manager("Hobbes", 1_000_000, "Founder");
    calvin = new Manager("Calvin", 130_000, "Director", hobbes);
    susie = new Manager("Michelangelo", 100_000, "TA Manager", calvin);
    lily = new Employee("Lily", 90_000, "TA", susie);
    clifford = new Employee("Clifford", 90_000, "TA", susie);
  });

  describe("Employee.calculateBonus()", () => {
    it("should multiply the Employee's salary by a passed in multiplier", () => {
      expect(lily.calculateBonus(multiplier)).to.equal(4_500);
    });
  });
  describe("Employee.calculateBonus()", () => {
    it("should multiply the Employee's salary by a passed in multiplier", () => {
      expect(clifford.calculateBonus(multiplier)).to.equal(4_500);
    });
  });

  describe("Employee.calculateBonus()", () => {
    it("should multiply the Employee's salary by a passed in multiplier", () => {
      expect(susie.calculateBonus(multiplier)).to.equal(14_000);
    });
  });

  describe("Employee.calculateBonus()", () => {
    it("should multiply the Employee's salary by a passed in multiplier", () => {
      expect(calvin.calculateBonus(multiplier)).to.equal(20_500);
    });
  });

  describe("Employee.calculateBonus()", () => {
    it("should multiply the Employee's salary by a passed in multiplier", () => {
      expect(hobbes.calculateBonus(multiplier)).to.equal(70_500);
    });
  });
});
