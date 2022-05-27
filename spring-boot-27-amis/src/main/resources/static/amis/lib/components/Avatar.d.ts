/// <reference types="hoist-non-react-statics" />
import * as React from 'react';
import { ClassNamesFn, ThemeProps } from '../theme';
/**
 * Avatar 属性
 */
interface AvatarCmptProps extends ThemeProps {
    style?: {
        [prop: string]: any;
    };
    className?: string;
    classnames: ClassNamesFn;
    /**
     * 图片地址
     */
    src?: string | React.ReactNode;
    /**
     * 图标
     */
    icon?: string | React.ReactNode;
    /**
     * 图片相对于容器的缩放方式
     */
    fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    /**
     * 形状
     */
    shape?: 'circle' | 'square' | 'rounded';
    /**
     * 大小
     */
    size?: number | 'small' | 'default' | 'large';
    /**
     * 文本
     */
    text?: string;
    /**
     * 字符类型距离左右两侧边界单位像素
     */
    gap?: number;
    /**
     * 图片无法显示时的替换文字地址
     */
    alt?: string;
    /**
     * 图片是否允许拖动
     */
    draggable?: boolean;
    /**
     * 图片CORS属性
     */
    crossOrigin?: 'anonymous' | 'use-credentials' | '';
    /**
     * 图片加载失败的事件，返回 false 会关闭组件默认的
     */
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => boolean;
    /**
     *
     */
    children?: JSX.Element | ((props?: any) => JSX.Element);
}
export interface AvatarState {
    scale: number;
    hasImg: boolean;
}
export declare class Avatar extends React.Component<AvatarCmptProps, AvatarState> {
    static defaultProps: Partial<AvatarCmptProps>;
    state: AvatarState;
    avatarChildrenRef: React.RefObject<HTMLElement>;
    avatarRef: React.RefObject<HTMLElement>;
    constructor(props: AvatarCmptProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: AvatarCmptProps, prevState: AvatarState): void;
    handleImageLoadError(event: React.SyntheticEvent<HTMLImageElement, Event>): void;
    setScaleByGap(): void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<AvatarCmptProps, keyof ThemeProps>, never> & Partial<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, "style" | "text" | "children" | "src" | "icon" | "alt" | "size" | "crossOrigin" | "shape" | "draggable" | "onError" | "fit" | "gap">> & Partial<Pick<Partial<AvatarCmptProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, never> & Partial<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, "style" | "text" | "children" | "src" | "icon" | "alt" | "size" | "crossOrigin" | "shape" | "draggable" | "onError" | "fit" | "gap">> & Partial<Pick<Partial<AvatarCmptProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, never> & Partial<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, "style" | "text" | "children" | "src" | "icon" | "alt" | "size" | "crossOrigin" | "shape" | "draggable" | "onError" | "fit" | "gap">> & Partial<Pick<Partial<AvatarCmptProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, never> & Partial<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, "style" | "text" | "children" | "src" | "icon" | "alt" | "size" | "crossOrigin" | "shape" | "draggable" | "onError" | "fit" | "gap">> & Partial<Pick<Partial<AvatarCmptProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, never> & Partial<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, "style" | "text" | "children" | "src" | "icon" | "alt" | "size" | "crossOrigin" | "shape" | "draggable" | "onError" | "fit" | "gap">> & Partial<Pick<Partial<AvatarCmptProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, never> & Partial<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, "style" | "text" | "children" | "src" | "icon" | "alt" | "size" | "crossOrigin" | "shape" | "draggable" | "onError" | "fit" | "gap">> & Partial<Pick<Partial<AvatarCmptProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, never> & Partial<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, "style" | "text" | "children" | "src" | "icon" | "alt" | "size" | "crossOrigin" | "shape" | "draggable" | "onError" | "fit" | "gap">> & Partial<Pick<Partial<AvatarCmptProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, never> & Partial<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, "style" | "text" | "children" | "src" | "icon" | "alt" | "size" | "crossOrigin" | "shape" | "draggable" | "onError" | "fit" | "gap">> & Partial<Pick<Partial<AvatarCmptProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, never> & Partial<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, "style" | "text" | "children" | "src" | "icon" | "alt" | "size" | "crossOrigin" | "shape" | "draggable" | "onError" | "fit" | "gap">> & Partial<Pick<Partial<AvatarCmptProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, never> & Partial<Pick<Omit<AvatarCmptProps, keyof ThemeProps>, "style" | "text" | "children" | "src" | "icon" | "alt" | "size" | "crossOrigin" | "shape" | "draggable" | "onError" | "fit" | "gap">> & Partial<Pick<Partial<AvatarCmptProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Avatar>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Avatar, {}> & {
    ComposedComponent: typeof Avatar;
};
export default _default;
