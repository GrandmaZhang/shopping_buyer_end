import Taro, { Component } from "@tarojs/taro";
import PropTypes from "prop-types";
import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import "./style.scss";

const AdSwiper = props => {
  const { data } = props;

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
};

AdSwiper.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired
};

export default AdSwiper;
