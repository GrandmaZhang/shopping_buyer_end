import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.scss'
import { changeCartItem } from '../../actions/goodsAction'
import { addCart } from '../../service'

const mapDispatchToProps = dispatch => ({
  changeCartItem: params => dispatch(changeCartItem(params))
});

const mapStateToProps = state => ({
  ...state.userReducer,
  ...state.goodsReducer
});
class Cart extends Component {
  handleGoods = (goods, cartItems) => {
    return cartItems.filter(item => item.goodsId === goods.id);
  }
  operate = (e, type, goods) => {
    e.stopPropagation();
    const { goods: propGoods, cartItems, changeCartItem, userInfo } = this.props;
    let result = cartItems;
    if (type === 'add') {
      if (goods.length) {
        const changeItem = cartItems.filter(item => item.goodsId === goods[0].id).map(item => {
          return {
            ...item,
            goodsNumber: item.goodsNumber + 1
          }
        })
        result = cartItems.filter(item => item.goodsId !== goods[0].id).concat(changeItem);
        addCart({ goodsId: changeItem[0].goodsId, number: changeItem[0].goodsNumber, userId: userInfo.id })
      } else {
        result = [...result, { ...propGoods, goodsId: propGoods.id, goodsNumber: 1}]
        addCart({ goodsId: propGoods.id, number: 1, userId: userInfo.id })
      }
    } else {
      if (goods[0] && goods[0].goodsNumber === 1) {
        result = cartItems.filter(item => item.goodsId !== goods[0].id);
        addCart({ goodsId: cartItems.filter(item => item.goodsId === goods[0].id)[0].goodsId, number: 0, userId: userInfo.id })
      } else if(goods[0] && goods[0].goodsNumber > 1) {
        const changeItem = cartItems.filter(item => item.goodsId === goods[0].id).map(item => {
          return {
            ...item,
            goodsNumber: item.goodsNumber - 1
          }
        })
        result = cartItems.filter(item => item.goodsId !== goods[0].id).concat(changeItem);
        addCart({ goodsId: changeItem[0].goodsId, number: changeItem[0].goodsNumber, userId: userInfo.id })
      }
    }
    changeCartItem(result)
  }
  render() {
    const { goods, cartItems, hideCart } = this.props;
    const result = this.handleGoods(goods, cartItems);
    return (
      <div className="cart-container" onClick={hideCart}>
        <div className="cart-main">
          <img className="image" src={goods.url[0]} alt=""></img>
          <div className="cart-operation">
            <div className="operation" onClick={(e) => this.operate(e, 'minus', result)}>-</div>
            <div className="operation">{result.length ? result[0].goodsNumber : 0}</div>
            <div className="operation" onClick={(e) => this.operate(e, 'add', result)}>+</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);