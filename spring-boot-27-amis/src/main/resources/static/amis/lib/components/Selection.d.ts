/**
 * @file Checkboxes
 * @description 多选输入框
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from '../theme';
import { Option, Options } from './Select';
import { LocaleProps } from '../locale';
export interface BaseSelectionProps extends ThemeProps, LocaleProps {
    options: Options;
    className?: string;
    placeholder?: string;
    value?: any | Array<any>;
    multiple?: boolean;
    clearable?: boolean;
    onChange?: (value: Array<any> | any) => void;
    onDeferLoad?: (option: Option) => void;
    onLeftDeferLoad?: (option: Option, leftOptions: Option) => void;
    inline?: boolean;
    labelClassName?: string;
    option2value?: (option: Option) => any;
    itemClassName?: string;
    itemRender: (option: Option, states: ItemRenderStates) => JSX.Element;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent) => void;
}
export interface ItemRenderStates {
    index: number;
    multiple?: boolean;
    checked: boolean;
    onChange: () => void;
    disabled?: boolean;
}
export declare class BaseSelection<T extends BaseSelectionProps = BaseSelectionProps, S = any> extends React.Component<T, S> {
    static itemRender(option: Option, states: ItemRenderStates): JSX.Element;
    static defaultProps: {
        placeholder: string;
        itemRender: typeof BaseSelection.itemRender;
        multiple: boolean;
        clearable: boolean;
    };
    static value2array(value: any, options: Options, option2value?: (option: Option) => any): Options;
    static resolveSelected(value: any, options: Options, option2value?: (option: Option) => any): Option | null;
    intersectArray(arr1: undefined | Array<Option>, arr2: undefined | Array<Option>): Array<Option>;
    toggleOption(option: Option): void;
    toggleAll(): void;
    render(): JSX.Element;
}
export declare class Selection extends BaseSelection {
}
declare const _default: {
    new (props: Omit<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
        placeholder: string;
        itemRender: typeof BaseSelection.itemRender;
        multiple: boolean;
        clearable: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        ComposedComponent: React.ComponentType<typeof Selection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Selection, {}> & {
        ComposedComponent: typeof Selection;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
    ComposedComponent: React.ComponentType<typeof Selection>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Selection, {}> & {
    ComposedComponent: typeof Selection;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<BaseSelectionProps, keyof LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        ComposedComponent: React.ComponentType<typeof Selection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Selection, {}> & {
        ComposedComponent: typeof Selection;
    };
};
export default _default;
