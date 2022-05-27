import React from 'react';
import { OptionsControlProps, FormOptionsControl } from './Options';
import { Action } from '../../types';
import { StateChangeOptions } from 'downshift';
import { ActionSchema } from '../Action';
import { SchemaApi } from '../../Schema';
import type { Option } from '../../components/Select';
import type { ListenerAction } from '../../actions/Action';
/**
 * Text 文本输入框。
 * 文档：https://baidu.gitee.io/amis/docs/components/form/text
 */
export interface TextControlSchema extends FormOptionsControl {
    type: 'input-text' | 'input-email' | 'input-url' | 'input-password' | 'native-date' | 'native-time' | 'native-number';
    addOn?: {
        position?: 'left' | 'right';
        label?: string;
        icon?: string;
        className?: string;
    } & ActionSchema;
    /**
     * 是否去除首尾空白文本。
     */
    trimContents?: boolean;
    /**
     * 自动完成 API，当输入部分文字的时候，会将这些文字通过 ${term} 可以取到，发送给接口。
     * 接口可以返回匹配到的选项，帮助用户输入。
     */
    autoComplete?: SchemaApi;
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
     * 前缀
     */
    prefix?: string;
    /**
     * 后缀
     */
    suffix?: string;
    /**
     * 自动转换值
     */
    transform?: {
        /** 用户输入的字符自动转小写 */
        lowerCase?: boolean;
        /** 用户输入的字符自动转大写 */
        upperCase?: boolean;
    };
}
export declare type InputTextRendererEvent = 'blur' | 'focus' | 'click' | 'change' | 'enter';
export interface TextProps extends OptionsControlProps {
    placeholder?: string;
    addOn?: Action & {
        position?: 'left' | 'right';
        label?: string;
        icon?: string;
        className?: string;
    };
    creatable?: boolean;
    clearable: boolean;
    resetValue?: any;
    autoComplete?: any;
    allowInputText?: boolean;
    spinnerClassName: string;
    revealPassword?: boolean;
    transform?: {
        lowerCase?: boolean;
        upperCase?: boolean;
    };
}
export interface TextState {
    isOpen?: boolean;
    inputValue?: string;
    isFocused?: boolean;
    revealPassword?: boolean;
}
export default class TextControl extends React.PureComponent<TextProps, TextState> {
    input?: HTMLInputElement;
    highlightedIndex?: any;
    unHook: Function;
    constructor(props: TextProps);
    static defaultProps: Partial<TextProps>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TextProps): void;
    componentWillUnmount(): void;
    inputRef(ref: any): void;
    doAction(action: ListenerAction, args: any): void;
    focus(): void;
    clearValue(): void;
    removeItem(index: number): void;
    handleClick(): void;
    handleFocus(e: any): void;
    handleBlur(e: any): void;
    handleInputChange(evt: React.ChangeEvent<HTMLInputElement>): Promise<void>;
    handleKeyDown(evt: React.KeyboardEvent<HTMLInputElement>): Promise<void>;
    handleChange(value: any): void;
    handleStateChange(changes: StateChangeOptions<any>): void;
    handleNormalInputChange(e: React.ChangeEvent<HTMLInputElement>): Promise<void>;
    normalizeValue(value: Option[] | Option | undefined | null): any;
    transformValue(value: string): string;
    loadAutoComplete(): void;
    reload(): void;
    valueToString(value: any): string;
    renderSugestMode(): JSX.Element;
    toggleRevealPassword(): void;
    renderNormal(): JSX.Element;
    render(): JSX.Element;
}
export declare function mapItemIndex(items: Array<any>, values: Array<any>, valueField?: string): any;
export declare class TextControlRenderer extends TextControl {
}
export declare class PasswordControlRenderer extends TextControl {
}
export declare class EmailControlRenderer extends TextControl {
}
export declare class UrlControlRenderer extends TextControl {
}
export declare class NativeDateControlRenderer extends TextControl {
}
export declare class NativeTimeControlRenderer extends TextControl {
}
export declare class NativeNumberControlRenderer extends TextControl {
}
