// eslint-disable-next-line no-unused-vars
import Taro, { Component } from "@tarojs/taro";
import PropTypes from "prop-types";
import { Image, Swiper, SwiperItem } from "@tarojs/components";
import "./style.scss";

class AdSwiper extends Component {
  render() {
    const { data } = this.props;

    return (
      <Swiper
        className="ad-swiper"
        indicatorColor="#999"
        indicatorActiveColor="#fc392d"
        circular
        indicatorDots
        autoplay
      >
        {data.map(item => (
          <SwiperItem className="ad-swiper-item" key={item.id}>
            <Image src={item.url[0]} />
          </SwiperItem>
        ))}
      </Swiper>
    );
  }
}

AdSwiper.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired
};

export default AdSwiper;
