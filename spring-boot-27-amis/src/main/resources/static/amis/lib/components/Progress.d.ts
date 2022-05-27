/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn, ThemeProps } from '../theme';
import { SchemaClassName } from '../Schema';
interface ColorProps {
    value: number;
    color: string;
}
export declare type ColorMapType = Array<string> | Array<ColorProps> | string;
interface ProgressProps extends ThemeProps {
    type: 'line' | 'circle' | 'dashboard';
    showLabel: boolean;
    value: number;
    stripe?: boolean;
    animate?: boolean;
    map?: ColorMapType;
    placeholder?: string;
    format?: (value?: number) => JSX.Element;
    gapDegree?: number;
    gapPosition?: 'top' | 'bottom' | 'left' | 'right';
    strokeWidth?: number;
    progressClassName?: SchemaClassName;
    classnames: ClassNamesFn;
}
export declare class Progress extends React.Component<ProgressProps, Object> {
    static defaultProps: Partial<ProgressProps>;
    getCurrentColor(): string;
    getLevelColor(color: Array<string> | Array<ColorProps>): string;
    getColorArray(color: Array<string> | Array<ColorProps>): ColorProps[];
    getLabel(prefixCls: string): JSX.Element | null;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<ProgressProps, keyof ThemeProps>, never> & Partial<Pick<Omit<ProgressProps, keyof ThemeProps>, "map" | "animate" | "value" | "type" | "placeholder" | "format" | "progressClassName" | "showLabel" | "stripe" | "strokeWidth" | "gapDegree" | "gapPosition">> & Partial<Pick<Partial<ProgressProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & Partial<Pick<Omit<ProgressProps, keyof ThemeProps>, "map" | "animate" | "value" | "type" | "placeholder" | "format" | "progressClassName" | "showLabel" | "stripe" | "strokeWidth" | "gapDegree" | "gapPosition">> & Partial<Pick<Partial<ProgressProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & Partial<Pick<Omit<ProgressProps, keyof ThemeProps>, "map" | "animate" | "value" | "type" | "placeholder" | "format" | "progressClassName" | "showLabel" | "stripe" | "strokeWidth" | "gapDegree" | "gapPosition">> & Partial<Pick<Partial<ProgressProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & Partial<Pick<Omit<ProgressProps, keyof ThemeProps>, "map" | "animate" | "value" | "type" | "placeholder" | "format" | "progressClassName" | "showLabel" | "stripe" | "strokeWidth" | "gapDegree" | "gapPosition">> & Partial<Pick<Partial<ProgressProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & Partial<Pick<Omit<ProgressProps, keyof ThemeProps>, "map" | "animate" | "value" | "type" | "placeholder" | "format" | "progressClassName" | "showLabel" | "stripe" | "strokeWidth" | "gapDegree" | "gapPosition">> & Partial<Pick<Partial<ProgressProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & Partial<Pick<Omit<ProgressProps, keyof ThemeProps>, "map" | "animate" | "value" | "type" | "placeholder" | "format" | "progressClassName" | "showLabel" | "stripe" | "strokeWidth" | "gapDegree" | "gapPosition">> & Partial<Pick<Partial<ProgressProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & Partial<Pick<Omit<ProgressProps, keyof ThemeProps>, "map" | "animate" | "value" | "type" | "placeholder" | "format" | "progressClassName" | "showLabel" | "stripe" | "strokeWidth" | "gapDegree" | "gapPosition">> & Partial<Pick<Partial<ProgressProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & Partial<Pick<Omit<ProgressProps, keyof ThemeProps>, "map" | "animate" | "value" | "type" | "placeholder" | "format" | "progressClassName" | "showLabel" | "stripe" | "strokeWidth" | "gapDegree" | "gapPosition">> & Partial<Pick<Partial<ProgressProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & Partial<Pick<Omit<ProgressProps, keyof ThemeProps>, "map" | "animate" | "value" | "type" | "placeholder" | "format" | "progressClassName" | "showLabel" | "stripe" | "strokeWidth" | "gapDegree" | "gapPosition">> & Partial<Pick<Partial<ProgressProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<ProgressProps, keyof ThemeProps>, never> & Partial<Pick<Omit<ProgressProps, keyof ThemeProps>, "map" | "animate" | "value" | "type" | "placeholder" | "format" | "progressClassName" | "showLabel" | "stripe" | "strokeWidth" | "gapDegree" | "gapPosition">> & Partial<Pick<Partial<ProgressProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Progress>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Progress, {}> & {
    ComposedComponent: typeof Progress;
};
export default _default;
