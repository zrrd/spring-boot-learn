"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaEditorItemCommon = void 0;
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var helper_1 = require("../../utils/helper");
var Button_1 = (0, tslib_1.__importDefault)(require("../Button"));
var Checkbox_1 = (0, tslib_1.__importDefault)(require("../Checkbox"));
var icons_1 = require("../icons");
var PickerContainer_1 = (0, tslib_1.__importDefault)(require("../PickerContainer"));
var Select_1 = (0, tslib_1.__importDefault)(require("../Select"));
var SchemaEditorItemCommon = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(SchemaEditorItemCommon, _super);
    function SchemaEditorItemCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SchemaEditorItemCommon.prototype.handleTypeChange = function (type) {
        var _a;
        var _b = this.props, value = _b.value, onChange = _b.onChange, onTypeChange = _b.onTypeChange;
        var newValue = {
            type: type,
            title: value === null || value === void 0 ? void 0 : value.title
        };
        newValue = (_a = onTypeChange === null || onTypeChange === void 0 ? void 0 : onTypeChange(type, newValue, value)) !== null && _a !== void 0 ? _a : newValue;
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    };
    SchemaEditorItemCommon.prototype.handlePropsChange = function (newValue) {
        var _a = this.props, onChange = _a.onChange, value = _a.value;
        onChange === null || onChange === void 0 ? void 0 : onChange((0, tslib_1.__assign)((0, tslib_1.__assign)({}, value), newValue));
    };
    SchemaEditorItemCommon.prototype.renderCommon = function () {
        var _a = this.props, value = _a.value, __ = _a.translate, typeMutable = _a.typeMutable, disabled = _a.disabled, cx = _a.classnames, required = _a.required, onRequiredChange = _a.onRequiredChange, renderExtraProps = _a.renderExtraProps, renderModalProps = _a.renderModalProps, prefix = _a.prefix, affix = _a.affix, types = _a.types;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            prefix,
            react_1.default.createElement(Select_1.default, { options: types, className: cx('SchemaEditor-type'), value: (value === null || value === void 0 ? void 0 : value.$ref) || (value === null || value === void 0 ? void 0 : value.type) || 'string', onChange: this.handleTypeChange, clearable: false, disabled: disabled || typeMutable === false, simpleValue: true }),
            onRequiredChange ? (react_1.default.createElement(Checkbox_1.default, { className: cx('SchemaEditor-required'), label: __('Required'), value: required, onChange: onRequiredChange, disabled: disabled || typeMutable === false })) : null, renderExtraProps === null || renderExtraProps === void 0 ? void 0 :
            renderExtraProps(value, this.handlePropsChange),
            renderModalProps ? (react_1.default.createElement(PickerContainer_1.default, { value: value, bodyRender: renderModalProps, onConfirm: this.handlePropsChange, size: "md", title: __('SubForm.editDetail') }, function (_a) {
                var onClick = _a.onClick;
                return (react_1.default.createElement(Button_1.default, { className: cx('SchemaEditor-btn'), onClick: onClick },
                    react_1.default.createElement(icons_1.Icon, { icon: "setting", className: "icon" })));
            })) : null,
            affix));
    };
    SchemaEditorItemCommon.prototype.render = function () {
        var cx = this.props.classnames;
        return react_1.default.createElement("div", { className: cx('SchemaEditorItem') }, this.renderCommon());
    };
    (0, tslib_1.__decorate)([
        helper_1.autobind,
        (0, tslib_1.__metadata)("design:type", Function),
        (0, tslib_1.__metadata)("design:paramtypes", [Object]),
        (0, tslib_1.__metadata)("design:returntype", void 0)
    ], SchemaEditorItemCommon.prototype, "handleTypeChange", null);
    (0, tslib_1.__decorate)([
        helper_1.autobind,
        (0, tslib_1.__metadata)("design:type", Function),
        (0, tslib_1.__metadata)("design:paramtypes", [Object]),
        (0, tslib_1.__metadata)("design:returntype", void 0)
    ], SchemaEditorItemCommon.prototype, "handlePropsChange", null);
    return SchemaEditorItemCommon;
}(react_1.default.Component));
exports.SchemaEditorItemCommon = SchemaEditorItemCommon;
//# sourceMappingURL=./components/schema-editor/Common.js.map
