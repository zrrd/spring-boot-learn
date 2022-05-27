/**
 * @file GridNav
 * @description 金刚位宫格导航 参考react-vant
 */
import React from 'react';
import { ClassNamesFn } from '../theme';
import { BadgeProps } from './Badge';
export declare type GridNavDirection = 'horizontal' | 'vertical';
export interface GridNavProps {
    /** 是否将格子固定为正方形	 */
    square?: boolean;
    /** 是否将格子内容居中显示	 */
    center?: boolean;
    /** 是否显示边框	 */
    border?: boolean;
    /** 格子之间的间距，默认单位为`px` */
    gutter?: number;
    /** 是否调换图标和文本的位置	 */
    reverse?: boolean;
    /** 图标占比，默认单位为`%` */
    iconRatio?: number;
    /** 格子内容排列的方向，可选值为 `horizontal`	 */
    direction?: GridNavDirection;
    /** 列数	 */
    columnNum?: number;
    className?: string;
    itemClassName?: string;
    classnames: ClassNamesFn;
    style?: React.CSSProperties;
}
export interface GridNavItemProps {
    /**  图标右上角徽标	 */
    badge?: BadgeProps;
    /** 文字 */
    text?: string | React.ReactNode;
    /** 图标名称或图片链接	 */
    icon?: string | React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
    children?: React.ReactNode;
    classnames: ClassNamesFn;
    onClick?: (event: React.MouseEvent) => void;
}
declare type InternalProps = {
    parent?: GridNavProps;
    index?: number;
};
export declare const GridNavItem: React.FC<GridNavItemProps & InternalProps>;
declare const GridNav: React.FC<GridNavProps>;
export default GridNav;
