/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { LocaleProps } from '../../locale';
import { ThemeProps } from '../../theme';
import { DataSchema } from '../../utils/DataSchema';
import type { JSONSchema } from '../../utils/DataScope';
import { VariableItem } from '../formula/Editor';
export interface SchemaVariableListProps extends LocaleProps, ThemeProps {
    schemas?: Array<JSONSchema> | JSONSchema;
    value?: string;
    onSelect?: (value: string, schema: JSONSchema) => void;
    selectMode?: 'list' | 'tree' | 'tabs';
    beforeBuildVariables?: (dataSchema: DataSchema) => void;
}
export interface SchemaVariableListState {
    variables: Array<VariableItem>;
}
export declare class SchemaVariableList extends React.Component<SchemaVariableListProps, SchemaVariableListState> {
    state: {
        variables: any[];
    };
    dataSchema?: DataSchema;
    componentDidUpdate(prevProps: SchemaVariableListProps): void;
    schemasToVaraibles(props: SchemaVariableListProps): any[];
    handleSelect(item: any): void;
    itemRender(option: any): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps, keyof LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps, keyof LocaleProps> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SchemaVariableList>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SchemaVariableList, {}> & {
        ComposedComponent: typeof SchemaVariableList;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof SchemaVariableList>;
} & import("hoist-non-react-statics").NonReactStatics<typeof SchemaVariableList, {}> & {
    ComposedComponent: typeof SchemaVariableList;
}, {}> & {
    ComposedComponent: {
        new (props: Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<SchemaVariableListProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SchemaVariableList>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SchemaVariableList, {}> & {
        ComposedComponent: typeof SchemaVariableList;
    };
};
export default _default;
