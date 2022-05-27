import React from 'react';
import { OptionsControlProps, Option, FormOptionsControl } from './Options';
import { Action } from '../../types';
import { ButtonGroupSchema } from '../ButtonGroup';
/**
 * 按钮组控件。
 * 文档：https://baidu.gitee.io/amis/docs/components/form/button-group
 */
export interface ButtonGroupControlSchema extends Omit<ButtonGroupSchema, 'type'>, Omit<FormOptionsControl, 'size'> {
    type: 'button-group-select';
}
export interface ButtonGroupProps extends OptionsControlProps, Omit<ButtonGroupControlSchema, 'size' | 'source' | 'type' | 'className' | 'descriptionClassName' | 'inputClassName' | 'btnClassName'> {
    options: Array<Option>;
}
export default class ButtonGroupControl extends React.Component<ButtonGroupProps, any> {
    static defaultProps: Partial<ButtonGroupProps>;
    doAction(action: Action, data: object, throwErrors: boolean): void;
    handleToggle(option: Option): void;
    reload(): void;
    render(props?: Readonly<ButtonGroupProps> & Readonly<{
        children?: React.ReactNode;
    }>): JSX.Element;
}
export declare class ButtonGroupControlRenderer extends ButtonGroupControl {
}
