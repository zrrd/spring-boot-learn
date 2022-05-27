import React from 'react';
import { FormControlProps, FormBaseControl } from './Item';
import type { ListenerAction } from '../../actions/Action';
/**
 * TextArea 多行文本输入框。
 * 文档：https://baidu.gitee.io/amis/docs/components/form/textarea
 */
export interface TextareaControlSchema extends FormBaseControl {
    /**
     * 指定为多行文本输入框
     */
    type: 'textarea';
    /**
     * 最大行数
     */
    maxRows?: number;
    /**
     * 最小行数
     */
    minRows?: number;
    /**
     * 是否只读
     */
    readOnly?: boolean;
    /**
     * 边框模式，全边框，还是半边框，或者没边框。
     */
    borderMode?: 'full' | 'half' | 'none';
    /**
     * 限制文字个数
     */
    maxLength?: number;
    /**
     * 是否显示计数
     */
    showCounter?: boolean;
    /**
     * 输入内容是否可清除
     */
    clearable?: boolean;
    /**
     * 重置值
     */
    resetValue?: string;
}
export declare type TextAreaRendererEvent = 'blur' | 'focus';
export interface TextAreaProps extends FormControlProps {
    placeholder?: string;
    minRows?: number;
    maxRows?: number;
    clearable?: boolean;
    resetValue?: string;
}
export interface TextAreaState {
    focused: boolean;
}
export default class TextAreaControl extends React.Component<TextAreaProps, TextAreaState> {
    static defaultProps: Partial<TextAreaProps>;
    state: {
        focused: boolean;
    };
    input?: HTMLInputElement;
    inputRef: (ref: any) => HTMLInputElement;
    doAction(action: ListenerAction, args: any): void;
    valueToString(value: any): string;
    focus(): void;
    handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    handleFocus(e: React.FocusEvent<HTMLTextAreaElement>): void;
    handleBlur(e: React.FocusEvent<HTMLTextAreaElement>): void;
    handleClear(): Promise<void>;
    render(): JSX.Element;
}
export declare class TextAreaControlRenderer extends TextAreaControl {
}
