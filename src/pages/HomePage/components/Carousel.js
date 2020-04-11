import React, { Component } from 'react';
import ReactMCarousel from 'react-m-carousel';
import '../index.scss';
import { getData } from "../../../utils";

class Carousel extends Component {
  state = {
    banner: [{id: 1}, {id: 2}, {id: 3}]
  };
  async componentDidMount() {
    const { success, data: banner } = await getData("/banner");
    if (success) {
      this.setState({
        banner
      });
    }
  }
  renderBannerItem = (banner) => {
    return banner && banner.map(item => {
      return (
        <div key={item.id}>
          <img src={item.url} className="carousel-image" alt=""></img>
        </div>
      )
    })
  }
  // 傻逼组件，我亏了，居然是用初始化？这也太蠢了
  render() {
    const { banner } = this.state;
    return <>
      <ReactMCarousel loop auto={2000} className="homepage-carousel" indicator={(_, active) => {
        return (
          <div className="carousel-indicator-container">
            {banner.map((item, index) => {
              return (<div key={item.id} className={'carousel-indicator' + (active === index ? ' active' : '') }></div>)
            })}
          </div>
        )
      }}>
        { this.renderBannerItem(banner) }
      </ReactMCarousel>
    </>
  }
}

export default Carousel