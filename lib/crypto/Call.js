function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Call = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, React) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  React = _interopRequireWildcard(React);

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgCall = function SvgCall(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      x1: "50%",
      y1: "0%",
      x2: "50%",
      y2: "100%",
      id: "call_svg__c"
    }, /*#__PURE__*/React.createElement("stop", {
      stopColor: "#FFF",
      stopOpacity: 0.5,
      offset: "0%"
    }), /*#__PURE__*/React.createElement("stop", {
      stopOpacity: 0.5,
      offset: "100%"
    })), /*#__PURE__*/React.createElement("filter", {
      x: "-5.8%",
      y: "-4.2%",
      width: "111.7%",
      height: "111.7%",
      filterUnits: "objectBoundingBox",
      id: "call_svg__a"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      stdDeviation: 0.5,
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feComposite", {
      "in": "shadowBlurOuter1",
      in2: "SourceAlpha",
      operator: "out",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0",
      "in": "shadowBlurOuter1"
    })), /*#__PURE__*/React.createElement("circle", {
      id: "call_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#call_svg__a)",
      xlinkHref: "#call_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FBB413",
      xlinkHref: "#call_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#call_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#call_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 15,
      cy: 15,
      r: 14.5
    })), /*#__PURE__*/React.createElement("g", {
      fill: "#FFF"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M16.016 20.32a4.192 4.192 0 001.78-.308c.223-.08.436-.184.636-.313a.166.166 0 01.247.031l1.447 1.49c.105.108.1.143-.023.228a6.897 6.897 0 01-1.625.822 7.696 7.696 0 01-2.207.409 7.658 7.658 0 01-2.826-.386 6.947 6.947 0 01-2.15-1.208 7.966 7.966 0 01-1.505-1.652 6.538 6.538 0 01-.613-1.073 10.988 10.988 0 01-.348-.907 8.074 8.074 0 01-.324-1.733 5.226 5.226 0 01.02-1.297 9.41 9.41 0 01.223-1.262 7.916 7.916 0 01.749-1.818 7.41 7.41 0 012.949-2.84 7.32 7.32 0 011.47-.603c.414-.123.84-.206 1.27-.247a4.91 4.91 0 011-.023c.059.004.118.004.177 0 .546.014 1.087.1 1.61.255a5.97 5.97 0 011.285.506c.43.212.835.471 1.208.771.073.066.131.035.19-.027l.89-.941 1.286-1.367c.15-.162.19-.166.351-.019.496.446.953.932 1.367 1.455.524.651.97 1.361 1.331 2.115.289.623.526 1.269.71 1.93.155.544.205 1.1.325 1.644v.031c0 .506.111 1.011.057 1.517-.061.575-.092 1.158-.212 1.725-.102.477-.231.947-.386 1.409a10.846 10.846 0 01-1.679 3.18c-.112.147-.146.15-.274 0-.424-.428-.849-.864-1.277-1.289-.09-.089-.078-.158 0-.254a8.83 8.83 0 001.088-2.054c.243-.684.41-1.394.498-2.115.053-.553.065-1.109.035-1.663a6.036 6.036 0 00-.112-.938 8.692 8.692 0 00-1.505-3.52c-.082-.116-.182-.22-.255-.344-.074-.123-.081-.089-.15-.02-.41.414-.83.815-1.228 1.236-.14.147-.297.262-.429.413-.13.15-.289.293-.436.44l-.447.448c-.07.07-.124.042-.17-.023a4.987 4.987 0 00-1.432-1.39 4.763 4.763 0 00-1.803-.695 5.427 5.427 0 00-1.513-.019 4.662 4.662 0 00-1.76.556 4.91 4.91 0 00-1.505 1.281 4.983 4.983 0 00-.814 1.51 5.97 5.97 0 00-.274 2.002 4.828 4.828 0 001.266 3.293 5.118 5.118 0 001.775 1.27 4.55 4.55 0 002.042.382z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.284 22.068l-3.906-3.975c-.085-.089-.154-.093-.224 0-.276.402-.61.761-.992 1.065-.092.074-.092.131 0 .216.352.352.699.71 1.046 1.062l1.359 1.378c.081.08.077.12 0 .189-.181.135-.359.274-.548.386a8.514 8.514 0 01-3.296 1.366c-.46.104-.93.159-1.401.162h-.19a4.99 4.99 0 01-.999-.03c-.386-.059-.749-.105-1.115-.186a8.233 8.233 0 01-1.36-.436 8.835 8.835 0 01-2.08-1.224 9.113 9.113 0 01-1.663-1.706 8.43 8.43 0 01-1.189-2.196 7.264 7.264 0 01-.525-2.42 1.756 1.756 0 010-.262v-.911a.71.71 0 010-.297c0-.074.031-.143.043-.216.038-.342.099-.681.181-1.016.106-.449.247-.889.42-1.316a8.877 8.877 0 013.999-4.454 8.518 8.518 0 013.474-1.046h.224c1.27-.08 2.541.12 3.725.587l.332.139a9.105 9.105 0 011.447.807.158.158 0 00.235-.024c.41-.467.842-.91 1.27-1.358.081-.085.085-.162 0-.232a11.027 11.027 0 00-4.782-1.976 12.061 12.061 0 00-1.497-.143c-.778-.012-1.554.06-2.316.216-.487.097-.967.226-1.436.386-.835.28-1.633.662-2.374 1.14a11.228 11.228 0 00-2.389 2.049 10.915 10.915 0 00-2.111 3.604 12.435 12.435 0 00-.46 1.718 14.821 14.821 0 00-.173 1.544 8.105 8.105 0 00.077 1.663c.06.547.165 1.088.313 1.618.104.358.208.717.343 1.065.27.697.608 1.366 1.012 1.995a11.648 11.648 0 001.763 2.123c.434.4.898.764 1.39 1.088.658.45 1.365.825 2.107 1.116.74.293 1.51.503 2.297.625.589.088 1.183.14 1.779.155.386 0 .772-.062 1.135-.07a5.46 5.46 0 00.814-.123c.297-.05.59-.128.884-.205a10.421 10.421 0 003.088-1.374 11.216 11.216 0 002.315-1.976c.112-.128.109-.15-.046-.29z"
    })))));
  };

  var _default = SvgCall;
  _exports["default"] = _default;
});