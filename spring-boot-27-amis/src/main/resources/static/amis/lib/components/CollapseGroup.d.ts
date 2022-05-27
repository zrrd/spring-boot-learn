/**
 * @file CollapseGroup
 * @description 折叠面板group
 * @author hongyang03
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { CollapseProps } from '../renderers/Collapse';
import { SchemaNode } from '../types';
import { ClassNamesFn } from '../theme';
export interface CollapseGroupProps {
    defaultActiveKey?: Array<string | number | never> | string | number;
    accordion?: boolean;
    expandIcon?: SchemaNode;
    expandIconPosition?: 'left' | 'right';
    body?: Array<React.ReactElement>;
    className?: string;
    classnames: ClassNamesFn;
    classPrefix: string;
}
export interface CollapseGroupState {
    activeKey: Array<string | number | never>;
}
declare class CollapseGroup extends React.Component<CollapseGroupProps, CollapseGroupState> {
    static defaultProps: Partial<CollapseGroupProps>;
    constructor(props: CollapseGroupProps);
    collapseChange(item: CollapseProps, collapsed: boolean): void;
    getItems: (children: React.ReactNode) => React.ReactNode;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, "body" | "expandIcon" | "defaultActiveKey" | "accordion" | "expandIconPosition">> & Partial<Pick<Partial<CollapseGroupProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, "body" | "expandIcon" | "defaultActiveKey" | "accordion" | "expandIconPosition">> & Partial<Pick<Partial<CollapseGroupProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, "body" | "expandIcon" | "defaultActiveKey" | "accordion" | "expandIconPosition">> & Partial<Pick<Partial<CollapseGroupProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, "body" | "expandIcon" | "defaultActiveKey" | "accordion" | "expandIconPosition">> & Partial<Pick<Partial<CollapseGroupProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, "body" | "expandIcon" | "defaultActiveKey" | "accordion" | "expandIconPosition">> & Partial<Pick<Partial<CollapseGroupProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, "body" | "expandIcon" | "defaultActiveKey" | "accordion" | "expandIconPosition">> & Partial<Pick<Partial<CollapseGroupProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, "body" | "expandIcon" | "defaultActiveKey" | "accordion" | "expandIconPosition">> & Partial<Pick<Partial<CollapseGroupProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, "body" | "expandIcon" | "defaultActiveKey" | "accordion" | "expandIconPosition">> & Partial<Pick<Partial<CollapseGroupProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, "body" | "expandIcon" | "defaultActiveKey" | "accordion" | "expandIconPosition">> & Partial<Pick<Partial<CollapseGroupProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, never> & Partial<Pick<Omit<CollapseGroupProps, keyof import("../theme").ThemeProps>, "body" | "expandIcon" | "defaultActiveKey" | "accordion" | "expandIconPosition">> & Partial<Pick<Partial<CollapseGroupProps>, "classPrefix" | "classnames" | "className">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof CollapseGroup>;
} & import("hoist-non-react-statics").NonReactStatics<typeof CollapseGroup, {}> & {
    ComposedComponent: typeof CollapseGroup;
};
export default _default;
