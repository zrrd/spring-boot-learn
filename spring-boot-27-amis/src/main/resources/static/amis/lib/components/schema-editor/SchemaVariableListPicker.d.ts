/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { SchemaVariableListProps } from './SchemaVariableList';
export interface SchemaVariableListPickerProps extends SchemaVariableListProps {
    children: (props: {
        onClick: (e: React.MouseEvent) => void;
        setState: (state: any) => void;
        isOpened: boolean;
    }) => JSX.Element;
    value?: any;
    title?: string;
    onConfirm?: (value?: any) => void;
    onCancel?: () => void;
    onPickerOpen?: (props: any) => any;
}
export declare class SchemaVariableListPicker extends React.Component<SchemaVariableListPickerProps> {
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps, keyof import("../../locale").LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps, keyof import("../../locale").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps, keyof import("../../locale").LocaleProps> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps, keyof import("../../locale").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps, keyof import("../../locale").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps, keyof import("../../locale").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps, keyof import("../../locale").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps, keyof import("../../locale").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps, keyof import("../../locale").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps, keyof import("../../locale").LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SchemaVariableListPicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SchemaVariableListPicker, {}> & {
        ComposedComponent: typeof SchemaVariableListPicker;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof SchemaVariableListPicker>;
} & import("hoist-non-react-statics").NonReactStatics<typeof SchemaVariableListPicker, {}> & {
    ComposedComponent: typeof SchemaVariableListPicker;
}, {}> & {
    ComposedComponent: {
        new (props: Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListPickerProps, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SchemaVariableListPicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SchemaVariableListPicker, {}> & {
        ComposedComponent: typeof SchemaVariableListPicker;
    };
};
export default _default;
