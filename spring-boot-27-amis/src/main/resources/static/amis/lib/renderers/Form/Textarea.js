"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaControlRenderer = void 0;
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var Item_1 = require("./Item");
var Textarea_1 = (0, tslib_1.__importDefault)(require("../../components/Textarea"));
var icons_1 = require("../../components/icons");
var react_dom_1 = require("react-dom");
var helper_1 = require("../../utils/helper");
var Decorators_1 = require("../../actions/Decorators");
var TextAreaControl = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(TextAreaControl, _super);
    function TextAreaControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            focused: false
        };
        _this.inputRef = function (ref) { return (_this.input = (0, react_dom_1.findDOMNode)(ref)); };
        return _this;
    }
    TextAreaControl.prototype.doAction = function (action, args) {
        var actionType = action === null || action === void 0 ? void 0 : action.actionType;
        if (!!~['clear', 'reset'].indexOf(actionType)) {
            this.handleClear();
        }
        else if (actionType === 'focus') {
            this.focus();
        }
    };
    TextAreaControl.prototype.valueToString = function (value) {
        return typeof value === 'undefined' || value === null
            ? ''
            : typeof value === 'string'
                ? value
                : JSON.stringify(value);
    };
    TextAreaControl.prototype.focus = function () {
        var _this = this;
        if (!this.input) {
            return;
        }
        this.setState({
            focused: true
        }, function () {
            if (!_this.input) {
                return;
            }
            _this.input.focus();
            // 光标放到最后
            var len = _this.input.value.length;
            len && _this.input.setSelectionRange(len, len);
        });
    };
    TextAreaControl.prototype.handleChange = function (e) {
        var onChange = this.props.onChange;
        var value = e.currentTarget.value;
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    TextAreaControl.prototype.handleFocus = function (e) {
        var onFocus = this.props.onFocus;
        this.setState({
            focused: true
        }, function () {
            onFocus && onFocus(e);
        });
    };
    TextAreaControl.prototype.handleBlur = function (e) {
        var _a = this.props, onBlur = _a.onBlur, trimContents = _a.trimContents, value = _a.value, onChange = _a.onChange;
        this.setState({
            focused: false
        }, function () {
            if (trimContents && value && typeof value === 'string') {
                onChange(value.trim());
            }
            onBlur && onBlur(e);
        });
    };
    TextAreaControl.prototype.handleClear = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, onChange, resetValue;
            return (0, tslib_1.__generator)(this, function (_b) {
                _a = this.props, onChange = _a.onChange, resetValue = _a.resetValue;
                onChange === null || onChange === void 0 ? void 0 : onChange(resetValue);
                this.focus();
                return [2 /*return*/];
            });
        });
    };
    TextAreaControl.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, ns = _b.classPrefix, value = _b.value, type = _b.type, placeholder = _b.placeholder, disabled = _b.disabled, minRows = _b.minRows, maxRows = _b.maxRows, readOnly = _b.readOnly, name = _b.name, borderMode = _b.borderMode, cx = _b.classnames, maxLength = _b.maxLength, showCounter = _b.showCounter, clearable = _b.clearable;
        var counter = showCounter ? this.valueToString(value).length : 0;
        return (react_1.default.createElement("div", { className: cx("TextareaControl", (_a = {},
                _a["TextareaControl--border".concat((0, helper_1.ucFirst)(borderMode))] = borderMode,
                _a['is-focused'] = this.state.focused,
                _a['is-disabled'] = disabled,
                _a), className) },
            react_1.default.createElement(Textarea_1.default, { className: cx("TextareaControl-input"), autoComplete: "off", ref: this.inputRef, name: name, disabled: disabled, value: this.valueToString(value), placeholder: placeholder, autoCorrect: "off", spellCheck: "false", readOnly: readOnly, minRows: minRows || undefined, maxRows: maxRows || undefined, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur }),
            clearable && !disabled && value ? (react_1.default.createElement("a", { onClick: this.handleClear, className: cx('TextareaControl-clear') },
                react_1.default.createElement(icons_1.Icon, { icon: "input-clear", className: "icon" }))) : null,
            showCounter ? (react_1.default.createElement("span", { className: cx('TextareaControl-counter', {
                    'is-empty': counter === 0,
                    'is-clearable': clearable && !disabled && value
                }) }, "".concat(counter).concat(typeof maxLength === 'number' && maxLength ? "/".concat(maxLength) : ''))) : null));
    };
    var _a, _b, _c;
    TextAreaControl.defaultProps = {
        minRows: 3,
        maxRows: 20,
        trimContents: true,
        resetValue: '',
        clearable: false
    };
    (0, tslib_1.__decorate)([
        helper_1.autobind,
        (0, tslib_1.__metadata)("design:type", Function),
        (0, tslib_1.__metadata)("design:paramtypes", [typeof (_a = typeof react_1.default !== "undefined" && react_1.default.ChangeEvent) === "function" ? _a : Object]),
        (0, tslib_1.__metadata)("design:returntype", void 0)
    ], TextAreaControl.prototype, "handleChange", null);
    (0, tslib_1.__decorate)([
        helper_1.autobind,
        (0, Decorators_1.bindRendererEvent)('focus'),
        (0, tslib_1.__metadata)("design:type", Function),
        (0, tslib_1.__metadata)("design:paramtypes", [typeof (_b = typeof react_1.default !== "undefined" && react_1.default.FocusEvent) === "function" ? _b : Object]),
        (0, tslib_1.__metadata)("design:returntype", void 0)
    ], TextAreaControl.prototype, "handleFocus", null);
    (0, tslib_1.__decorate)([
        helper_1.autobind,
        (0, Decorators_1.bindRendererEvent)('blur'),
        (0, tslib_1.__metadata)("design:type", Function),
        (0, tslib_1.__metadata)("design:paramtypes", [typeof (_c = typeof react_1.default !== "undefined" && react_1.default.FocusEvent) === "function" ? _c : Object]),
        (0, tslib_1.__metadata)("design:returntype", void 0)
    ], TextAreaControl.prototype, "handleBlur", null);
    (0, tslib_1.__decorate)([
        helper_1.autobind,
        (0, tslib_1.__metadata)("design:type", Function),
        (0, tslib_1.__metadata)("design:paramtypes", []),
        (0, tslib_1.__metadata)("design:returntype", Promise)
    ], TextAreaControl.prototype, "handleClear", null);
    return TextAreaControl;
}(react_1.default.Component));
exports.default = TextAreaControl;
var TextAreaControlRenderer = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(TextAreaControlRenderer, _super);
    function TextAreaControlRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextAreaControlRenderer = (0, tslib_1.__decorate)([
        (0, Item_1.FormItem)({
            type: 'textarea'
        })
    ], TextAreaControlRenderer);
    return TextAreaControlRenderer;
}(TextAreaControl));
exports.TextAreaControlRenderer = TextAreaControlRenderer;
//# sourceMappingURL=./renderers/Form/Textarea.js.map
