/**
 * @file Table
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import Sortable from 'sortablejs';
import { ClassNamesFn, ThemeProps } from '../../theme';
import { LocaleProps } from '../../locale';
export interface ColumnProps {
    title: string | React.ReactNode | Function;
    key: string;
    className?: string;
    children?: Array<ColumnProps>;
    render: Function;
    fixed?: boolean | string;
    width?: number | string;
    sorter?: (a: any, b: any) => number | boolean;
    sortOrder?: string;
    filters?: Array<any>;
    filterMode?: string;
    filterMultiple?: boolean;
    filteredValue?: Array<string>;
    filtered?: boolean;
    filterDropdown?: Function | React.ReactNode;
    align?: string;
    breakpoint?: '*' | 'xs' | 'sm' | 'md' | 'lg';
}
export interface ThProps extends ColumnProps {
    rowSpan: number;
    colSpan: number;
    groupId: string;
    depth: number;
}
export interface TdProps extends ColumnProps {
    rowSpan: number;
    colSpan: number;
    groupId: string;
}
export interface RowSelectionOptionProps {
    key: string;
    text: string;
    onSelect: Function;
}
export interface RowSelectionProps {
    type: string;
    rowClick: boolean;
    fixed: boolean;
    selectedRowKeys: Array<string | number>;
    keyField?: string;
    columnWidth?: number;
    selections?: Array<RowSelectionOptionProps>;
    onChange?: Function;
    getCheckboxProps: Function;
}
export interface ExpandableProps {
    expandedRowKeys?: Array<string | number>;
    keyField: string;
    columnWidth?: number;
    rowExpandable: Function;
    defaultExpandedRowKeys?: Array<string | number>;
    onExpand?: Function;
    onExpandedRowsChange?: Function;
    expandedRowRender?: Function;
    expandedRowClassName?: Function;
    expandIcon?: Function;
    fixed?: boolean;
}
export interface SummaryProps {
    colSpan: number;
    fixed: string | boolean;
    render: Function | React.ReactNode;
}
export interface OnRowProps {
    onRowMouseEnter?: Function;
    onRowMouseLeave?: Function;
    onRowClick?: Function;
}
export interface SortProps {
    orderBy: string;
    order: string;
}
export interface TableProps extends ThemeProps, LocaleProps {
    title: string | React.ReactNode | Function;
    footer: string | React.ReactNode | Function;
    className?: string;
    dataSource: Array<any>;
    classnames: ClassNamesFn;
    columns: Array<ColumnProps>;
    scroll?: ScrollProps;
    rowSelection?: RowSelectionProps;
    onSort?: Function;
    expandable?: ExpandableProps;
    bordered?: boolean;
    size?: string;
    headSummary?: Function | React.ReactNode | Array<SummaryProps | Array<SummaryProps>>;
    footSummary?: Function | React.ReactNode | Array<SummaryProps | Array<SummaryProps>>;
    draggable?: boolean;
    onDrag?: Function;
    resizable?: boolean;
    placeholder?: string | React.ReactNode | Function;
    loading?: boolean | string | React.ReactNode;
    sticky?: boolean;
    onFilter?: Function;
    childrenColumnName?: string;
    keyField?: string;
    indentSize: number;
    onRow?: OnRowProps;
    rowClassName?: Function;
    lineHeight?: string;
    showHeader?: boolean;
    onSelect?: Function;
    onSelectAll?: Function;
}
export interface ScrollProps {
    x: number | string | true;
    y: number | string;
}
export interface TableState {
    selectedRowKeys: Array<string | number>;
    dataSource: Array<any>;
    expandedRowKeys: Array<string | number>;
    colWidths: Array<number>;
}
export declare class Table extends React.PureComponent<TableProps, TableState> {
    static defaultProps: {
        title: string;
        className: string;
        dataSource: never[];
        columns: never[];
        indentSize: number;
        placeholder: string;
        showHeader: boolean;
    };
    constructor(props: TableProps);
    getPopOverContainer(): Element | Text | null;
    thColumns: Array<Array<ThProps>>;
    tdColumns: Array<TdProps>;
    selectedRows: Array<any>;
    sortable: Sortable;
    resizeStart: number;
    resizeKey: string;
    tableDom: React.RefObject<HTMLDivElement>;
    theadDom: React.RefObject<HTMLTableSectionElement>;
    tbodyDom: React.RefObject<HTMLTableSectionElement>;
    contentDom: React.RefObject<HTMLDivElement>;
    headerDom: React.RefObject<HTMLDivElement>;
    bodyDom: React.RefObject<HTMLDivElement>;
    tfootDom: React.RefObject<HTMLTableSectionElement>;
    footDom: React.RefObject<HTMLDivElement>;
    getColWidths(): any[];
    getSelectedRows(dataSource: Array<any>, selectedRowKeys: Array<string | number>): any[];
    updateTableBodyFixed(): void;
    updateColWidths(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TableProps, prevState: TableState): void;
    componentWillUnmount(): void;
    exchange(fromIndex: number, toIndex: number, item: any): any[];
    initDragging(): void;
    destroyDragging(): void;
    updateStickyHeader(): void;
    updateFixedRow(row: HTMLElement, columns: Array<ColumnProps>): void;
    prependColumns(columns: Array<any>): void;
    updateTheadFixedRow(thead: HTMLElement, columns: Array<any>): void;
    updateTbodyFixedRow(tbody: HTMLElement, columns: Array<any>): void;
    updateSummaryFixedRow(children: HTMLCollection | Array<Element>, columns: Array<any>): void;
    updateFootSummaryFixedRow(tfoot: HTMLElement): void;
    updateHeadSummaryFixedRow(tbody: HTMLElement): void;
    renderColGroup(colWidths?: Array<number>): JSX.Element;
    onResizeMouseDown(event: React.MouseEvent<any>, key: string): void;
    onResizeMouseUp(event: React.MouseEvent<any>): void;
    renderTHead(): JSX.Element;
    onRowClick(event: React.ChangeEvent<any>, record?: any, rowIndex?: number): void;
    onRowMouseEnter(event: React.ChangeEvent<any>, record?: any, rowIndex?: number): void;
    onRowMouseLeave(event: React.ChangeEvent<any>, record?: any, rowIndex?: number): void;
    onExpandRow(data: any): void;
    onCollapseRow(data: any): void;
    getChildrenColumnName(): string;
    getRowSelectionKeyField(): string;
    getExpandableKeyField(): string;
    hasChildrenRow(data: any): any;
    isExpandableRow(data: any, rowIndex: number): any;
    getDataChildrenKeys(data: any): string[];
    hasCheckedRows(data: any): boolean;
    hasCheckedChildrenRows(data: any): boolean;
    getExpandedIcons(isExpanded: boolean, record: any): JSX.Element;
    selectedSingleRow(value: boolean, data: any): Promise<void>;
    renderRow(data: any, rowIndex: number, levels: Array<number>): any[];
    renderTBody(): JSX.Element;
    isExpandableTable(): boolean;
    isNestedTable(): boolean;
    getExtraColumnCount(): number;
    renderSummaryRow(summary: any): any;
    renderTFoot(): JSX.Element;
    updateTableDom(dom: HTMLElement): void;
    onTableContentScroll(event: React.ChangeEvent<any>): void;
    onWheel(event: WheelEvent): void;
    onTableScroll(event: {
        target: HTMLDivElement;
        scrollLeft?: number;
    }): void;
    renderLoading(): JSX.Element;
    renderTable(): JSX.Element;
    renderScrollTableHeader(): JSX.Element;
    renderScrollTableBody(): JSX.Element;
    renderScrollTableFoot(): JSX.Element;
    renderScrollTable(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
        title: string;
        className: string;
        dataSource: never[];
        columns: never[];
        indentSize: number;
        placeholder: string;
        showHeader: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Table>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Table, {}> & {
        ComposedComponent: typeof Table;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
        title: string;
        className: string;
        dataSource: never[];
        columns: never[];
        indentSize: number;
        placeholder: string;
        showHeader: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Table>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Table, {}> & {
    ComposedComponent: typeof Table;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
            title: string;
            className: string;
            dataSource: never[];
            columns: never[];
            indentSize: number;
            placeholder: string;
            showHeader: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableProps, keyof LocaleProps>, "classPrefix" | "classnames" | "footer" | "theme" | "scroll" | "onSelect" | "loading" | "sticky" | "size" | "draggable" | "onDrag" | "lineHeight" | "resizable" | "expandable" | "rowClassName" | "rowSelection" | "keyField" | "childrenColumnName" | "bordered" | "onSelectAll" | "onSort" | "onFilter" | "headSummary" | "footSummary" | "onRow"> & Partial<Pick<Omit<TableProps, keyof LocaleProps>, "title" | "className" | "columns" | "placeholder" | "showHeader" | "indentSize" | "dataSource">> & Partial<Pick<{
                title: string;
                className: string;
                dataSource: never[];
                columns: never[];
                indentSize: number;
                placeholder: string;
                showHeader: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Table>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Table, {}> & {
        ComposedComponent: typeof Table;
    };
};
export default _default;
