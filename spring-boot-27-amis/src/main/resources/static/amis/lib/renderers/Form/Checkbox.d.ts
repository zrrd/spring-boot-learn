import React from 'react';
import { FormControlProps, FormBaseControl } from './Item';
import { BadgeSchema } from '../../components/Badge';
import { Action } from '../../types';
/**
 * Checkbox 勾选框。
 * 文档：https://baidu.gitee.io/amis/docs/components/form/checkbox
 */
export interface CheckboxControlSchema extends FormBaseControl {
    /**
     * 指定为多行文本输入框
     */
    type: 'checkbox';
    /**
     * 勾选值
     */
    trueValue?: boolean | string | number;
    /**
     * 未勾选值
     */
    falseValue?: boolean | string | number;
    /**
     * 选项说明
     */
    option?: string;
    /**
     * 角标
     */
    badge?: BadgeSchema;
    partial?: boolean;
    optionType?: 'default' | 'button';
    checked?: boolean;
}
export interface CheckboxProps extends FormControlProps, Omit<CheckboxControlSchema, 'type' | 'className' | 'descriptionClassName' | 'inputClassName'> {
}
export default class CheckboxControl extends React.Component<CheckboxProps, any> {
    static defaultProps: Partial<CheckboxProps>;
    doAction(action: Action, data: object, throwErrors: boolean): void;
    dispatchChangeEvent(eventData?: any): Promise<void>;
    render(): JSX.Element;
}
export declare class CheckboxControlRenderer extends CheckboxControl {
}
