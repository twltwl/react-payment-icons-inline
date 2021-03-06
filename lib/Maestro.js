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
    global.Maestro = mod.exports;
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

  var SvgMaestro = function SvgMaestro(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      id: "maestro_svg__Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: 0,
      y: 0,
      viewBox: "0 0 125.4 78.4",
      xmlSpace: "preserve"
    }, props), /*#__PURE__*/React.createElement("style", null, ".maestro_svg__st1{fill:#ec1c2e}.maestro_svg__st2{fill:#0084c4}.maestro_svg__st3{fill:#fff}.maestro_svg__st4{fill:none;stroke:#fff;stroke-width:.21}"), /*#__PURE__*/React.createElement("g", {
      id: "maestro_svg__Layer_2_1_"
    }, /*#__PURE__*/React.createElement("g", {
      id: "maestro_svg__Layer_1-2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4.2 0h117.1c2.3 0 4.2 1.9 4.2 4.2v70c0 2.3-1.9 4.2-4.2 4.2H4.2c-2.3 0-4.2-1.9-4.2-4.2v-70C0 1.9 1.9 0 4.2 0z",
      fill: "#13457c"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st1",
      d: "M77.6 61.7h1.2l1.1-.1 1.2-.1 1.1-.3 1.1-.2 1-.3 1.1-.4 1-.4 1-.4 1-.5.9-.5.9-.7.9-.6.9-.6.8-.8.8-.7.7-.8.8-.8.6-.8.6-.9.6-1 .6-.9.5-1 .4-1 .4-1 .4-1 .3-1.1.2-1.1.2-1.1.2-1.1.1-1.2V38l-.1-1.1-.2-1.2-.2-1.1-.2-1.1-.3-1-.4-1.1-.4-1-.4-1-.5-.9-.6-1-.6-.9-.6-.9-.6-.8-.8-.8-.7-.8-.8-.8-.8-.7-.9-.6-.9-.7-.9-.5-.9-.6-1-.5-1-.4-1-.5-1.1-.3-1-.3-1.1-.3-1.1-.2-1.2-.1-1.1-.1h-2.3l-1.2.1-1.1.1-1.1.2-1.1.3-1.1.3-1 .3-1 .5-1 .4-1 .5-.9.6-.9.5-.9.7-.9.6-.8.7-.8.8-.7.8-.7.8-.7.8-.6.9-.6.9-.6 1-.5.9-.4 1-.4 1-.3 1.1-.4 1-.2 1.1-.2 1.1-.1 1.2-.1 1.1-.1 1.2.1 1.1.1 1.2.1 1.1.2 1.1.2 1.1.4 1.1.3 1 .4 1 .4 1 .5 1 .6.9.6 1 .6.9.7.8.7.8.7.8.8.7.8.8.9.6.9.6.9.7.9.5 1 .5 1 .4 1 .4 1 .4 1.1.3 1.1.2 1.1.3 1.1.1 1.2.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st2",
      d: "M47.8 61.7H49l1.1-.1 1.1-.1 1.1-.3 1.1-.2 1.1-.3 1-.4 1.1-.4 1-.4.9-.5 1-.5.9-.7.9-.6.8-.6.8-.8.8-.7.7-.8.8-.8.6-.8.7-.9.6-1 .5-.9.5-1 .4-1 .4-1 .4-1 .3-1.1.2-1.1.2-1.1.2-1.1.1-1.2V38l-.1-1.1-.2-1.2-.2-1.1-.2-1.1-.3-1-.4-1.1-.4-1-.4-1-.5-.9-.5-1-.6-.9-.7-.9-.6-.8-.8-.8-.7-.8-.8-.8-.8-.7-.8-.6-.9-.7-.9-.5-1-.6-.9-.5-1-.4-1.1-.5-1-.3-1.1-.3-1.1-.3-1.1-.2-1.1-.1-1.1-.1h-2.4l-1.1.1-1.2.1-1.1.2-1 .3-1.1.3-1.1.3-1 .5-1 .4-1 .5-.9.6-.9.5-.9.7-.9.6-.8.7-.8.8-.7.8-.7.8-.7.8-.6.9-.6.9-.5 1-.5.9-.5 1-.4 1-.4 1.1-.2 1-.3 1.1-.2 1.1-.1 1.2-.1 1.1-.1 1.2.1 1.1.1 1.2.1 1.1.2 1.1.3 1.1.2 1.1.4 1 .4 1 .5 1 .5 1 .5.9.6 1 .6.9.7.8.7.8.7.8.8.7.8.8.9.6.9.6.9.7.9.5 1 .5 1 .4 1 .4 1.1.4 1.1.3 1 .2 1.1.3 1.2.1 1.1.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st1",
      d: "M59.9 25.3h11.5V24H61zm-1.7 2.6h13.2v-1.2H59zm-1.4 2.7h14.6v-1.2h-14zm-.9 2.7h15.5V32H56.3zm-.5 2.7h16v-1.3H55.6zm-.2 5.1h16.2v-1.2H55.1zm.4 2.9h15.8v-1.3h-16zm.8 2.2h15V45H56zm1.1 2.8h13.9v-1.2H56.9zm1.6 2.8h12.3v-1.2H58.3zm2.1 2.7h10v-1.2H60z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st3",
      d: "M72.8 37.3l-.2-.1h-.7l-.1-.1h-2.1l-.2.1h-.2l-.1.1-.2.1-.1.1-.1.1-.1.1-.1.1v.1l-.1.1v.2l.1.1v.2l.1.1.1.2.2.1.3.2.3.1.3.1.3.2.4.1.3.1.4.1.3.2.3.2.3.3.2.3.1.4.2.5v1.2l-.1.5-.2.5-.1.4-.2.3-.3.3-.3.3-.3.2-.3.2-.3.2-.4.1-.4.1-.3.1-.4.1h-3.5l-.2-.1H65l-.2-.1h-.2l-.2-.1h-.2l-.2-.1-.2-.1.5-2.3h.1l.1.1h.2l.2.1h.2l.2.1h.5l.3.1h.5l.3.1h1.3l.3-.1h.2l.2-.2.1-.1.1-.2.1-.1.1-.2v-.2l.1-.1-.1-.2v-.2l-.1-.1-.1-.2h-.2l-.1-.1-.1-.1-.2-.1-.2-.1-.2-.1h-.2l-.2-.1-.2-.1-.2-.1-.2-.1-.2-.1-.2-.1-.2-.1-.2-.1-.2-.2-.2-.1-.1-.2-.2-.2-.1-.2-.1-.2-.1-.3-.1-.2v-1.2l.1-.2v-.4l.1-.2v-.2l.1-.2.1-.1.1-.2v-.1l.1-.2.1-.1.2-.2.1-.1.1-.1.1-.1.2-.1.1-.1.2-.1.2-.1.2-.1h.2l.2-.1.2-.1h.5l.2-.1h.9l.3-.1h1l.4.1h1.2l.1.1h.7l.1.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st4",
      d: "M72.8 37.3l-.2-.1h-.7l-.1-.1h-2.1l-.2.1h-.2l-.1.1-.2.1-.1.1-.1.1-.1.1-.1.1v.1l-.1.1v.2l.1.1v.2l.1.1.1.2.2.1.3.2.3.1.3.1.3.2.4.1.3.1.4.1.3.2.3.2.3.3.2.3.1.4.2.5v1.2l-.1.5-.2.5-.1.4-.2.3-.3.3-.3.3-.3.2-.3.2-.3.2-.4.1-.4.1-.3.1-.4.1h-3.5l-.2-.1H65l-.2-.1h-.2l-.2-.1h-.2l-.2-.1-.2-.1.5-2.3h.1l.1.1h.2l.2.1h.2l.2.1h.5l.3.1h.5l.3.1h1.3l.3-.1h.2l.2-.2.1-.1.1-.2.1-.1.1-.2v-.2l.1-.1-.1-.2v-.2l-.1-.1-.1-.2h-.2l-.1-.1-.1-.1-.2-.1-.2-.1-.2-.1h-.2l-.2-.1-.2-.1-.2-.1-.2-.1-.2-.1-.2-.1-.2-.1-.2-.1-.2-.2-.2-.1-.1-.2-.2-.2-.1-.2-.1-.2-.1-.3-.1-.2v-1.2l.1-.2v-.4l.1-.2v-.2l.1-.2.1-.1.1-.2v-.1l.1-.2.1-.1.2-.2.1-.1.1-.1.1-.1.2-.1.1-.1.2-.1.2-.1.2-.1h.2l.2-.1.2-.1h.5l.2-.1h.9l.3-.1h1l.4.1h1.2l.1.1h.7l.1.1-.5 2.4"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st3",
      d: "M75.2 32.3h3l-.5 2.6h1.9l-.5 2.4-1.8-.1-1 5.9v.5l.1.1.1.1h.1l.1.1h.4l.1.1h.5l.2-.1h.3l.1-.1h.2l-.3 2h-.1v.1h-.2l-.1.1h-.3l-.1.1h-.2l-.1.1h-2.3l-.3-.1-.3-.1-.2-.1-.2-.1-.2-.1-.2-.1-.1-.2-.1-.2v-1.3z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st4",
      d: "M75.2 32.3h3l-.5 2.6h1.9l-.5 2.4-1.8-.1-1 5.9v.5l.1.1.1.1h.1l.1.1h.4l.1.1h.5l.2-.1h.3l.1-.1h.2l-.3 2h-.1v.1h-.2l-.1.1h-.3l-.1.1h-.2l-.1.1h-2.3l-.3-.1-.3-.1-.2-.1-.2-.1-.2-.1-.2-.1-.1-.2-.1-.2v-1.3l2-11.6"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st3",
      d: "M57.1 41.3v.7l.1.2.1.3.1.1.1.2.2.2.1.2.2.1.2.2.2.1.2.1.2.1h.5l.3.1h1.6l.3-.1h.3l.3-.1.3-.1.3-.1.3-.1.3-.2.3-.2-.4 2.7-.2.1h-.2l-.1.1-.2.1h-.2l-.1.1h-.4l-.2.1h-2.9l-.3-.1h-.3l-.3-.1h-.2l-.3-.1-.2-.1-.3-.1-.2-.1-.3-.1-.2-.2-.2-.1-.3-.2-.2-.1-.2-.2-.2-.2-.1-.3-.2-.2-.1-.2-.2-.3-.1-.3-.1-.3-.1-.4v-.3l-.1-.4v-1.6l.1-.2v-.3l.1-.2v-.4l.1-.2v-.3l.1-.2.1-.2.1-.2.1-.3.1-.2.2-.2.1-.3.1-.2.2-.2.2-.2.2-.2.2-.2.2-.2.3-.2.2-.1.3-.2.3-.1.3-.2.4-.1.3-.1h.4l.4-.1h1.7l.2.1h.4l.3.1.2.1h.2l.2.1.2.1.2.2.2.1.1.1.2.2.2.2.1.2.2.2.1.2.1.2.1.3.1.2.1.3v.3l.1.4v1.1l-.1.4v.4l-.1.5-.1.6h-7.7l.4-2h4.6l.1-.3v-.3l-.1-.2v-.2l-.1-.2v-.2l-.1-.2-.1-.1-.2-.2-.1-.1-.2-.1h-.1l-.2-.1H60l-.1-.1h-.4l-.2.1h-.2l-.2.1h-.2l-.1.1-.2.1-.1.2-.1.1-.2.2-.1.1-.1.2-.1.2v.2l-.1.2-.1.3z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st4",
      d: "M57.1 41.3v.7l.1.2.1.3.1.1.1.2.2.2.1.2.2.1.2.2.2.1.2.1.2.1h.5l.3.1h1.6l.3-.1h.3l.3-.1.3-.1.3-.1.3-.1.3-.2.3-.2-.4 2.7-.2.1h-.2l-.1.1-.2.1h-.2l-.1.1h-.4l-.2.1h-2.9l-.3-.1h-.3l-.3-.1h-.2l-.3-.1-.2-.1-.3-.1-.2-.1-.3-.1-.2-.2-.2-.1-.3-.2-.2-.1-.2-.2-.2-.2-.1-.3-.2-.2-.1-.2-.2-.3-.1-.3-.1-.3-.1-.4v-.3l-.1-.4v-1.6l.1-.2v-.3l.1-.2v-.4l.1-.2v-.3l.1-.2.1-.2.1-.2.1-.3.1-.2.2-.2.1-.3.1-.2.2-.2.2-.2.2-.2.2-.2.2-.2.3-.2.2-.1.3-.2.3-.1.3-.2.4-.1.3-.1h.4l.4-.1h1.7l.2.1h.4l.3.1.2.1h.2l.2.1.2.1.2.2.2.1.1.1.2.2.2.2.1.2.2.2.1.2.1.2.1.3.1.2.1.3v.3l.1.4v1.1l-.1.4v.4l-.1.5-.1.6h-7.7l.4-2h4.6l.1-.3v-.3l-.1-.2v-.2l-.1-.2v-.2l-.1-.2-.1-.1-.2-.2-.1-.1-.2-.1h-.1l-.2-.1H60l-.1-.1h-.4l-.2.1h-.2l-.2.1h-.2l-.1.1-.2.1-.1.2-.1.1-.2.2-.1.1-.1.2-.1.2v.2l-.1.2-.1.3-.4 2.2"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st3",
      d: "M53 43.9l-.4 2.3h-2.7l.1-.2v-.6l.1-.1V45h.1l-.2.2-.2.1-.2.2-.2.1-.2.2-.3.1-.3.1-.3.1-.3.1-.3.1h-.3l-.3.1h-1.2l-.4-.1-.3-.1-.3-.2-.3-.2-.2-.1-.2-.2-.2-.2-.2-.2-.1-.3-.1-.2-.1-.2v-.3l-.1-.2v-1.1l.1-.4.1-.4.1-.3.2-.4.2-.3.2-.3.2-.2.3-.3.3-.2.3-.2.3-.2.4-.1.3-.2h.4l.3-.1h.4l.2-.1h.7l.1-.1h2.3l.1-.2v-.7l-.1-.1v-.1l-.1-.1v-.1l-.1-.1-.1-.1h-.1l-.1-.1-.1-.1h-.1l-.1-.1h-2.1l-.3.1h-.7l-.3.1h-.3l-.3.1h-.2l-.3.1-.2.1h-.1l-.1.1.7-2.5.3-.1.2-.1.2-.1.3-.1h.2l.3-.1h.9l.3-.1h2l.3.1h.4l.3.1.3.1.4.1.3.2.3.2.3.2.3.2.2.3.2.3.2.3.1.3.1.4v.4l-.1.4z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st4",
      d: "M53 43.9l-.4 2.3h-2.7l.1-.2v-.6l.1-.1V45h.1l-.2.2-.2.1-.2.2-.2.1-.2.2-.3.1-.3.1-.3.1-.3.1-.3.1h-.3l-.3.1h-1.2l-.4-.1-.3-.1-.3-.2-.3-.2-.2-.1-.2-.2-.2-.2-.2-.2-.1-.3-.1-.2-.1-.2v-.3l-.1-.2v-1.1l.1-.4.1-.4.1-.3.2-.4.2-.3.2-.3.2-.2.3-.3.3-.2.3-.2.3-.2.4-.1.3-.2h.4l.3-.1h.4l.2-.1h.7l.1-.1h2.3l.1-.2v-.7l-.1-.1v-.1l-.1-.1v-.1l-.1-.1-.1-.1h-.1l-.1-.1-.1-.1h-.1l-.1-.1h-2.1l-.3.1h-.7l-.3.1h-.3l-.3.1h-.2l-.3.1-.2.1h-.1l-.1.1.7-2.5.3-.1.2-.1.2-.1.3-.1h.2l.3-.1h.9l.3-.1h2l.3.1h.4l.3.1.3.1.4.1.3.2.3.2.3.2.3.2.2.3.2.3.2.3.1.3.1.4v.4l-.1.4-1.1 5.6"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st2",
      d: "M50.5 41.1V41h-.2l-.1-.1h-.7l-.2.1h-.5l-.1.1h-.3l-.1.1h-.2l-.1.1h-.1l-.1.1-.2.1h-.1l-.2.2-.1.1-.1.1-.1.1-.2.2v.1l-.1.2v.8l.1.2.1.2.2.1.2.1h.9l.3-.1h.3l.2-.1.2-.1.2-.1.1-.1.2-.1.1-.1.1-.2.1-.1v-.1l.1-.1.1-.2v-.2l.1-.2v-.4l.1-.1v-.4z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st3",
      d: "M30.7 46.2h-2.9l2.4-13.9h5l.6 8.3 3.4-8.3h5.2L42 46.2h-2.9l1.8-10.4h-.1l-4.3 10.4h-3.3v-.4l-.1-1.2L33 43l-.1-1.9-.1-1.9-.1-1.7v-1.2l-.1-.5h-.1z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st4",
      d: "M30.7 46.2h-2.9l2.4-13.9h5l.6 8.3 3.4-8.3h5.2L42 46.2h-2.9l1.8-10.4h-.1l-4.3 10.4h-3.3v-.4l-.1-1.2L33 43l-.1-1.9-.1-1.9-.1-1.7v-1.2l-.1-.5h-.1l-1.8 10.4"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st3",
      d: "M79 46.2h3l1.1-6V40l.1-.2v-.3l.1-.2.1-.2.1-.2.1-.2.1-.2.2-.1.2-.2.2-.1.3-.1.3-.1.3-.1h.4l.4-.1h.2l.1.1v-.1l.1-.1v-.2l.1-.2v-.3l.1-.3.1-.3.1-.3.1-.2.1-.2.1-.2.1-.2.1-.2.1-.1v-.1h-.3l-.1-.1h-.1l-.3.1h-.3l-.3.1h-.2l-.2.1-.3.1-.2.1-.2.2-.1.1-.2.2-.2.1-.1.2-.2.2-.1.2-.2.2-.1.2.3-1.9h-3l-2 11.3z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st4",
      d: "M79 46.2h3l1.1-6V40l.1-.2v-.3l.1-.2.1-.2.1-.2.1-.2.1-.2.2-.1.2-.2.2-.1.3-.1.3-.1.3-.1h.4l.4-.1h.2l.1.1v-.1l.1-.1v-.2l.1-.2v-.3l.1-.3.1-.3.1-.3.1-.2.1-.2.1-.2.1-.2.1-.2.1-.1v-.1h-.3l-.1-.1h-.1l-.3.1h-.3l-.3.1h-.2l-.2.1-.3.1-.2.1-.2.2-.1.1-.2.2-.2.1-.1.2-.2.2-.1.2-.2.2-.1.2.3-1.9h-3l-2 11.3"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st3",
      d: "M92 34.7l.4.1h.9l.3.1.3.1.3.1.3.1.2.1.3.1.2.1.2.2.3.1.2.2.2.1.1.2.2.2.2.2.1.2.2.3.1.2.1.2.1.3.1.2.1.3.1.3v.3l.1.2v1.6l-.1.4v.3l-.1.4-.1.3-.1.3-.1.3-.1.3-.1.3-.1.2-.2.3-.1.2-.2.3-.2.2-.2.2-.2.2-.2.2-.2.1-.2.2-.3.1-.2.1-.3.2-.2.1-.3.1-.2.1h-.3l-.3.1h-.3l-.3.1h-1.8l-.3-.1h-.2l-.3-.1h-.3l-.3-.1-.2-.1-.3-.2-.2-.1-.2-.1-.2-.1-.3-.2-.2-.1-.2-.2-.1-.2-.2-.2-.2-.2-.1-.2-.2-.3-.1-.2-.1-.3-.1-.2-.1-.3-.1-.3v-.3L86 42v-.3l-.1-.3v-.7l.1-.4V40l.1-.3v-.4l.1-.3.1-.3.1-.3.1-.2.1-.3.1-.3.2-.2.2-.3.1-.2.2-.2.2-.2.2-.2.2-.2.2-.2.2-.1.2-.2.3-.1.2-.2.3-.1.3-.1.2-.1h.3l.3-.1.3-.1h.9z"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st4",
      d: "M92 34.7l.4.1h.9l.3.1.3.1.3.1.3.1.2.1.3.1.2.1.2.2.3.1.2.2.2.1.1.2.2.2.2.2.1.2.2.3.1.2.1.2.1.3.1.2.1.3.1.3v.3l.1.2v1.6l-.1.4v.3l-.1.4-.1.3-.1.3-.1.3-.1.3-.1.3-.1.2-.2.3-.1.2-.2.3-.2.2-.2.2-.2.2-.2.2-.2.1-.2.2-.3.1-.2.1-.3.2-.2.1-.3.1-.2.1h-.3l-.3.1h-.3l-.3.1h-1.8l-.3-.1h-.2l-.3-.1h-.3l-.3-.1-.2-.1-.3-.2-.2-.1-.2-.1-.2-.1-.3-.2-.2-.1-.2-.2-.1-.2-.2-.2-.2-.2-.1-.2-.2-.3-.1-.2-.1-.3-.1-.2-.1-.3-.1-.3v-.3L86 42v-.3l-.1-.3v-.7l.1-.4V40l.1-.3v-.4l.1-.3.1-.3.1-.3.1-.2.1-.3.1-.3.2-.2.2-.3.1-.2.2-.2.2-.2.2-.2.2-.2.2-.2.2-.1.2-.2.3-.1.2-.2.3-.1.3-.1.2-.1h.3l.3-.1.3-.1h.9l.3-.1"
    }), /*#__PURE__*/React.createElement("path", {
      className: "maestro_svg__st1",
      d: "M89.7 40.2l-.1.4v1.1l.1.3.1.2v.3l.1.2.2.1.1.2.1.1.2.1.2.1.2.1h1l.2-.1.2-.1h.2l.2-.2.2-.1.2-.2.1-.2.2-.3.1-.2.1-.3.2-.3V41l.1-.4.1-.4v-.3l.1-.3v-.3L94 39v-.2l-.1-.3-.1-.2v-.2l-.2-.2-.1-.2-.2-.1-.1-.1-.2-.2h-1.3l-.2.1-.3.1-.2.2-.2.1-.2.2-.2.2-.1.3-.1.2-.2.2-.1.3-.1.2v.3l-.1.2z"
    })))));
  };

  var _default = SvgMaestro;
  _exports["default"] = _default;
});