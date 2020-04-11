import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Carousel, GoodsClassify, GoodsRecommend } from './components'
import './index.scss';

class HomePage extends Component {
  render() {
    return <div className="homepage-container">
      <Carousel />
      <GoodsClassify />
      <GoodsRecommend />
    </div>
  }
}

export default withRouter(HomePage)