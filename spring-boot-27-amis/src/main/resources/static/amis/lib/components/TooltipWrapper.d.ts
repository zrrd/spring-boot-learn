/**
 * @file TooltipWrapper
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from '../theme';
export declare type Trigger = 'hover' | 'click' | 'focus';
export interface TooltipObject {
    /**
     * 文字提示标题
     */
    title?: string;
    /**
     * 文字提示内容
     */
    content?: string;
    /**
     * 浮层出现位置
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * 主题样式
     */
    tooltipTheme?: 'light' | 'dark';
    /**
     * 浮层位置相对偏移量
     */
    offset?: [number, number];
    /**
     * 内容区自定义样式
     */
    style?: React.CSSProperties;
    /**
     * 是否可以移入浮层中, 默认true
     */
    enterable?: boolean;
    /**
     * 是否展示浮层指向箭头
     */
    showArrow?: boolean;
    /**
     * 是否禁用提示
     */
    disabled?: boolean;
    /**
     * 浮层延迟显示时间, 单位 ms
     */
    mouseEnterDelay?: number;
    /**
     * 浮层延迟隐藏时间, 单位 ms
     */
    mouseLeaveDelay?: number;
    /**
     * 浮层内容可通过JSX渲染
     */
    children?: () => JSX.Element | JSX.Element;
    /**
     * 挂载容器元素
     */
    container?: React.ReactNode;
    /**
     * 浮层触发方式
     */
    trigger?: Trigger | Array<Trigger>;
    /**
     * 是否点击非内容区域关闭提示，默认为true
     */
    rootClose?: boolean;
    /**
     * 文字提示浮层CSS类名
     */
    tooltipClassName?: string;
}
export interface TooltipWrapperProps {
    tooltip?: string | TooltipObject;
    classPrefix: string;
    classnames: ClassNamesFn;
    placement: 'top' | 'right' | 'bottom' | 'left';
    container?: React.ReactNode;
    trigger: Trigger | Array<Trigger>;
    rootClose: boolean;
    overlay?: any;
    delay: number;
    tooltipTheme?: string;
    tooltipClassName?: string;
    style?: React.CSSProperties;
    /**
     * 显示&隐藏时触发
     */
    onVisibleChange?: (visible: boolean) => void;
}
interface TooltipWrapperState {
    show?: boolean;
}
export declare class TooltipWrapper extends React.Component<TooltipWrapperProps, TooltipWrapperState> {
    static defaultProps: Pick<TooltipWrapperProps, 'placement' | 'trigger' | 'rootClose' | 'delay'>;
    target: HTMLElement;
    timer: ReturnType<typeof setTimeout>;
    moutned: boolean;
    constructor(props: TooltipWrapperProps);
    componentWillUnmount(): void;
    getTarget(): Element | Text | null;
    show(): void;
    hide(): void;
    getChildProps(): any;
    tooltipMouseEnter: (e: MouseEvent) => void;
    tooltipMouseLeave: (e: MouseEvent) => void;
    handleShow(): void;
    handleHide(): void;
    handleFocus(e: any): void;
    handleBlur(e: any): void;
    handleMouseOver(e: any): void;
    handleMouseOut(e: any): void;
    handleMouseOverOut(handler: Function, e: React.MouseEvent<HTMLElement>, relatedNative: string): void;
    handleClick(e: any): void;
    render(): React.ReactNode;
}
declare const _default: {
    new (props: Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "style" | "tooltip" | "overlay" | "container" | "tooltipTheme" | "tooltipClassName" | "onVisibleChange"> & Partial<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "placement" | "rootClose" | "trigger" | "delay">> & Partial<Pick<Pick<TooltipWrapperProps, "placement" | "rootClose" | "trigger" | "delay">, never>> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "style" | "tooltip" | "overlay" | "container" | "tooltipTheme" | "tooltipClassName" | "onVisibleChange"> & Partial<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "placement" | "rootClose" | "trigger" | "delay">> & Partial<Pick<Pick<TooltipWrapperProps, "placement" | "rootClose" | "trigger" | "delay">, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "style" | "tooltip" | "overlay" | "container" | "tooltipTheme" | "tooltipClassName" | "onVisibleChange"> & Partial<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "placement" | "rootClose" | "trigger" | "delay">> & Partial<Pick<Pick<TooltipWrapperProps, "placement" | "rootClose" | "trigger" | "delay">, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "style" | "tooltip" | "overlay" | "container" | "tooltipTheme" | "tooltipClassName" | "onVisibleChange"> & Partial<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "placement" | "rootClose" | "trigger" | "delay">> & Partial<Pick<Pick<TooltipWrapperProps, "placement" | "rootClose" | "trigger" | "delay">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "style" | "tooltip" | "overlay" | "container" | "tooltipTheme" | "tooltipClassName" | "onVisibleChange"> & Partial<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "placement" | "rootClose" | "trigger" | "delay">> & Partial<Pick<Pick<TooltipWrapperProps, "placement" | "rootClose" | "trigger" | "delay">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "style" | "tooltip" | "overlay" | "container" | "tooltipTheme" | "tooltipClassName" | "onVisibleChange"> & Partial<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "placement" | "rootClose" | "trigger" | "delay">> & Partial<Pick<Pick<TooltipWrapperProps, "placement" | "rootClose" | "trigger" | "delay">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "style" | "tooltip" | "overlay" | "container" | "tooltipTheme" | "tooltipClassName" | "onVisibleChange"> & Partial<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "placement" | "rootClose" | "trigger" | "delay">> & Partial<Pick<Pick<TooltipWrapperProps, "placement" | "rootClose" | "trigger" | "delay">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "style" | "tooltip" | "overlay" | "container" | "tooltipTheme" | "tooltipClassName" | "onVisibleChange"> & Partial<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "placement" | "rootClose" | "trigger" | "delay">> & Partial<Pick<Pick<TooltipWrapperProps, "placement" | "rootClose" | "trigger" | "delay">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "style" | "tooltip" | "overlay" | "container" | "tooltipTheme" | "tooltipClassName" | "onVisibleChange"> & Partial<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "placement" | "rootClose" | "trigger" | "delay">> & Partial<Pick<Pick<TooltipWrapperProps, "placement" | "rootClose" | "trigger" | "delay">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "style" | "tooltip" | "overlay" | "container" | "tooltipTheme" | "tooltipClassName" | "onVisibleChange"> & Partial<Pick<Omit<TooltipWrapperProps, keyof import("../theme").ThemeProps>, "placement" | "rootClose" | "trigger" | "delay">> & Partial<Pick<Pick<TooltipWrapperProps, "placement" | "rootClose" | "trigger" | "delay">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof TooltipWrapper>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TooltipWrapper, {}> & {
    ComposedComponent: typeof TooltipWrapper;
};
export default _default;
