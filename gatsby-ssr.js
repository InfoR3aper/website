// copied from the gatsby-ssr.js for the plugin gatsby-remark-autolink-headers
// gatsby wasn't running it from the plugin, presumably because it's implemented
// under gatsby-plugin-mdx

"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var pluginDefaults = {
  className: "anchor",
  icon: true,
  offsetY: 0
};

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  var _Object$assign = Object.assign(pluginDefaults, pluginOptions),
      className = _Object$assign.className,
      icon = _Object$assign.icon,
      offsetY = _Object$assign.offsetY;

  var styles = "\n    ." + className + ".before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      transform: translateX(-100%);\n      padding-right: 4px;\n    }\n    ." + className + ".after {\n      display: inline-block;\n      padding-left: 4px;\n    }\n    h1 ." + className + " svg,\n    h2 ." + className + " svg,\n    h3 ." + className + " svg,\n    h4 ." + className + " svg,\n    h5 ." + className + " svg,\n    h6 ." + className + " svg {\n      visibility: hidden;\n    }\n    h1:hover ." + className + " svg,\n    h2:hover ." + className + " svg,\n    h3:hover ." + className + " svg,\n    h4:hover ." + className + " svg,\n    h5:hover ." + className + " svg,\n    h6:hover ." + className + " svg,\n    h1 ." + className + ":focus svg,\n    h2 ." + className + ":focus svg,\n    h3 ." + className + ":focus svg,\n    h4 ." + className + ":focus svg,\n    h5 ." + className + ":focus svg,\n    h6 ." + className + ":focus svg {\n      visibility: visible;\n    }\n  ";
  var script = "\n    document.addEventListener(\"DOMContentLoaded\", function(event) {\n      var hash = window.decodeURI(location.hash.replace('#', ''))\n      if (hash !== '') {\n        var element = document.getElementById(hash)\n        if (element) {\n          var offset = element.offsetTop\n          // Wait for the browser to finish rendering before scrolling.\n          setTimeout((function() {\n            window.scrollTo(0, offset - " + offsetY + ")\n          }), 0)\n        }\n      }\n    })\n  ";
  var style = icon ? _react["default"].createElement("style", {
    key: "gatsby-remark-autolink-headers-style",
    type: "text/css"
  }, styles) : undefined;
  return setHeadComponents([style, _react["default"].createElement("script", {
    key: "gatsby-remark-autolink-headers-script",
    dangerouslySetInnerHTML: {
      __html: script
    }
  })]);
};
