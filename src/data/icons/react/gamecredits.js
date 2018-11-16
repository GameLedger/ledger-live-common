//@flow
import React from "react";

type Props = {
  size: number,
  color: string
};

export default function Gamecredits({ size, color = "currentColor" }: Props) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size}>
      <path
        fill={color}
        d="M8 .2l4.9 15.2L0 6h16L3.1 15.4z"
      />
    </svg>
  );
}
