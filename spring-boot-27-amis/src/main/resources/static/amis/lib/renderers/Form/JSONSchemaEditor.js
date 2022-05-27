"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONSchemaEditorRenderer = void 0;
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var Item_1 = require("./Item");
var index_1 = (0, tslib_1.__importDefault)(require("../../components/schema-editor/index"));
var helper_1 = require("../../utils/helper");
var JSONSchemaEditorControl = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(JSONSchemaEditorControl, _super);
    function JSONSchemaEditorControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // todo 完善这块配置
        _this.settings = {
            common: [
                {
                    type: 'input-text',
                    name: 'title',
                    label: _this.props.translate('JSONSchema.title')
                },
                {
                    type: 'textarea',
                    name: 'description',
                    label: _this.props.translate('JSONSchema.description')
                }
            ]
        };
        return _this;
    }
    JSONSchemaEditorControl.prototype.renderModalProps = function (_a) {
        var value = _a.value, onChange = _a.onChange;
        var _b = this.props, render = _b.render, advancedSettings = _b.advancedSettings;
        return render("modal", {
            type: 'form',
            wrapWithPanel: false,
            body: (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], (this.settings[value === null || value === void 0 ? void 0 : value.type] || this.settings.common), true), ((advancedSettings === null || advancedSettings === void 0 ? void 0 : advancedSettings[value === null || value === void 0 ? void 0 : value.type]) || []), true)
        }, {
            data: value,
            onChange: function (value) { return onChange(value); }
        });
    };
    JSONSchemaEditorControl.prototype.render = function () {
        var _a = this.props, enableAdvancedSetting = _a.enableAdvancedSetting, rest = (0, tslib_1.__rest)(_a, ["enableAdvancedSetting"]);
        return (react_1.default.createElement(index_1.default, (0, tslib_1.__assign)({}, rest, { renderModalProps: enableAdvancedSetting ? this.renderModalProps : undefined })));
    };
    JSONSchemaEditorControl.defaultProps = {
        enableAdvancedSetting: false
    };
    (0, tslib_1.__decorate)([
        helper_1.autobind,
        (0, tslib_1.__metadata)("design:type", Function),
        (0, tslib_1.__metadata)("design:paramtypes", [Object]),
        (0, tslib_1.__metadata)("design:returntype", void 0)
    ], JSONSchemaEditorControl.prototype, "renderModalProps", null);
    return JSONSchemaEditorControl;
}(react_1.default.PureComponent));
exports.default = JSONSchemaEditorControl;
var JSONSchemaEditorRenderer = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(JSONSchemaEditorRenderer, _super);
    function JSONSchemaEditorRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONSchemaEditorRenderer = (0, tslib_1.__decorate)([
        (0, Item_1.FormItem)({
            type: 'json-schema-editor'
        })
    ], JSONSchemaEditorRenderer);
    return JSONSchemaEditorRenderer;
}(JSONSchemaEditorControl));
exports.JSONSchemaEditorRenderer = JSONSchemaEditorRenderer;
//# sourceMappingURL=./renderers/Form/JSONSchemaEditor.js.map
