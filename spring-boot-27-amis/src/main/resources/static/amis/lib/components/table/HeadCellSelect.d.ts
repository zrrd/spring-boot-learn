/**
 * @file table/HeadCellSelect
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from '../../theme';
import { LocaleProps } from '../../locale';
import { FilterPayload } from './HeadCellDropDown';
import { RowSelectionOptionProps } from './index';
export interface Props extends ThemeProps, LocaleProps {
    selections: Array<RowSelectionOptionProps>;
    keys: Array<string | number> | string;
    popOverContainer?: () => Element | Text | null;
}
export interface State {
    key: Array<string | number> | string;
}
export declare class HeadCellSelect extends React.Component<Props, State> {
    static defaultProps: {
        selections: never[];
    };
    constructor(props: Props);
    render(): JSX.Element;
    handleClick(confirm: (payload?: FilterPayload) => void, setSelectedKeys?: (keys?: Array<string | number> | string) => void | undefined, selectedKeys?: Array<string> | string): void;
}
declare const _default: {
    new (props: Omit<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
        selections: never[];
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof HeadCellSelect>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof HeadCellSelect, {}> & {
        ComposedComponent: typeof HeadCellSelect;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
        selections: never[];
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof HeadCellSelect>;
} & import("hoist-non-react-statics").NonReactStatics<typeof HeadCellSelect, {}> & {
    ComposedComponent: typeof HeadCellSelect;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
            selections: never[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<Props, keyof LocaleProps>, "keys" | "classPrefix" | "classnames" | "className" | "theme" | "popOverContainer"> & Partial<Pick<Omit<Props, keyof LocaleProps>, "selections">> & Partial<Pick<{
                selections: never[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof HeadCellSelect>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof HeadCellSelect, {}> & {
        ComposedComponent: typeof HeadCellSelect;
    };
};
export default _default;
