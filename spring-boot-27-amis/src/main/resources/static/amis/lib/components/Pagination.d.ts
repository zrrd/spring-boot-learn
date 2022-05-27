/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { LocaleProps } from '../locale';
import { ThemeProps } from '../theme';
export declare type MODE_TYPE = 'simple' | 'normal';
export declare const enum PaginationWidget {
    Pager = "pager",
    PerPage = "perpage",
    Total = "total",
    Go = "go"
}
export interface BasicPaginationProps {
    /**
     * 通过控制layout属性的顺序，调整分页结构 total,perPage,pager,go
     * @default ['pager']
     */
    layout?: string | Array<string>;
    /**
     * 最多显示多少个分页按钮。
     *
     * @default 5
     */
    maxButtons: number;
    /**
     * 模式，默认normal，如果只想简单显示可以配置成 `simple`。
     * @default 'normal'
     */
    mode?: MODE_TYPE;
    /**
     * 当前页数
     */
    activePage: number;
    /**
     * 总条数
     */
    total?: number;
    /**
     * 最后一页，总页数（如果传入了total，会重新计算lastPage）
     */
    lastPage?: number;
    /**
     * 每页显示条数
     * @default 10
     */
    perPage?: number;
    /**
     * 是否展示分页切换，也同时受layout控制
     * @default false
     */
    showPerPage?: boolean;
    /**
     * 指定每页可以显示多少条
     * @default [10, 20, 50, 100]
     */
    perPageAvailable?: Array<number>;
    /**
     * 是否显示快速跳转输入框
     * @default false
     */
    showPageInput?: boolean;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    hasNext?: boolean;
    onPageChange?: (page: number, perPage?: number) => void;
}
export interface PaginationProps extends BasicPaginationProps, ThemeProps, LocaleProps {
}
export interface PaginationState {
    pageNum: string;
    perPage: number;
}
export declare class Pagination extends React.Component<PaginationProps, PaginationState> {
    static defaultProps: {
        layout: PaginationWidget[];
        maxButtons: number;
        mode: MODE_TYPE;
        activePage: number;
        perPage: number;
        perPageAvailable: number[];
    };
    state: {
        pageNum: string;
        perPage: number;
    };
    constructor(props: PaginationProps);
    handlePageNumChange(page: number, perPage?: number): void;
    /**
     * 渲染每个页码li
     *
     * @param page 页码
     */
    renderPageItem(page: number): JSX.Element;
    /**
     * 渲染...
     *
     * @param key 类型 'prev-ellipsis' | 'next-ellipsis'
     * @param page 页码
     */
    renderEllipsis(key: string): JSX.Element;
    /**
     * 渲染器事件方法装饰器
     *
     * @param cur 当前页数
     * @param counts 总共页码按钮数
     * @param min 最小页码
     * @param max 最大页码
     */
    handlePageNums(cur: number, counts: number, min: number, max: number): Array<any>;
    getLastPage(): number;
    handlePageChange(e: React.ChangeEvent<any>): void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
        layout: PaginationWidget[];
        maxButtons: number;
        mode: MODE_TYPE;
        activePage: number;
        perPage: number;
        perPageAvailable: number[];
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any; /**
             * 渲染每个页码li
             *
             * @param page 页码
             */
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Pagination>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Pagination, {}> & {
        ComposedComponent: typeof Pagination;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
        layout: PaginationWidget[];
        maxButtons: number;
        mode: MODE_TYPE;
        activePage: number;
        perPage: number;
        perPageAvailable: number[];
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any; /**
         * 渲染每个页码li
         *
         * @param page 页码
         */
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Pagination>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Pagination, {}> & {
    ComposedComponent: typeof Pagination;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
            layout: PaginationWidget[];
            maxButtons: number;
            mode: MODE_TYPE;
            activePage: number;
            perPage: number;
            perPageAvailable: number[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any; /**
             * 渲染每个页码li
             *
             * @param page 页码
             */
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PaginationProps, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "disabled" | "total" | "hasNext" | "showPageInput" | "lastPage" | "showPerPage" | "onPageChange"> & Partial<Pick<Omit<PaginationProps, keyof LocaleProps>, "layout" | "mode" | "perPage" | "perPageAvailable" | "maxButtons" | "activePage">> & Partial<Pick<{
                layout: PaginationWidget[];
                maxButtons: number;
                mode: MODE_TYPE;
                activePage: number;
                perPage: number;
                perPageAvailable: number[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof Pagination>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof Pagination, {}> & {
        ComposedComponent: typeof Pagination;
    };
};
export default _default;
