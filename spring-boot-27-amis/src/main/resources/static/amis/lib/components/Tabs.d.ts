/**
 * @file Tabs
 * @description 选项卡
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
/// <reference types="lodash" />
import React from 'react';
import { Schema } from '../types';
import { ThemeProps } from '../theme';
import { SchemaClassName } from '../Schema';
import Sortable from 'sortablejs';
export declare type TabsMode = '' | 'line' | 'card' | 'radio' | 'vertical' | 'chrome' | 'simple' | 'strong' | 'tiled' | 'sidebar';
export interface TabProps extends ThemeProps {
    title?: string | React.ReactNode;
    icon?: string;
    iconPosition?: 'left' | 'right';
    disabled?: boolean | string;
    eventKey: string | number;
    tab?: Schema;
    className?: string;
    activeKey?: string | number;
    reload?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    toolbar?: React.ReactNode;
}
declare class TabComponent extends React.PureComponent<TabProps> {
    contentDom: any;
    contentRef: (ref: any) => any;
    render(): JSX.Element;
}
export declare const Tab: {
    new (props: Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof TabComponent>;
} & import("hoist-non-react-statics").NonReactStatics<typeof TabComponent, {}> & {
    ComposedComponent: typeof TabComponent;
};
export interface TabsProps extends ThemeProps {
    mode: TabsMode;
    tabsMode?: TabsMode;
    additionBtns?: React.ReactNode;
    onSelect?: (key: string | number) => void;
    activeKey?: string | number;
    contentClassName: string;
    linksClassName?: SchemaClassName;
    className?: string;
    tabs?: Array<TabProps>;
    tabRender?: (tab: TabProps, props?: TabsProps) => JSX.Element;
    toolbar?: React.ReactNode;
    addable?: boolean;
    onAdd?: () => void;
    closable?: boolean;
    onClose?: (index: number, key: string | number) => void;
    draggable?: boolean;
    onDragChange?: (e: any) => void;
    showTip?: boolean;
    showTipClassName?: string;
    scrollable?: boolean;
    editable?: boolean;
    onEdit?: (index: number, text: string) => void;
    sidePosition?: 'left' | 'right';
    addBtnText?: string;
}
export interface IDragInfo {
    nodeId: string;
}
export declare class Tabs extends React.Component<TabsProps, any> {
    static defaultProps: Pick<TabsProps, 'mode' | 'contentClassName' | 'showTip' | 'showTipClassName' | 'sidePosition' | 'addBtnText'>;
    static Tab: {
        new (props: Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<TabProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof TabComponent>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof TabComponent, {}> & {
        ComposedComponent: typeof TabComponent;
    };
    navMain: React.RefObject<HTMLUListElement>;
    scroll: boolean;
    sortable?: Sortable;
    dragTip?: HTMLElement;
    id: string;
    draging: boolean;
    toDispose: Array<() => void>;
    resizeDom: React.RefObject<HTMLDivElement>;
    checkArrowStatus: import("lodash").DebouncedFunc<() => void>;
    constructor(props: TabsProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    /**
     * 处理内容与容器之间的位置关系
     */
    computedWidth(): void;
    /**
     * 保证选中的tab始终显示在可视区域
     */
    showSelected(key?: string | number): void;
    handleSelect(key: string | number): void;
    handleStartEdit(index: number, title: string): void;
    handleEditInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    handleEdit(): void;
    dragTipRef(ref: any): void;
    destroyDragging(): void;
    initDragging(): void;
    handleArrow(type: 'left' | 'right'): void;
    /**
     * 监听导航上的滚动事件
     */
    handleWheel(e: WheelEvent): void;
    renderNav(child: any, index: number, showClose: boolean): JSX.Element | undefined;
    renderTab(child: any, index: number): React.DetailedReactHTMLElement<any, HTMLElement> | undefined;
    renderArrow(type: 'left' | 'right'): JSX.Element | null | undefined;
    handleAddBtn(): void;
    render(): JSX.Element | null;
}
declare const _default: {
    new (props: Pick<Omit<TabsProps, keyof ThemeProps>, "toolbar" | "onClose" | "onEdit" | "onAdd" | "onSelect" | "tabs" | "draggable" | "addable" | "tabsMode" | "editable" | "activeKey" | "linksClassName" | "scrollable" | "closable" | "additionBtns" | "tabRender" | "onDragChange"> & Partial<Pick<Omit<TabsProps, keyof ThemeProps>, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">, never>> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "toolbar" | "onClose" | "onEdit" | "onAdd" | "onSelect" | "tabs" | "draggable" | "addable" | "tabsMode" | "editable" | "activeKey" | "linksClassName" | "scrollable" | "closable" | "additionBtns" | "tabRender" | "onDragChange"> & Partial<Pick<Omit<TabsProps, keyof ThemeProps>, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "toolbar" | "onClose" | "onEdit" | "onAdd" | "onSelect" | "tabs" | "draggable" | "addable" | "tabsMode" | "editable" | "activeKey" | "linksClassName" | "scrollable" | "closable" | "additionBtns" | "tabRender" | "onDragChange"> & Partial<Pick<Omit<TabsProps, keyof ThemeProps>, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "toolbar" | "onClose" | "onEdit" | "onAdd" | "onSelect" | "tabs" | "draggable" | "addable" | "tabsMode" | "editable" | "activeKey" | "linksClassName" | "scrollable" | "closable" | "additionBtns" | "tabRender" | "onDragChange"> & Partial<Pick<Omit<TabsProps, keyof ThemeProps>, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "toolbar" | "onClose" | "onEdit" | "onAdd" | "onSelect" | "tabs" | "draggable" | "addable" | "tabsMode" | "editable" | "activeKey" | "linksClassName" | "scrollable" | "closable" | "additionBtns" | "tabRender" | "onDragChange"> & Partial<Pick<Omit<TabsProps, keyof ThemeProps>, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "toolbar" | "onClose" | "onEdit" | "onAdd" | "onSelect" | "tabs" | "draggable" | "addable" | "tabsMode" | "editable" | "activeKey" | "linksClassName" | "scrollable" | "closable" | "additionBtns" | "tabRender" | "onDragChange"> & Partial<Pick<Omit<TabsProps, keyof ThemeProps>, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "toolbar" | "onClose" | "onEdit" | "onAdd" | "onSelect" | "tabs" | "draggable" | "addable" | "tabsMode" | "editable" | "activeKey" | "linksClassName" | "scrollable" | "closable" | "additionBtns" | "tabRender" | "onDragChange"> & Partial<Pick<Omit<TabsProps, keyof ThemeProps>, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "toolbar" | "onClose" | "onEdit" | "onAdd" | "onSelect" | "tabs" | "draggable" | "addable" | "tabsMode" | "editable" | "activeKey" | "linksClassName" | "scrollable" | "closable" | "additionBtns" | "tabRender" | "onDragChange"> & Partial<Pick<Omit<TabsProps, keyof ThemeProps>, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "toolbar" | "onClose" | "onEdit" | "onAdd" | "onSelect" | "tabs" | "draggable" | "addable" | "tabsMode" | "editable" | "activeKey" | "linksClassName" | "scrollable" | "closable" | "additionBtns" | "tabRender" | "onDragChange"> & Partial<Pick<Omit<TabsProps, keyof ThemeProps>, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TabsProps, keyof ThemeProps>, "toolbar" | "onClose" | "onEdit" | "onAdd" | "onSelect" | "tabs" | "draggable" | "addable" | "tabsMode" | "editable" | "activeKey" | "linksClassName" | "scrollable" | "closable" | "additionBtns" | "tabRender" | "onDragChange"> & Partial<Pick<Omit<TabsProps, keyof ThemeProps>, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">> & Partial<Pick<Pick<TabsProps, "mode" | "contentClassName" | "showTip" | "showTipClassName" | "sidePosition" | "addBtnText">, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Tabs>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Tabs, {}> & {
    ComposedComponent: typeof Tabs;
} & {
    Tab: typeof Tab;
};
export default _default;
