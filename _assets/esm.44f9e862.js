import { R as React, L as Link } from './index.bd465366.js';

var s = {"topBar":"topBar_2cc3af24","logo":"logo_2cc3af24","navs":"navs_2cc3af24","navsList":"navsList_2cc3af24","navsListItem":"navsListItem_2cc3af24"};

const TopBar = ({ topNavs, logo }) => {
    return (React.createElement("div", { className: s.topBar },
        React.createElement("div", { className: s.logo }, logo),
        React.createElement("div", { className: s.navs },
            React.createElement("ul", { className: s.navsList }, topNavs?.map((item, index) => {
                let content;
                if ('href' in item) {
                    content = (React.createElement("a", { href: item.href, target: "_blank", className: s.navsListItem }, item.text));
                }
                else {
                    content = (React.createElement(Link, { to: item.path, className: s.navsListItem }, item.text));
                }
                return React.createElement("li", { key: index }, content);
            })))));
};

var s$1 = {"sideMenu":"sideMenu_35ebcd6a"};

const SideMenu = ({ data }) => {
    return (React.createElement("ul", { className: s$1.sideMenu }, data.map((item, index) => {
        return (React.createElement("li", { key: index },
            React.createElement(Link, { to: item.path }, item.text)));
    })));
};

var s$2 = {"layout":"layout_eef6d5a0","body":"body_eef6d5a0","content":"content_eef6d5a0"};

;

;

const Layout = ({ Content, sideMenuData, topNavs, logo, applyMdStyle, path, }) => {
    return (React.createElement("div", { className: s$2.layout },
        React.createElement(TopBar, { topNavs: topNavs, logo: logo }),
        React.createElement("div", { className: s$2.body },
            React.createElement(SideMenu, { data: sideMenuData }),
            React.createElement("div", { className: s$2.content + (applyMdStyle ? ` markdown-body` : ''), key: path },
                React.createElement(Content, null)))));
};

const createRender = ({ topNavs, logo, sideMenuData, } = {}) => {
    return (pageData, pages) => {
        return (React.createElement(Layout, { Content: pageData.default, sideMenuData: sideMenuData ?? defaultMenu(pages), topNavs: topNavs ?? [], logo: logo, applyMdStyle: pageData.sourceType === 'md', path: pageData.path }));
    };
};
function defaultMenu(pages) {
    return Object.entries(pages)
        .sort((a, b) => {
        const [pathA, { staticData: staticDataA }] = a;
        const [pathB, { staticData: staticDataB }] = b;
        let ASort;
        let BSort;
        if (staticDataA.sort)
            ASort = Number(staticDataA.sort);
        else
            ASort = 1;
        if (staticDataB.sort)
            BSort = Number(staticDataB.sort);
        else
            BSort = 1;
        if (ASort !== BSort)
            return ASort - BSort;
        return pathA.localeCompare(pathB);
    })
        .map(([path, { staticData }]) => {
        return {
            path,
            text: path,
        };
    });
}

var _render = createRender({
  topNavs: [{
    text: "Github ⭐",
    href: "https://github.com/csr632/vite-plugin-react-pages"
  }],
  logo: "Vite Pages"
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = React.createContext({});
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = React.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return React.createElement(React.Fragment, {}, children);
  }
};
var MDXCreateElement = React.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return React.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return React.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return React.createElement.apply(null, createElementArgArray);
  }

  return React.createElement.apply(null, args);
}

export { _render as _, createElement as c };
