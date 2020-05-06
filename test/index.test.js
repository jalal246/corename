// eslint-disable-next-line import/no-extraneous-dependencies
const { expect } = require("chai");
const getCoreName = require("../src");

const pkg0 = {
  name: "pkg-first",
  dependencies: {},
};

const pkg1 = {
  name: "@pkg-second",
  dependencies: {
    "@pkg/first": "^0.1.5",
  },
};

const pkg2 = {
  name: "@pkg/third",
  dependencies: {},
};

const pkg3 = {
  name: "@pkgFourth",
  dependencies: {
    "@pkg/first": "^0.1.5",
  },
};

describe("getCoreName", () => {
  it("extracts project name for group of", () => {
    const packages = [pkg1, pkg2, pkg3, pkg0];
    const result = getCoreName(packages);

    expect(result).to.equal("@pkg");
  });

  it("returns null if not found correct pattern for group of names", () => {
    const packages = [pkg0, pkg1, pkg3];
    const result = getCoreName(packages);

    expect(result).to.equal(null);
  });

  it("extracts project name single", () => {
    const result = getCoreName(pkg2);

    expect(result).to.equal("@pkg");
  });

  describe("for single package", () => {
    it("returns project name as it is if not found monorepo pattern", () => {
      expect(getCoreName(pkg3, true)).to.equal(pkg3.name);
      expect(getCoreName(pkg1, true)).to.equal(pkg1.name);
    });

    it("returns null if not found monorepo pattern", () => {
      expect(getCoreName(pkg3)).to.equal(null);
      expect(getCoreName(pkg1)).to.equal(null);
    });
  });
});
