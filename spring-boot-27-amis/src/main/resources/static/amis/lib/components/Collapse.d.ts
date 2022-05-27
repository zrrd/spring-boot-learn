/**
 * @file Collapse
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from '../theme';
import { TranslateFn } from '../locale';
export interface CollapseProps {
    key?: string;
    id?: string;
    propKey?: string;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    className?: string;
    classPrefix: string;
    classnames: ClassNamesFn;
    headerPosition?: 'top' | 'bottom';
    header?: React.ReactNode;
    body: any;
    bodyClassName?: string;
    disabled?: boolean;
    collapsable?: boolean;
    collapsed?: boolean;
    showArrow?: boolean;
    expandIcon?: React.ReactElement | null;
    headingClassName?: string;
    collapseHeader?: React.ReactElement | null;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'base';
    onCollapse?: (item: any, collapsed: boolean) => void;
    wrapperComponent?: any;
    headingComponent?: any;
    translate?: TranslateFn;
    propsUpdate?: boolean;
}
export interface CollapseState {
    collapsed: boolean;
}
export declare class Collapse extends React.Component<CollapseProps, CollapseState> {
    static defaultProps: Partial<CollapseProps>;
    state: CollapseState;
    constructor(props: CollapseProps);
    static getDerivedStateFromProps(nextProps: CollapseProps, preState: CollapseState): {
        collapsed: boolean;
    } | null;
    toggleCollapsed(e: React.MouseEvent<HTMLElement>): void;
    contentDom: any;
    contentRef: (ref: any) => any;
    handleEnter(elem: HTMLElement): void;
    handleEntering(elem: HTMLElement): void;
    handleEntered(elem: HTMLElement): void;
    handleExit(elem: HTMLElement): void;
    handleExiting(elem: HTMLElement): void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, "body" | "header" | "disabled" | "id" | "key" | "collapsed" | "size" | "wrapperComponent" | "showArrow" | "translate" | "mountOnEnter" | "unmountOnExit" | "bodyClassName" | "headerPosition" | "collapsable" | "expandIcon" | "headingClassName" | "collapseHeader" | "propKey" | "onCollapse" | "headingComponent" | "propsUpdate">> & Partial<Pick<Partial<CollapseProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, "body" | "header" | "disabled" | "id" | "key" | "collapsed" | "size" | "wrapperComponent" | "showArrow" | "translate" | "mountOnEnter" | "unmountOnExit" | "bodyClassName" | "headerPosition" | "collapsable" | "expandIcon" | "headingClassName" | "collapseHeader" | "propKey" | "onCollapse" | "headingComponent" | "propsUpdate">> & Partial<Pick<Partial<CollapseProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, "body" | "header" | "disabled" | "id" | "key" | "collapsed" | "size" | "wrapperComponent" | "showArrow" | "translate" | "mountOnEnter" | "unmountOnExit" | "bodyClassName" | "headerPosition" | "collapsable" | "expandIcon" | "headingClassName" | "collapseHeader" | "propKey" | "onCollapse" | "headingComponent" | "propsUpdate">> & Partial<Pick<Partial<CollapseProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, "body" | "header" | "disabled" | "id" | "key" | "collapsed" | "size" | "wrapperComponent" | "showArrow" | "translate" | "mountOnEnter" | "unmountOnExit" | "bodyClassName" | "headerPosition" | "collapsable" | "expandIcon" | "headingClassName" | "collapseHeader" | "propKey" | "onCollapse" | "headingComponent" | "propsUpdate">> & Partial<Pick<Partial<CollapseProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, "body" | "header" | "disabled" | "id" | "key" | "collapsed" | "size" | "wrapperComponent" | "showArrow" | "translate" | "mountOnEnter" | "unmountOnExit" | "bodyClassName" | "headerPosition" | "collapsable" | "expandIcon" | "headingClassName" | "collapseHeader" | "propKey" | "onCollapse" | "headingComponent" | "propsUpdate">> & Partial<Pick<Partial<CollapseProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, "body" | "header" | "disabled" | "id" | "key" | "collapsed" | "size" | "wrapperComponent" | "showArrow" | "translate" | "mountOnEnter" | "unmountOnExit" | "bodyClassName" | "headerPosition" | "collapsable" | "expandIcon" | "headingClassName" | "collapseHeader" | "propKey" | "onCollapse" | "headingComponent" | "propsUpdate">> & Partial<Pick<Partial<CollapseProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, "body" | "header" | "disabled" | "id" | "key" | "collapsed" | "size" | "wrapperComponent" | "showArrow" | "translate" | "mountOnEnter" | "unmountOnExit" | "bodyClassName" | "headerPosition" | "collapsable" | "expandIcon" | "headingClassName" | "collapseHeader" | "propKey" | "onCollapse" | "headingComponent" | "propsUpdate">> & Partial<Pick<Partial<CollapseProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, "body" | "header" | "disabled" | "id" | "key" | "collapsed" | "size" | "wrapperComponent" | "showArrow" | "translate" | "mountOnEnter" | "unmountOnExit" | "bodyClassName" | "headerPosition" | "collapsable" | "expandIcon" | "headingClassName" | "collapseHeader" | "propKey" | "onCollapse" | "headingComponent" | "propsUpdate">> & Partial<Pick<Partial<CollapseProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, "body" | "header" | "disabled" | "id" | "key" | "collapsed" | "size" | "wrapperComponent" | "showArrow" | "translate" | "mountOnEnter" | "unmountOnExit" | "bodyClassName" | "headerPosition" | "collapsable" | "expandIcon" | "headingClassName" | "collapseHeader" | "propKey" | "onCollapse" | "headingComponent" | "propsUpdate">> & Partial<Pick<Partial<CollapseProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseProps, keyof import("../theme").ThemeProps>, "body" | "header" | "disabled" | "id" | "key" | "collapsed" | "size" | "wrapperComponent" | "showArrow" | "translate" | "mountOnEnter" | "unmountOnExit" | "bodyClassName" | "headerPosition" | "collapsable" | "expandIcon" | "headingClassName" | "collapseHeader" | "propKey" | "onCollapse" | "headingComponent" | "propsUpdate">> & Partial<Pick<Partial<CollapseProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Collapse>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Collapse, {}> & {
    ComposedComponent: typeof Collapse;
};
export default _default;
