//@flow
import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number,
  color: string
};

export default function Gamecredits({ size, color }: Props) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size}>
      <Path
        fill={color}
        d="M8 .2l4.9 15.2L0 6h16L3.1 15.4z"
      />
    </Svg>
  );
}
