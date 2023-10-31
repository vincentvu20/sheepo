import { SVGProps } from 'react';

export const FacebookIcon = ({
  color = 'black',
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M2.70873 12.8875V7.334H0.839844V5.16968H2.70873V3.57355C2.70873 1.72126 3.84005 0.712646 5.49242 0.712646C6.28392 0.712646 6.96418 0.771576 7.16243 0.797915V2.73367L6.01642 2.73419C5.11776 2.73419 4.94376 3.16122 4.94376 3.78785V5.16968H7.08697L6.80791 7.334H4.94376V12.8875H2.70873Z"
          fill={color}
        />
      </svg>
    </div>
  );
};