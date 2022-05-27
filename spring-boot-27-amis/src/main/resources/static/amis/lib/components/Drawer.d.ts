/**
 * @file Drawer
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from '../theme';
declare type DrawerPosition = 'top' | 'right' | 'bottom' | 'left';
export interface DrawerProps {
    className?: string;
    bodyClassName?: string;
    size: any;
    overlay: boolean;
    onHide: (e: any) => void;
    closeOnEsc?: boolean;
    container: any;
    show?: boolean;
    showCloseButton?: boolean;
    width?: number | string;
    height?: number | string;
    position: DrawerPosition;
    disabled?: boolean;
    closeOnOutside?: boolean;
    classPrefix: string;
    resizable?: boolean;
    classnames: ClassNamesFn;
    onExited?: () => void;
    onEntered?: () => void;
}
export interface DrawerState {
}
export declare class Drawer extends React.Component<DrawerProps, DrawerState> {
    static defaultProps: Pick<DrawerProps, 'container' | 'position' | 'size' | 'overlay' | 'showCloseButton'>;
    modalDom: HTMLElement;
    contentDom: HTMLElement;
    isRootClosed: boolean;
    resizer: React.RefObject<HTMLDivElement>;
    resizeCoord: number;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DrawerProps): void;
    componentWillUnmount(): void;
    contentRef: (ref: any) => any;
    handleEnter: () => void;
    handleEntered: () => void;
    handleExited: () => void;
    modalRef: (ref: any) => void;
    handleRootClickCapture(e: MouseEvent): void;
    handleRootClick(e: MouseEvent): void;
    getDrawerStyle(): {
        width?: string | number | undefined;
        height?: string | number | undefined;
    };
    resizeMouseDown(e: React.MouseEvent<any>): void;
    bindResize(e: any): void;
    removeResize(): void;
    renderResizeCtrl(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "disabled" | "show" | "height" | "width" | "onHide" | "onEntered" | "onExited" | "closeOnEsc" | "closeOnOutside" | "resizable" | "bodyClassName"> & Partial<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "showCloseButton" | "position" | "overlay" | "size" | "container">> & Partial<Pick<Pick<DrawerProps, "showCloseButton" | "position" | "overlay" | "size" | "container">, never>> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "disabled" | "show" | "height" | "width" | "onHide" | "onEntered" | "onExited" | "closeOnEsc" | "closeOnOutside" | "resizable" | "bodyClassName"> & Partial<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "showCloseButton" | "position" | "overlay" | "size" | "container">> & Partial<Pick<Pick<DrawerProps, "showCloseButton" | "position" | "overlay" | "size" | "container">, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "disabled" | "show" | "height" | "width" | "onHide" | "onEntered" | "onExited" | "closeOnEsc" | "closeOnOutside" | "resizable" | "bodyClassName"> & Partial<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "showCloseButton" | "position" | "overlay" | "size" | "container">> & Partial<Pick<Pick<DrawerProps, "showCloseButton" | "position" | "overlay" | "size" | "container">, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "disabled" | "show" | "height" | "width" | "onHide" | "onEntered" | "onExited" | "closeOnEsc" | "closeOnOutside" | "resizable" | "bodyClassName"> & Partial<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "showCloseButton" | "position" | "overlay" | "size" | "container">> & Partial<Pick<Pick<DrawerProps, "showCloseButton" | "position" | "overlay" | "size" | "container">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "disabled" | "show" | "height" | "width" | "onHide" | "onEntered" | "onExited" | "closeOnEsc" | "closeOnOutside" | "resizable" | "bodyClassName"> & Partial<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "showCloseButton" | "position" | "overlay" | "size" | "container">> & Partial<Pick<Pick<DrawerProps, "showCloseButton" | "position" | "overlay" | "size" | "container">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "disabled" | "show" | "height" | "width" | "onHide" | "onEntered" | "onExited" | "closeOnEsc" | "closeOnOutside" | "resizable" | "bodyClassName"> & Partial<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "showCloseButton" | "position" | "overlay" | "size" | "container">> & Partial<Pick<Pick<DrawerProps, "showCloseButton" | "position" | "overlay" | "size" | "container">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "disabled" | "show" | "height" | "width" | "onHide" | "onEntered" | "onExited" | "closeOnEsc" | "closeOnOutside" | "resizable" | "bodyClassName"> & Partial<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "showCloseButton" | "position" | "overlay" | "size" | "container">> & Partial<Pick<Pick<DrawerProps, "showCloseButton" | "position" | "overlay" | "size" | "container">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "disabled" | "show" | "height" | "width" | "onHide" | "onEntered" | "onExited" | "closeOnEsc" | "closeOnOutside" | "resizable" | "bodyClassName"> & Partial<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "showCloseButton" | "position" | "overlay" | "size" | "container">> & Partial<Pick<Pick<DrawerProps, "showCloseButton" | "position" | "overlay" | "size" | "container">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "disabled" | "show" | "height" | "width" | "onHide" | "onEntered" | "onExited" | "closeOnEsc" | "closeOnOutside" | "resizable" | "bodyClassName"> & Partial<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "showCloseButton" | "position" | "overlay" | "size" | "container">> & Partial<Pick<Pick<DrawerProps, "showCloseButton" | "position" | "overlay" | "size" | "container">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "disabled" | "show" | "height" | "width" | "onHide" | "onEntered" | "onExited" | "closeOnEsc" | "closeOnOutside" | "resizable" | "bodyClassName"> & Partial<Pick<Omit<DrawerProps, keyof import("../theme").ThemeProps>, "showCloseButton" | "position" | "overlay" | "size" | "container">> & Partial<Pick<Pick<DrawerProps, "showCloseButton" | "position" | "overlay" | "size" | "container">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Drawer>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Drawer, {}> & {
    ComposedComponent: typeof Drawer;
};
export default _default;
