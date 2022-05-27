/**
 * @file Rating
 * @description
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn } from '../theme';
export declare type textPositionType = 'left' | 'right';
interface RatingProps {
    id?: string;
    key?: string | number;
    style?: React.CSSProperties;
    count: number;
    half: boolean;
    char: string | React.ReactNode;
    className?: string;
    charClassName?: string;
    textClassName?: string;
    onChange?: (value: number) => void;
    onHoverChange?: (value: number) => void;
    value: number;
    containerClass?: string;
    readOnly: boolean;
    classPrefix: string;
    disabled?: boolean;
    allowClear?: boolean;
    inactiveColor?: string;
    colors?: string | {
        [propName: string]: string;
    };
    texts?: {
        [propName: string]: string;
    };
    textPosition?: textPositionType;
    classnames: ClassNamesFn;
}
export declare class Rating extends React.Component<RatingProps, any> {
    static defaultProps: {
        containerClass: string;
        readOnly: boolean;
        half: boolean;
        allowClear: boolean;
        value: number;
        count: number;
        char: JSX.Element;
        colors: {
            '2': string;
            '3': string;
            '5': string;
        };
        textPosition: textPositionType;
    };
    starsNode: Record<string, any>;
    constructor(props: RatingProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: RatingProps): void;
    sortKeys(map: {
        [propName: number]: string;
    }): string[];
    getShowColorAndText(value: number): void;
    getRate(): number;
    getStars(activeCount?: number): {
        active: boolean;
    }[];
    saveRef(index: number): (node: React.ReactNode) => void;
    mouseOver(event: React.ChangeEvent<any>, index: number): void;
    onHoverChange(value: number): void;
    moreThanHalf(event: any, index: number): boolean;
    mouseLeave(): void;
    handleStarMouseLeave(event: any, index: number): void;
    handleClick(event: React.ChangeEvent<any>, index: number): void;
    renderStars(): JSX.Element;
    renderText(): JSX.Element | null;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "style" | "disabled" | "id" | "key" | "onChange" | "inactiveColor" | "texts" | "charClassName" | "textClassName" | "onHoverChange"> & Partial<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "value" | "char" | "colors" | "readOnly" | "half" | "count" | "allowClear" | "textPosition" | "containerClass">> & Partial<Pick<{
        containerClass: string;
        readOnly: boolean;
        half: boolean;
        allowClear: boolean;
        value: number;
        count: number;
        char: JSX.Element;
        colors: {
            '2': string;
            '3': string;
            '5': string;
        };
        textPosition: textPositionType;
    }, never>> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "style" | "disabled" | "id" | "key" | "onChange" | "inactiveColor" | "texts" | "charClassName" | "textClassName" | "onHoverChange"> & Partial<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "value" | "char" | "colors" | "readOnly" | "half" | "count" | "allowClear" | "textPosition" | "containerClass">> & Partial<Pick<{
            containerClass: string;
            readOnly: boolean;
            half: boolean;
            allowClear: boolean;
            value: number;
            count: number;
            char: JSX.Element;
            colors: {
                '2': string;
                '3': string;
                '5': string;
            };
            textPosition: textPositionType;
        }, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "style" | "disabled" | "id" | "key" | "onChange" | "inactiveColor" | "texts" | "charClassName" | "textClassName" | "onHoverChange"> & Partial<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "value" | "char" | "colors" | "readOnly" | "half" | "count" | "allowClear" | "textPosition" | "containerClass">> & Partial<Pick<{
            containerClass: string;
            readOnly: boolean;
            half: boolean;
            allowClear: boolean;
            value: number;
            count: number;
            char: JSX.Element;
            colors: {
                '2': string;
                '3': string;
                '5': string;
            };
            textPosition: textPositionType;
        }, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "style" | "disabled" | "id" | "key" | "onChange" | "inactiveColor" | "texts" | "charClassName" | "textClassName" | "onHoverChange"> & Partial<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "value" | "char" | "colors" | "readOnly" | "half" | "count" | "allowClear" | "textPosition" | "containerClass">> & Partial<Pick<{
            containerClass: string;
            readOnly: boolean;
            half: boolean;
            allowClear: boolean;
            value: number;
            count: number;
            char: JSX.Element;
            colors: {
                '2': string;
                '3': string;
                '5': string;
            };
            textPosition: textPositionType;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "style" | "disabled" | "id" | "key" | "onChange" | "inactiveColor" | "texts" | "charClassName" | "textClassName" | "onHoverChange"> & Partial<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "value" | "char" | "colors" | "readOnly" | "half" | "count" | "allowClear" | "textPosition" | "containerClass">> & Partial<Pick<{
            containerClass: string;
            readOnly: boolean;
            half: boolean;
            allowClear: boolean;
            value: number;
            count: number;
            char: JSX.Element;
            colors: {
                '2': string;
                '3': string;
                '5': string;
            };
            textPosition: textPositionType;
        }, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "style" | "disabled" | "id" | "key" | "onChange" | "inactiveColor" | "texts" | "charClassName" | "textClassName" | "onHoverChange"> & Partial<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "value" | "char" | "colors" | "readOnly" | "half" | "count" | "allowClear" | "textPosition" | "containerClass">> & Partial<Pick<{
            containerClass: string;
            readOnly: boolean;
            half: boolean;
            allowClear: boolean;
            value: number;
            count: number;
            char: JSX.Element;
            colors: {
                '2': string;
                '3': string;
                '5': string;
            };
            textPosition: textPositionType;
        }, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "style" | "disabled" | "id" | "key" | "onChange" | "inactiveColor" | "texts" | "charClassName" | "textClassName" | "onHoverChange"> & Partial<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "value" | "char" | "colors" | "readOnly" | "half" | "count" | "allowClear" | "textPosition" | "containerClass">> & Partial<Pick<{
            containerClass: string;
            readOnly: boolean;
            half: boolean;
            allowClear: boolean;
            value: number;
            count: number;
            char: JSX.Element;
            colors: {
                '2': string;
                '3': string;
                '5': string;
            };
            textPosition: textPositionType;
        }, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "style" | "disabled" | "id" | "key" | "onChange" | "inactiveColor" | "texts" | "charClassName" | "textClassName" | "onHoverChange"> & Partial<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "value" | "char" | "colors" | "readOnly" | "half" | "count" | "allowClear" | "textPosition" | "containerClass">> & Partial<Pick<{
            containerClass: string;
            readOnly: boolean;
            half: boolean;
            allowClear: boolean;
            value: number;
            count: number;
            char: JSX.Element;
            colors: {
                '2': string;
                '3': string;
                '5': string;
            };
            textPosition: textPositionType;
        }, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "style" | "disabled" | "id" | "key" | "onChange" | "inactiveColor" | "texts" | "charClassName" | "textClassName" | "onHoverChange"> & Partial<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "value" | "char" | "colors" | "readOnly" | "half" | "count" | "allowClear" | "textPosition" | "containerClass">> & Partial<Pick<{
            containerClass: string;
            readOnly: boolean;
            half: boolean;
            allowClear: boolean;
            value: number;
            count: number;
            char: JSX.Element;
            colors: {
                '2': string;
                '3': string;
                '5': string;
            };
            textPosition: textPositionType;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "style" | "disabled" | "id" | "key" | "onChange" | "inactiveColor" | "texts" | "charClassName" | "textClassName" | "onHoverChange"> & Partial<Pick<Omit<RatingProps, keyof import("../theme").ThemeProps>, "value" | "char" | "colors" | "readOnly" | "half" | "count" | "allowClear" | "textPosition" | "containerClass">> & Partial<Pick<{
            containerClass: string;
            readOnly: boolean;
            half: boolean;
            allowClear: boolean;
            value: number;
            count: number;
            char: JSX.Element;
            colors: {
                '2': string;
                '3': string;
                '5': string;
            };
            textPosition: textPositionType;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Rating>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Rating, {}> & {
    ComposedComponent: typeof Rating;
};
export default _default;
