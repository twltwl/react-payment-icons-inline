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
    global.Colx = mod.exports;
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

  var SvgColx = function SvgColx(props) {
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
      id: "colx_svg__c"
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
      id: "colx_svg__a"
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
      id: "colx_svg__b",
      cx: 15,
      cy: 15,
      r: 15
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none"
    }, /*#__PURE__*/React.createElement("g", {
      transform: "translate(1)"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#colx_svg__a)",
      xlinkHref: "#colx_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#77C3B0",
      fillRule: "evenodd",
      xlinkHref: "#colx_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#colx_svg__c)",
      fillRule: "evenodd",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#colx_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      strokeOpacity: 0.097,
      stroke: "#000",
      strokeLinejoin: "square",
      cx: 15,
      cy: 15,
      r: 14.5
    })), /*#__PURE__*/React.createElement("path", {
      d: "M25.236 11.775l-1.571-1.57a2.526 2.526 0 00-1.801-.744h-.241v-.252c0-.44-.105-.858-.325-1.235a2.208 2.208 0 00-.44-.587l-1.57-1.57a2.526 2.526 0 00-1.801-.744H10.25c-.68 0-1.32.262-1.8.744l-1.57 1.57a2.484 2.484 0 00-.744 1.791l-.042 6.785c-.01.681.262 1.34.744 1.822l1.57 1.571c.482.482 1.12.743 1.801.743h.283v.252c0 .44.105.858.325 1.235.115.22.262.42.44.587l1.57 1.57c.482.482 1.12.744 1.801.744h7.246c.681 0 1.32-.262 1.801-.744l1.571-1.57c.482-.482.744-1.12.744-1.801v-6.807a2.537 2.537 0 00-.754-1.79zm-15.027 6.02a.253.253 0 01-.178-.072l-.785-.786-.785-.785a.145.145 0 01-.032-.042c-.02-.031-.031-.063-.042-.094V9.188c0-.073.032-.136.074-.178l1.57-1.57a.22.22 0 01.063-.042.279.279 0 01.126-.032h7.246c.042 0 .073.011.115.032.032.01.053.031.073.052l1.571 1.57c.021.022.042.043.052.074.011.01.011.021.011.032 0 .01.01.02.01.031 0 .01.01.042.01.063v.335a.248.248 0 01-.25.251H17.8a.253.253 0 01-.178-.073l-.712-.712h-6.136l-.262.262-.356.356v5.895l.618.618H16.9l.712-.723.01-.01c.021-.01.042-.032.063-.042.031-.021.073-.021.105-.021h1.256c.084 0 .157.042.21.105a.25.25 0 01.052.146v.356a.253.253 0 01-.073.178l-.786.786-.785.785c-.01.01-.031.021-.042.031 0 0-.01.01-.02.01-.011.011-.022.011-.032.011-.01 0-.01 0-.021.01-.01 0-.021.011-.032.011H10.21v.01zm13.487 2.556a.253.253 0 01-.073.178l-1.57 1.57a.22.22 0 01-.063.042.279.279 0 01-.126.032h-7.246a.239.239 0 01-.115-.032c-.032-.01-.053-.031-.074-.052l-1.57-1.57c-.021-.022-.042-.043-.053-.074-.01-.01-.01-.02-.01-.031 0-.01-.01-.021-.01-.032 0-.01-.011-.042-.011-.063v-.335c0-.146.115-.251.251-.251h1.257c.073 0 .136.031.178.073l.712.712h6.125l.262-.261.356-.356v-5.896l-.618-.618h-6.115l-.712.723-.01.01c-.021.01-.042.032-.063.042-.032.021-.073.021-.105.021h-1.256a.273.273 0 01-.21-.104.25.25 0 01-.052-.147v-.356c0-.073.031-.136.073-.178l.786-.785.785-.786c.01-.01.031-.02.042-.031 0 0 .01-.01.02-.01.011-.011.022-.011.032-.011.01 0 .01 0 .021-.01.01 0 .021-.011.031-.011h7.299c.073 0 .136.031.178.073l.785.786.786.785c.01.01.02.02.031.042.02.031.031.063.042.094v.052c.01-.02.01 6.765.01 6.765z",
      fill: "#FFF"
    }))));
  };

  var _default = SvgColx;
  _exports["default"] = _default;
});