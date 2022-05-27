import React from 'react';
import { OptionsControlProps, Option, FormOptionsControl } from './Options';
import { Action } from '../../types';
/**
 * 级联选择框
 * 文档：https://baidu.gitee.io/amis/docs/components/form/chained-select
 */
export interface ChainedSelectControlSchema extends FormOptionsControl {
    type: 'chained-select';
}
export interface ChainedSelectProps extends OptionsControlProps, Omit<ChainedSelectControlSchema, 'options' | 'type' | 'source' | 'className' | 'descriptionClassName' | 'inputClassName'> {
}
export interface SelectState {
    stack: Array<{
        options: Array<Option>;
        parentId: any;
        loading: boolean;
        visible?: boolean;
    }>;
}
export default class ChainedSelectControl extends React.Component<ChainedSelectProps, SelectState> {
    static defaultProps: Partial<ChainedSelectProps>;
    state: SelectState;
    constructor(props: ChainedSelectProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: ChainedSelectProps): void;
    doAction(action: Action, data: object, throwErrors: boolean): void;
    array2value(arr: Array<any>, isExtracted?: boolean): string | any[];
    loadMore(): void;
    handleChange(index: number, currentValue: any): Promise<void>;
    reload(): void;
    render(): JSX.Element;
}
export declare class ChainedSelectControlRenderer extends ChainedSelectControl {
}
