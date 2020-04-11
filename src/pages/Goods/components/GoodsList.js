import React, { Component } from 'react';
import { connect } from "react-redux";
import { getGoodsItems } from '../../../service';
import { Cart } from '../../Components'

const mapDispatchToProps = dispatch => ({
});
const mapStateToProps = state => ({
  ...state.goodsReducer
});
class GoodsList extends Component {
  state = {
    categoryId: 1,
    goods: [],
    isCartShow: false,
    carGoods: {}
  }
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
    const { activeNavItem: categoryId } = this.props 
    const { success, data: goods } = await getGoodsItems({ categoryId });
    if(success) {
      this.setState({
        goods,
        categoryId
      })
    }
  }
  async componentWillReceiveProps(props) {
    const { activeNavItem, getSearchGoods, searchGoods } = props;
    const { categoryId: oldNavItem } = this.state;
    if (activeNavItem !== oldNavItem) {
      const { success, data: goods } = await getGoodsItems({ categoryId: activeNavItem });
      if(success) {
        this.setState({
          goods,
          categoryId: activeNavItem
        })
      } 
    }
    if (searchGoods.length) {
      this.setState({
        goods: searchGoods
      })
      getSearchGoods([])
    }
  }
  render() {
    const { goods, isCartShow, carGoods } = this.state;
    return (
      <div className="main">
        <div className="goods-items-main">
          {goods.map(item => {
            return (
              <div key={item.name} className="goods-items-item" onClick={() => this.showCart(item)}>
                <img alt="" src={item.url} className="image" />
                <div className="name">{item.name}</div>
                <div className="price">￥{item.price}</div>
              </div>
            );
          })}
        </div>
        { isCartShow ? <Cart goods={carGoods} hideCart={this.hideCart} /> : <></>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList)
