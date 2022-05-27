/// <reference types="lodash" />
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from '../theme';
import { BaseSelectionProps, ItemRenderStates } from './Selection';
import { Options, Option } from './Select';
import { LocaleProps } from '../locale';
import { ItemRenderStates as ResultItemRenderStates } from './ResultList';
export interface TransferProps extends ThemeProps, LocaleProps, Omit<BaseSelectionProps, 'itemRender'> {
    inline?: boolean;
    statistics?: boolean;
    showArrow?: boolean;
    multiple?: boolean;
    selectTitle?: string;
    selectMode?: 'table' | 'group' | 'list' | 'tree' | 'chained' | 'associated';
    columns?: Array<{
        name: string;
        label: string;
        [propName: string]: any;
    }>;
    cellRender?: (column: {
        name: string;
        label: string;
        [propName: string]: any;
    }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
    leftOptions?: Array<Option>;
    leftMode?: 'tree' | 'list' | 'group';
    leftDefaultValue?: any;
    rightMode?: 'table' | 'list' | 'group' | 'tree' | 'chained';
    searchResultMode?: 'table' | 'list' | 'group' | 'tree' | 'chained';
    searchResultColumns?: Array<{
        name: string;
        label: string;
        [propName: string]: any;
    }>;
    searchPlaceholder?: string;
    noResultsText?: string;
    onChange?: (value: Array<Option>, optionModified?: boolean) => void;
    onSearch?: (term: string, setCancel: (cancel: () => void) => void) => Promise<Options | void>;
    selectRender?: (props: Omit<TransferProps, 'onSearch'> & {
        onSearch: (text: string) => void;
        onSearchCancel: () => void;
        searchResult: Options | null;
    }) => JSX.Element;
    resultTitle?: string;
    optionItemRender?: (option: Option, states: ItemRenderStates) => JSX.Element;
    resultItemRender?: (option: Option, states: ResultItemRenderStates) => JSX.Element;
    sortable?: boolean;
    onRef?: (ref: Transfer) => void;
    onSelectAll?: (options: Options) => void;
}
export interface TransferState {
    inputValue: string;
    searchResult: Options | null;
}
export declare class Transfer<T extends TransferProps = TransferProps> extends React.Component<T, TransferState> {
    static defaultProps: Pick<TransferProps, 'multiple'>;
    state: {
        inputValue: string;
        searchResult: null;
    };
    valueArray: Options;
    availableOptions: Options;
    unmounted: boolean;
    cancelSearch?: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    toggleAll(): void;
    selectAll(): void;
    clearAll(): void;
    handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
    handleSearch(text: string): void;
    handleSeachCancel(): void;
    lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
    renderSelect(props: TransferProps & {
        onToggleAll?: () => void;
    }): JSX.Element;
    renderSearchResult(props: TransferProps): JSX.Element;
    renderOptions(props: TransferProps): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<{
            new (props: TransferProps | Readonly<TransferProps>): {
                state: {
                    inputValue: string;
                    searchResult: null;
                };
                valueArray: Options;
                availableOptions: Options;
                unmounted: boolean;
                cancelSearch?: (() => void) | undefined;
                componentDidMount(): void;
                componentWillUnmount(): void;
                toggleAll(): void;
                selectAll(): void;
                clearAll(): void;
                handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
                handleSearch(text: string): void;
                handleSeachCancel(): void;
                lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
                renderSelect(props: TransferProps & {
                    onToggleAll?: (() => void) | undefined;
                }): JSX.Element;
                renderSearchResult(props: TransferProps): JSX.Element;
                renderOptions(props: TransferProps): JSX.Element;
                render(): JSX.Element;
                context: any;
                setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<TransferProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
                componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            };
            new (props: TransferProps, context: any): {
                state: {
                    inputValue: string;
                    searchResult: null;
                };
                valueArray: Options;
                availableOptions: Options;
                unmounted: boolean;
                cancelSearch?: (() => void) | undefined;
                componentDidMount(): void;
                componentWillUnmount(): void;
                toggleAll(): void;
                selectAll(): void;
                clearAll(): void;
                handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
                handleSearch(text: string): void;
                handleSeachCancel(): void;
                lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
                renderSelect(props: TransferProps & {
                    onToggleAll?: (() => void) | undefined;
                }): JSX.Element;
                renderSearchResult(props: TransferProps): JSX.Element;
                renderOptions(props: TransferProps): JSX.Element;
                render(): JSX.Element;
                context: any;
                setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<TransferProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
                componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            };
            defaultProps: Pick<TransferProps, "multiple">;
            contextType?: React.Context<any> | undefined;
        }>;
    } & import("hoist-non-react-statics").NonReactStatics<{
        new (props: TransferProps | Readonly<TransferProps>): {
            state: {
                inputValue: string;
                searchResult: null;
            };
            valueArray: Options;
            availableOptions: Options;
            unmounted: boolean;
            cancelSearch?: (() => void) | undefined;
            componentDidMount(): void;
            componentWillUnmount(): void;
            toggleAll(): void;
            selectAll(): void;
            clearAll(): void;
            handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
            handleSearch(text: string): void;
            handleSeachCancel(): void;
            lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
            renderSelect(props: TransferProps & {
                onToggleAll?: (() => void) | undefined;
            }): JSX.Element;
            renderSearchResult(props: TransferProps): JSX.Element;
            renderOptions(props: TransferProps): JSX.Element;
            render(): JSX.Element;
            context: any;
            setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TransferProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
            componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
        };
        new (props: TransferProps, context: any): {
            state: {
                inputValue: string;
                searchResult: null;
            };
            valueArray: Options;
            availableOptions: Options;
            unmounted: boolean;
            cancelSearch?: (() => void) | undefined;
            componentDidMount(): void;
            componentWillUnmount(): void;
            toggleAll(): void;
            selectAll(): void;
            clearAll(): void;
            handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
            handleSearch(text: string): void;
            handleSeachCancel(): void;
            lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
            renderSelect(props: TransferProps & {
                onToggleAll?: (() => void) | undefined;
            }): JSX.Element;
            renderSearchResult(props: TransferProps): JSX.Element;
            renderOptions(props: TransferProps): JSX.Element;
            render(): JSX.Element;
            context: any;
            setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TransferProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
            componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
        };
        defaultProps: Pick<TransferProps, "multiple">;
        contextType?: React.Context<any> | undefined;
    }, {}> & {
        ComposedComponent: {
            new (props: TransferProps | Readonly<TransferProps>): {
                state: {
                    inputValue: string;
                    searchResult: null;
                };
                valueArray: Options;
                availableOptions: Options;
                unmounted: boolean;
                cancelSearch?: (() => void) | undefined;
                componentDidMount(): void;
                componentWillUnmount(): void;
                toggleAll(): void;
                selectAll(): void;
                clearAll(): void;
                handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
                handleSearch(text: string): void;
                handleSeachCancel(): void;
                lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
                renderSelect(props: TransferProps & {
                    onToggleAll?: (() => void) | undefined;
                }): JSX.Element;
                renderSearchResult(props: TransferProps): JSX.Element;
                renderOptions(props: TransferProps): JSX.Element;
                render(): JSX.Element;
                context: any;
                setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<TransferProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
                componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            };
            new (props: TransferProps, context: any): {
                state: {
                    inputValue: string;
                    searchResult: null;
                };
                valueArray: Options;
                availableOptions: Options;
                unmounted: boolean;
                cancelSearch?: (() => void) | undefined;
                componentDidMount(): void;
                componentWillUnmount(): void;
                toggleAll(): void;
                selectAll(): void;
                clearAll(): void;
                handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
                handleSearch(text: string): void;
                handleSeachCancel(): void;
                lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
                renderSelect(props: TransferProps & {
                    onToggleAll?: (() => void) | undefined;
                }): JSX.Element;
                renderSearchResult(props: TransferProps): JSX.Element;
                renderOptions(props: TransferProps): JSX.Element;
                render(): JSX.Element;
                context: any;
                setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<TransferProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
                componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            };
            defaultProps: Pick<TransferProps, "multiple">;
            contextType?: React.Context<any> | undefined;
        };
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: TransferProps | Readonly<TransferProps>): {
            state: {
                inputValue: string;
                searchResult: null;
            };
            valueArray: Options;
            availableOptions: Options;
            unmounted: boolean;
            cancelSearch?: (() => void) | undefined;
            componentDidMount(): void;
            componentWillUnmount(): void;
            toggleAll(): void;
            selectAll(): void;
            clearAll(): void;
            handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
            handleSearch(text: string): void;
            handleSeachCancel(): void;
            lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
            renderSelect(props: TransferProps & {
                onToggleAll?: (() => void) | undefined;
            }): JSX.Element;
            renderSearchResult(props: TransferProps): JSX.Element;
            renderOptions(props: TransferProps): JSX.Element;
            render(): JSX.Element;
            context: any;
            setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TransferProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
            componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
        };
        new (props: TransferProps, context: any): {
            state: {
                inputValue: string;
                searchResult: null;
            };
            valueArray: Options;
            availableOptions: Options;
            unmounted: boolean;
            cancelSearch?: (() => void) | undefined;
            componentDidMount(): void;
            componentWillUnmount(): void;
            toggleAll(): void;
            selectAll(): void;
            clearAll(): void;
            handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
            handleSearch(text: string): void;
            handleSeachCancel(): void;
            lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
            renderSelect(props: TransferProps & {
                onToggleAll?: (() => void) | undefined;
            }): JSX.Element;
            renderSearchResult(props: TransferProps): JSX.Element;
            renderOptions(props: TransferProps): JSX.Element;
            render(): JSX.Element;
            context: any;
            setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TransferProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
            componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
        };
        defaultProps: Pick<TransferProps, "multiple">;
        contextType?: React.Context<any> | undefined;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: TransferProps | Readonly<TransferProps>): {
        state: {
            inputValue: string;
            searchResult: null;
        };
        valueArray: Options;
        availableOptions: Options;
        unmounted: boolean;
        cancelSearch?: (() => void) | undefined;
        componentDidMount(): void;
        componentWillUnmount(): void;
        toggleAll(): void;
        selectAll(): void;
        clearAll(): void;
        handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
        handleSearch(text: string): void;
        handleSeachCancel(): void;
        lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
        renderSelect(props: TransferProps & {
            onToggleAll?: (() => void) | undefined;
        }): JSX.Element;
        renderSearchResult(props: TransferProps): JSX.Element;
        renderOptions(props: TransferProps): JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<TransferProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
        componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
    };
    new (props: TransferProps, context: any): {
        state: {
            inputValue: string;
            searchResult: null;
        };
        valueArray: Options;
        availableOptions: Options;
        unmounted: boolean;
        cancelSearch?: (() => void) | undefined;
        componentDidMount(): void;
        componentWillUnmount(): void;
        toggleAll(): void;
        selectAll(): void;
        clearAll(): void;
        handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
        handleSearch(text: string): void;
        handleSeachCancel(): void;
        lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
        renderSelect(props: TransferProps & {
            onToggleAll?: (() => void) | undefined;
        }): JSX.Element;
        renderSearchResult(props: TransferProps): JSX.Element;
        renderOptions(props: TransferProps): JSX.Element;
        render(): JSX.Element;
        context: any;
        setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<TransferProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
        componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
    };
    defaultProps: Pick<TransferProps, "multiple">;
    contextType?: React.Context<any> | undefined;
}, {}> & {
    ComposedComponent: {
        new (props: TransferProps | Readonly<TransferProps>): {
            state: {
                inputValue: string;
                searchResult: null;
            };
            valueArray: Options;
            availableOptions: Options;
            unmounted: boolean;
            cancelSearch?: (() => void) | undefined;
            componentDidMount(): void;
            componentWillUnmount(): void;
            toggleAll(): void;
            selectAll(): void;
            clearAll(): void;
            handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
            handleSearch(text: string): void;
            handleSeachCancel(): void;
            lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
            renderSelect(props: TransferProps & {
                onToggleAll?: (() => void) | undefined;
            }): JSX.Element;
            renderSearchResult(props: TransferProps): JSX.Element;
            renderOptions(props: TransferProps): JSX.Element;
            render(): JSX.Element;
            context: any;
            setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TransferProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
            componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
        };
        new (props: TransferProps, context: any): {
            state: {
                inputValue: string;
                searchResult: null;
            };
            valueArray: Options;
            availableOptions: Options;
            unmounted: boolean;
            cancelSearch?: (() => void) | undefined;
            componentDidMount(): void;
            componentWillUnmount(): void;
            toggleAll(): void;
            selectAll(): void;
            clearAll(): void;
            handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
            handleSearch(text: string): void;
            handleSeachCancel(): void;
            lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
            renderSelect(props: TransferProps & {
                onToggleAll?: (() => void) | undefined;
            }): JSX.Element;
            renderSearchResult(props: TransferProps): JSX.Element;
            renderOptions(props: TransferProps): JSX.Element;
            render(): JSX.Element;
            context: any;
            setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TransferProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
            componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
        };
        defaultProps: Pick<TransferProps, "multiple">;
        contextType?: React.Context<any> | undefined;
    };
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "itemClassName" | "labelClassName" | "clearable" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "onRef" | "noResultsText" | "statistics" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferProps, keyof LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<{
            new (props: TransferProps | Readonly<TransferProps>): {
                state: {
                    inputValue: string;
                    searchResult: null;
                };
                valueArray: Options;
                availableOptions: Options;
                unmounted: boolean;
                cancelSearch?: (() => void) | undefined;
                componentDidMount(): void;
                componentWillUnmount(): void;
                toggleAll(): void;
                selectAll(): void;
                clearAll(): void;
                handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
                handleSearch(text: string): void;
                handleSeachCancel(): void;
                lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
                renderSelect(props: TransferProps & {
                    onToggleAll?: (() => void) | undefined;
                }): JSX.Element;
                renderSearchResult(props: TransferProps): JSX.Element;
                renderOptions(props: TransferProps): JSX.Element;
                render(): JSX.Element;
                context: any;
                setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<TransferProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
                componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            };
            new (props: TransferProps, context: any): {
                state: {
                    inputValue: string;
                    searchResult: null;
                };
                valueArray: Options;
                availableOptions: Options;
                unmounted: boolean;
                cancelSearch?: (() => void) | undefined;
                componentDidMount(): void;
                componentWillUnmount(): void;
                toggleAll(): void;
                selectAll(): void;
                clearAll(): void;
                handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
                handleSearch(text: string): void;
                handleSeachCancel(): void;
                lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
                renderSelect(props: TransferProps & {
                    onToggleAll?: (() => void) | undefined;
                }): JSX.Element;
                renderSearchResult(props: TransferProps): JSX.Element;
                renderOptions(props: TransferProps): JSX.Element;
                render(): JSX.Element;
                context: any;
                setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<TransferProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
                componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            };
            defaultProps: Pick<TransferProps, "multiple">;
            contextType?: React.Context<any> | undefined;
        }>;
    } & import("hoist-non-react-statics").NonReactStatics<{
        new (props: TransferProps | Readonly<TransferProps>): {
            state: {
                inputValue: string;
                searchResult: null;
            };
            valueArray: Options;
            availableOptions: Options;
            unmounted: boolean;
            cancelSearch?: (() => void) | undefined;
            componentDidMount(): void;
            componentWillUnmount(): void;
            toggleAll(): void;
            selectAll(): void;
            clearAll(): void;
            handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
            handleSearch(text: string): void;
            handleSeachCancel(): void;
            lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
            renderSelect(props: TransferProps & {
                onToggleAll?: (() => void) | undefined;
            }): JSX.Element;
            renderSearchResult(props: TransferProps): JSX.Element;
            renderOptions(props: TransferProps): JSX.Element;
            render(): JSX.Element;
            context: any;
            setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TransferProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
            componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
        };
        new (props: TransferProps, context: any): {
            state: {
                inputValue: string;
                searchResult: null;
            };
            valueArray: Options;
            availableOptions: Options;
            unmounted: boolean;
            cancelSearch?: (() => void) | undefined;
            componentDidMount(): void;
            componentWillUnmount(): void;
            toggleAll(): void;
            selectAll(): void;
            clearAll(): void;
            handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
            handleSearch(text: string): void;
            handleSeachCancel(): void;
            lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
            renderSelect(props: TransferProps & {
                onToggleAll?: (() => void) | undefined;
            }): JSX.Element;
            renderSearchResult(props: TransferProps): JSX.Element;
            renderOptions(props: TransferProps): JSX.Element;
            render(): JSX.Element;
            context: any;
            setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<TransferProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
            componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
        };
        defaultProps: Pick<TransferProps, "multiple">;
        contextType?: React.Context<any> | undefined;
    }, {}> & {
        ComposedComponent: {
            new (props: TransferProps | Readonly<TransferProps>): {
                state: {
                    inputValue: string;
                    searchResult: null;
                };
                valueArray: Options;
                availableOptions: Options;
                unmounted: boolean;
                cancelSearch?: (() => void) | undefined;
                componentDidMount(): void;
                componentWillUnmount(): void;
                toggleAll(): void;
                selectAll(): void;
                clearAll(): void;
                handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
                handleSearch(text: string): void;
                handleSeachCancel(): void;
                lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
                renderSelect(props: TransferProps & {
                    onToggleAll?: (() => void) | undefined;
                }): JSX.Element;
                renderSearchResult(props: TransferProps): JSX.Element;
                renderOptions(props: TransferProps): JSX.Element;
                render(): JSX.Element;
                context: any;
                setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<TransferProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
                componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            };
            new (props: TransferProps, context: any): {
                state: {
                    inputValue: string;
                    searchResult: null;
                };
                valueArray: Options;
                availableOptions: Options;
                unmounted: boolean;
                cancelSearch?: (() => void) | undefined;
                componentDidMount(): void;
                componentWillUnmount(): void;
                toggleAll(): void;
                selectAll(): void;
                clearAll(): void;
                handleSearchKeyDown(e: React.KeyboardEvent<any>): void;
                handleSearch(text: string): void;
                handleSeachCancel(): void;
                lazySearch: import("lodash").DebouncedFunc<(text: string) => void>;
                renderSelect(props: TransferProps & {
                    onToggleAll?: (() => void) | undefined;
                }): JSX.Element;
                renderSearchResult(props: TransferProps): JSX.Element;
                renderOptions(props: TransferProps): JSX.Element;
                render(): JSX.Element;
                context: any;
                setState<K_2 extends keyof TransferState>(state: TransferState | ((prevState: Readonly<TransferState>, props: Readonly<TransferProps>) => TransferState | Pick<TransferState, K_2> | null) | Pick<TransferState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<TransferProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>): any;
                componentDidUpdate?(prevProps: Readonly<TransferProps>, prevState: Readonly<TransferState>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TransferProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<TransferProps>, nextState: Readonly<TransferState>, nextContext: any): void;
            };
            defaultProps: Pick<TransferProps, "multiple">;
            contextType?: React.Context<any> | undefined;
        };
    };
};
export default _default;
