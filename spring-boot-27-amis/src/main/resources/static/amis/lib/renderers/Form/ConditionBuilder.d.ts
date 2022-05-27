import React from 'react';
import { FormControlProps, FormBaseControl } from './Item';
import { Funcs, Fields } from '../../components/condition-builder/types';
import { Config } from '../../components/condition-builder/config';
import { SchemaApi, SchemaTokenizeableString } from '../../Schema';
import { Schema } from '../../types';
/**
 * 条件组合控件
 * 文档：https://baidu.gitee.io/amis/docs/components/form/condition-builder
 */
export interface ConditionBuilderControlSchema extends FormBaseControl {
    /**
     * 指定为
     */
    type: 'condition-builder';
    /**
     * 函数集合
     */
    funcs?: Funcs;
    /**
     * 字段集合
     */
    fields: Fields;
    /**
     * 其他配置
     */
    config?: Config;
    /**
     * 通过远程拉取配置项
     */
    source?: SchemaApi | SchemaTokenizeableString;
    /**
     * 展现模式
     */
    builderMode?: 'simple' | 'full';
    /**
     * 是否显示并或切换键按钮，只在简单模式下有用
     */
    showANDOR?: boolean;
}
export interface ConditionBuilderProps extends FormControlProps, Omit<ConditionBuilderControlSchema, 'type' | 'className' | 'descriptionClassName' | 'inputClassName'> {
}
export default class ConditionBuilderControl extends React.PureComponent<ConditionBuilderProps> {
    renderEtrValue(schema: Schema, data: any): JSX.Element;
    render(): JSX.Element;
}
export declare class ConditionBuilderRenderer extends ConditionBuilderControl {
}
