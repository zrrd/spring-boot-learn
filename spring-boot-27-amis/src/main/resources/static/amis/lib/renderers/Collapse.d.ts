import React from 'react';
import { RendererProps } from '../factory';
import { BaseSchema, SchemaCollection, SchemaTpl, SchemaObject } from '../Schema';
/**
 * Collapse 折叠渲染器，格式说明。
 * 文档：https://baidu.gitee.io/amis/docs/components/collapse
 */
export interface CollapseSchema extends BaseSchema {
    /**
     * 指定为折叠器类型
     */
    type: 'collapse';
    /**
     * 标识
     */
    key?: string;
    /**
     * 标题展示位置
     */
    headerPosition?: 'top' | 'bottom';
    /**
     * 标题
     */
    header?: string | SchemaCollection;
    /**
     * 内容区域
     */
    body: SchemaCollection;
    /**
     * 配置 Body 容器 className
     */
    bodyClassName?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 是否可折叠
     */
    collapsable?: boolean;
    /**
     * 默认是否折叠
     */
    collapsed?: boolean;
    /**
     * 图标是否展示
     */
    showArrow?: boolean;
    /**
     * 自定义切换图标
     */
    expandIcon?: SchemaObject;
    /**
     * 标题 CSS 类名
     */
    headingClassName?: string;
    /**
     * 收起的标题
     */
    collapseHeader?: SchemaTpl;
    /**
     * 控件大小
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'base';
    /**
     * 点开时才加载内容
     */
    mountOnEnter?: boolean;
    /**
     * 卡片隐藏就销毁内容。
     */
    unmountOnExit?: boolean;
}
export interface CollapseProps extends RendererProps, Omit<CollapseSchema, 'type' | 'className'> {
    wrapperComponent?: any;
    headingComponent?: any;
    children?: JSX.Element | ((props?: any) => JSX.Element);
}
export default class Collapse extends React.Component<CollapseProps, {}> {
    render(): JSX.Element;
}
export declare class CollapseRenderer extends Collapse {
}
