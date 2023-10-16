import { SVGProps } from 'react';

export const Versace = ({
  color = 'white',
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="167"
        height="34"
        viewBox="0 0 167 34"
        fill="none"
        {...props}>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M150.179 0.655656H166.482V3.25336C166.008 3.09436 165.512 3.0124 165.013 3.01061H155.642V15.1491H164.758C165.413 15.1491 165.996 15.0772 166.481 14.9548V17.5411C166.068 17.4443 165.499 17.3952 164.794 17.3952H155.642V29.9466H164.733C165.232 29.9466 165.826 29.874 166.481 29.7159V32.508H150.203C150.333 32.017 150.399 31.511 150.398 31.003V2.19691C150.398 1.56617 150.325 1.04435 150.179 0.655656ZM146.405 8.92219L141.695 8.88659C141.464 6.23976 139.947 3.67765 136.609 3.20567C129.459 2.56211 127.444 10.415 127.626 16.1572C127.809 21.6922 128.694 30.2015 136.075 30.2015C139.171 30.2015 142.144 27.0207 142.047 24.3383L146.405 24.3027C146.089 29.8377 139.741 33.0419 136.718 33.1516C126.389 33.5039 122.066 26.6206 121.848 16.7993C121.654 7.90346 125.296 0 135.504 0C144.244 0.121734 145.931 5.29294 146.405 8.92219ZM72.9408 28.8901L76.0611 26.2803C77.687 28.9635 79.0225 30.1886 82.2517 30.1886C85.5286 30.1886 88.285 28.1982 88.285 24.6786C88.285 22.9423 87.5802 21.522 86.1849 20.4542C85.5528 19.9559 83.951 19.0945 81.4259 17.8928C77.6507 16.0846 73.9731 13.7289 73.9731 8.99551C73.9731 3.02271 79.0467 0.388695 84.3995 0.193636C87.5681 0.0726133 91.5014 1.82174 93.091 3.78728L89.9231 6.22695C89.3581 5.17255 88.5181 4.29083 87.4923 3.6754C86.4665 3.05998 85.2932 2.73381 84.0969 2.73154C80.0541 2.73154 76.8498 7.41724 80.2 10.6464C81.0493 11.4715 82.7863 12.4909 85.4324 13.7047C89.6561 15.6838 93.2612 18.0501 93.2612 23.2825C93.2612 25.0908 92.7878 26.7779 91.853 28.3199C89.9722 31.4273 86.8278 32.9814 82.4339 32.9814C77.3838 32.9814 76.3892 31.8281 72.9408 28.8901ZM28.4893 0.655656H44.7782V3.25336C44.3051 3.09442 43.8094 3.01246 43.3103 3.01061H33.9396V15.1491H43.0554C43.7111 15.1491 44.2941 15.0772 44.7789 14.9548V17.5411C44.366 17.4443 43.7958 17.3952 43.1046 17.3952H33.9396V29.9466H43.0312C43.5289 29.9466 44.124 29.874 44.7789 29.7159V32.508H28.5143C28.6332 32.0151 28.6941 31.5101 28.6958 31.003V2.19691C28.6958 1.56617 28.6225 1.04435 28.4893 0.655656ZM0 0.655656H5.92368V0.947533C5.92368 1.21449 6.0084 1.56617 6.15434 2.01538L14.5049 27.1545L23.0754 1.90574C23.2085 1.48145 23.2818 1.06856 23.2818 0.655656H26.1586C25.8674 1.16537 25.6489 1.61529 25.515 2.01538L15.7308 31.2095C15.6339 31.4886 15.5492 31.9257 15.4766 32.5087H10.6208C10.5474 32.0674 10.4379 31.6329 10.2933 31.2095L0.704065 2.24603C0.482555 1.71187 0.251627 1.18166 0.0113903 0.655656H0ZM62.9145 17.262C66.7986 16.4968 69.7729 13.5232 69.7729 9.27457C69.7729 3.70186 65.1114 0.654944 59.8918 0.654944H50.3509C50.4841 1.14117 50.5574 1.65089 50.5574 2.18481V30.9774C50.5574 31.5968 50.4841 32.1186 50.3509 32.5073H56.0319C55.8929 32.0093 55.8235 31.4944 55.8254 30.9774V17.7476L57.6457 17.9419L67.1631 32.5073H72.8803L62.9145 17.262ZM61.9314 14.8345C60.8998 15.562 59.6611 15.9258 58.2409 15.9258H55.8133V2.97572H57.986C59.8441 2.97572 61.2878 3.43632 62.32 4.35822C63.7282 5.63394 64.4443 7.35744 64.4443 9.51804C64.4443 11.8488 63.6064 13.6214 61.9314 14.8352M120.901 31.1853L110.293 1.71211C110.175 1.37134 110.105 1.01572 110.086 0.655656H105.497C105.497 1.03225 105.436 1.43233 105.29 1.83313L95.0096 31.1853C94.875 31.6089 94.6572 32.0467 94.366 32.508H97.3275C97.3161 32.0225 97.3766 31.5733 97.5105 31.1853L100.556 22.5294H112.27L115.281 31.186C115.439 31.658 115.511 32.0951 115.511 32.508H121.654C121.301 32.0104 121.047 31.5612 120.901 31.1853ZM101.358 20.1865L106.31 5.80266L111.397 20.1865H101.358Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
