const { expect } = require("chai");
const getCoreName = require("../src");

const pkg0 = {
  name: "@folo/withcontext",
  dependencies: {}
};

const pkg1 = {
  name: "@folo/values",
  dependencies: {
    "@folo/withcontext": "^0.1.5"
  }
};

const pkg2 = {
  name: "@folo/utils",
  dependencies: {}
};

const pkg3 = {
  name: "@folo/layout",
  dependencies: {
    "@folo/withcontext": "^0.1.5"
  }
};

const pkg4 = {
  name: "@folo/forms",
  dependencies: {
    "@folo/layout": "^0.1.4",
    "@folo/values": "^0.1.4"
  }
};
describe("getCoreName", () => {
  it("return project name ", () => {
    const packages = [pkg1, pkg2, pkg3, pkg0, pkg4];
    const result = getCoreName(packages);

    expect(result).to.equal("@folo");
  });
});
