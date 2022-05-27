/**
 * @file PopUp
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from '../theme';
import { LocaleProps } from '../locale';
export interface PopUpPorps extends ThemeProps, LocaleProps {
    title?: string;
    className?: string;
    style?: {
        [styleName: string]: string;
    };
    overlay?: boolean;
    onHide?: () => void;
    isShow?: boolean;
    container?: any;
    showConfirm?: boolean;
    onConfirm?: (value: any) => void;
    showClose?: boolean;
    placement?: 'left' | 'center' | 'right';
    header?: JSX.Element;
}
export declare class PopUp extends React.PureComponent<PopUpPorps> {
    scrollTop: number;
    static defaultProps: {
        className: string;
        overlay: boolean;
        isShow: boolean;
        container: HTMLElement;
        showClose: boolean;
        onConfirm: () => void;
    };
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    handleClick(e: React.MouseEvent): void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
        className: string;
        overlay: boolean;
        isShow: boolean;
        container: HTMLElement;
        showClose: boolean;
        onConfirm: () => void;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof PopUp>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof PopUp, {}> & {
        ComposedComponent: typeof PopUp;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
        className: string;
        overlay: boolean;
        isShow: boolean;
        container: HTMLElement;
        showClose: boolean;
        onConfirm: () => void;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof PopUp>;
} & import("hoist-non-react-statics").NonReactStatics<typeof PopUp, {}> & {
    ComposedComponent: typeof PopUp;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
            className: string;
            overlay: boolean;
            isShow: boolean;
            container: HTMLElement;
            showClose: boolean;
            onConfirm: () => void;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<PopUpPorps, keyof LocaleProps>, "classPrefix" | "classnames" | "header" | "style" | "title" | "theme" | "placement" | "onHide" | "showConfirm"> & Partial<Pick<Omit<PopUpPorps, keyof LocaleProps>, "className" | "overlay" | "container" | "onConfirm" | "isShow" | "showClose">> & Partial<Pick<{
                className: string;
                overlay: boolean;
                isShow: boolean;
                container: HTMLElement;
                showClose: boolean;
                onConfirm: () => void;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof PopUp>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof PopUp, {}> & {
        ComposedComponent: typeof PopUp;
    };
};
export default _default;
