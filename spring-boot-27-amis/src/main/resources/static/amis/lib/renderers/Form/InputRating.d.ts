import React from 'react';
import { FormControlProps, FormBaseControl } from './Item';
import { Action } from '../../types';
import { textPositionType } from '../../components/Rating';
/**
 * Rating
 * 文档：https://baidu.gitee.io/amis/docs/components/form/rating
 */
export interface RatingControlSchema extends FormBaseControl {
    type: 'input-rating';
    /**
     * 分数
     */
    count?: number;
    /**
     * 允许半颗星
     */
    half?: boolean;
    /**
     * 是否允许再次点击后清除
     */
    allowClear?: boolean;
    /**
     * 是否只读
     */
    readonly?: boolean;
    /**
     * 星星被选中的颜色
     */
    colors?: string | {
        [propName: string]: string;
    };
    /**
     * 未被选中的星星的颜色
     */
    inactiveColor?: string;
    /**
     * 星星被选中时的提示文字
     */
    texts?: {
        [propName: string]: string;
    };
    /**
     * 文字的位置
     */
    textPosition?: textPositionType;
    /**
     * 自定义字符
     */
    char?: string;
    /**
     * 自定义字符类名
     */
    charClassName?: string;
    /**
     * 自定义文字类名
     */
    textClassName?: string;
}
export interface RatingProps extends FormControlProps {
    value: number;
    count: number;
    half: boolean;
    readOnly: boolean;
}
export default class RatingControl extends React.Component<RatingProps, any> {
    static defaultProps: Partial<RatingProps>;
    doAction(action: Action, data: object, throwErrors: boolean): void;
    handleChange(value: any): Promise<void>;
    render(): JSX.Element;
}
export declare class RatingControlRenderer extends RatingControl {
}
