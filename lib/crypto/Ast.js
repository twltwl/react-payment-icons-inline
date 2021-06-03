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
    global.Ast = mod.exports;
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

  var SvgAst = function SvgAst(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "ast_svg__a",
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
      id: "ast_svg__d",
      width: "117.5%",
      height: "117.5%",
      x: "-8.8%",
      y: "-6.2%",
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
      id: "ast_svg__c",
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
      id: "ast_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "ast_svg__e",
      d: "M16.01 5L26 15.14l-.375.34a7.99 7.99 0 01-.532.46c-.326.261-.67.521-1.016.752a14.275 14.275 0 01-4.596 2.042c-1.136.28-2.302.42-3.471.42-1.48 0-2.95-.22-4.36-.67a14.27 14.27 0 01-4.033-2.013 17.925 17.925 0 01-1.232-.99L6 15.14l1.095-1.112L16.01 5zm8.738 10.47c.147-.12.295-.24.424-.37L16 5.81 6.829 15.1l.187.16c.306.25.611.5.927.72a13.747 13.747 0 008.067 2.583 13.962 13.962 0 003.343-.41 13.826 13.826 0 004.418-1.962c.338-.222.664-.463.977-.72zm-15.03-.48a15.263 15.263 0 016.134-1.321c2.486 0 4.931.66 7.071 1.922l.139.08-.139.09a12.883 12.883 0 01-4.645 1.832l-.039.01-.03-.02a15.887 15.887 0 00-8.393-2.403h-.542l.444-.19zm8.639 2.002c1.253-.24 2.446-.67 3.55-1.291a13.312 13.312 0 00-6.065-1.452c-1.27 0-2.533.17-3.757.51 2.22.3 4.354 1.06 6.272 2.233zm3.304 1.972a23.88 23.88 0 01-1.42 1.752L16.01 25l-2.978-3.013.63-.04a13.766 13.766 0 005.987-1.792c.552-.27 2.012-1.191 2.012-1.191zm-7.347 3.504l1.696 1.721 2.998-3.043a14.252 14.252 0 01-4.694 1.322z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#ast_svg__a)",
      xlinkHref: "#ast_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#0061FF",
      xlinkHref: "#ast_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#ast_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#ast_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#ast_svg__d)",
      xlinkHref: "#ast_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#ast_svg__e"
    })))));
  };

  var _default = SvgAst;
  _exports["default"] = _default;
});