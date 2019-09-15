import { Component } from 'react';

export default class Application extends Component {
  componentDidMount() {
    const { initServices } = this.props;
    initServices();
  }

  render() {
    return null;
  }
}
