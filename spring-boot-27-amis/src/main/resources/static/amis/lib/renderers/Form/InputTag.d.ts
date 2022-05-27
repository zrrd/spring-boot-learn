import React from 'react';
import { OptionsControlProps, Option, FormOptionsControl } from './Options';
import { Action } from '../../types';
/**
 * Tag 输入框
 * 文档：https://baidu.gitee.io/amis/docs/components/form/tag
 */
export interface TagControlSchema extends FormOptionsControl {
    type: 'input-tag';
    /**
     * 选项提示信息
     */
    optionsTip?: string;
    /**
     * 是否为下拉模式
     */
    dropdown?: boolean;
}
export interface TagProps extends OptionsControlProps {
    placeholder?: string;
    clearable: boolean;
    resetValue?: any;
    optionsTip: string;
    dropdown?: boolean;
}
export interface TagState {
    inputValue: string;
    isFocused?: boolean;
    isOpened?: boolean;
}
export default class TagControl extends React.PureComponent<TagProps, TagState> {
    input: React.RefObject<any>;
    static defaultProps: {
        resetValue: string;
        labelField: string;
        valueField: string;
        multiple: boolean;
        placeholder: string;
        optionsTip: string;
    };
    state: {
        isOpened: boolean;
        inputValue: string;
        isFocused: boolean;
    };
    componentDidUpdate(prevProps: TagProps): void;
    doAction(action: Action, data: object, throwErrors: boolean): void;
    dispatchEvent(eventName: string, eventData?: any): Promise<boolean>;
    getValue(type?: 'push' | 'pop' | 'normal', option?: any): string | any[];
    addItem(option: Option): Promise<void>;
    handleFocus(e: any): Promise<void>;
    handleBlur(e: any): Promise<void>;
    close(): void;
    handleInputChange(text: string): void;
    handleChange(value: Array<Option>): Promise<void>;
    renderItem(item: Option): any;
    handleKeyDown(evt: React.KeyboardEvent<HTMLInputElement>): Promise<void>;
    handleOptionChange(option: Option): void;
    getTarget(): any;
    getParent(): any;
    reload(): void;
    render(): JSX.Element;
}
export declare class TagControlRenderer extends TagControl {
}
