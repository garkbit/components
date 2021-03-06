"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var InputBase_1 = __importDefault(require("../InputBase"));
function RadioCustomControl() {
    return (react_1["default"].createElement("div", { className: "brew-Input__customControl" }));
}
function Radio(_a) {
    var className = _a.className, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, inputLabelClassName = _a.inputLabelClassName, otherProps = __rest(_a, ["className", "disabled", "fullWidth", "inputLabelClassName"]);
    var classes = clsx_1["default"]('brew-Input--radio', className);
    return (react_1["default"].createElement(InputBase_1["default"], __assign({ className: classes, customControl: react_1["default"].createElement(RadioCustomControl, null), disabled: disabled, fullWidth: fullWidth, inputLabelClassName: inputLabelClassName, type: "radio" }, otherProps)));
}
exports["default"] = Radio;
