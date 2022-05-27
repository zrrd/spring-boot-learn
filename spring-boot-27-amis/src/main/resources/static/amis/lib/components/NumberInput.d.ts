/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from '../theme';
export interface NumberProps extends ThemeProps {
    placeholder?: string;
    max?: number;
    min?: number;
    step?: number;
    showSteps?: boolean;
    precision?: number;
    disabled?: boolean;
    /**
     * 只读
     */
    readOnly?: boolean;
    value?: number;
    onChange?: (value: number) => void;
    /**
     * 边框模式，全边框，还是半边框，或者没边框。
     */
    borderMode?: 'full' | 'half' | 'none';
    /**
     * 指定输入框展示值的格式
     */
    formatter?: Function;
    /**
     * 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用
     */
    parser?: Function;
    inputRef?: Function;
    /**
     * 获取焦点事件
     */
    onFocus?: Function;
    /**
     * 失去焦点事件
     */
    onBlur?: Function;
    /**
     * 指定输入框是基础输入框，增强输入框
     */
    displayMode?: 'base' | 'enhance';
    keyboard?: Boolean;
}
export declare class NumberInput extends React.Component<NumberProps, any> {
    static defaultProps: Pick<NumberProps, 'step' | 'readOnly' | 'borderMode'>;
    handleChange(value: any): void;
    handleFocus(e: React.SyntheticEvent<HTMLElement>): void;
    handleBlur(e: React.SyntheticEvent<HTMLElement>): void;
    handleEnhanceModeChange(action: 'add' | 'subtract'): void;
    renderBase(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<NumberProps, keyof ThemeProps>, "value" | "disabled" | "max" | "min" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "formatter" | "showSteps" | "precision" | "keyboard" | "displayMode" | "parser" | "inputRef"> & Partial<Pick<Omit<NumberProps, keyof ThemeProps>, "readOnly" | "step" | "borderMode">> & Partial<Pick<Pick<NumberProps, "readOnly" | "step" | "borderMode">, never>> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "value" | "disabled" | "max" | "min" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "formatter" | "showSteps" | "precision" | "keyboard" | "displayMode" | "parser" | "inputRef"> & Partial<Pick<Omit<NumberProps, keyof ThemeProps>, "readOnly" | "step" | "borderMode">> & Partial<Pick<Pick<NumberProps, "readOnly" | "step" | "borderMode">, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "value" | "disabled" | "max" | "min" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "formatter" | "showSteps" | "precision" | "keyboard" | "displayMode" | "parser" | "inputRef"> & Partial<Pick<Omit<NumberProps, keyof ThemeProps>, "readOnly" | "step" | "borderMode">> & Partial<Pick<Pick<NumberProps, "readOnly" | "step" | "borderMode">, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "value" | "disabled" | "max" | "min" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "formatter" | "showSteps" | "precision" | "keyboard" | "displayMode" | "parser" | "inputRef"> & Partial<Pick<Omit<NumberProps, keyof ThemeProps>, "readOnly" | "step" | "borderMode">> & Partial<Pick<Pick<NumberProps, "readOnly" | "step" | "borderMode">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "value" | "disabled" | "max" | "min" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "formatter" | "showSteps" | "precision" | "keyboard" | "displayMode" | "parser" | "inputRef"> & Partial<Pick<Omit<NumberProps, keyof ThemeProps>, "readOnly" | "step" | "borderMode">> & Partial<Pick<Pick<NumberProps, "readOnly" | "step" | "borderMode">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "value" | "disabled" | "max" | "min" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "formatter" | "showSteps" | "precision" | "keyboard" | "displayMode" | "parser" | "inputRef"> & Partial<Pick<Omit<NumberProps, keyof ThemeProps>, "readOnly" | "step" | "borderMode">> & Partial<Pick<Pick<NumberProps, "readOnly" | "step" | "borderMode">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "value" | "disabled" | "max" | "min" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "formatter" | "showSteps" | "precision" | "keyboard" | "displayMode" | "parser" | "inputRef"> & Partial<Pick<Omit<NumberProps, keyof ThemeProps>, "readOnly" | "step" | "borderMode">> & Partial<Pick<Pick<NumberProps, "readOnly" | "step" | "borderMode">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "value" | "disabled" | "max" | "min" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "formatter" | "showSteps" | "precision" | "keyboard" | "displayMode" | "parser" | "inputRef"> & Partial<Pick<Omit<NumberProps, keyof ThemeProps>, "readOnly" | "step" | "borderMode">> & Partial<Pick<Pick<NumberProps, "readOnly" | "step" | "borderMode">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "value" | "disabled" | "max" | "min" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "formatter" | "showSteps" | "precision" | "keyboard" | "displayMode" | "parser" | "inputRef"> & Partial<Pick<Omit<NumberProps, keyof ThemeProps>, "readOnly" | "step" | "borderMode">> & Partial<Pick<Pick<NumberProps, "readOnly" | "step" | "borderMode">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<NumberProps, keyof ThemeProps>, "value" | "disabled" | "max" | "min" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "formatter" | "showSteps" | "precision" | "keyboard" | "displayMode" | "parser" | "inputRef"> & Partial<Pick<Omit<NumberProps, keyof ThemeProps>, "readOnly" | "step" | "borderMode">> & Partial<Pick<Pick<NumberProps, "readOnly" | "step" | "borderMode">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof NumberInput>;
} & import("hoist-non-react-statics").NonReactStatics<typeof NumberInput, {}> & {
    ComposedComponent: typeof NumberInput;
};
export default _default;
