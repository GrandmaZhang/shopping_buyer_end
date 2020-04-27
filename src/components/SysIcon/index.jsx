import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import PropTypes from "prop-types";

import GameSVG from "./icon/GameSVG";

import "./style.scss";

const sysIconMap = {
  game: GameSVG
};

function SysIcon({ type }) {
  const TargetIcon = sysIconMap[type];
  console.log(TargetIcon, "TargetIcon");
  return (
    <View className="iconWrap">
      <TargetIcon />
    </View>
  );
}

SysIcon.propTypes = {
  type: PropTypes.string.isRequired
};

export default SysIcon;
