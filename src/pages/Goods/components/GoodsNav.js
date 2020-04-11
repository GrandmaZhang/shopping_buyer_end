import React, { Component } from 'react';
import { getGoodsCategories } from '../../../service';
import { connect } from "react-redux";
import { changeActiveNavItem } from "../../../actions/goodsAction";

const mapDispatchToProps = dispatch => ({
  changeNavItem: params => dispatch(changeActiveNavItem(params))
});
const mapStateToProps = state => ({
  ...state.goodsReducer
});
class GoodsNav extends Component {
  state = {
    categories: []
  }
  async componentDidMount() {
    const { success: getCategorySuccess, data: categories } = await getGoodsCategories();
    if(getCategorySuccess) {
      this.setState({
        categories
      })
    }
  }
  changeNav = (id) => {
    const { changeNavItem } = this.props;
    changeNavItem(id)
  }
  render() {
    const { categories } = this.state;
    const { activeNavItem } = this.props;
    return (
      <div className="nav">
        { categories.map(item => {
          return (
            <div onClick={this.changeNav.bind(this, item.categoryId)} className={"nav-item" + (activeNavItem === item.categoryId ? ' active' : '')} key={item.categoryId}>
              {item.categoryName}
            </div>
          )
        }) }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsNav)
