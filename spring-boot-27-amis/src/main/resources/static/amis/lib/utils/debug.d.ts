/**
 * amis 运行时调试功能，为了避免循环引用，这个组件不要依赖 amis 里的组件
 */
import React, { Component } from 'react';
export declare function enableDebug(): void;
interface DebugWrapperProps {
    renderer: any;
}
export declare class DebugWrapper extends Component<DebugWrapperProps> {
    componentDidMount(): void;
    render(): React.ReactNode;
}
declare type Category = 'api' | 'event';
/**
 * 一般调试日志
 * @param msg 简单消息
 * @param ext 扩展信息
 */
export declare function debug(cat: Category, msg: string, ext?: object): void;
/**
 * 警告日志
 * @param msg 简单消息
 * @param ext 扩展信息
 */
export declare function warning(cat: Category, msg: string, ext?: object): void;
export {};
