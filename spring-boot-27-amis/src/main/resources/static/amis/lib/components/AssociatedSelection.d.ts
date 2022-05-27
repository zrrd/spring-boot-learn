/**
 * 关联多选框，仅支持两层关联选择。
 * 左边先点选，然后右边再次点选。
 * 可以满足，先从 tree 中选中一个元素，然后查出来一个列表再次勾选。
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { BaseSelectionProps, BaseSelection } from './Selection';
import { Options, Option } from './Select';
export interface AssociatedSelectionProps extends BaseSelectionProps {
    leftOptions: Options;
    leftDefaultValue?: any;
    leftMode?: 'tree' | 'list' | 'group';
    rightMode?: 'table' | 'list' | 'group' | 'tree' | 'chained';
    columns?: Array<any>;
    cellRender?: (column: {
        name: string;
        label: string;
        [propName: string]: any;
    }, option: Option, colIndex: number, rowIndex: number) => JSX.Element;
}
export interface AssociatedSelectionState {
    leftValue?: Option;
}
export declare class AssociatedSelection extends BaseSelection<AssociatedSelectionProps, AssociatedSelectionState> {
    state: AssociatedSelectionState;
    componentDidMount(): void;
    leftOption2Value(option: Option): any;
    handleLeftSelect(value: Option): void;
    handleLeftDeferLoad(option: Option): void;
    handleRetry(option: Option): void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        new (props: Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        ComposedComponent: React.ComponentType<typeof AssociatedSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof AssociatedSelection, {}> & {
        ComposedComponent: typeof AssociatedSelection;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
    ComposedComponent: React.ComponentType<typeof AssociatedSelection>;
} & import("hoist-non-react-statics").NonReactStatics<typeof AssociatedSelection, {}> & {
    ComposedComponent: typeof AssociatedSelection;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "columns" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "leftOptions" | "leftMode" | "rightMode" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "cellRender" | "leftDefaultValue"> & Partial<Pick<Omit<AssociatedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        ComposedComponent: React.ComponentType<typeof AssociatedSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof AssociatedSelection, {}> & {
        ComposedComponent: typeof AssociatedSelection;
    };
};
export default _default;
