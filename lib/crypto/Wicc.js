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
    global.Wicc = mod.exports;
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

  var SvgWicc = function SvgWicc(props) {
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
      id: "wicc_svg__c"
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
      id: "wicc_svg__a"
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
      id: "wicc_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#wicc_svg__a)",
      xlinkHref: "#wicc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#5783CB",
      xlinkHref: "#wicc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#wicc_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#wicc_svg__b"
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
      d: "M15.303 4h1.137a10.619 10.619 0 016.673 2.787c.312.201.312.696-.055.825-.311.073-.55-.202-.788-.367A9.845 9.845 0 008.703 8.822a9.625 9.625 0 0010.634 15.161 9.9 9.9 0 006.453-7.333c.162-.668.266-1.349.312-2.035a.387.387 0 01.77.073l-.037 1.137a10.688 10.688 0 01-3.153 7.022A10.927 10.927 0 0116.532 26H15.45A11.018 11.018 0 015 15.513v-1.026A11.055 11.055 0 0115.303 4z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.25 9.702c.733-.807 2.255-.367 2.42.715.238.971-.697 1.796-1.65 1.723-1.265 1.283-2.273 2.805-3.135 4.4-.348.477.092 1.1-.183 1.595-.33.972-1.76 1.173-2.384.367-.458-.514-.33-1.229-.091-1.797a7.41 7.41 0 00-1.375-1.962l-.55.019a17.673 17.673 0 00-2.952 4.455c.128.495.22 1.081-.128 1.521-.459.752-1.669.825-2.237.129-.422-.477-.367-1.155-.147-1.724a17.233 17.233 0 00-2.676-4.766c-.715-.037-1.467-.459-1.559-1.21-.238-1.027.935-2.017 1.907-1.559.862.312 1.1 1.412.678 2.164a17.545 17.545 0 002.879 4.84 15.541 15.541 0 003.171-4.529c-.146-.495-.238-1.063.092-1.521.495-.807 1.815-.825 2.328-.019.385.495.257 1.155.037 1.687a7.7 7.7 0 001.338 1.98l.55-.037c1.339-1.411 2.567-2.97 3.392-4.748-.092-.587-.202-1.283.293-1.723h-.018z"
    })))));
  };

  var _default = SvgWicc;
  _exports["default"] = _default;
});