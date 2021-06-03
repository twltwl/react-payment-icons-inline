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
    global.Part = mod.exports;
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

  var SvgPart = function SvgPart(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "part_svg__a",
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
      id: "part_svg__d",
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
      id: "part_svg__c",
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
      id: "part_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "part_svg__e",
      d: "M15.424 5.173c.644-.28 1.104.314 1.502.712.71.603 1.386 1.244 2.026 1.92.367.401.218 1.134-.281 1.357-.384.21-.853.052-1.147-.24-.773-.74-1.512-1.517-2.314-2.224-.498-.407-.396-1.29.214-1.525m7.034 2.051c.437-.235 1.137-.044 1.258.477.185.463-.112.92-.438 1.229-.715.705-1.41 1.43-2.105 2.156-.253.306-.7.388-1.058.223-.517-.214-.657-.99-.267-1.384.877-.892 1.651-1.892 2.61-2.7M8.49 7.368c.455-.275 1.018-.093 1.355.28.758.765 1.54 1.504 2.305 2.257.507.468.153 1.46-.554 1.464-.592.09-.906-.495-1.302-.815-.694-.575-1.33-1.215-1.96-1.86-.356-.367-.25-1.041.157-1.326m.587 4.52c.763-.295 1.508.667 1.032 1.33-.563.734-1.296 1.325-1.91 2.018-.363.373-.7.947-1.305.874-.707-.027-1.062-1.01-.548-1.487.929-.889 1.666-2.013 2.732-2.736m15.475 2.128c.525-.343 1.317.047 1.334.68.077.594-.513.908-.838 1.308-.572.688-1.2 1.33-1.848 1.948-.474.447-1.358.133-1.443-.515-.111-.669.517-1.084.913-1.512.656-.609 1.21-1.326 1.882-1.909M11.069 18.72c.51-.305 1.283.057 1.295.676.095.598-.496.915-.819 1.314-.57.69-1.206 1.323-1.848 1.948-.417.422-1.307.219-1.425-.386-.202-.585.294-1.056.672-1.423.733-.686 1.37-1.47 2.125-2.129m9.062-.023c.282-.097.64-.105.878.099.883.839 1.823 1.618 2.653 2.514.256.26.279.695.109 1.007-.24.561-1.062.575-1.461.178-.806-.76-1.58-1.559-2.39-2.316-.49-.38-.375-1.262.21-1.482m-6.799 2.145c.42-.227.914-.012 1.216.308a82.32 82.32 0 002.314 2.237c.52.494.168 1.497-.565 1.505-.592.07-.9-.518-1.297-.84a23.19 23.19 0 01-1.95-1.85c-.374-.398-.222-1.14.282-1.36m-1.35-14.907a.868.868 0 11-1.736 0 .868.868 0 011.735 0m2.529 2.308a.867.867 0 11-1.735 0 .867.867 0 011.735 0m-6.774 2.12a.868.868 0 11-1.735 0 .868.868 0 011.735 0m13.772-4.497a.867.867 0 11-1.736 0 .867.867 0 011.737 0M26 10.146a.867.867 0 11-1.735 0 .867.867 0 011.735 0m-2.371 2.492a.867.867 0 11-1.735 0 .867.867 0 011.735 0m2.367 7.006a.867.867 0 11-1.735 0 .867.867 0 011.735 0M19.23 21.76a.868.868 0 11-1.735 0 .868.868 0 011.735 0m2.496 2.372a.868.868 0 11-1.735 0 .868.868 0 011.735 0m-9.5 0a.868.868 0 11-1.736 0 .868.868 0 011.735 0m-2.116-6.794a.868.868 0 11-1.735 0 .868.868 0 011.735 0m-2.374 2.521a.868.868 0 11-1.735 0 .868.868 0 011.735 0"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#part_svg__a)",
      xlinkHref: "#part_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#03E8B0",
      xlinkHref: "#part_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#part_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#part_svg__b"
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
      filter: "url(#part_svg__d)",
      xlinkHref: "#part_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      fillRule: "evenodd",
      xlinkHref: "#part_svg__e"
    })))));
  };

  var _default = SvgPart;
  _exports["default"] = _default;
});