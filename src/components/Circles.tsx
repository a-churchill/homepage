import React from 'react';
import { CirclesProps } from "../types/props"

function Circles(props: CirclesProps) {
  return (
    <div className={props.className}>
      <svg xmlns="http://www.w3.org/2000/svg" height={props.size} width={props.size}>
        <circle
          cx={props.size / 2}
          cy={props.size / 2}
          r={props.size / 2 - 5}
          stroke={props.fill}
          strokeWidth={5}
          fill="rgba(0, 0, 0, 0)"
        />
        <circle
          cx={props.size / 2}
          cy={props.size / 2}
          r={props.size / 2 - 12}
          fill={props.fill}
        />
      </svg>
    </div>
  );
}

export default Circles;
