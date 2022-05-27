/// <reference types="hoist-non-react-statics" />
/**
 * @file Picker
 * @description 移动端列滚动选择器
 */
import React from 'react';
import { ThemeProps } from '../theme';
export interface PickerColumnItem {
    labelField?: string;
    valueField?: string;
    readonly?: boolean;
    value?: PickerOption;
    swipeDuration?: number;
    visibleItemCount?: number;
    itemHeight?: number;
    options?: PickerOption[];
    optionRender?: (option: string | object | PickerOption) => React.ReactNode;
    onChange?: (value?: PickerOption | string, index?: number, confirm?: boolean) => void;
}
export interface PickerColumnProps extends PickerColumnItem, ThemeProps {
}
export declare type PickerOption = string | number | PickerObjectOption;
export declare type PickerObjectOption = {
    value?: string | number;
    text?: string | number;
    disabled?: boolean;
} & Record<string, {}>;
declare const _default: {
    new (props: Omit<PickerColumnProps & React.RefAttributes<{}>, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<PickerColumnProps & React.RefAttributes<{}>, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<PickerColumnProps & React.RefAttributes<{}>, keyof ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<PickerColumnProps & React.RefAttributes<{}>, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<PickerColumnProps & React.RefAttributes<{}>, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<PickerColumnProps & React.RefAttributes<{}>, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<PickerColumnProps & React.RefAttributes<{}>, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<PickerColumnProps & React.RefAttributes<{}>, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<PickerColumnProps & React.RefAttributes<{}>, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<PickerColumnProps & React.RefAttributes<{}>, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<React.ForwardRefExoticComponent<PickerColumnProps & React.RefAttributes<{}>>>;
} & import("hoist-non-react-statics").NonReactStatics<React.ForwardRefExoticComponent<PickerColumnProps & React.RefAttributes<{}>>, {}> & {
    ComposedComponent: React.ForwardRefExoticComponent<PickerColumnProps & React.RefAttributes<{}>>;
};
export default _default;
