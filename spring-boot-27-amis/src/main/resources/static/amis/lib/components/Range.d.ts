/**
 * @file Range
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import type { ThemeProps } from '../theme';
import type { MultipleValue, FormatValue, RangeItemProps } from '../renderers/Form/InputRange';
export declare class Range extends React.Component<RangeItemProps, any> {
    multipleValue: MultipleValue;
    trackRef: React.RefObject<HTMLDivElement>;
    /**
     * 接收组件value变换
     * value变换 -> Range.updateValue
     * @param value
     */
    updateValue(value: FormatValue): void;
    /**
     * 获取 坐标、宽高
     */
    getBoundingClient(dom: Element): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    /**
     * 坐标 -> 滑块值
     * @param pageX target.target 坐标
     * @returns 滑块值
     */
    pageXToValue(pageX: number): number;
    /**
     * 滑块改变事件
     * @param pageX target.pageX 坐标
     * @param type min max
     * @returns void
     */
    onChange(pageX: number, type?: string): void;
    /**
     * 获取step为单位的value
     * @param value 拖拽后计算的value
     * @param step 步长
     * @returns step为单位的value
     */
    getStepValue(value: number, step: number): number;
    /**
     * 点击滑轨 -> 触发onchange 改变value
     * @param e event
     * @returns void
     */
    onClickTrack(e: any): void;
    /**
     * 设置步长
     * @returns ReactNode
     */
    renderSteps(): false | JSX.Element;
    /**
     * 双滑块改变最大值、最小值
     * @param pageX 拖拽后的pageX
     * @param type 'min' | 'max'
     */
    onGetChangeValue(pageX: number, type: keyof MultipleValue): void;
    /**
     * 计算每个标记 position.left
     * @param value 滑块值
     * @returns
     */
    getOffsetLeft(value: number | string): string;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<RangeItemProps, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<RangeItemProps, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Range>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Range, {}> & {
    ComposedComponent: typeof Range;
};
export default _default;
