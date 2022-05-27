import React from 'react';
import { IScopedContext } from '../../Scoped';
import { RendererProps } from '../../factory';
import { Action } from '../../types';
import { SortProps } from '../../components/table';
import { BaseSchema, SchemaObject, SchemaTokenizeableString } from '../../Schema';
import { BadgeSchema } from '../../components/Badge';
import { ITableStore, IColumn, IRow } from '../../store/table-v2';
import './TableCell';
import './ColumnToggler';
/**
 * Table 表格v2渲染器。
 * 文档：https://baidu.gitee.io/amis/docs/components/table-v2
 */
export interface CellSpan {
    colIndex: number;
    rowIndex: number;
    colSpan?: number;
    rowSpan?: number;
}
export interface RenderProps {
    colSpan?: number;
    rowSpan?: number;
}
export interface ColumnSchema {
    /**
     * 指定列唯一标识
     */
    key: string;
    /**
     * 指定列标题
     */
    title: string | SchemaObject;
    /**
     * 指定列内容渲染器
     */
    type?: string;
    /**
     * 指定行合并表达式
     */
    rowSpanExpr?: string;
    /**
     * 指定列合并表达式
     */
    colSpanExpr?: string;
    /**
     * 表头分组
     */
    children?: Array<ColumnSchema>;
    /**
     * 可复制
     */
    copyable?: boolean;
    /**
     * 列表头提示
     */
    remark?: string;
    /**
     * 快速搜索
     */
    searchable?: boolean | SchemaObject;
    /**
     * 快速排序
     */
    sorter?: boolean;
    /**
     * 内容居左、居中、居右
     */
    align?: string;
    /**
     * 是否固定在左侧/右侧
     */
    fixed?: boolean | string;
    /**
     * 当前列是否展示
     */
    toggled?: boolean;
}
export interface RowSelectionOptionsSchema {
    /**
     * 选择类型 选择全部
     */
    key: string;
    /**
     * 选项显示文本
     */
    text: string;
}
export interface RowSelectionSchema {
    /**
     * 选择类型 单选/多选
     */
    type: string;
    /**
     * 对应数据源的key值
     */
    keyField?: string;
    /**
     * 行是否禁用表达式
     */
    disableOn?: string;
    /**
     * 自定义选择菜单
     */
    selections?: Array<RowSelectionOptionsSchema>;
    /**
     * 已选择的key值
     */
    selectedRowKeys?: Array<string | number>;
    /**
     * 已选择的key值表达式
     */
    selectedRowKeysExpr: string;
    /**
     * 已选择的key值表达式
     */
    columnWidth?: number;
    /**
     * 是否点击行触发选中或取消选中
     */
    rowClick?: boolean;
}
export interface ExpandableSchema {
    /**
     * 对应数据源的key值
     */
    keyField: string;
    /**
     * 行是否可展开表达式
     */
    expandableOn: string;
    /**
     * 展开行自定义样式表达式
     */
    expandedRowClassNameExpr: string;
    /**
     * 已展开的key值
     */
    expandedRowKeys: Array<string | number>;
    /**
     * 已展开的key值表达式
     */
    expandedRowKeysExpr: string;
}
export interface TableSchemaV2 extends BaseSchema {
    /**
     * 指定为表格类型
     */
    type: 'table-v2';
    /**
     * 表格标题
     */
    title?: string | SchemaObject | Array<SchemaObject>;
    /**
     * 表格数据源
     */
    source: SchemaTokenizeableString;
    /**
     * 表格可自定义列
     */
    columnsTogglable?: boolean;
    /**
     * 表格列配置
     */
    columns: Array<ColumnSchema>;
    /**
     * 表格可选择配置
     */
    rowSelection?: RowSelectionSchema;
    /**
     * 表格行可展开配置
     */
    expandable?: ExpandableSchema;
    /**
     * 表格行可展开内容配置
     */
    expandableBody?: Array<SchemaObject>;
    /**
     * 粘性头部
     */
    sticky?: boolean;
    /**
     * 加载中
     */
    loading?: boolean | string | SchemaObject;
    /**
     * 行角标
     */
    itemBadge?: BadgeSchema;
    /**
     * 指定挂载dom
     */
    popOverContainer?: any;
    /**
     * 嵌套展开记录的唯一标识
     */
    keyField?: string;
    /**
     * 数据源嵌套自定义字段名
     */
    childrenColumnName?: string;
    /**
     * 自定义行样式
     */
    rowClassNameExpr?: string;
    /**
     * 是否固定内容行高度
     */
    lineHeight?: string;
    /**
     * 是否展示边框
     */
    bordered?: boolean;
    /**
     * 是否展示表头
     */
    showHeader?: boolean;
    /**
     * 自定义表格样式
     */
    className?: string;
    /**
     * 指定表尾
     */
    footer?: string | SchemaObject | Array<SchemaObject>;
}
export declare type TableV2RendererEvent = 'selected' | 'columnSort' | 'columnFilter' | 'columnSearch' | 'columnToggled' | 'dragOver';
export declare type TableV2RendererAction = 'selectAll' | 'clearAll' | 'select';
export interface TableV2Props extends RendererProps {
    title?: string;
    source?: string;
    store: ITableStore;
    togglable: boolean;
}
export default class TableRenderer extends React.Component<TableV2Props, object> {
    static contextType: React.Context<IScopedContext>;
    renderedToolbars: Array<string>;
    control: any;
    constructor(props: TableV2Props, context: IScopedContext);
    componentWillUnmount(): void;
    controlRef(control: any): void;
    syncSelected(): void;
    static syncRows(store: ITableStore, props: TableV2Props, prevProps?: TableV2Props): boolean;
    componentDidUpdate(prevProps: TableV2Props): void;
    getPopOverContainer(): Element | Text | null;
    renderCellSchema(schema: any, props: any): any;
    renderSchema(key: string, schema: any, props?: any): any;
    buildColumns(columns: Array<any>): any[];
    buildSummary(key: string, summary: Array<any>): any[] | null;
    reloadTarget(target: string, data: any): void;
    handleSave(rows: Array<object> | object, diff: Array<object> | object, indexes: Array<string>, unModifiedItems?: Array<any>, rowsOrigin?: Array<object> | object, resetOnFailed?: boolean): void;
    handleQuickChange(item: IRow, values: object, saveImmediately?: boolean | any, savePristine?: boolean, resetOnFailed?: boolean): void;
    handleColumnToggle(columns: Array<IColumn>): Promise<void>;
    renderColumnsToggler(): JSX.Element | null;
    handleAction(e: React.UIEvent<any>, action: Action, ctx: object): void;
    renderActions(region: string): JSX.Element | null;
    handleSelected(record: any, value: boolean, selectedRows: Array<any>, selectedRowKeys: Array<string | number>): Promise<any>;
    handleSelectedAll(value: boolean, selectedRowKeys: Array<string | number>, selectedRows: Array<any>, changeRows: Array<any>): Promise<any>;
    handleSort(payload: SortProps): Promise<any>;
    handleFilter(payload: any): Promise<any>;
    handleDragOver(dataSource: Array<any>): Promise<any>;
    doAction(action: Action, args: any, throwErrors: boolean): any;
    renderTable(): JSX.Element;
    render(): JSX.Element;
}
