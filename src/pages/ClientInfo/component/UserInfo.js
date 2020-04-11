import React, { Component } from 'react';
import { connect } from 'react-redux';
const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  ...state.userReducer
});

class UserInfo extends Component {
  goOrder = () => {
    const { changeRoute } = this.props;
    changeRoute('order')
  }
  goShoppingCart = () => {
    const { changeRoute } = this.props;
    changeRoute('shoppingCart')
  }
  renderUserInfo = (userInfo) => {
    return (
      <>
        <div className="user-avatar-container">
          <img className="user-avatar" src="http://pic.616pic.com/ys_img/00/03/79/6pxmNeU4FS.jpg" alt=""></img>
          <div className="user-info">{userInfo ? userInfo.username : ''} <font size="1">余额: ￥{userInfo ? userInfo.money : ''}</font></div>
        </div>
        <div className="user-info-bar">
          <div className="user-info-bar-item" onClick={this.goOrder}>
            <div>订单</div>
            <div>></div>
          </div>
          <div className="user-info-bar-item" onClick={this.goShoppingCart}>
            <div>购物车</div>
            <div>></div>
          </div>
        </div>
      </>
    )
  }
  render() {
    const { userInfo } = this.props;
    return this.renderUserInfo(userInfo)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)