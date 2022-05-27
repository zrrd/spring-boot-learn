/// <reference types="hoist-non-react-statics" />
import { BaseSelection, BaseSelectionProps } from './Selection';
import React from 'react';
import { Option } from './Select';
export interface TableSelectionProps extends BaseSelectionProps {
    columns: Array<{
        name: string;
        label: string;
        [propName: string]: any;
    }>;
    cellRender: (column: {
        name: string;
        label: string;
        [propName: string]: any;
    }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
}
export declare class TableSelection extends BaseSelection<TableSelectionProps> {
    static defaultProps: {
        cellRender: (column: {
            [propName: string]: any;
            name: string;
            label: string;
        }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
        placeholder: string;
        itemRender: typeof BaseSelection.itemRender;
        multiple: boolean;
        clearable: boolean;
    };
    getColumns(): {
        [propName: string]: any;
        name: string;
        label: string;
    }[];
    renderTHead(): JSX.Element;
    renderTBody(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
        cellRender: (column: {
            [propName: string]: any;
            name: string;
            label: string;
        }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
        placeholder: string;
        itemRender: typeof BaseSelection.itemRender;
        multiple: boolean;
        clearable: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof TableSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TableSelection, {}> & {
        ComposedComponent: typeof TableSelection;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
        cellRender: (column: {
            [propName: string]: any;
            name: string;
            label: string;
        }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
        placeholder: string;
        itemRender: typeof BaseSelection.itemRender;
        multiple: boolean;
        clearable: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof TableSelection>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TableSelection, {}> & {
    ComposedComponent: typeof TableSelection;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
            cellRender: (column: {
                [propName: string]: any;
                name: string;
                label: string;
            }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<TableSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender" | "cellRender">> & Partial<Pick<{
                cellRender: (column: {
                    [propName: string]: any;
                    name: string;
                    label: string;
                }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof TableSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TableSelection, {}> & {
        ComposedComponent: typeof TableSelection;
    };
};
export default _default;
