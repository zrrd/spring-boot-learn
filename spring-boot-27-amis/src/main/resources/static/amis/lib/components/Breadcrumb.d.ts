/**
 * @file Breadcrumb 面包屑
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { Trigger } from './TooltipWrapper';
import { ClassNamesFn, ThemeProps } from '../theme';
import { ItemPlace, BreadcrumbBaseItemSchema, BreadcrumbItemSchema, TooltipPositionType, BreadcrumbSchema } from '../renderers/Breadcrumb';
interface BreadcrumbItemState {
    isOpened: boolean;
    tooltipTrigger: Trigger | Array<Trigger>;
    tooltipRootClose: boolean;
}
interface BreadcrumbBaseItemProps extends BreadcrumbBaseItemSchema {
}
interface BreadcrumbItemProps {
    item: BreadcrumbItemSchema;
    itemPlace: ItemPlace;
    labelMaxLength?: number;
    tooltipContainer?: any;
    tooltipPosition?: TooltipPositionType;
    classnames: ClassNamesFn;
    [propName: string]: any;
}
interface BreadcrumbProps extends ThemeProps, Omit<BreadcrumbSchema, 'type' | 'className'> {
    tooltipContainer?: any;
    tooltipPosition?: TooltipPositionType;
    [propName: string]: any;
}
/**
 * Breadcrumb 面包屑类
 */
export declare class Breadcrumb extends React.Component<BreadcrumbProps> {
    Item: typeof BreadcrumbItem;
    static defaultProps: Pick<BreadcrumbProps, 'separator' | 'labelMaxLength' | 'tooltipPosition'>;
    render(): JSX.Element;
}
/**
 * BreadcrumbItem 面包项类
 */
export declare class BreadcrumbItem extends React.Component<BreadcrumbItemProps, BreadcrumbItemState> {
    target: any;
    state: BreadcrumbItemState;
    domRef: (ref: any) => void;
    toogle: (e: React.MouseEvent<any>) => void;
    close: () => void;
    /**
     * 渲染基础面包项
     * @param showHref 是否显示超链接
     * @param itemType 基础面包项类型
     * @param item 面包项
     * @param label 渲染文本
     * @returns
     */
    renderBreadcrumbBaseItem(showHref: boolean, itemType: 'default' | 'dropdown', item: BreadcrumbBaseItemProps, label?: string): JSX.Element;
    /**
     * 渲染基础面包项完整节点
     * @param item 面包项
     * @param tooltipPosition 浮窗提示位置
     * @param itemPlace 面包香所在相对位置
     * @param itemType 基础面包项类型
     * @returns
     */
    renderBreadcrumbNode(item: BreadcrumbBaseItemProps, tooltipPosition: TooltipPositionType | undefined, itemPlace: ItemPlace, itemType: 'default' | 'dropdown'): JSX.Element;
    /**
     * 渲染下拉菜单节点
     * @param dropdown 面包项下拉菜单
     * @returns
     */
    renderDropdownNode(dropdown: BreadcrumbBaseItemProps[]): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<BreadcrumbProps, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<BreadcrumbProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Breadcrumb>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Breadcrumb, {}> & {
    ComposedComponent: typeof Breadcrumb;
};
export default _default;
