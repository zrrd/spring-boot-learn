/**
 * @file table/BodyCell
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from '../../theme';
import { LocaleProps } from '../../locale';
import { ColumnProps } from './index';
export interface Props extends ThemeProps, LocaleProps {
    fixed?: string | boolean;
    rowSpan?: number | any;
    colSpan?: number | any;
    key?: string | number;
    className?: string;
    children?: any;
    tagName?: string;
    style?: Object;
    column?: ColumnProps;
    wrapperComponent: any;
    groupId?: string;
    depth?: number;
}
export declare class BodyCell extends React.Component<Props> {
    static defaultProps: {
        fixed: string;
        wrapperComponent: string;
        rowSpan: null;
        colSpan: null;
    };
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
        fixed: string;
        wrapperComponent: string;
        rowSpan: null;
        colSpan: null;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof BodyCell>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof BodyCell, {}> & {
        ComposedComponent: typeof BodyCell;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
        fixed: string;
        wrapperComponent: string;
        rowSpan: null;
        colSpan: null;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof BodyCell>;
} & import("hoist-non-react-statics").NonReactStatics<typeof BodyCell, {}> & {
    ComposedComponent: typeof BodyCell;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
            fixed: string;
            wrapperComponent: string;
            rowSpan: null;
            colSpan: null;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "style" | "children" | "className" | "theme" | "key" | "column" | "depth" | "tagName" | "groupId"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "fixed" | "colSpan" | "rowSpan" | "wrapperComponent">> & Partial<Pick<{
                fixed: string;
                wrapperComponent: string;
                rowSpan: null;
                colSpan: null;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof BodyCell>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof BodyCell, {}> & {
        ComposedComponent: typeof BodyCell;
    };
};
export default _default;
