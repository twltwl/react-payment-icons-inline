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
    global.Grc = mod.exports;
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

  var SvgGrc = function SvgGrc(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "grc_svg__a",
      width: "111.7%",
      height: "111.7%",
      x: "-5.8%",
      y: "-4.2%",
      filterUnits: "objectBoundingBox"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 0.5
    }), /*#__PURE__*/React.createElement("feComposite", {
      "in": "shadowBlurOuter1",
      in2: "SourceAlpha",
      operator: "out",
      result: "shadowBlurOuter1"
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      "in": "shadowBlurOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
    })), /*#__PURE__*/React.createElement("filter", {
      id: "grc_svg__d",
      width: "118.4%",
      height: "115.9%",
      x: "-9.2%",
      y: "-5.7%",
      filterUnits: "objectBoundingBox"
    }, /*#__PURE__*/React.createElement("feOffset", {
      dy: 0.5,
      "in": "SourceAlpha",
      result: "shadowOffsetOuter1"
    }), /*#__PURE__*/React.createElement("feGaussianBlur", {
      "in": "shadowOffsetOuter1",
      result: "shadowBlurOuter1",
      stdDeviation: 0.5
    }), /*#__PURE__*/React.createElement("feColorMatrix", {
      "in": "shadowBlurOuter1",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "grc_svg__c",
      x1: "50%",
      x2: "50%",
      y1: "0%",
      y2: "100%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#FFF",
      stopOpacity: 0.5
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopOpacity: 0.5
    })), /*#__PURE__*/React.createElement("circle", {
      id: "grc_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "grc_svg__e",
      d: "M16.053 4c.53.319 1.056.645 1.59.956 2.535 1.47 5.07 2.938 7.608 4.402.167.096.241.203.241.408-.005 3.492-.004 6.984.008 10.476 0 .228-.104.323-.27.419-3.017 1.746-6.032 3.495-9.047 5.244-.046.027-.087.063-.13.095h-.11c-.91-.536-1.82-1.077-2.733-1.608-2.154-1.251-4.31-2.5-6.468-3.743-.183-.105-.243-.225-.242-.435.01-3.464.012-6.928.005-10.393 0-.248.085-.373.289-.49 2.989-1.724 5.973-3.454 8.958-5.184.069-.04.128-.098.191-.147h.11zm2.806 17.48c.413.283.817.58 1.233.88.023-.01.057-.024.088-.041 1.35-.781 2.703-1.56 4.049-2.35.08-.047.15-.185.15-.28.007-3.126.006-6.251-.003-9.376a.377.377 0 00-.156-.275c-1.33-.782-2.667-1.55-3.998-2.329-.138-.08-.215-.056-.332.035-.323.253-3.499 2.193-4.743 2.94-.972.582-1.922 1.196-2.674 2.07-1.037 1.205-1.134 2.875-.227 4.185.449.65 1.048 1.144 1.69 1.583.512.349 1.04.673 1.56 1.008-.014.02-.022.04-.036.048-.686.398-1.37.8-2.064 1.187-.067.037-.206 0-.282-.048a10.765 10.765 0 01-2.014-1.68c-1.73-1.814-2.082-4.787-.82-6.956A7.38 7.38 0 0112.64 9.6c1.26-.824 4.77-2.907 5.235-3.192-.04-.052-.051-.08-.072-.093-.552-.322-1.1-.65-1.66-.957-.082-.045-.231-.028-.32.018-.308.159-.603.342-.902.517-.264.154-.527.31-.83.489l1.438.904c-.735.434-1.43.85-2.133 1.253-.056.032-.176.007-.237-.035a17.38 17.38 0 01-1.018-.74c-.145-.115-.241-.126-.403-.031a488.06 488.06 0 01-3.934 2.276c-.145.083-.192.18-.192.348.005 3.098.004 6.196-.001 9.293 0 .166.043.264.192.35 1.306.748 2.608 1.504 3.907 2.265.144.085.24.081.385-.016.932-.623 5.196-3.296 6.381-4.033.201-.125.37-.304.552-.458l-.03-.07h-4.426c.45-.782.87-1.52 1.305-2.249.04-.066.187-.094.285-.094 2.007-.005 4.015-.003 6.022-.003.08 0 .16.009.257.014.005.095.027.18.009.254-.132.549-.22 1.116-.42 1.64-.474 1.246-1.353 2.204-2.424 2.942-1.17.805-4.895 3-5.527 3.377.03.053.034.075.047.083.385.227.798.417 1.149.689.505.39.945.388 1.45 0 .364-.279.79-.476 1.231-.735l-1.464-.915c.04-.035.063-.063.092-.08.67-.389 1.34-.78 2.016-1.16.064-.035.194-.016.259.029zm2.894-9.337c.345.612.602 1.399.64 2.006-.678 0-1.332.004-1.987-.005-.06-.001-.154-.07-.173-.128-.32-.988-1.003-1.69-1.81-2.28-.573-.419-1.183-.788-1.776-1.18-.05-.032-.099-.067-.18-.123.135-.081.24-.146.348-.209.552-.32 1.1-.647 1.66-.955.1-.056.28-.09.361-.037 1.17.769 2.215 1.667 2.917 2.911z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#grc_svg__a)",
      xlinkHref: "#grc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#5411B3",
      xlinkHref: "#grc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#grc_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#grc_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#grc_svg__d)",
      xlinkHref: "#grc_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      xlinkHref: "#grc_svg__e"
    }))));
  };

  var _default = SvgGrc;
  _exports["default"] = _default;
});