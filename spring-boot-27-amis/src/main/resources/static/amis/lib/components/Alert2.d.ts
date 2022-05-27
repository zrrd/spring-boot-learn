/**
 * @file Alert2
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from '../theme';
export interface AlertProps {
    level: 'danger' | 'info' | 'success' | 'warning';
    title?: string;
    className?: string;
    showCloseButton: boolean;
    showIcon?: boolean;
    icon?: string | React.ReactNode;
    iconClassName?: string;
    closeButtonClassName?: string;
    onClose?: () => void;
    classnames: ClassNamesFn;
    classPrefix: string;
}
export interface AlertState {
    show: boolean;
}
export declare class Alert extends React.Component<AlertProps, AlertState> {
    static defaultProps: Pick<AlertProps, 'level' | 'className' | 'showCloseButton'>;
    static propsList: Array<string>;
    constructor(props: AlertProps);
    handleClick(): void;
    render(): JSX.Element | null;
}
declare const _default: {
    new (props: Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "title" | "icon" | "onClose" | "showIcon" | "iconClassName" | "closeButtonClassName"> & Partial<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "level" | "showCloseButton">> & Partial<Pick<Pick<AlertProps, "className" | "level" | "showCloseButton">, "className">> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "title" | "icon" | "onClose" | "showIcon" | "iconClassName" | "closeButtonClassName"> & Partial<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "level" | "showCloseButton">> & Partial<Pick<Pick<AlertProps, "className" | "level" | "showCloseButton">, "className">> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "title" | "icon" | "onClose" | "showIcon" | "iconClassName" | "closeButtonClassName"> & Partial<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "level" | "showCloseButton">> & Partial<Pick<Pick<AlertProps, "className" | "level" | "showCloseButton">, "className">> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "title" | "icon" | "onClose" | "showIcon" | "iconClassName" | "closeButtonClassName"> & Partial<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "level" | "showCloseButton">> & Partial<Pick<Pick<AlertProps, "className" | "level" | "showCloseButton">, "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "title" | "icon" | "onClose" | "showIcon" | "iconClassName" | "closeButtonClassName"> & Partial<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "level" | "showCloseButton">> & Partial<Pick<Pick<AlertProps, "className" | "level" | "showCloseButton">, "className">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "title" | "icon" | "onClose" | "showIcon" | "iconClassName" | "closeButtonClassName"> & Partial<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "level" | "showCloseButton">> & Partial<Pick<Pick<AlertProps, "className" | "level" | "showCloseButton">, "className">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "title" | "icon" | "onClose" | "showIcon" | "iconClassName" | "closeButtonClassName"> & Partial<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "level" | "showCloseButton">> & Partial<Pick<Pick<AlertProps, "className" | "level" | "showCloseButton">, "className">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "title" | "icon" | "onClose" | "showIcon" | "iconClassName" | "closeButtonClassName"> & Partial<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "level" | "showCloseButton">> & Partial<Pick<Pick<AlertProps, "className" | "level" | "showCloseButton">, "className">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "title" | "icon" | "onClose" | "showIcon" | "iconClassName" | "closeButtonClassName"> & Partial<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "level" | "showCloseButton">> & Partial<Pick<Pick<AlertProps, "className" | "level" | "showCloseButton">, "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "title" | "icon" | "onClose" | "showIcon" | "iconClassName" | "closeButtonClassName"> & Partial<Pick<Omit<AlertProps, keyof import("../theme").ThemeProps>, "level" | "showCloseButton">> & Partial<Pick<Pick<AlertProps, "className" | "level" | "showCloseButton">, "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Alert>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Alert, {}> & {
    ComposedComponent: typeof Alert;
};
export default _default;
