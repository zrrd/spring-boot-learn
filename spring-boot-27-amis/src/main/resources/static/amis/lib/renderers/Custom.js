"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRenderer = exports.Custom = void 0;
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var react_dom_1 = (0, tslib_1.__importDefault)(require("react-dom"));
var memoize_1 = (0, tslib_1.__importDefault)(require("lodash/memoize"));
var isString_1 = (0, tslib_1.__importDefault)(require("lodash/isString"));
var helper_1 = require("../utils/helper");
var Item_1 = (0, tslib_1.__importDefault)(require("./Form/Item"));
// 添加resolver，指定所有参数的联合字符串为key。因为最后一个参数为函数体
// 缓存一下，避免在 crud 中的自定义组件被大量执行
var getFunction = (0, memoize_1.default)(function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new (Function.bind.apply(Function, (0, tslib_1.__spreadArray)([void 0], args, false)))();
}, function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return JSON.stringify(args);
});
var Custom = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(Custom, _super);
    function Custom(props) {
        var _this = _super.call(this, props) || this;
        _this.onUpdate = function () { };
        _this.onMount = function () { };
        _this.onUnmount = function () { };
        _this.childElemArr = []; // 用于记录子元素的Dom节点，以便销毁
        _this.dom = react_1.default.createRef();
        if (props.onMount) {
            if (typeof props.onMount === 'string') {
                _this.onMount = getFunction('dom', 'value', 'onChange', 'props', props.onMount);
            }
            else {
                _this.onMount = props.onMount;
            }
        }
        if (props.onUpdate) {
            if (typeof props.onUpdate === 'string') {
                _this.onUpdate = getFunction('dom', 'data', 'prevData', 'props', props.onUpdate);
            }
            else {
                _this.onUpdate = props.onUpdate;
            }
        }
        if (props.onUnmount) {
            if (typeof props.onUnmount === 'string') {
                _this.onUnmount = getFunction('props', props.onUnmount);
            }
            else {
                _this.onUnmount = props.onUnmount;
            }
        }
        _this.renderChild = _this.renderChild.bind(_this);
        _this.recordChildElem = _this.recordChildElem.bind(_this);
        _this.unmountChildElem = _this.unmountChildElem.bind(_this);
        return _this;
    }
    Custom.prototype.componentDidUpdate = function (prevProps) {
        if ((0, helper_1.anyChanged)(['data'], this.props, prevProps)) {
            var data = this.props.data;
            this.onUpdate(this.dom, data, prevProps.data, this.props);
        }
    };
    Custom.prototype.componentDidMount = function () {
        var _a = this.props, value = _a.value, onChange = _a.onChange;
        this.onMount(this.dom.current, value, onChange, this.props);
    };
    Custom.prototype.componentWillUnmount = function () {
        this.onUnmount(this.props);
        // 自动销毁所有子节点
        this.unmountChildElem();
    };
    // 记录子元素的dom节点
    Custom.prototype.recordChildElem = function (insertElem) {
        if (insertElem && !this.childElemArr.some(function (item) { return item === insertElem; })) {
            this.childElemArr.push(insertElem);
        }
    };
    // 销毁所有子元素的dom节点
    Custom.prototype.unmountChildElem = function () {
        if (this.childElemArr && this.childElemArr.length > 0) {
            this.childElemArr.forEach(function (childElemItem) {
                return react_dom_1.default.unmountComponentAtNode(childElemItem);
            });
        }
    };
    /**
     * 渲染子元素
     * 备注：现有custom组件通过props.render生成的子元素是react虚拟dom对象，需要使用ReactDOM.render渲染，不能直接插入到当前dom中。
     **/
    Custom.prototype.renderChild = function (schemaPosition, childSchema, insertElemDom) {
        var _this = this;
        var render = this.props.render;
        var childEleCont = null;
        var curInsertElemDom = null;
        if ((0, isString_1.default)(insertElemDom)) {
            var _curInsertElem = document.getElementById(insertElemDom);
            if (_curInsertElem) {
                curInsertElemDom = _curInsertElem;
            }
        }
        else {
            curInsertElemDom = insertElemDom;
        }
        if (childSchema && curInsertElemDom) {
            var childHTMLElem = render(schemaPosition, childSchema);
            childEleCont = react_dom_1.default.render(childHTMLElem, curInsertElemDom, function () {
                _this.recordChildElem(curInsertElemDom);
            });
        }
        return childEleCont;
    };
    Custom.prototype.render = function () {
        var _a = this.props, className = _a.className, html = _a.html, id = _a.id, wrapperComponent = _a.wrapperComponent, inline = _a.inline, __ = _a.translate, cx = _a.classnames;
        var Component = wrapperComponent || inline ? 'span' : 'div';
        return (react_1.default.createElement(Component, { ref: this.dom, className: cx(className), id: id, dangerouslySetInnerHTML: { __html: html ? html : '' } }));
    };
    Custom.defaultProps = {
        inline: false
    };
    return Custom;
}(react_1.default.Component));
exports.Custom = Custom;
var CustomRenderer = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(CustomRenderer, _super);
    function CustomRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomRenderer = (0, tslib_1.__decorate)([
        (0, Item_1.default)({
            type: 'custom'
        })
    ], CustomRenderer);
    return CustomRenderer;
}(Custom));
exports.CustomRenderer = CustomRenderer;
//# sourceMappingURL=./renderers/Custom.js.map
