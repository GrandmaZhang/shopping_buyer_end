import React, { Component } from 'react';
import '../index.scss';
import '../../../css/iconfont/iconfont.css';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { changeActiveNavItem } from "../../../actions/goodsAction";
import { changeTabIndex } from '../../../actions/commonAction'
const mapDispatchToProps = dispatch => ({
  changeCategoryId: params => dispatch(changeActiveNavItem(params)),
  changeTabIndex: index => dispatch(changeTabIndex(index))
});
const mapStateToProps = state => ({
  ...state.goodsReducer
});

const [DIANZI, FUZHUANG, SHENGXIAN, MEIZHUANG, YILIAO] = [7, 2, 5, 1, 8]
class GoodsClassify extends Component {
  state = {
    classify: [
      { name: '电子产品', icon: 'dianzi', bg: '#7C5BEC' , id: DIANZI},
      { name: '服装', icon: 'coat', bg: '#83B22C' , id: FUZHUANG},
      { name: '生鲜', icon: 'shengxian', bg: '#FD912A' , id: SHENGXIAN},
      { name: '美妆', icon: 'meizhuang', bg: '#00DD9C' , id: MEIZHUANG},
      { name: '医疗保健', icon: 'yiyaoxiang', bg: '#FF3872' , id: YILIAO},
    ]
  }
  gotoShoppingMall = (id) => {
    const { changeCategoryId, history, changeTabIndex } = this.props;
    changeCategoryId(id);
    changeTabIndex(1)
    history.push('/goods')
  }
  render() {
    const { classify } = this.state;
    return <div className="classify-container">
      <div className="classify-title">热销分类</div>
      <div className="classify-item-container">
        { classify.map(item => {
          return (
            <div key={item.name} className="classify-item" onClick={this.gotoShoppingMall.bind(this, item.id)}>
              <i className={`classify-image iconfont icon-${item.icon}`} style={{'background': `${item.bg}`}}></i>
              <div>{item.name}</div>
            </div>
          )
        }) }
      </div>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GoodsClassify))