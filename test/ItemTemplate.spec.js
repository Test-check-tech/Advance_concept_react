import React from 'react';
import { render } from 'enzyme';
import chai, { expect } from 'chai';
import Template from '../src/components/ItemTemplate/ItemTemplate';
import mck from '../src/components/ItemTemplate/JSON/MCKTemplate.json'
// import CKEditorBase from '../src/components/ui/CKEditorBase'
import tf from '../src/components/ItemTemplate/JSON/TFTemplate.json';
import chaiHttp from 'chai-http'
import mcs from '../src/components/ItemTemplate/JSON/MCSTemplate.json'


describe('check - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const wrapper = render(<Template />);
    // const ckEditor = render(<CKEditorBase/> )
    console.log(wrapper.text())
    // expect(wrapper.text()).to.contain('Item Creation', 'Task Type :', 'Task Sub-Type :');
    expect(wrapper.text()).to.have.string("Item Creation");
    // expect(content.text()).to.contain("Content Builder");
    let types = wrapper.text()
    if (wrapper.find("Multiple Choice - Keyed")) {
      console.log("Multiple Choice - Keyed")
      mck.map(obj => {
        const stem = obj.stem.label
        expect(stem).to.exist;
        // expect(ckEditor).to.exist;
        obj.responses.map(responses => {
          const response = responses.label
          expect(response).to.exist
          // console.log(expect(ckEditor).to.exist)
        })
      })
    }
    if (wrapper.find("True")) {
      tf.map(obj => {
        console.log("True/False")
        const stem = obj.stem.label
        expect(stem).to.exist;
        // expect(ckEditor).to.exist;
        obj.responses.map(responses => {
          const response = responses.label
          expect(response).exist
          // console.log(expect(ckEditor).to.exist)
        })
      })
    }
    if (wrapper.find("Multiple Choice - Scaled")) {
      mcs.map(obj => {
        console.log("Multiple Choice - Scaled")
        const stem = obj.stem.label
        expect(stem).to.exist;
        // expect(ckEditor).to.exist;
        obj.responses.map(responses => {
          const response = responses.label
          expect(response).exist
          // console.log(expect(ckEditor).to.exist)
        })
      })
    }
  });
});


describe("Api Call", () => {
  it("Check ", () => {
    chai.use(chaiHttp);
    chai.request('https://jsonplaceholder.typicode.com/todos')
      .get('/1')
      // .end(function (err, res) {
      //   assert.equal(res != null, true, "Error: test has failed - server response is null");
      // });
      .then(responses => {
        // expect(responses).to.have.status(404);
        expect(responses).to.have.status(200);
        expect(responses).to.be.json;
        // except(responses.text()).to.have.string('quis ut nam facilis et officia qui');
        // expect(responses).to.have.param("title");                
        // expect(responses).to.be.html;
        // expect(responses).to.be.text;
        // expect(responses).to.redirect;
        // expect(responses).to.not.redirect;
        // expect(responses).to.have.string("title");
      }).catch(function (err) {
        throw err;
      })
  });
});