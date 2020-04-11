import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './TabBar.scss'
import '../../css/iconfont/iconfont.css'
import { connect } from "react-redux";
import { changeTabIndex } from '../../actions/commonAction'

const mapDispatchToProps = dispatch => ({
  changeTabIndex: params => dispatch(changeTabIndex(params))
});
const mapStateToProps = state => ({
  ...state.commonReducer
});

class TabBar extends Component {
  state = {
    list: [
      { icon: 'zhuye', name: '主页', link: '/peng/' },
      { icon: 'gouwuche', name: '商城', link: '/goods' },
      { icon: 'wode', name: '我的', link: '/user' },
    ]
  }
  getLink(index) {
    const { list } = this.state;
    const { history, changeTabIndex } = this.props;
    changeTabIndex(index);
    history.push(list[index].link);
  }
  render() {
    const { list } = this.state;
    const { tabIndex } = this.props;
    return (
      <div className="tabbar-container">
        { list.map((item, index) => {
          return (
            <div key={item.name} className={"tabbar-item" + (tabIndex === index ? ' active' : '')} onClick={() => this.getLink(index)}>
              <i className={'iconfont icon-' + item.icon}></i>
              <div>{item.name}</div>
            </div>
          )
        }) }
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TabBar))