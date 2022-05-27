/**
 * @file Cascader
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { NestedSelectProps } from '../renderers/Form/NestedSelect';
import { Option, Options } from './Select';
export declare type CascaderOption = {
    text?: string;
    value?: string | number;
    color?: string;
    disabled?: boolean;
    children?: Options;
    className?: string;
    [key: string]: any;
};
export interface CascaderProps extends NestedSelectProps {
    value?: (number | string)[];
    activeColor?: string;
    optionRender?: ({ option, selected }: {
        option: CascaderOption;
        selected: boolean;
    }) => React.ReactNode;
    onClose?: () => void;
    onConfirm?: (param: any) => void;
    multiple?: boolean;
}
export declare type CascaderTab = {
    options: Options;
};
export interface CascaderState {
    selectedOptions: Options;
    activeTab: number;
    tabs: Array<{
        options: Options;
    }>;
    disableConfirm: boolean;
}
export declare class Cascader extends React.Component<CascaderProps, CascaderState> {
    static defaultProps: {
        labelField: string;
        valueField: string;
    };
    tabsRef: React.RefObject<HTMLDivElement>;
    tabRef: React.RefObject<HTMLDivElement>;
    constructor(props: CascaderProps);
    componentDidMount(): void;
    handleTabSelect(index: number): void;
    getOptionParent(option: Option): any;
    dealParentSelect(option: Option, selectedOptions: Options): Options;
    flattenTreeWithLeafNodes(option: Option): any[];
    adjustOptionSelect(option: Option): boolean;
    getSelectedChildNum(option: Option): number;
    dealOptionDisable(selectedOptions: Options): void;
    dealChildrenSelect(option: Option, selectedOptions: Options): Options;
    getParentTree: (option: Option, arr: Options) => Options;
    onSelect(option: CascaderOption, tabIndex: number): void;
    onNextClick(option: CascaderOption, tabIndex: number): void;
    getSubmitOptions(selectedOptions: Options): Options;
    confirm(): void;
    getSelectedOptions(): Option[];
    renderOption(option: CascaderOption, tabIndex: number): JSX.Element;
    renderOptions(options: Options, tabIndex: number): JSX.Element;
    renderTabs(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<CascaderProps, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<CascaderProps, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<CascaderProps, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<CascaderProps, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<CascaderProps, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<CascaderProps, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<CascaderProps, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<CascaderProps, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<CascaderProps, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<CascaderProps, keyof import("../theme").ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Cascader>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Cascader, {}> & {
    ComposedComponent: typeof Cascader;
};
export default _default;
