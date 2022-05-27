/**
 * @file Spinner
 * @description
 * @author fex
 * @date 2017-11-07
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from '../theme';
export interface SpinnerProps extends ThemeProps {
    show: boolean;
    className?: string;
    spinnerClassName?: string;
    /**
     * @deprecated 已废弃，没有作用
     */
    mode?: string;
    size?: 'sm' | 'lg' | '';
    icon?: string | React.ReactNode;
    tip?: string;
    tipPlacement?: 'top' | 'right' | 'bottom' | 'left';
    delay?: number;
    overlay?: boolean;
}
export declare class Spinner extends React.Component<SpinnerProps> {
    static defaultProps: {
        show: boolean;
        className: string;
        spinnerClassName: string;
        size: "";
        icon: string;
        tip: string;
        tipPlacement: "bottom";
        delay: number;
        overlay: boolean;
    };
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & Partial<Pick<Omit<SpinnerProps, keyof ThemeProps>, "icon" | "show" | "overlay" | "size" | "delay" | "spinnerClassName" | "tip" | "tipPlacement">> & Partial<Pick<{
        show: boolean;
        className: string;
        spinnerClassName: string;
        size: "";
        icon: string;
        tip: string;
        tipPlacement: "bottom";
        delay: number;
        overlay: boolean;
    }, "className">> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & Partial<Pick<Omit<SpinnerProps, keyof ThemeProps>, "icon" | "show" | "overlay" | "size" | "delay" | "spinnerClassName" | "tip" | "tipPlacement">> & Partial<Pick<{
            show: boolean;
            className: string;
            spinnerClassName: string;
            size: "";
            icon: string;
            tip: string;
            tipPlacement: "bottom";
            delay: number;
            overlay: boolean;
        }, "className">> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & Partial<Pick<Omit<SpinnerProps, keyof ThemeProps>, "icon" | "show" | "overlay" | "size" | "delay" | "spinnerClassName" | "tip" | "tipPlacement">> & Partial<Pick<{
            show: boolean;
            className: string;
            spinnerClassName: string;
            size: "";
            icon: string;
            tip: string;
            tipPlacement: "bottom";
            delay: number;
            overlay: boolean;
        }, "className">> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & Partial<Pick<Omit<SpinnerProps, keyof ThemeProps>, "icon" | "show" | "overlay" | "size" | "delay" | "spinnerClassName" | "tip" | "tipPlacement">> & Partial<Pick<{
            show: boolean;
            className: string;
            spinnerClassName: string;
            size: "";
            icon: string;
            tip: string;
            tipPlacement: "bottom";
            delay: number;
            overlay: boolean;
        }, "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & Partial<Pick<Omit<SpinnerProps, keyof ThemeProps>, "icon" | "show" | "overlay" | "size" | "delay" | "spinnerClassName" | "tip" | "tipPlacement">> & Partial<Pick<{
            show: boolean;
            className: string;
            spinnerClassName: string;
            size: "";
            icon: string;
            tip: string;
            tipPlacement: "bottom";
            delay: number;
            overlay: boolean;
        }, "className">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & Partial<Pick<Omit<SpinnerProps, keyof ThemeProps>, "icon" | "show" | "overlay" | "size" | "delay" | "spinnerClassName" | "tip" | "tipPlacement">> & Partial<Pick<{
            show: boolean;
            className: string;
            spinnerClassName: string;
            size: "";
            icon: string;
            tip: string;
            tipPlacement: "bottom";
            delay: number;
            overlay: boolean;
        }, "className">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & Partial<Pick<Omit<SpinnerProps, keyof ThemeProps>, "icon" | "show" | "overlay" | "size" | "delay" | "spinnerClassName" | "tip" | "tipPlacement">> & Partial<Pick<{
            show: boolean;
            className: string;
            spinnerClassName: string;
            size: "";
            icon: string;
            tip: string;
            tipPlacement: "bottom";
            delay: number;
            overlay: boolean;
        }, "className">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & Partial<Pick<Omit<SpinnerProps, keyof ThemeProps>, "icon" | "show" | "overlay" | "size" | "delay" | "spinnerClassName" | "tip" | "tipPlacement">> & Partial<Pick<{
            show: boolean;
            className: string;
            spinnerClassName: string;
            size: "";
            icon: string;
            tip: string;
            tipPlacement: "bottom";
            delay: number;
            overlay: boolean;
        }, "className">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & Partial<Pick<Omit<SpinnerProps, keyof ThemeProps>, "icon" | "show" | "overlay" | "size" | "delay" | "spinnerClassName" | "tip" | "tipPlacement">> & Partial<Pick<{
            show: boolean;
            className: string;
            spinnerClassName: string;
            size: "";
            icon: string;
            tip: string;
            tipPlacement: "bottom";
            delay: number;
            overlay: boolean;
        }, "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<SpinnerProps, keyof ThemeProps>, "mode"> & Partial<Pick<Omit<SpinnerProps, keyof ThemeProps>, "icon" | "show" | "overlay" | "size" | "delay" | "spinnerClassName" | "tip" | "tipPlacement">> & Partial<Pick<{
            show: boolean;
            className: string;
            spinnerClassName: string;
            size: "";
            icon: string;
            tip: string;
            tipPlacement: "bottom";
            delay: number;
            overlay: boolean;
        }, "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Spinner>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Spinner, {}> & {
    ComposedComponent: typeof Spinner;
};
export default _default;
