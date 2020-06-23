import chaiJestSnapshot from "chai-jest-snapshot";
import path from 'path';
import chai, { expect } from 'chai';

describe("ItemTemplate snapshot", () => {
    const snapshotFileName = path.join(__dirname, 'TestComponent.spec.js.snap');
    chai.use(chaiJestSnapshot);
    it("Check Snapshot", () => {
      let snapshotName = 'one';
      const body = render(<Template />);
      expect(body.html()).to.matchSnapshot(snapshotFileName, snapshotName);
    });
  });