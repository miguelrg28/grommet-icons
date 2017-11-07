var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var WindowsLegacy = function WindowsLegacy(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'WindowsLegacy' }, props),
    React.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd', transform: 'translate(0 1)' },
      React.createElement('path', { fill: '#F35325', d: 'M2.61341757,9.09629841 C2.7158178,8.7382976 2.805018,8.42456355 2.89541821,8.11136284 C3.56075305,5.80989096 4.22662122,3.50828575 4.8912894,1.2065472 C4.91715612,1.11628032 4.94488952,1.04348016 5.04795642,1.0020134 C6.19889236,0.54067902 7.37476169,0.176944863 8.61343117,0.0430778925 C10.2790349,-0.137189183 11.8078384,0.252278367 13.2198416,1.13694704 C13.4037087,1.25228063 13.5815758,1.37681425 13.7695762,1.48414783 C13.8894431,1.55294798 13.9063765,1.62561481 13.8678431,1.75601511 C13.3153085,3.65268607 12.7681072,5.55149038 12.2195727,7.44962801 C12.0282389,8.11136284 11.8315718,8.77229768 11.6463714,9.43629918 C11.6051713,9.58403285 11.5710379,9.60896624 11.4346376,9.51576603 C10.6210357,8.96309811 9.7627671,8.49949706 8.80209826,8.25256316 C7.58996218,7.94109579 6.3794261,8.00362927 5.1699567,8.26842987 C4.30822141,8.45709696 3.47768619,8.74189761 2.61341757,9.09629841' }),
      React.createElement('path', { fill: '#81BC06', d: 'M17.2771841,12.0252117 C15.748114,12.0356117 14.3994443,11.4986772 13.1433081,10.673742 C12.7882406,10.4397415 12.7886406,10.4422748 12.9053076,10.0392072 C13.6165092,7.58053497 14.3261108,5.12119607 15.0394457,2.66292383 C15.1090459,2.42198995 15.0575791,2.37798985 15.3281131,2.5593236 C16.2241151,3.15892495 17.1677172,3.65252607 18.2365196,3.8690599 C19.3649222,4.09746041 20.4851914,4.01946024 21.5987939,3.77025967 C22.2990622,3.61345932 22.9791971,3.39345882 23.6470652,3.13545823 C23.7433321,3.09852482 23.841999,3.03665801 23.9410659,3.12825822 C24.0378661,3.21772509 23.993066,3.31839198 23.9631993,3.42092555 C23.2499977,5.88613113 22.5371961,8.35133672 21.8289278,10.8178756 C21.7963944,10.9330759 21.7361276,10.9893427 21.629594,11.0320095 C20.4671914,11.4973439 19.2778553,11.8633447 18.0245192,11.982945 C17.7765186,12.0066783 17.5266514,12.0116117 17.2771841,12.0252117' }),
      React.createElement('path', { fill: '#FFBA08', d: 'M21.3774601,12.3517725 C21.2214597,12.8916403 21.0781261,13.3883081 20.9345258,13.8851093 C20.3333244,15.9657806 19.7294564,18.0467187 19.133855,20.1296567 C19.0849216,20.2995238 18.999188,20.3868573 18.8355877,20.4499241 C17.8101187,20.8453917 16.767183,21.1704591 15.6730472,21.3241928 C13.9798433,21.5615267 12.4050398,21.2415259 10.9429031,20.3605906 C10.7010359,20.2151236 10.4675687,20.0545899 10.2238348,19.9119229 C10.1034345,19.8412561 10.0921012,19.7668559 10.1301013,19.638989 C10.6530358,17.8428516 11.1705036,16.0445808 11.6902381,14.2472434 C11.9013053,13.5156418 12.1131724,12.7837734 12.3247729,12.0528384 C12.3922397,11.8223046 12.3930397,11.8233713 12.6042402,11.9623049 C13.3642419,12.4640394 14.1561104,12.8985737 15.0387791,13.1489743 C16.3118486,13.5093751 17.5858515,13.4499083 18.8613211,13.1671076 C19.7098563,12.9795072 20.5285248,12.6953732 21.3774601,12.3517725' }),
      React.createElement('path', { fill: '#05A6F0', d: 'M11.1789303,11.0465695 C11.0506634,11.4885705 10.9317298,11.8983048 10.8131962,12.3081724 C10.1897281,14.4641772 9.56425999,16.6203155 8.94679192,18.7783204 C8.8931918,18.9633874 8.84385836,18.9676541 8.69425802,18.8655205 C7.83718941,18.2809859 6.92972068,17.8009848 5.9074517,17.5680509 C4.74984908,17.3036503 3.5983798,17.3749838 2.44904386,17.6268511 C1.72917556,17.7844514 1.03050731,18.0113853 0.342905756,18.2757859 C0.252505551,18.3104526 0.159972008,18.3605861 0.0658384616,18.2835192 C-0.0394951104,18.1976524 0.00623832657,18.0928521 0.0351717255,17.9928519 C0.746506671,15.5340463 1.45837495,13.0755074 2.16810989,10.6163019 C2.19837663,10.5137683 2.24971008,10.4544348 2.35291031,10.4131014 C3.53371299,9.93803365 4.74171573,9.56909948 6.01571861,9.45123255 C7.58705551,9.30656555 9.0422588,9.66336636 10.3882619,10.4799015 C10.618129,10.6195019 10.8451962,10.7648355 11.0723967,10.9100359 C11.1302635,10.9475026 11.2103971,10.980036 11.1789303,11.0465695' })
    )
  );
};

export default WindowsLegacy;