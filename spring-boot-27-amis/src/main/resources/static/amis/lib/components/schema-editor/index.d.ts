/**
 * 用来定义数据结构的编辑器
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { LocaleProps } from '../../locale';
import { ThemeProps } from '../../theme';
import type { JSONSchema } from '../../utils/DataScope';
import type { JSONSchema7TypeName } from 'json-schema';
export interface SchemaEditorProps extends LocaleProps, ThemeProps {
    value?: JSONSchema;
    onChange: (value: JSONSchema) => void;
    disabled?: boolean;
    defaultType: JSONSchema7TypeName;
    renderExtraProps?: (value: JSONSchema, onChange: (value: JSONSchema) => void) => JSX.Element;
    renderModalProps?: (value: JSONSchema, onChange: (value: JSONSchema) => void) => JSX.Element;
    disabledTypes?: Array<string>;
    /**
     * 预设模板
     */
    definitions?: {
        [propName: string]: {
            type: 'string' | 'number' | 'interger' | 'object' | 'array' | 'boolean' | 'null';
            title: string;
            [propName: string]: any;
        };
    };
    /**
     * 顶层是否允许修改类型
     */
    rootTypeMutable: boolean;
    /**
     * 顶层类型信息是否隐藏
     */
    showRootInfo: boolean;
}
export declare class SchemaEditor extends React.Component<SchemaEditorProps> {
    static defaultProps: Pick<SchemaEditorProps, 'defaultType' | 'rootTypeMutable' | 'showRootInfo' | 'disabledTypes'>;
    defaultTypes: Array<any>;
    constructor(props: SchemaEditorProps);
    handleTypeChange(type: string, value: any, origin: any): any;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SchemaEditor>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SchemaEditor, {}> & {
        ComposedComponent: typeof SchemaEditor;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof SchemaEditor>;
} & import("hoist-non-react-statics").NonReactStatics<typeof SchemaEditor, {}> & {
    ComposedComponent: typeof SchemaEditor;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "value" | "disabled" | "onChange" | "definitions" | "renderExtraProps" | "renderModalProps"> & Partial<Pick<Omit<SchemaEditorProps, keyof LocaleProps>, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">> & Partial<Pick<Pick<SchemaEditorProps, "rootTypeMutable" | "showRootInfo" | "disabledTypes" | "defaultType">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof SchemaEditor>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof SchemaEditor, {}> & {
        ComposedComponent: typeof SchemaEditor;
    };
};
export default _default;
