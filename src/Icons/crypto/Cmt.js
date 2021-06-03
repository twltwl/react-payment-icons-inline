import * as React from "react";

const SvgCmt = (props) =>
  React.createElement(
    "div",
    {
      className: props.className,
      style: props.style,
    },
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      {...props}
    >
      <defs>
        <filter
          id="cmt_svg__a"
          width="111.7%"
          height="111.7%"
          x="-5.8%"
          y="-4.2%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={0.5}
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
          />
        </filter>
        <filter
          id="cmt_svg__d"
          width="116.7%"
          height="117.5%"
          x="-8.3%"
          y="-6.2%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={0.5}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
          />
        </filter>
        <linearGradient id="cmt_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
          <stop offset="100%" stopOpacity={0.5} />
        </linearGradient>
        <circle id="cmt_svg__b" cx={16} cy={15} r={15} />
        <path
          id="cmt_svg__e"
          d="M16.276 25c-2.319-.006-4.395-.718-6.249-2.08-.493-.362-.508-.57-.088-1.021l.038-.04c.513-.556.51-.553 1.119-.115a8.564 8.564 0 004.823 1.646c1.846.064 3.542-.377 5.075-1.366 1.839-1.186 3.093-2.838 3.618-4.947.659-2.648.169-5.1-1.567-7.255-1.216-1.51-2.796-2.483-4.705-2.944-1.704-.412-3.378-.311-5.023.255-.871.3-1.676.742-2.403 1.31-.359.28-.495.274-.8-.068a5.714 5.714 0 01-.412-.502c-.188-.266-.162-.424.092-.626a10.305 10.305 0 014.115-1.974 10.126 10.126 0 014.145-.11c1.868.338 3.53 1.106 4.957 2.35 1.056.922 1.91 2 2.504 3.26.818 1.736 1.151 3.554.906 5.472a9.784 9.784 0 01-1.99 4.8c-1.107 1.442-2.524 2.494-4.218 3.185a10.15 10.15 0 01-3.937.77zm-.636-6.383c-.067.102-.102.178-.158.236-.338.355-.751.568-1.249.584-.345.01-.691-.019-1.036-.011a.78.78 0 00-.382.096c-1.594 1-3.31 1.146-5.118.762-.595-.126-1.128-.355-1.582-.745-.342-.293-.583-.639-.612-1.125-.05-.847.577-1.425 1.223-1.614 1.193-.35 2.328-.137 3.414.39.496.24.96.546 1.434.83.272.161.353.155.489-.123.615-1.256.218-2.641-1.284-3.153-1.318-.45-2.607-.405-3.876.18-.186.086-.39.25-.609.074-.227-.184-.075-.403-.017-.597.417-1.404.84-2.805 1.269-4.205.094-.307.339-.465.697-.446.527.029 1.051.108 1.578.12.79.02 1.583.027 2.372-.012.587-.03 1.102-.288 1.555-.662.055-.045.166-.097.202-.073.053.035.085.133.09.207.037.606-.223 1.073-.705 1.436-.57.43-1.221.63-1.932.647-.737.017-1.474.027-2.21.03-.166.002-.254.062-.293.218-.066.26-.136.521-.211.78-.057.193.016.27.211.262.464-.017.928-.048 1.391-.045a4.246 4.246 0 012.883 1.106c.773.688 1.086 1.576 1.133 2.568.037.795-.115 1.556-.552 2.241-.119.187-.065.268.136.321.534.141 1.027.045 1.498-.218.04-.022.077-.047.118-.066.014-.006.035.001.133.007zm-4.568.226l-.016-.097c-.067-.041-.13-.092-.203-.124-.53-.235-1.053-.495-1.597-.693-.555-.203-1.132-.348-1.736-.207-.272.063-.544.132-.623.445-.088.345.123.56.369.748.077.059.172.101.264.137.934.36 1.882.37 2.834.088.244-.072.473-.197.708-.297z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#cmt_svg__a)" xlinkHref="#cmt_svg__b" />
        <use fill="#C1A05C" xlinkHref="#cmt_svg__b" />
        <use
          fill="url(#cmt_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#cmt_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
        <use fill="#000" filter="url(#cmt_svg__d)" xlinkHref="#cmt_svg__e" />
        <use fill="#FFF" xlinkHref="#cmt_svg__e" />
      </g>
    </svg>
  );

export default SvgCmt;