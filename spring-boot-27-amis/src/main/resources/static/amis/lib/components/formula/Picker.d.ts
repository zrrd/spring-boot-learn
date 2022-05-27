/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { FormulaEditorProps, FuncGroup, VariableItem } from './Editor';
import type { SchemaIcon } from '../../Schema';
export interface FormulaPickerProps extends FormulaEditorProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /**
     * 编辑器标题
     */
    title?: string;
    /**
     * 按钮图标
     */
    icon?: SchemaIcon;
    /**
     * 控件模式
     */
    mode?: 'button' | 'input-button';
    /**
     * 边框模式，全边框，还是半边框，或者没边框。
     */
    borderMode?: 'full' | 'half' | 'none';
    /**
     * 按钮Label，inputMode为button时生效
     */
    btnLabel?: string;
    /**
     * 按钮样式
     */
    level?: 'info' | 'success' | 'warning' | 'danger' | 'link' | 'primary' | 'dark' | 'light';
    /**
     * 按钮大小
     */
    btnSize?: 'xs' | 'sm' | 'md' | 'lg';
    /**
     * 禁用状态
     */
    disabled?: boolean;
    /**
     * 是否允许输入，否需要点击fx在弹窗中输入
     */
    allowInput?: boolean;
    /**
     * 占位文本
     */
    placeholder?: string;
    /**
     * 可清除
     */
    clearable?: boolean;
    /**
     * 支持通过上下文变量配置value
     */
    source?: string;
    /**
     * 外层透传的 data，和source配合使用
     */
    data?: any;
    /**
     * 公式弹出的时候，可以外部设置 variables 和 functions
     */
    onPickerOpen?: (props: FormulaPickerProps) => any;
    children?: (props: {
        onClick: (e: React.MouseEvent) => void;
        setState: (state: any) => void;
        isOpened: boolean;
    }) => JSX.Element;
    onConfirm?: (value?: any) => void;
    onRef?: (node: any) => void;
}
export interface FormulaPickerState {
    isOpened: boolean;
    value: string;
    editorValue: string;
    isError: boolean | string;
    variables?: Array<VariableItem>;
    functions?: Array<FuncGroup>;
    variableMode?: any;
}
export declare class FormulaPicker extends React.Component<FormulaPickerProps, FormulaPickerState> {
    constructor(props: FormulaPickerProps);
    static defaultProps: {
        evalMode: boolean;
    };
    state: FormulaPickerState;
    handleConfirm(): void;
    renderFormulaValue(item: any): "" | JSX.Element;
    handleInputChange(value: string): void;
    handleEditorChange(value: string): void;
    handleEditorConfirm(): void;
    handleClick(): Promise<void>;
    close(e?: any, callback?: () => void): void;
    updateState(state?: any): void;
    validate(value: string): any;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
        evalMode: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof import("../../theme").ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof FormulaPicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof FormulaPicker, {}> & {
        ComposedComponent: typeof FormulaPicker;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
        evalMode: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof FormulaPicker>;
} & import("hoist-non-react-statics").NonReactStatics<typeof FormulaPicker, {}> & {
    ComposedComponent: typeof FormulaPicker;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
            evalMode: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "classPrefix" | "classnames" | "data" | "header" | "source" | "title" | "children" | "className" | "theme" | "value" | "icon" | "disabled" | "level" | "variables" | "size" | "placeholder" | "onChange" | "mode" | "clearable" | "borderMode" | "onConfirm" | "onRef" | "btnLabel" | "allowInput" | "functions" | "variableMode" | "variableClassName" | "functionClassName" | "btnSize" | "onPickerOpen"> & Partial<Pick<Omit<FormulaPickerProps, keyof import("../../locale").LocaleProps>, "evalMode">> & Partial<Pick<{
                evalMode: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof FormulaPicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof FormulaPicker, {}> & {
        ComposedComponent: typeof FormulaPicker;
    };
};
export default _default;
