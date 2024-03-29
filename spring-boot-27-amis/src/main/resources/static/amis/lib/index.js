"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerLocale = exports.setDefaultLocale = exports.getDefaultLocale = exports.classnames = exports.getClassPrefix = exports.classPrefix = exports.getTheme = exports.theme = exports.setDefaultTheme = exports.validateObject = exports.validate = exports.ScopedContext = exports.Scoped = exports.registerIcon = exports.Icon = exports.setIconVendor = exports.resolveVariableAndFilter = exports.resolveVariable = exports.relativeValueRe = exports.filterDate = exports.filterSchema = exports.resolveRenderer = exports.registerOptionsControl = exports.registerFormItem = exports.getRenderers = exports.unRegisterRenderer = exports.registerRenderer = exports.getRendererByName = exports.normalizeOptions = exports.str2rules = exports.addRule = exports.setCustomEvalExpression = exports.setCustomEvalJs = exports.evalJS = exports.evalExpression = exports.registerTplEnginer = exports.registerFilter = exports.resizeSensor = exports.utils = exports.filter = exports.buildApi = exports.wrapFetcher = exports.OptionsControl = exports.FormItemWrap = exports.FormItem = exports.RegisterStore = exports.Renderer = exports.updateEnv = exports.clearStoresCache = exports.render = void 0;
exports.DataScope = exports.DataSchema = exports.animation = exports.makeTranslator = void 0;
var tslib_1 = require("tslib");
/** @license amis v1.9.1-beta.1
 *
 * Copyright Baidu
 *
 * This source code is licensed under the Apache license found in the
 * LICENSE file in the root directory of this source tree.
 */
