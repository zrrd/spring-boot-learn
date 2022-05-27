/// <reference types="codemirror" />
/// <reference types="hoist-non-react-statics" />
/**
 * @file 公式编辑器
 */
import React from 'react';
import { FormulaPlugin } from './plugin';
import { ThemeProps } from '../../theme';
import { LocaleProps } from '../../locale';
export interface VariableItem {
    label: string;
    value?: string;
    children?: Array<VariableItem>;
    type: '';
    tag?: string;
    selectMode?: 'tree' | 'tabs';
}
export interface FuncGroup {
    groupName: string;
    items: Array<FuncItem>;
}
export interface FuncItem {
    name: string;
    example?: string;
    description?: string;
    [propName: string]: any;
}
export interface FormulaEditorProps extends ThemeProps, LocaleProps {
    onChange?: (value: string) => void;
    value?: string;
    /**
     * evalMode 即直接就是表达式，否则
     * 需要 ${这里面才是表达式}
     * 默认为 true
     */
    evalMode?: boolean;
    /**
     * 用于提示的变量集合，默认为空
     */
    variables?: Array<VariableItem>;
    /**
     * 变量展现模式，可选值：'tabs' ｜ 'tree'
     */
    variableMode?: 'tabs' | 'tree';
    /**
     * 函数集合，默认不需要传，即  amis-formula 里面那个函数
     * 如果有扩充，则需要传。
     */
    functions?: Array<FuncGroup>;
    /**
     * 顶部标题，默认为表达式
     */
    header: string;
    variableClassName?: string;
    functionClassName?: string;
}
export interface FunctionsProps {
    name: string;
    items: FunctionProps[];
}
export interface FunctionProps {
    name: string;
    intro: string;
    usage: string;
    example: string;
}
export interface FormulaState {
    focused: boolean;
}
export declare class FormulaEditor extends React.Component<FormulaEditorProps, FormulaState> {
    state: FormulaState;
    editorPlugin?: FormulaPlugin;
    static buildDefaultFunctions(doc: Array<{
        namespace: string;
        name: string;
        [propName: string]: any;
    }>): FuncGroup[];
    static defaultProps: Pick<FormulaEditorProps, 'variables' | 'evalMode'>;
    static highlightValue(value: string, variables: Array<VariableItem>, evalMode?: boolean): {
        html: string;
    } | undefined;
    componentWillUnmount(): void;
    handleFocus(): void;
    handleBlur(): void;
    insertValue(value: any, type: 'variable' | 'func'): void;
    handleEditorMounted(cm: any, editor: any): void;
    validate(): any;
    handleFunctionSelect(item: FuncItem): void;
    handleVariableSelect(item: VariableItem): void;
    handleOnChange(value: any): void;
    editorFactory(dom: HTMLElement, cm: any): import("codemirror").Editor;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof FormulaEditor>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof FormulaEditor, {}> & {
        ComposedComponent: typeof FormulaEditor;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof FormulaEditor>;
} & import("hoist-non-react-statics").NonReactStatics<typeof FormulaEditor, {}> & {
    ComposedComponent: typeof FormulaEditor;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "className" | "theme" | "value" | "onChange" | "functions" | "variableMode" | "variableClassName" | "functionClassName"> & Partial<Pick<Omit<FormulaEditorProps, keyof LocaleProps>, "evalMode" | "variables">> & Partial<Pick<Pick<FormulaEditorProps, "evalMode" | "variables">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof FormulaEditor>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof FormulaEditor, {}> & {
        ComposedComponent: typeof FormulaEditor;
    };
};
export default _default;
