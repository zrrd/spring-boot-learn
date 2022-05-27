/**
 * @file PullRefresh.tsx
 * @description 下拉刷新
 * @author hongyang03
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from '../theme';
import { TranslateFn } from '../locale';
export interface PullRefreshProps {
    classnames: ClassNamesFn;
    classPrefix: string;
    translate: TranslateFn;
    disabled?: boolean;
    pullingText?: string;
    loosingText?: string;
    loadingText?: string;
    successText?: string;
    onRefresh?: () => void;
    loading?: boolean;
    successDuration?: number;
    loadingDuration?: number;
}
declare type statusText = 'normal' | 'pulling' | 'loosing' | 'success' | 'loading';
export interface PullRefreshState {
    status: statusText;
    offsetY: number;
}
declare const _default: {
    new (props: Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<PullRefreshProps & React.RefAttributes<{}>, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<React.ForwardRefExoticComponent<PullRefreshProps & React.RefAttributes<{}>>>;
} & import("hoist-non-react-statics").NonReactStatics<React.ForwardRefExoticComponent<PullRefreshProps & React.RefAttributes<{}>>, {}> & {
    ComposedComponent: React.ForwardRefExoticComponent<PullRefreshProps & React.RefAttributes<{}>>;
};
export default _default;
