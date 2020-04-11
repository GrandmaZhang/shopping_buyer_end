import React, { Component } from 'react';
import { UserInfo } from './component';
import './index.scss';
import { withRouter } from "react-router-dom";
import { ShoppingCart, Order } from './component';

class ClientInfo extends Component {
  state = {
    path: 'user'
  }
  changeRoute = (path) => {
    this.setState({ path })
  }
  render() {
    const { path } = this.state;
    return <div className="user-info-container">
      { path === 'user' ? <UserInfo changeRoute={(path) => this.changeRoute(path)} /> : (path === 'shoppingCart' ? <ShoppingCart /> : <Order></Order>)}
    </div>
  }
}
export default withRouter(ClientInfo)