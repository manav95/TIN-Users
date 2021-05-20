"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
// If you don't want to use TypeScript you can delete this file!
var React = __importStar(require("react"));
var gatsby_1 = require("gatsby");
var layout_1 = __importDefault(require("../components/layout"));
var seo_1 = __importDefault(require("../components/seo"));
var UsingTypescript = function (_a) {
    var data = _a.data, path = _a.path;
    return (<layout_1.default>
    <seo_1.default title="Using TypeScript"/>
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don't support TypeScript yet.
    </p>
    <p>
      For type checking you'll want to install <em>typescript</em> via npm and
      run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
    </p>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <gatsby_1.Link to="/">Go back to the homepage</gatsby_1.Link>
  </layout_1.default>);
};
exports.default = UsingTypescript;
exports.query = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    site {\n      buildTime(formatString: \"YYYY-MM-DD hh:mm a z\")\n    }\n  }\n"], ["\n  {\n    site {\n      buildTime(formatString: \"YYYY-MM-DD hh:mm a z\")\n    }\n  }\n"])));
var templateObject_1;
