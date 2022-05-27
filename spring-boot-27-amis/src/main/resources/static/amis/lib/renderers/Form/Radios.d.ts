import React from 'react';
import { OptionsControlProps, Option, FormOptionsControl } from './Options';
import { Action } from '../../types';
/**
 * Radio 单选框。
 * 文档：https://baidu.gitee.io/amis/docs/components/form/radios
 */
export interface RadiosControlSchema extends FormOptionsControl {
    type: 'radios';
    /**
     * 每行显示多少个
     */
    columnsCount?: number;
}
export interface RadiosProps extends OptionsControlProps {
    placeholder?: any;
    columnsCount?: number;
    labelClassName?: string;
    labelField?: string;
}
export default class RadiosControl extends React.Component<RadiosProps, any> {
    static defaultProps: Partial<RadiosProps>;
    doAction(action: Action, data: object, throwErrors: boolean): void;
    handleChange(option: Option): Promise<void>;
    reload(): void;
    render(): JSX.Element;
}
export declare class RadiosControlRenderer extends RadiosControl {
    static defaultProps: {
        multiple: boolean;
        inline: boolean;
    };
}
