/**
 * @file table/HeadCellFilter
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from '../../theme';
import { LocaleProps } from '../../locale';
import { FilterPayload } from './HeadCellDropDown';
export interface Props extends ThemeProps, LocaleProps {
    column: any;
    onFilter?: Function;
    filteredValue?: Array<string>;
    filterMultiple?: boolean;
    popOverContainer?: () => Element | Text | null;
}
export interface OptionProps {
    text: string;
    value: string;
    selected?: boolean;
    children?: Array<OptionProps>;
}
export interface State {
    options: Array<OptionProps>;
    filteredValue: Array<string>;
}
export declare class HeadCellFilter extends React.Component<Props, State> {
    static defaultProps: {
        filteredValue: never[];
        filterMultiple: boolean;
    };
    constructor(props: Props);
    alterOptions(options: Array<any>): any[];
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    render(): JSX.Element;
    handleClick(confirm: (payload?: FilterPayload) => void, setSelectedKeys?: (keys?: string | Array<string | number>) => void, selectedKeys?: Array<string>): Promise<void>;
    handleCheck(confirm: (payload?: FilterPayload) => void, setSelectedKeys?: (keys: string | Array<string | number>) => void | undefined, selectedKeys?: Array<string>): void;
    handleConfirmClick(confirm: (payload?: FilterPayload) => void): void;
    handleCancelClick(confirm: (payload?: FilterPayload) => void, setSelectedKeys?: (keys: string | Array<string | number>) => void | undefined): void;
}
declare const _default: {
    new (props: Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
        filteredValue: never[];
        filterMultiple: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof HeadCellFilter>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof HeadCellFilter, {}> & {
        ComposedComponent: typeof HeadCellFilter;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
        filteredValue: never[];
        filterMultiple: boolean;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof HeadCellFilter>;
} & import("hoist-non-react-statics").NonReactStatics<typeof HeadCellFilter, {}> & {
    ComposedComponent: typeof HeadCellFilter;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
            filteredValue: never[];
            filterMultiple: boolean;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "classPrefix" | "classnames" | "className" | "theme" | "column" | "popOverContainer" | "onFilter"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "filteredValue" | "filterMultiple">> & Partial<Pick<{
                filteredValue: never[];
                filterMultiple: boolean;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof HeadCellFilter>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof HeadCellFilter, {}> & {
        ComposedComponent: typeof HeadCellFilter;
    };
};
export default _default;
