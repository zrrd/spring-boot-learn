/// <reference types="hoist-non-react-statics" />
import { Config } from './config';
import { Fields, ConditionGroupValue, Funcs } from './types';
import { ThemeProps } from '../../theme';
import React from 'react';
import { FormulaPickerProps } from '../formula/Picker';
export interface CBGroupOrItemProps extends ThemeProps {
    builderMode?: 'simple' | 'full';
    config: Config;
    value?: ConditionGroupValue;
    fields: Fields;
    funcs?: Funcs;
    index: number;
    data?: any;
    draggable?: boolean;
    disabled?: boolean;
    searchable?: boolean;
    onChange: (value: ConditionGroupValue, index: number) => void;
    removeable?: boolean;
    onDragStart?: (e: React.MouseEvent) => void;
    onRemove?: (index: number) => void;
    fieldClassName?: string;
    formula?: FormulaPickerProps;
    popOverContainer?: any;
    renderEtrValue?: any;
}
export declare class CBGroupOrItem extends React.Component<CBGroupOrItemProps> {
    state: {
        hover: boolean;
    };
    handleItemChange(value: any): void;
    handleItemRemove(): void;
    handlerHoverIn(e: any): void;
    handlerHoverOut(e: any): void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<CBGroupOrItemProps, keyof ThemeProps> & import("../../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof CBGroupOrItem>;
} & import("hoist-non-react-statics").NonReactStatics<typeof CBGroupOrItem, {}> & {
    ComposedComponent: typeof CBGroupOrItem;
};
export default _default;
