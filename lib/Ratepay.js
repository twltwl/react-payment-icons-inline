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
    global.Ratepay = mod.exports;
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

  var SvgRatepay = function SvgRatepay(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 60 40",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), /*#__PURE__*/React.createElement("g", {
      fillRule: "nonzero",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#2A3954",
      d: "M-1 0h61.538v40H-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.46 25.45a2.29 2.29 0 01-1.229-1.982c-.037-.77-.004-1.544-.002-2.316l3.273-3.216a794.541 794.541 0 003.066-3.044c.8-.047 1.602-.029 2.399.054a2.217 2.217 0 011.357.88c.1.129.12.215-.012.35a998.963 998.963 0 00-4.473 4.602.274.274 0 01-.384.055c-.748-.391-1.5-.775-2.251-1.159-.39-.2-.463-.154-.465.278-.003.572-.004 1.144-.015 1.715a.459.459 0 00.279.473c.376.19.738.407 1.106.612l-2.648 2.699",
      fill: "#F7B532"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5.46 25.45c.884-.898 1.767-1.798 2.65-2.698.485.256.974.504 1.454.772a.418.418 0 00.587-.098c1.46-1.51 2.931-3.008 4.398-4.51.066-.068.122-.148.193-.236.057.102.077.22.056.336.003 1.415-.018 2.83.007 4.244a2.423 2.423 0 01-2.42 2.49c-1.944-.042-3.89-.012-5.836-.01a1.948 1.948 0 01-1.088-.29M18.344 18.493c0 .431.002.862 0 1.294-.001.123.008.214.168.21.498.016.996-.002 1.491-.057a1.383 1.383 0 001.244-1.429 1.405 1.405 0 00-1.129-1.557 3.452 3.452 0 00-1.596.05c-.136.031-.184.109-.18.255.009.412.002.823.002 1.234m2.417 2.1c.547.415.953.99 1.163 1.645.355.81.717 1.617 1.095 2.467-.468 0-.902-.002-1.336 0-.154.002-.155-.134-.195-.226-.348-.792-.688-1.59-1.035-2.383A1.598 1.598 0 0018.485 21c-.198.03-.137.164-.138.267-.004 1.044-.011 2.087.004 3.13.003.249-.053.339-.304.315a4.174 4.174 0 00-.761 0c-.224.02-.272-.057-.271-.28.009-1.936.005-3.874.005-5.81 0-.703.003-1.406-.002-2.108-.001-.14.008-.242.166-.295a5.687 5.687 0 013.846-.135 2.428 2.428 0 011.325 3.33 2.187 2.187 0 01-1.594 1.18M47.833 17.136c-.346 1.5-.892 2.838-1.28 4.244.799 0 1.56-.007 2.323.005.222.004.237-.062.173-.258-.269-.804-.52-1.613-.782-2.419a15.115 15.115 0 01-.434-1.572m3.692 7.569c-.408 0-.817-.009-1.226.004-.169.006-.186-.109-.22-.219-.201-.616-.406-1.23-.595-1.85a.283.283 0 00-.328-.24c-.89.012-1.779.012-2.668 0-.182-.001-.25.062-.302.234-.19.62-.408 1.23-.597 1.85a.26.26 0 01-.31.225 10.18 10.18 0 00-.937 0c-.2.009-.227-.045-.162-.235.399-1.16.785-2.325 1.177-3.488.533-1.59 1.073-3.176 1.597-4.768.069-.208.16-.276.368-.266.371.019.743.008 1.115.003.109-.02.214.05.236.16.95 2.838 1.902 5.675 2.859 8.511a.27.27 0 01-.007.079M40.866 18.589v1.325c.002.092-.033.202.122.22.658.126 1.338.05 1.952-.216a1.48 1.48 0 00.796-1.57 1.41 1.41 0 00-.966-1.334 2.988 2.988 0 00-1.735-.01c-.136.036-.175.118-.172.26.009.442.003.883.003 1.325m-1.312 1.89v-3.946c0-.14-.02-.269.162-.332a5.397 5.397 0 013.787-.096 2.436 2.436 0 011.57 2.413 2.486 2.486 0 01-1.518 2.392 4.447 4.447 0 01-2.326.314c-.362-.041-.363-.038-.363.337 0 .944-.013 1.888.008 2.831.006.28-.08.34-.326.318a3.865 3.865 0 00-.733 0c-.235.024-.267-.073-.265-.286.009-1.315.004-2.63.004-3.946M27.204 22.515v-1.021c-.002-.087.017-.184-.126-.177a4.852 4.852 0 00-1.915.351 1.063 1.063 0 00-.624 1.148c.027.43.33.795.748.9.576.16 1.185.162 1.762.003.132-.03.16-.116.157-.242-.006-.32-.002-.64-.002-.962m1.297-.444c0 .694-.005 1.387.003 2.08a.275.275 0 01-.2.312 5.699 5.699 0 01-3.628.175 1.923 1.923 0 01-1.375-2.401 1.885 1.885 0 011.228-1.385 7.322 7.322 0 012.407-.467c.216-.017.276-.067.274-.292-.008-.84-.352-1.234-1.175-1.286a4.052 4.052 0 00-1.806.32c-.222.09-.294.034-.338-.172a1.515 1.515 0 00-.069-.197c-.19-.525-.192-.529.348-.695a5.453 5.453 0 012.373-.247 1.999 1.999 0 011.956 2.267c.008.664.002 1.326.002 1.988M35.977 18.8a1.844 1.844 0 00-1.708 2.045c.013.138.074.138.17.124.949-.137 1.897-.272 2.845-.406.097-.014.154-.033.16-.159a1.47 1.47 0 00-1.467-1.604m.418 6.036a3.106 3.106 0 01-2.51-.924 3.2 3.2 0 01-.808-1.832 4.336 4.336 0 01.62-3.16 2.86 2.86 0 014.472-.149c.46.702.663 1.54.574 2.374-.005.16-.115.163-.221.178-1.287.184-2.573.374-3.861.544-.251.033-.33.096-.265.367.16.85.892 1.473 1.756 1.494a3.668 3.668 0 001.805-.31c.23-.103.276-.02.333.162.043.165.104.324.183.475.161.274.044.392-.206.46-.292.079-.582.173-.878.233-.326.07-.66.1-.994.088",
      fill: "#FFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.569 14.892l-3.067 3.045a940.788 940.788 0 01-3.272 3.215c-.002-1.333-.02-2.666-.002-3.998A2.356 2.356 0 016.41 14.89c1.386-.028 2.772-.001 4.159.001",
      fill: "#D9C8A2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50.007 15.957c.459 0 .879.01 1.298-.005.176-.006.207.117.26.23l1.597 3.378c.037.079.08.154.147.28l.867-1.83c.293-.622.587-1.244.874-1.868.055-.119.109-.193.256-.19.41.012.82.005 1.253.005a1.886 1.886 0 01-.232.547c-.755 1.526-1.514 3.051-2.277 4.574a.809.809 0 00-.07.378c0 .994-.005 1.988.004 2.982.001.2-.036.288-.253.272a6.417 6.417 0 00-.85 0c-.205.013-.264-.052-.262-.264.011-.974.003-1.948.007-2.922a1.143 1.143 0 00-.13-.543c-.804-1.603-1.598-3.21-2.395-4.816-.026-.053-.048-.107-.094-.208M31.287 15.965c0 .555.014 1.106-.006 1.657-.01.248.075.302.294.288.272-.019.547.004.82-.008.174-.008.235.038.238.23.013.84.02.84-.786.84-.56 0-.56 0-.56.574v3.04c0 .75.386 1.102 1.098.956.24-.048.26.024.246.222-.02.18-.019.361.002.54.046.302-.085.413-.354.45a2.85 2.85 0 01-1.049-.013 1.674 1.674 0 01-1.265-1.845c-.007-1.204-.008-2.408.004-3.611.002-.24-.04-.329-.298-.321-.606.02-.606.005-.606-.62.004-.07.004-.14-.001-.21-.028-.192.058-.237.233-.234.212.005.49.1.62-.04.139-.151.033-.44.046-.666.017-.279-.11-.63.048-.816.155-.183.492-.206.753-.285.165-.076.343-.119.523-.128",
      fill: "#FFF"
    }))));
  };

  var _default = SvgRatepay;
  _exports["default"] = _default;
});