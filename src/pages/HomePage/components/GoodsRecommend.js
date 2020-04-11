import React, { Component } from "react";
import "../index.scss";
import { getRecommendGoods } from "../../../service";
import { Cart } from '../../Components'

class GoodsRecommend extends Component {
  state = {
    goods: [],
    isCartShow: false,
    carGoods: {}
  };
  showCart = (item) => {
    this.setState({
      isCartShow: true,
      carGoods: item
    })
  }
  hideCart = () => {
    this.setState({
      isCartShow: false
    })
  }
  async componentDidMount() {
    const { success, data: goods } = await getRecommendGoods();
    if (success) {
      this.setState({
        goods
      });
    }
  }
  render() {
    const { goods, isCartShow, carGoods } = this.state;
    return (
      <div className="goods-recommend-container">
        <div className="goods-recommend-title">为你推荐</div>
        <div className="goods-recommend-main">
          {goods.map(item => {
            return (
              <div key={item.name} className="goods-recommend-item" onClick={() => this.showCart(item)}>
                <img alt="" src={item.url} className="image" />
                <div className="name">{item.name}</div>
                <div className="price">￥{item.price}</div>
              </div>
            );
          })}
        </div>
        { isCartShow ? <Cart goods={carGoods} hideCart={this.hideCart} /> : <></>}
      </div>
    );
  }
}

export default GoodsRecommend;
