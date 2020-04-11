import React, { Component } from 'react';
import '../index.scss'
import { connect } from 'react-redux';
import { addCart, getCartItem, addOrder, getUserInfo } from '../../../service';
import { changeCartItem } from '../../../actions/goodsAction'
import { changeUserInfo } from '../../../actions/userAction'
import { changeTabIndex } from '../../../actions/commonAction'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => ({
  changeCartItem: params => dispatch(changeCartItem(params)),
  changeUserInfo: params => dispatch(changeUserInfo(params)),
  changeTabIndex: index => dispatch(changeTabIndex(index))
});

const mapStateToProps = state => ({
  ...state.userReducer,
  ...state.goodsReducer
})
class ShoppingCart extends Component {
  handleOrderMoney = (cartItems) => {
    return cartItems.length ? cartItems.map(item => parseFloat(item.price * item.goodsNumber)).reduce((prev, curr) => prev + curr) : 0
  }
  submit = async () => {
    const { cartItems, userInfo, history, changeCartItem, changeUserInfo, changeTabIndex } = this.props;
    const { money } = userInfo;
    if (money < this.handleOrderMoney(cartItems)) {
      return alert('您的余额不足！');
    }
    const isNotRemain = cartItems.filter(item => item.remain < item.goodsNumber).length;
    if (isNotRemain) {
      return alert('有商品数量不足！');
    }
    if (!cartItems.length) {
      return alert('还没有添加商品！');
    }
    const { success } = await addOrder({ userId: userInfo.id, price: this.handleOrderMoney(cartItems), goods: cartItems.map(item => {
      return {
        id: item.id,
        name: item.name,
        url: item.url,
        price: parseFloat(item.goodsNumber * item.price),
        goodsNumber: item.goodsNumber
      }
    })});
    if (success) {
      alert('成功！');
      changeCartItem([]);
      const userInfo = await getUserInfo();
      if (success) {
        changeUserInfo(userInfo)
        changeTabIndex(0)
      }
      history.push('/peng')
    } else {
      alert('新增订单失败！')
    }
  }
  addCartItem = async (type, item) => {
    const { changeCartItem, userInfo } = this.props;
    if (type === 'add') {
      await addCart({ goodsId: item.goodsId, number: item.goodsNumber + 1, userId: userInfo.id })
    } else {
      await addCart({ goodsId: item.goodsId, number: item.goodsNumber - 1, userId: userInfo.id})
    }
    const { success, data: cart } = await getCartItem({ userId: userInfo.id});
    if (success) {
      changeCartItem(cart);
    }
  }
  render() {
    const { cartItems } = this.props;
    return (
      <div className="shopping-cart-container">
        <div className="shopping-item-container">
          { cartItems.map(item => {
            return (
              <div key={item.goodsId} className="shopping-item">
                <img src={item.url[0]} alt=""></img>
                <div className="item">
                  <div className="title">
                    <span>{item.name}</span>
                    <span>￥{parseFloat(item.goodsNumber * item.price)}</span>
                  </div>
                  <div className="desc">{item.desc} 剩余{item.remain}件</div>
                  <div className="opera">
                    <span onClick={() => this.addCartItem('minus', item)}>-</span>
                    <span>{parseFloat(item.goodsNumber)}</span>
                    <span onClick={() => this.addCartItem('add', item)}>+</span>
                  </div>
                </div>
              </div>
            )
          }) }
        </div>
        <div className="bug-bar">
          <div className="money">￥{this.handleOrderMoney(cartItems)}</div>
          <div className="submit" onClick={this.submit}>下单</div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShoppingCart))