var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
System.register("greeting", ["react"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Greeting(props) {
        return React.createElement("h1", null,
            "Hello ",
            name);
    }
    exports_1("default", Greeting);
    var React;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("app", ["react", "react-dom", "greeting"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var React, greeting_1, App;
    return {
        setters: [
            function (React_2) {
                React = React_2;
            },
            function (_1) {
            },
            function (greeting_1_1) {
                greeting_1 = greeting_1_1;
            }
        ],
        execute: function () {
            App = /** @class */ (function (_super) {
                __extends(App, _super);
                function App() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.state = { names: [], name: "" };
                    return _this;
                }
                App.prototype.render = function () {
                    var _this = this;
                    return (React.createElement("form", { onSubmit: function (ev) { return _this.greet(ev); }, autoComplete: "off" },
                        this.state.names.map(function (name, i) { return React.createElement(greeting_1.default, { key: i, name: name }); }),
                        React.createElement("input", { onChange: function (ev) { return _this.handleChange(ev); }, value: this.state.name, type: "text", name: "name", placeholder: "Name..." }),
                        React.createElement("button", { type: "submit" }, "Greet!"),
                        React.createElement("button", { type: "button", onClick: function () { return _this.clear(); } }, "Clear")));
                };
                App.prototype.handleChange = function (ev) {
                    this.setState(__assign({}, this.state, { name: ev.target.value }));
                };
                App.prototype.greet = function (ev) {
                    ev.preventDefault();
                    var _a = this.state, names = _a.names, name = _a.name;
                    this.setState({
                        names: names.concat([name]),
                        name: ""
                    });
                };
                App.prototype.clear = function () {
                    this.setState({ names: [], name: "" });
                };
                return App;
            }(React.Component));
            exports_2("default", App);
        }
    };
});
System.register("index", ["react", "react-dom", "app"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var React, ReactDOM, app_1, element;
    return {
        setters: [
            function (React_3) {
                React = React_3;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }
        ],
        execute: function () {
            element = React.createElement(app_1.default, null);
            ReactDOM.render(element, document.getElementById('root'));
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dyZWV0aW5nLnRzeCIsIi4uL3NyYy9hcHAudHN4IiwiLi4vc3JjL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxrQkFBaUMsS0FBcUI7UUFDcEQsTUFBTSxDQUFDOztZQUFXLElBQUksQ0FBTSxDQUFBO0lBQzlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDS0Q7Z0JBQWlDLHVCQUE2QjtnQkFBOUQ7b0JBQUEscUVBc0NDO29CQXBDQyxXQUFLLEdBQUcsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQzs7Z0JBb0NoQyxDQUFDO2dCQWxDQyxvQkFBTSxHQUFOO29CQUFBLGlCQWdCQztvQkFmQyxNQUFNLENBQUMsQ0FDTCw4QkFBTSxRQUFRLEVBQUUsVUFBQyxFQUFFLElBQUssT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFkLENBQWMsRUFBRSxZQUFZLEVBQUMsS0FBSzt3QkFFdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSyxPQUFBLG9CQUFDLGtCQUFRLElBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFJLEVBQWhDLENBQWdDLENBQUM7d0JBRXJFLCtCQUNFLFFBQVEsRUFBRSxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQXJCLENBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUM3RCxJQUFJLEVBQUMsTUFBTSxFQUNYLElBQUksRUFBQyxNQUFNLEVBQ1gsV0FBVyxFQUFDLFNBQVMsR0FDbkI7d0JBQ0osZ0NBQVEsSUFBSSxFQUFDLFFBQVEsYUFBZ0I7d0JBQ3JDLGdDQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxZQUFnQixDQUM1RCxDQUNSLENBQUE7Z0JBQ0gsQ0FBQztnQkFFRCwwQkFBWSxHQUFaLFVBQWEsRUFBdUM7b0JBQ2xELElBQUksQ0FBQyxRQUFRLGNBQU0sSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUcsQ0FBQztnQkFDMUQsQ0FBQztnQkFFRCxtQkFBSyxHQUFMLFVBQU0sRUFBb0M7b0JBQ3hDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDZCxJQUFBLGVBQTBCLEVBQXpCLGdCQUFLLEVBQUUsY0FBSSxDQUFlO29CQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNaLEtBQUssRUFBTSxLQUFLLFNBQUUsSUFBSSxFQUFDO3dCQUN2QixJQUFJLEVBQUUsRUFBRTtxQkFDVCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxtQkFBSyxHQUFMO29CQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFBO2dCQUN0QyxDQUFDO2dCQUNILFVBQUM7WUFBRCxDQUFDLEFBdENELENBQWlDLEtBQUssQ0FBQyxTQUFTLEdBc0MvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQzFDSyxPQUFPLEdBQUcsb0JBQUMsYUFBRyxPQUFHLENBQUM7WUFFeEIsUUFBUSxDQUFDLE1BQU0sQ0FDYixPQUFPLEVBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyZWV0aW5nKHByb3BzOiB7bmFtZTogc3RyaW5nfSkge1xyXG4gIHJldHVybiA8aDE+SGVsbG8ge25hbWV9PC9oMT5cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgR3JlZXRpbmcgZnJvbSAnLi9ncmVldGluZyc7XHJcblxyXG5pbnRlcmZhY2UgQXBwU3RhdGUge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIG5hbWVzOiBzdHJpbmdbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIEFwcFN0YXRlPiB7XHJcblxyXG4gIHN0YXRlID0ge25hbWVzOiBbXSwgbmFtZTogXCJcIn07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZXYpID0+IHRoaXMuZ3JlZXQoZXYpfSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLm5hbWVzLm1hcCgobmFtZSwgaSkgPT4gPEdyZWV0aW5nIGtleT17aX0gbmFtZT17bmFtZX0gLz4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIG9uQ2hhbmdlPXtldiA9PiB0aGlzLmhhbmRsZUNoYW5nZShldil9IHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCIgXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUuLi5cIiBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+R3JlZXQhPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5jbGVhcigpfT5DbGVhcjwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoZXY6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgbmFtZTogZXYudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgZ3JlZXQoZXY6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qge25hbWVzLCBuYW1lfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgIG5hbWVzOiBbLi4ubmFtZXMsIG5hbWVdLCBcclxuICAgICAgbmFtZTogXCJcIlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe25hbWVzOiBbXSwgbmFtZTogXCJcIn0pXHJcbiAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcclxuXHJcbmNvbnN0IGVsZW1lbnQgPSA8QXBwIC8+O1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIGVsZW1lbnQsXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pOyJdfQ==