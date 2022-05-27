/// <reference types="hoist-non-react-statics" />
import { BaseSelection } from './Selection';
import React from 'react';
import { Option } from './Select';
export declare class GroupedSelection extends BaseSelection {
    valueArray: Array<Option>;
    renderOption(option: Option, index: number): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        new (props: Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        ComposedComponent: React.ComponentType<typeof GroupedSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof GroupedSelection, {}> & {
        ComposedComponent: typeof GroupedSelection;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
            placeholder: string;
            itemRender: typeof BaseSelection.itemRender;
            multiple: boolean;
            clearable: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
    ComposedComponent: React.ComponentType<typeof GroupedSelection>;
} & import("hoist-non-react-statics").NonReactStatics<typeof GroupedSelection, {}> & {
    ComposedComponent: typeof GroupedSelection;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
                placeholder: string;
                itemRender: typeof BaseSelection.itemRender;
                multiple: boolean;
                clearable: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onClick" | "options" | "inline" | "onChange" | "itemClassName" | "labelClassName" | "onDeferLoad" | "onLeftDeferLoad" | "option2value"> & Partial<Pick<Omit<import("./Selection").BaseSelectionProps, keyof import("../locale").LocaleProps>, "multiple" | "placeholder" | "clearable" | "itemRender">> & Partial<Pick<{
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
        ComposedComponent: React.ComponentType<typeof GroupedSelection>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof GroupedSelection, {}> & {
        ComposedComponent: typeof GroupedSelection;
    };
};
export default _default;
