/**
 * @file Checkbox
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from '../theme';
interface CheckboxProps {
    type: 'checkbox' | 'radio';
    size?: 'sm' | 'lg' | 'small' | 'large';
    label?: string;
    labelClassName?: string;
    className?: string;
    onChange?: (value: any, shift?: boolean) => void;
    value?: boolean | string | number;
    inline?: boolean;
    trueValue?: boolean | string | number;
    falseValue?: boolean | string | number;
    disabled?: boolean;
    readOnly?: boolean;
    checked?: boolean;
    name?: string;
    description?: string;
    classPrefix: string;
    classnames: ClassNamesFn;
    partial?: boolean;
    optionType?: 'default' | 'button';
}
export declare class Checkbox extends React.Component<CheckboxProps, any> {
    static defaultProps: Pick<CheckboxProps, 'trueValue' | 'falseValue' | 'type'>;
    handleCheck(e: React.ChangeEvent<any>): void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "label" | "value" | "description" | "disabled" | "checked" | "name" | "size" | "inline" | "readOnly" | "onChange" | "labelClassName" | "partial" | "optionType"> & Partial<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "type" | "trueValue" | "falseValue">> & Partial<Pick<Pick<CheckboxProps, "type" | "trueValue" | "falseValue">, never>> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "label" | "value" | "description" | "disabled" | "checked" | "name" | "size" | "inline" | "readOnly" | "onChange" | "labelClassName" | "partial" | "optionType"> & Partial<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "type" | "trueValue" | "falseValue">> & Partial<Pick<Pick<CheckboxProps, "type" | "trueValue" | "falseValue">, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "label" | "value" | "description" | "disabled" | "checked" | "name" | "size" | "inline" | "readOnly" | "onChange" | "labelClassName" | "partial" | "optionType"> & Partial<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "type" | "trueValue" | "falseValue">> & Partial<Pick<Pick<CheckboxProps, "type" | "trueValue" | "falseValue">, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "label" | "value" | "description" | "disabled" | "checked" | "name" | "size" | "inline" | "readOnly" | "onChange" | "labelClassName" | "partial" | "optionType"> & Partial<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "type" | "trueValue" | "falseValue">> & Partial<Pick<Pick<CheckboxProps, "type" | "trueValue" | "falseValue">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "label" | "value" | "description" | "disabled" | "checked" | "name" | "size" | "inline" | "readOnly" | "onChange" | "labelClassName" | "partial" | "optionType"> & Partial<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "type" | "trueValue" | "falseValue">> & Partial<Pick<Pick<CheckboxProps, "type" | "trueValue" | "falseValue">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "label" | "value" | "description" | "disabled" | "checked" | "name" | "size" | "inline" | "readOnly" | "onChange" | "labelClassName" | "partial" | "optionType"> & Partial<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "type" | "trueValue" | "falseValue">> & Partial<Pick<Pick<CheckboxProps, "type" | "trueValue" | "falseValue">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "label" | "value" | "description" | "disabled" | "checked" | "name" | "size" | "inline" | "readOnly" | "onChange" | "labelClassName" | "partial" | "optionType"> & Partial<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "type" | "trueValue" | "falseValue">> & Partial<Pick<Pick<CheckboxProps, "type" | "trueValue" | "falseValue">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "label" | "value" | "description" | "disabled" | "checked" | "name" | "size" | "inline" | "readOnly" | "onChange" | "labelClassName" | "partial" | "optionType"> & Partial<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "type" | "trueValue" | "falseValue">> & Partial<Pick<Pick<CheckboxProps, "type" | "trueValue" | "falseValue">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "label" | "value" | "description" | "disabled" | "checked" | "name" | "size" | "inline" | "readOnly" | "onChange" | "labelClassName" | "partial" | "optionType"> & Partial<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "type" | "trueValue" | "falseValue">> & Partial<Pick<Pick<CheckboxProps, "type" | "trueValue" | "falseValue">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "label" | "value" | "description" | "disabled" | "checked" | "name" | "size" | "inline" | "readOnly" | "onChange" | "labelClassName" | "partial" | "optionType"> & Partial<Pick<Omit<CheckboxProps, keyof import("../theme").ThemeProps>, "type" | "trueValue" | "falseValue">> & Partial<Pick<Pick<CheckboxProps, "type" | "trueValue" | "falseValue">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Checkbox>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Checkbox, {}> & {
    ComposedComponent: typeof Checkbox;
};
export default _default;
