import React, { Component } from 'react';
import { GoodsNav, GoodsList } from './components';
import { Search } from '../Components'
import './index.scss'

export default class Goods extends Component {
  state = {
    searchGoods: []
  }
  getSearchGoods(result) {
    this.setState({
      searchGoods: result
    })
  }
  render() {
    const { searchGoods } = this.state;
    return (
      <div className="goods-main-container">
        <div className="goods-search">
          <Search getSearchGoods={(result) => this.getSearchGoods(result)} />
        </div>
        <div className="goods-container">
          <GoodsNav />
          <GoodsList getSearchGoods={(result) => this.getSearchGoods(result)} searchGoods={searchGoods} />
        </div>
      </div>
    )
  }
}