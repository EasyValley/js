
1. 函数组件编译后：

```jsx
function LoadingIndicator(props: { name: string }) {
  const { name } = props;
  return (
    <div>
      {name}
      加载中...
    </div>
  );
}
```
```js
function LoadingIndicator(props) {
    var name = props.name;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        name,
        "\u52A0\u8F7D\u4E2D..."));
}
```

2. class 组件编译后:

```js
var MyRoute = (function (_super) {
    __extends(MyRoute, _super);
    function MyRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyRoute.prototype.componentDidMount = function () { };
    MyRoute.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, _routes__WEBPACK_IMPORTED_MODULE_1__.default.map(function (route) {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: route.path },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: route.path }, route.title)));
            })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, _routes__WEBPACK_IMPORTED_MODULE_1__.default.map(function (item) {
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, { exact: item.path === '/', path: item.path, key: item.path },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(item.component, null)));
                })))));
    };
    return MyRoute;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ __webpack_exports__["default"] = (MyRoute);
```

3. PureComponent 比 Component  多了一个 pureComponentPrototype.isPureReactComponent = true;（prototype 上）。
react-dom上关键代码:
``` js
  if (ctor.prototype && ctor.prototype.isPureReactComponent) {
    return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
  }
```
react-dom上完整代码:
``` js
function checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) {
  var instance = workInProgress.stateNode;

  if (typeof instance.shouldComponentUpdate === 'function') {
    {
      if ( workInProgress.mode & StrictMode) {
        // Invoke the function an extra time to help detect side-effects.
        instance.shouldComponentUpdate(newProps, newState, nextContext);
      }
    }

    startPhaseTimer(workInProgress, 'shouldComponentUpdate');
    var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
    stopPhaseTimer();

    {
      if (shouldUpdate === undefined) {
        error('%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName(ctor) || 'Component');
      }
    }

    return shouldUpdate;
  }

  if (ctor.prototype && ctor.prototype.isPureReactComponent) {
    return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
  }

  return true;
}
``` 
