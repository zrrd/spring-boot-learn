"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthRangeControlRenderer = void 0;
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var Item_1 = require("./Item");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var tpl_builtin_1 = require("../../utils/tpl-builtin");
var InputDateRange_1 = (0, tslib_1.__importDefault)(require("./InputDateRange"));
var DateRangePicker_1 = (0, tslib_1.__importDefault)(require("../../components/DateRangePicker"));
var MonthRangeControl = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(MonthRangeControl, _super);
    function MonthRangeControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonthRangeControl.prototype.render = function () {
        var _a = this.props, className = _a.className, ns = _a.classPrefix, minDate = _a.minDate, maxDate = _a.maxDate, minDuration = _a.minDuration, maxDuration = _a.maxDuration, data = _a.data, format = _a.format, env = _a.env, rest = (0, tslib_1.__rest)(_a, ["className", "classPrefix", "minDate", "maxDate", "minDuration", "maxDuration", "data", "format", "env"]);
        return (react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(ns, "DateRangeControl"), className) },
            react_1.default.createElement(DateRangePicker_1.default, (0, tslib_1.__assign)({ viewMode: "months", format: format, classPrefix: ns, data: data }, rest, { minDate: minDate ? (0, tpl_builtin_1.filterDate)(minDate, data, format) : undefined, maxDate: maxDate ? (0, tpl_builtin_1.filterDate)(maxDate, data, format) : undefined, minDuration: minDuration ? (0, tpl_builtin_1.parseDuration)(minDuration) : undefined, maxDuration: maxDuration ? (0, tpl_builtin_1.parseDuration)(maxDuration) : undefined, onChange: this.handleChange, onFocus: this.dispatchEvent, onBlur: this.dispatchEvent }))));
    };
    return MonthRangeControl;
}(InputDateRange_1.default));
exports.default = MonthRangeControl;
var MonthRangeControlRenderer = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(MonthRangeControlRenderer, _super);
    function MonthRangeControlRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonthRangeControlRenderer.defaultProps = {
        format: 'X',
        inputFormat: 'YYYY-MM',
        joinValues: true,
        delimiter: ',',
        timeFormat: '',
        ranges: 'thismonth,prevmonth'
    };
    MonthRangeControlRenderer = (0, tslib_1.__decorate)([
        (0, Item_1.FormItem)({
            type: 'input-month-range'
        })
    ], MonthRangeControlRenderer);
    return MonthRangeControlRenderer;
}(MonthRangeControl));
exports.MonthRangeControlRenderer = MonthRangeControlRenderer;
//# sourceMappingURL=./renderers/Form/InputMonthRange.js.map
