import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const HomeIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M.362 6.907a1.143 1.143 0 0 0-.364.836v6.541c0 .947.768 1.715 1.714 1.715h12.572c.946 0 1.714-.768 1.714-1.715v-6.54c0-.318-.132-.62-.364-.837L8.37.137a.571.571 0 0 0-.744 0L.362 6.906Z"
      clipRule="evenodd"
    />
  </Svg>
);
