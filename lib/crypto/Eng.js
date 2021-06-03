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
    global.Eng = mod.exports;
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

  var SvgEng = function SvgEng(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: props.className,
      style: props.style
    }, /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
      id: "eng_svg__a",
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
      id: "eng_svg__d",
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
      id: "eng_svg__c",
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
      id: "eng_svg__b",
      cx: 16,
      cy: 15,
      r: 15
    }), /*#__PURE__*/React.createElement("path", {
      id: "eng_svg__e",
      d: "M25.149 9.295c.114.06.375.202.35.511l-.016 10.417a.477.477 0 01-.283.472l-2.3 1.343-1.82 1.062-4.844 2.828a.35.35 0 01-.214.072.521.521 0 01-.273-.088l-3.342-1.928c-1.856-1.071-3.776-2.179-5.668-3.267-.159-.077-.252-.256-.238-.46l.007-2.752c.006-2.476.01-4.991.012-7.423v-.01a.396.396 0 00.001-.05v-.031c-.004-.135-.01-.412.25-.537 1.06-.633 2.144-1.276 3.193-1.898l1.737-1.03c1.322-.783 2.668-1.582 3.97-2.355l.01-.006a1.83 1.83 0 01.266-.125L16.05 4l.096.057c.946.548 1.908 1.108 2.837 1.65l1.736 1.01 1.695.986 2.667 1.552h.002l.002.002.064.038zm-8.769 15.67l2.962-1.73a8357.882 8357.882 0 005.387-3.143l.01-5.849.005-3.865-3.85 2.252v1.776a288.84 288.84 0 00.006 3.325v.076l-.045.062a.572.572 0 01-.184.16l-.026.016h-.001l-1.244.725c-.45.26-.915.53-1.37.797l-1.644.955-.006 4.443zM12.184 12.41a1302.649 1302.649 0 002.524 1.447l1.304.749 3.777-2.208-3.783-2.232-3.822 2.244zm-.39.65l.071 4.389 3.768 2.195.006-4.379-3.845-2.204zm-4.52-2.594l-.019 9.675 8.374 4.83.003-4.451-1.64-.955-1.028-.599c-.527-.306-1.072-.623-1.607-.936-.155-.073-.252-.251-.241-.446l-.081-4.959-3.762-2.159zm17.094-.746l-1.469-.856-1.622-.945c-1.544-.896-3.375-1.96-5.264-3.066a3322.48 3322.48 0 00-5.736 3.397L7.651 9.806l3.778 2.165 4.334-2.545a.448.448 0 01.5.01l4.276 2.521 3.829-2.238zm-7.982 9.927a1941.6 1941.6 0 013.792-2.204V13.05l-3.789 2.214-.003 4.382zm5.127-.793a.393.393 0 01-.116.017.394.394 0 01-.286-.117.467.467 0 01-.145-.44.449.449 0 01.436-.377c.123 0 .243.056.33.153l.001.002a.47.47 0 01.078.504.427.427 0 01-.298.258zm2.064 1.408a.45.45 0 01-.172-.388c.008-.159.09-.3.222-.38a.406.406 0 01.22-.066c.086 0 .17.027.244.077a.46.46 0 01.202.457.455.455 0 01-.449.401.407.407 0 01-.267-.101zm-13.189-2.32c.125 0 .244.057.327.156a.46.46 0 01.077.496.442.442 0 01-.416.274.456.456 0 01-.428-.556.458.458 0 01.44-.37zm11.956 1.576a.47.47 0 01-.161-.443.46.46 0 01.438-.39c.11 0 .216.044.3.122.127.118.18.289.138.449a.438.438 0 01-.282.332.432.432 0 01-.433-.07zm-12.905-.723c.133.11.195.285.161.447a.436.436 0 01-.254.334h-.001a.456.456 0 01-.19.044.426.426 0 01-.222-.066.467.467 0 01-.217-.446.448.448 0 01.289-.391.394.394 0 01.155-.032c.1 0 .197.038.279.11zm6.51-13.628c.13 0 .253.056.34.154.107.113.147.27.107.42a.438.438 0 01-.366.338h-.005a.461.461 0 01-.476-.202.45.45 0 01-.027-.442l.001-.002a.456.456 0 01.352-.259.424.424 0 01.075-.007zM8.15 19.49c.145.082.233.23.232.39a.454.454 0 01-.211.408.453.453 0 01-.244.074.399.399 0 01-.204-.054.458.458 0 01-.236-.408c0-.173.089-.33.231-.41a.418.418 0 01.432 0zm8.04-11.285a.458.458 0 01.215.42.443.443 0 01-.272.379.488.488 0 01-.2.044.451.451 0 01-.283-.096.444.444 0 01-.178-.399.44.44 0 01.233-.364.45.45 0 01.226-.06.48.48 0 01.26.076zm-.57-.758a.442.442 0 01-.148-.374V7.07a.462.462 0 01.219-.352.436.436 0 01.244-.073c.08 0 .16.021.233.06l.001.001a.449.449 0 01.236.409.449.449 0 01-.275.41.489.489 0 01-.2.044.442.442 0 01-.31-.122z"
    })), /*#__PURE__*/React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#eng_svg__a)",
      xlinkHref: "#eng_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#2F2F2F",
      xlinkHref: "#eng_svg__b"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "url(#eng_svg__c)",
      style: {
        mixBlendMode: "soft-light"
      },
      xlinkHref: "#eng_svg__b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: 16,
      cy: 15,
      r: 14.5,
      stroke: "#000",
      strokeOpacity: 0.097
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#000",
      filter: "url(#eng_svg__d)",
      xlinkHref: "#eng_svg__e"
    }), /*#__PURE__*/React.createElement("use", {
      fill: "#FFF",
      xlinkHref: "#eng_svg__e"
    }))));
  };

  var _default = SvgEng;
  _exports["default"] = _default;
});