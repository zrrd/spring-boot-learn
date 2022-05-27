/**
 * @file Tag
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ThemeProps } from '../theme';
export interface TagProps extends ThemeProps {
    style: React.CSSProperties;
    color?: string;
    label?: string | React.ReactNode;
    displayMode?: 'normal' | 'rounded' | 'status';
    icon?: string | React.ReactNode;
    closable?: boolean;
    disabled?: boolean;
    closeIcon?: string | React.ReactNode;
    onClose?: (e: React.MouseEvent) => void;
}
export interface CheckableTagProps extends TagProps {
    onClick?: (e: React.MouseEvent) => void;
    onChange?: (checked: boolean) => void;
    checked?: boolean;
}
export declare type TagLevel = 'inactive' | 'active' | 'success' | 'processing' | 'error' | 'warning';
export declare class Tag extends React.Component<TagProps> {
    static defaultProps: Partial<TagProps>;
    renderCloseIcon(): JSX.Element | null;
    handleClose(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
declare class CheckableTagComp extends React.Component<CheckableTagProps> {
    handleClick(e: React.MouseEvent): void;
    render(): JSX.Element;
}
export declare const CheckableTag: {
    new (props: Omit<CheckableTagProps, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<CheckableTagProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof CheckableTagComp>;
} & import("hoist-non-react-statics").NonReactStatics<typeof CheckableTagComp, {}> & {
    ComposedComponent: typeof CheckableTagComp;
};
declare const _default: {
    new (props: Pick<Omit<TagProps, keyof ThemeProps>, never> & Partial<Pick<Omit<TagProps, keyof ThemeProps>, "label" | "style" | "color" | "icon" | "disabled" | "onClose" | "displayMode" | "closable" | "closeIcon">> & Partial<Pick<Partial<TagProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & Partial<Pick<Omit<TagProps, keyof ThemeProps>, "label" | "style" | "color" | "icon" | "disabled" | "onClose" | "displayMode" | "closable" | "closeIcon">> & Partial<Pick<Partial<TagProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & Partial<Pick<Omit<TagProps, keyof ThemeProps>, "label" | "style" | "color" | "icon" | "disabled" | "onClose" | "displayMode" | "closable" | "closeIcon">> & Partial<Pick<Partial<TagProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & Partial<Pick<Omit<TagProps, keyof ThemeProps>, "label" | "style" | "color" | "icon" | "disabled" | "onClose" | "displayMode" | "closable" | "closeIcon">> & Partial<Pick<Partial<TagProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & Partial<Pick<Omit<TagProps, keyof ThemeProps>, "label" | "style" | "color" | "icon" | "disabled" | "onClose" | "displayMode" | "closable" | "closeIcon">> & Partial<Pick<Partial<TagProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & Partial<Pick<Omit<TagProps, keyof ThemeProps>, "label" | "style" | "color" | "icon" | "disabled" | "onClose" | "displayMode" | "closable" | "closeIcon">> & Partial<Pick<Partial<TagProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & Partial<Pick<Omit<TagProps, keyof ThemeProps>, "label" | "style" | "color" | "icon" | "disabled" | "onClose" | "displayMode" | "closable" | "closeIcon">> & Partial<Pick<Partial<TagProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & Partial<Pick<Omit<TagProps, keyof ThemeProps>, "label" | "style" | "color" | "icon" | "disabled" | "onClose" | "displayMode" | "closable" | "closeIcon">> & Partial<Pick<Partial<TagProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & Partial<Pick<Omit<TagProps, keyof ThemeProps>, "label" | "style" | "color" | "icon" | "disabled" | "onClose" | "displayMode" | "closable" | "closeIcon">> & Partial<Pick<Partial<TagProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<TagProps, keyof ThemeProps>, never> & Partial<Pick<Omit<TagProps, keyof ThemeProps>, "label" | "style" | "color" | "icon" | "disabled" | "onClose" | "displayMode" | "closable" | "closeIcon">> & Partial<Pick<Partial<TagProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Tag>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Tag, {}> & {
    ComposedComponent: typeof Tag;
};
export default _default;
