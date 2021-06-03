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
    global.Cc = mod.exports;
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

  var SvgCc = function SvgCc(props) {
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
      id: "cc_svg__c"
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
      id: "cc_svg__a"
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
      id: "cc_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)",
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#cc_svg__a)",
      xlinkHref: "#cc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#36B0F3",
      xlinkHref: "#cc_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#cc_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#cc_svg__b"
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
      d: "M14.25 4.24a9.917 9.917 0 012.226-.19c.467 0 .932.042 1.39.126.895.123 1.757.407 2.598.726.61.273 1.251.53 1.748.994.14.1.064.303-.058.382-.285.182-.626.235-.951.306-1.463.251-2.952.364-4.389.754-.645.144-1.264.381-1.877.626-1.14.51-2.187 1.258-2.945 2.26a14.95 14.95 0 00-.419.645c-.12.235-.24.468-.34.713-.072.175-.14.352-.204.53-.13.378-.193.774-.289 1.162-.03.254-.048.511-.1.763-.035.578-.018 1.156-.013 1.733 0 .193.052.382.054.575.003.178.028.355.076.526.092.482.203.969.407 1.42.265.638.678 1.236 1.264 1.616.488.362 1.09.516 1.68.608.788.102 1.588.009 2.364-.132.407-.074.81-.166 1.21-.273.255-.071.516-.118.767-.204.096-.016.194-.025.292-.027-.314.28-.63.559-.987.785-1.211.781-2.62 1.188-4.025 1.45-.636.13-1.282.208-1.922.318-.729.105-1.484.192-2.14.55a2.068 2.068 0 00-.486.519c-.041.083-.118 0-.165-.031-.15-.171-.341-.297-.503-.455-.173-.169-.343-.335-.51-.51-.267-.311-.54-.617-.776-.952a9.881 9.881 0 01-1.19-2.047l-.053-.024c-.038-.21-.144-.395-.215-.594a9.703 9.703 0 01-.404-1.337 3.45 3.45 0 01-.093-.424 2.08 2.08 0 01-.09-.496c-.089-.394-.071-.8-.129-1.198 0-.332-.022-.667.018-.998.045-.275.026-.556.083-.83.056-.223.045-.456.115-.675a8.96 8.96 0 01.385-1.44c.066-.173.126-.347.187-.52.037-.08.068-.162.092-.245l.049-.058c.058-.172.134-.338.226-.495a7.447 7.447 0 01.298-.56 2.38 2.38 0 01.103-.193c.578-.905 1.251-1.763 2.064-2.47a11.54 11.54 0 013.418-2.108c.697-.273 1.42-.475 2.159-.602z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22.638 7.107c.2-.117.34-.307.479-.487a11.002 11.002 0 011.192 15.538c-1.684 1.978-4.102 3.322-6.68 3.678-1.184.175-2.393.128-3.576-.034a10.319 10.319 0 01-2.637-.738c-.458-.202-.915-.438-1.273-.796-.092-.08-.15-.214-.09-.33.093-.142.258-.213.412-.264a10.88 10.88 0 011.36-.274c.827-.144 1.663-.236 2.482-.417 1.364-.294 2.727-.711 3.906-1.476a6.72 6.72 0 002.027-1.974c.746-1.126 1.09-2.474 1.173-3.81.041-.995.019-2-.19-2.976-.19-.843-.523-1.693-1.152-2.307-.482-.494-1.136-.802-1.813-.92-1.123-.209-2.27-.006-3.37.241-.515.122-1.023.276-1.543.375.74-.697 1.647-1.195 2.6-1.536.546-.203 1.115-.337 1.68-.47 1.24-.279 2.508-.385 3.758-.6.437-.091.88-.18 1.255-.423z"
    })))));
  };

  var _default = SvgCc;
  _exports["default"] = _default;
});