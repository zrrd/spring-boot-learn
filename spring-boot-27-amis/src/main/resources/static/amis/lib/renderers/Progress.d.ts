import React from 'react';
import { RendererProps } from '../factory';
import { BaseSchema, SchemaClassName } from '../Schema';
import { ColorMapType } from '../components/Progress';
/**
 * 进度展示控件。
 * 文档：https://baidu.gitee.io/amis/docs/components/progress
 */
export interface ProgressSchema extends BaseSchema {
    type: 'progress';
    /**
     * 关联字段名。
     */
    name?: string;
    /**
     * 进度条类型。
     */
    mode: 'line' | 'circle' | 'dashboard';
    /**
     * 进度条 CSS 类名
     */
    progressClassName?: SchemaClassName;
    /**
     * 配置不同的值段，用不同的样式提示用户
     */
    map?: ColorMapType;
    /**
     * 是否显示值
     */
    showLabel?: boolean;
    /**
     * 占位符
     */
    placeholder?: string;
    /**
     * 是否显示背景间隔
     */
    stripe?: boolean;
    /**
     * 是否显示动画（只有在开启的时候才能看出来）
     */
    animate?: boolean;
    /**
     * 进度条线的宽度
     */
    strokeWidth?: number;
    /**
     * 仪表盘进度条缺口角度，可取值 0 ~ 295
     */
    gapDegree?: number;
    /**
     * 仪表盘进度条缺口位置
     */
    gapPosition?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * 内容的模板函数
     */
    valueTpl?: string;
}
export interface ProgressProps extends RendererProps, Omit<ProgressSchema, 'type' | 'className'> {
}
export declare class ProgressField extends React.Component<ProgressProps, object> {
    static defaultProps: {
        placeholder: string;
        progressClassName: string;
        progressBarClassName: string;
        map: string[];
        valueTpl: string;
        showLabel: boolean;
        stripe: boolean;
        animate: boolean;
    };
    format(value: number): JSX.Element;
    render(): JSX.Element;
}
export declare class ProgressFieldRenderer extends ProgressField {
}
