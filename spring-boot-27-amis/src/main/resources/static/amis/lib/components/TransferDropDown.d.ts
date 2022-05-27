/// <reference types="hoist-non-react-statics" />
import { Transfer, TransferProps } from './Transfer';
import React from 'react';
export interface TransferDropDownProps extends TransferProps {
    multiple?: boolean;
    borderMode?: 'full' | 'half' | 'none';
    useMobileUI?: boolean;
    popOverContainer?: any;
    itemRender: (value: any) => JSX.Element | string;
}
export declare class TransferDropDown extends Transfer<TransferDropDownProps> {
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof TransferDropDown>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TransferDropDown, {}> & {
        ComposedComponent: typeof TransferDropDown;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof TransferDropDown>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TransferDropDown, {}> & {
    ComposedComponent: typeof TransferDropDown;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "showArrow" | "placeholder" | "onChange" | "useMobileUI" | "itemClassName" | "labelClassName" | "clearable" | "borderMode" | "sortable" | "selectMode" | "leftOptions" | "leftMode" | "rightMode" | "searchResultMode" | "searchResultColumns" | "selectTitle" | "resultTitle" | "popOverContainer" | "onRef" | "noResultsText" | "statistics" | "itemRender" | "onSearch" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue" | "searchPlaceholder" | "selectRender" | "optionItemRender" | "resultItemRender" | "onSelectAll"> & Partial<Pick<Omit<TransferDropDownProps, keyof import("../locale").LocaleProps>, "multiple">> & Partial<Pick<Pick<TransferProps, "multiple">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof TransferDropDown>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TransferDropDown, {}> & {
        ComposedComponent: typeof TransferDropDown;
    };
};
export default _default;
