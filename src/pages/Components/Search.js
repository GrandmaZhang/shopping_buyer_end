import React, { Component } from "react";
import './Search.scss';
import { getSearchGoods } from '../../service'

class Search extends Component {
  getKeyWord = async (e) => {
    const value = e.target.value
    if (e.keyCode === 13) {
      const result = (await getSearchGoods({ keyword: value })).data;
      this.props.getSearchGoods(result);
    }
  }
  render() {
    return <input className="search-input" placeholder="请输入关键字，按回车搜索" onKeyDown={this.getKeyWord} />;
  }
}

export default Search;
