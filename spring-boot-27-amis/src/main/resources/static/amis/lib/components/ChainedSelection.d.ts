/// <reference types="hoist-non-react-statics" />
/**
 * 级联多选框，支持无限极。从左侧到右侧一层层点选。
 */
import { BaseSelection, BaseSelectionProps } from './Selection';
import React from 'react';
import { Option } from './Select';
export interface ChainedSelectionProps extends BaseSelectionProps {
    defaultSelectedIndex?: string;
}
export interface ChainedSelectionState {
    selected: Array<string>;
}
export declare class ChainedSelection extends BaseSelection<ChainedSelectionProps, ChainedSelectionState> {
    valueArray: Array<Option>;
    state: ChainedSelectionState;
    componentDidMount(): void;
    selectOption(option: Option, depth: number, id: string): void;
    renderItem(option: Option, index: number, depth: number, id: string): JSX.Element;
    renderOption(option: Option, index: number, depth: number, id: string): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        new (props: Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        ComposedComponent: React.ComponentType<typeof ChainedSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ChainedSelection, {}> & {
        ComposedComponent: typeof ChainedSelection;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
    ComposedComponent: React.ComponentType<typeof ChainedSelection>;
} & import("hoist-non-react-statics").NonReactStatics<typeof ChainedSelection, {}> & {
    ComposedComponent: typeof ChainedSelection;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value" | "defaultSelectedIndex"> & Partial<Pick<Omit<ChainedSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        ComposedComponent: React.ComponentType<typeof ChainedSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof ChainedSelection, {}> & {
        ComposedComponent: typeof ChainedSelection;
    };
};
export default _default;
