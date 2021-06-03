import * as React from "react";

const SvgEon = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="eon_svg__c">
          <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
          <stop stopOpacity={0.5} offset="100%" />
        </linearGradient>
        <filter
          x="-5.8%"
          y="-4.2%"
          width="111.7%"
          height="111.7%"
          filterUnits="objectBoundingBox"
          id="eon_svg__a"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={0.5}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <circle id="eon_svg__b" cx={15} cy={15} r={15} />
      </defs>
      <g fill="none">
        <g transform="translate(1)">
          <use fill="#000" filter="url(#eon_svg__a)" xlinkHref="#eon_svg__b" />
          <use fill="#443F54" xlinkHref="#eon_svg__b" />
          <use
            fill="url(#eon_svg__c)"
            style={{
              mixBlendMode: "soft-light",
            }}
            xlinkHref="#eon_svg__b"
          />
          <circle
            strokeOpacity={0.097}
            stroke="#000"
            strokeLinejoin="square"
            cx={15}
            cy={15}
            r={14.5}
          />
        </g>
        <g fill="#FEFFFE">
          <path
            d="M15.508 25.708c-1.416-.862-3.139-1.908-4.554-2.77-.616-.369-1.292-.738-1.908-1.169-.246-.184-.246-.369-.246-.492.615-2.892 1.292-6.03 1.97-8.862l-.432-1.353s-1.476 7.076-2.215 10.215c-.123.43 0 .677.43.923 2.4 1.415 7.262 4.492 7.262 4.492l-.307-.984zm1.169 0c1.415-.862 3.138-1.908 4.554-2.77.615-.369 1.292-.738 1.907-1.169.247-.184.247-.369.247-.492-.616-2.892-1.293-6.03-1.97-8.862l.493-1.292s1.477 7.015 2.154 10.154c.123.43 0 .677-.431.923-2.4 1.415-7.262 4.492-7.262 4.492l.308-.984zm4.677-14.523l-.246-.37h-9.97l-.246.37s.185.492.123.307h10.277c-.123.123.062-.307.062-.307z"
            opacity={0.7}
          />
          <path d="M21.662 10.63S18.277 5.709 16.8 3.555c-.308-.37-.492-.554-.677-.554-.185 0-.43.185-.677.554-1.477 2.092-4.861 7.077-4.861 7.077-.308.43-.308.554-.062 1.107 0 0 2.4 6.647 3.385 9.6.492 1.354 1.784 5.231 1.784 5.231.062.123.308.185.431.185a.665.665 0 00.43-.185s1.355-3.877 1.785-5.23c.985-2.893 3.385-9.6 3.385-9.6.246-.554.246-.677-.061-1.108zm-5.539 13.908a3727.558 3727.558 0 01-4.677-13.415s3.323-4.861 4.616-6.77c1.292 1.909 4.615 6.77 4.615 6.77s-3.139 9.23-4.554 13.415z" />
        </g>
      </g>
    </svg>
  );

export default SvgEon;