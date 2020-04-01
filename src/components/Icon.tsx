import React from "react";
import { IconProps } from "../types/props";

function Icon(props: IconProps) {
  return (
    <li>
      <a href={props.link}>
        <i className={`icon-${props.name}`}></i>
      </a>
    </li>
  );
}

export default Icon;