var factory_1 = require("./factory");
Object.defineProperty(exports, "render", { enumerable: true, get: function () { return factory_1.render; } });
Object.defineProperty(exports, "Renderer", { enumerable: true, get: function () { return factory_1.Renderer; } });
Object.defineProperty(exports, "getRendererByName", { enumerable: true, get: function () { return factory_1.getRendererByName; } });
Object.defineProperty(exports, "getRenderers", { enumerable: true, get: function () { return factory_1.getRenderers; } });
Object.defineProperty(exports, "registerRenderer", { enumerable: true, get: function () { return factory_1.registerRenderer; } });
Object.defineProperty(exports, "unRegisterRenderer", { enumerable: true, get: function () { return factory_1.unRegisterRenderer; } });
Object.defineProperty(exports, "resolveRenderer", { enumerable: true, get: function () { return factory_1.resolveRenderer; } });
Object.defineProperty(exports, "filterSchema", { enumerable: true, get: function () { return factory_1.filterSchema; } });
Object.defineProperty(exports, "clearStoresCache", { enumerable: true, get: function () { return factory_1.clearStoresCache; } });
Object.defineProperty(exports, "updateEnv", { enumerable: true, get: function () { return factory_1.updateEnv; } });
var api_1 = require("./utils/api");
Object.defineProperty(exports, "wrapFetcher", { enumerable: true, get: function () { return api_1.wrapFetcher; } });
Object.defineProperty(exports, "buildApi", { enumerable: true, get: function () { return api_1.buildApi; } });
var tpl_1 = require("./utils/tpl");
Object.defineProperty(exports, "filter", { enumerable: true, get: function () { return tpl_1.filter; } });
Object.defineProperty(exports, "registerTplEnginer", { enumerable: true, get: function () { return tpl_1.registerTplEnginer; } });
Object.defineProperty(exports, "evalExpression", { enumerable: true, get: function () { return tpl_1.evalExpression; } });
Object.defineProperty(exports, "evalJS", { enumerable: true, get: function () { return tpl_1.evalJS; } });
Object.defineProperty(exports, "setCustomEvalJs", { enumerable: true, get: function () { return tpl_1.setCustomEvalJs; } });
Object.defineProperty(exports, "setCustomEvalExpression", { enumerable: true, get: function () { return tpl_1.setCustomEvalExpression; } });
var utils = tslib_1.__importStar(require("./utils/helper"));
exports.utils = utils;
var resize_sensor_1 = require("./utils/resize-sensor");
Object.defineProperty(exports, "resizeSensor", { enumerable: true, get: function () { return resize_sensor_1.resizeSensor; } });
var IconPickerIcons_1 = require("./renderers/Form/IconPickerIcons");
Object.defineProperty(exports, "setIconVendor", { enumerable: true, get: function () { return IconPickerIcons_1.setIconVendor; } });
var icons_1 = require("./components/icons");
Object.defineProperty(exports, "Icon", { enumerable: true, get: function () { return icons_1.Icon; } });
Object.defineProperty(exports, "registerIcon", { enumerable: true, get: function () { return icons_1.registerIcon; } });
var store_1 = require("./store");
Object.defineProperty(exports, "RegisterStore", { enumerable: true, get: function () { return store_1.RegisterStore; } });
var locale_1 = require("./locale");
Object.defineProperty(exports, "setDefaultLocale", { enumerable: true, get: function () { return locale_1.setDefaultLocale; } });
Object.defineProperty(exports, "getDefaultLocale", { enumerable: true, get: function () { return locale_1.getDefaultLocale; } });
Object.defineProperty(exports, "makeTranslator", { enumerable: true, get: function () { return locale_1.makeTranslator; } });
Object.defineProperty(exports, "registerLocale", { enumerable: true, get: function () { return locale_1.register; } });
require("./locale/zh-CN");
require("./utils/debug");
var Animation_1 = (0, tslib_1.__importDefault)(require("./utils/Animation"));
exports.animation = Animation_1.default;
(0, tslib_1.__exportStar)(require("./Schema"), exports);
// 注册渲染器
require("./renderers/Action");
require("./renderers/Alert");
require("./renderers/App");
require("./renderers/Avatar");
require("./renderers/Remark");
require("./renderers/ButtonGroup");
require("./renderers/Form/ButtonToolbar");
require("./renderers/Breadcrumb");
require("./renderers/DropDownButton");
require("./renderers/Calendar");
require("./renderers/Collapse");
require("./renderers/CollapseGroup");
require("./renderers/Color");
require("./renderers/CRUD");
require("./renderers/Pagination");
require("./renderers/Cards");
require("./renderers/Card");
require("./renderers/Card2");
require("./renderers/Custom");
require("./renderers/Date");
require("./renderers/Dialog");
require("./renderers/Divider");
require("./renderers/Each");
require("./renderers/Flex");
require("./renderers/Form/index");
require("./renderers/Form/wrapControl");
require("./renderers/Form/Control");
require("./renderers/Form/Hidden");
require("./renderers/Form/InputText");
require("./renderers/Form/InputTag");
require("./renderers/Form/InputNumber");
require("./renderers/Form/Textarea");
require("./renderers/Form/Checkboxes");
require("./renderers/Form/Checkbox");
require("./renderers/Form/InputCity");
require("./renderers/Form/ChartRadios");
require("./renderers/Form/InputRating");
require("./renderers/Form/Switch");
require("./renderers/Form/Radios");
require("./renderers/Form/JSONSchemaEditor");
require("./renderers/Form/ListSelect");
require("./renderers/Form/LocationPicker");
require("./renderers/Form/Select");
require("./renderers/Form/Static");
require("./renderers/Form/InputDate");
require("./renderers/Form/InputDateRange");
require("./renderers/Form/InputFormula");
require("./renderers/Form/InputRepeat");
require("./renderers/Form/InputTree");
require("./renderers/Form/TreeSelect");
require("./renderers/Form/InputImage");
require("./renderers/Form/InputFile");
require("./renderers/Form/UUID");
require("./renderers/Form/MatrixCheckboxes");
require("./renderers/Form/InputMonthRange");
require("./renderers/Form/InputQuarterRange");
require("./renderers/Form/InputYearRange");
require("./renderers/Form/InputRange");
require("./renderers/Form/InputArray");
require("./renderers/Form/Combo");
require("./renderers/Form/ConditionBuilder");
require("./renderers/Form/InputSubForm");
require("./renderers/Form/InputExcel");
require("./renderers/Form/InputRichText");
require("./renderers/Form/Editor");
require("./renderers/Form/DiffEditor");
require("./renderers/Form/InputColor");
require("./renderers/Form/ChainedSelect");
require("./renderers/Form/NestedSelect");
require("./renderers/Form/Transfer");
require("./renderers/Form/TransferPicker");
require("./renderers/Form/InputTable");
require("./renderers/Form/Picker");
require("./renderers/Form/IconPicker");
require("./renderers/Form/Formula");
require("./renderers/Form/FieldSet");
require("./renderers/Form/TabsTransfer");
require("./renderers/Form/TabsTransferPicker");
require("./renderers/Form/Group");
require("./renderers/Form/InputGroup");
require("./renderers/Grid");
require("./renderers/Grid2D");
require("./renderers/HBox");
require("./renderers/VBox");
require("./renderers/Image");
require("./renderers/Images");
require("./renderers/List");
require("./renderers/Log");
require("./renderers/Operation");
require("./renderers/Page");
require("./renderers/PaginationWrapper");
require("./renderers/Panel");
require("./renderers/Plain");
require("./renderers/Property");
require("./renderers/Portlet");
require("./renderers/Spinner");
require("./renderers/Table/index");
require("./renderers/Tabs");
require("./renderers/Tpl");
require("./renderers/Mapping");
require("./renderers/Progress");
require("./renderers/Status");
require("./renderers/Json");
require("./renderers/Link");
require("./renderers/Wizard");
require("./renderers/Chart");
require("./renderers/Container");
require("./renderers/SearchBox");
require("./renderers/Service");
require("./renderers/SparkLine");
require("./renderers/Video");
require("./renderers/Audio");
require("./renderers/Nav");
require("./renderers/Tasks");
require("./renderers/Drawer");
require("./renderers/Wrapper");
require("./renderers/IFrame");
require("./renderers/BarCode");
require("./renderers/QRCode");
require("./renderers/Icon");
require("./renderers/Carousel");
require("./renderers/AnchorNav");
require("./renderers/Steps");
require("./renderers/Timeline");
require("./renderers/Markdown");
require("./renderers/TableView");
require("./renderers/Code");
require("./renderers/WebComponent");
require("./renderers/GridNav");
require("./renderers/TooltipWrapper");
require("./renderers/Tag");
require("./renderers/Table-v2/index");
var Scoped_1 = tslib_1.__importStar(require("./Scoped"));
exports.Scoped = Scoped_1.default;
Object.defineProperty(exports, "ScopedContext", { enumerable: true, get: function () { return Scoped_1.ScopedContext; } });
var Item_1 = require("./renderers/Form/Item");
Object.defineProperty(exports, "FormItem", { enumerable: true, get: function () { return Item_1.FormItem; } });
Object.defineProperty(exports, "FormItemWrap", { enumerable: true, get: function () { return Item_1.FormItemWrap; } });
Object.defineProperty(exports, "registerFormItem", { enumerable: true, get: function () { return Item_1.registerFormItem; } });
// 兼容旧版本用法
require("./compat");
require("./envOverwrite");
require("./schemaExtend");
require("./themes/ang");
require("./themes/cxd");
require("./themes/dark");
require("./themes/antd");
var tpl_builtin_1 = require("./utils/tpl-builtin");
Object.defineProperty(exports, "registerFilter", { enumerable: true, get: function () { return tpl_builtin_1.registerFilter; } });
Object.defineProperty(exports, "filterDate", { enumerable: true, get: function () { return tpl_builtin_1.filterDate; } });
Object.defineProperty(exports, "relativeValueRe", { enumerable: true, get: function () { return tpl_builtin_1.relativeValueRe; } });
Object.defineProperty(exports, "resolveVariable", { enumerable: true, get: function () { return tpl_builtin_1.resolveVariable; } });
Object.defineProperty(exports, "resolveVariableAndFilter", { enumerable: true, get: function () { return tpl_builtin_1.resolveVariableAndFilter; } });
var validations_1 = require("./utils/validations");
Object.defineProperty(exports, "addRule", { enumerable: true, get: function () { return validations_1.addRule; } });
Object.defineProperty(exports, "str2rules", { enumerable: true, get: function () { return validations_1.str2rules; } });
Object.defineProperty(exports, "validate", { enumerable: true, get: function () { return validations_1.validate; } });
Object.defineProperty(exports, "validateObject", { enumerable: true, get: function () { return validations_1.validateObject; } });
var Select_1 = require("./components/Select");
Object.defineProperty(exports, "normalizeOptions", { enumerable: true, get: function () { return Select_1.normalizeOptions; } });
var Options_1 = require("./renderers/Form/Options");
Object.defineProperty(exports, "OptionsControl", { enumerable: true, get: function () { return Options_1.OptionsControl; } });
Object.defineProperty(exports, "registerOptionsControl", { enumerable: true, get: function () { return Options_1.registerOptionsControl; } });
var theme_1 = require("./theme");
Object.defineProperty(exports, "classnames", { enumerable: true, get: function () { return theme_1.classnames; } });
Object.defineProperty(exports, "getClassPrefix", { enumerable: true, get: function () { return theme_1.getClassPrefix; } });
Object.defineProperty(exports, "setDefaultTheme", { enumerable: true, get: function () { return theme_1.setDefaultTheme; } });
Object.defineProperty(exports, "theme", { enumerable: true, get: function () { return theme_1.theme; } });
Object.defineProperty(exports, "getTheme", { enumerable: true, get: function () { return theme_1.getTheme; } });
var classPrefix = (0, theme_1.getClassPrefix)();
exports.classPrefix = classPrefix;
require("./actions");
var DataScope_1 = require("./utils/DataScope");
Object.defineProperty(exports, "DataScope", { enumerable: true, get: function () { return DataScope_1.DataScope; } });
var DataSchema_1 = require("./utils/DataSchema");
Object.defineProperty(exports, "DataSchema", { enumerable: true, get: function () { return DataSchema_1.DataSchema; } });
(0, tslib_1.__exportStar)(require("./components/index"), exports);
//# sourceMappingURL=./index.js.map
