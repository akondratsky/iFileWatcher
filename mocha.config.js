require('@babel/register');
const { configure, shallow, mount, render } = require('enzyme');
const { expect } = require('chai');
const Adapter = require('enzyme-adapter-react-16');
const thunk = require('redux-thunk').default;
const configureMockStore = require('redux-mock-store').default;

before(() => {
  configure({ adapter: new Adapter() });
  global.mockStore = configureMockStore([thunk]);
  global.shallow = shallow;
  global.mount = mount;
  global.render = render;
  global.expect = expect;
});
