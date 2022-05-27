import React from 'react';
import { RendererProps } from '../factory';
import { Action } from '../types';
import { TabsMode } from '../components/Tabs';
import { BaseSchema, SchemaClassName, SchemaCollection, SchemaIcon } from '../Schema';
import { ActionSchema } from './Action';
import { FormSchemaHorizontal } from './Form/index';
import { IScopedContext } from '../Scoped';
export interface TabSchema extends Omit<BaseSchema, 'type'> {
    /**
     * Tab 标题
     */
    title?: string;
    /**
     * 内容
     * @deprecated 用 body 属性
     */
    tab?: SchemaCollection;
    /**
     * 内容
     */
    body?: SchemaCollection;
    /**
     * 徽标
     */
    badge?: number;
    /**
     * 设置以后将跟url的hash对应
     */
    hash?: string;
    /**
     * 按钮图标
     */
    icon?: SchemaIcon;
    iconPosition?: 'left' | 'right';
    /**
     * 设置以后内容每次都会重新渲染
     */
    reload?: boolean;
    /**
     * 点开时才加载卡片内容
     */
    mountOnEnter?: boolean;
    /**
     * 卡片隐藏就销毁卡片节点。
     */
    unmountOnExit?: boolean;
    /**
     * 配置子表单项默认的展示方式。
     */
    mode?: 'normal' | 'inline' | 'horizontal';
    /**
     * 如果是水平排版，这个属性可以细化水平排版的左右宽度占比。
     */
    horizontal?: FormSchemaHorizontal;
    /**
     * 是否可关闭，优先级高于 tabs 的 closable
     */
    closable?: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
}
/**
 * 选项卡控件。
 * 文档：https://baidu.gitee.io/amis/docs/components/tabs
 */
export interface TabsSchema extends BaseSchema {
    type: 'tabs';
    /**
     * 选项卡成员。当配置了 source 时，选项卡成员，将会根据目标数据进行重复。
     */
    tabs: Array<TabSchema>;
    /**
     * 关联已有数据，选项卡直接根据目标数据重复。
     */
    source?: string;
    /**
     * 类名
     */
    tabsClassName?: SchemaClassName;
    /**
     * 展示形式
     */
    tabsMode?: TabsMode;
    /**
     * 内容类名
     */
    contentClassName?: SchemaClassName;
    /**
     * 链接外层类名
     */
    linksClassName?: SchemaClassName;
    /**
     * 卡片是否只有在点开的时候加载？
     */
    mountOnEnter?: boolean;
    /**
     * 卡片隐藏的时候是否销毁卡片内容
     */
    unmountOnExit?: boolean;
    /**
     * 可以在右侧配置点其他功能按钮。
     */
    toolbar?: ActionSchema;
    /**
     * 配置子表单项默认的展示方式。
     */
    subFormMode?: 'normal' | 'inline' | 'horizontal';
    /**
     * 如果是水平排版，这个属性可以细化水平排版的左右宽度占比。
     */
    subFormHorizontal?: FormSchemaHorizontal;
    /**
     * 是否支持新增
     */
    addable?: boolean;
    /**
     * 是否支持删除
     */
    closable?: boolean;
    /**
     * 是否支持拖拽
     */
    draggable?: boolean;
    /**
     * 是否显示提示
     */
    showTip?: boolean;
    /**
     * tooltip 提示的类名
     */
    showTipClassName?: string;
    /**
     * 是否可编辑标签名
     */
    editable?: boolean;
    /**
     * 是否导航支持内容溢出滚动。属性废弃，为了兼容暂且保留
     */
    scrollable?: boolean;
    /**
     * 编辑器模式，侧边的位置
     */
    sidePosition?: 'left' | 'right';
    /**
     * 自定义增加按钮文案
     */
    addBtnText?: string;
}
export interface TabsProps extends RendererProps, Omit<TabsSchema, 'className' | 'contentClassName'> {
    activeKey?: string | number;
    location?: any;
    tabRender?: (tab: TabSchema, props: TabsProps, index: number) => JSX.Element;
}
interface TabSource extends TabSchema {
    ctx?: any;
}
export interface TabsState {
    activeKey: any;
    prevKey: any;
    localTabs: Array<TabSource>;
    isFromSource: boolean;
}
export declare type TabsRendererEvent = 'change';
export declare type TabsRendererAction = 'changeActiveKey';
export default class Tabs extends React.Component<TabsProps, TabsState> {
    static defaultProps: Partial<TabsProps>;
    renderTab?: (tab: TabSchema, props: TabsProps, index: number) => JSX.Element;
    activeKey: any;
    newTabDefaultId: number;
    constructor(props: TabsProps);
    initTabArray(tabs: Array<TabSource>, source?: string, data?: any): [Array<TabSource>, boolean];
    componentDidMount(): void;
    componentDidUpdate(preProps: TabsProps, prevState: any): void;
    resolveTabByKey(key: any): TabSource | undefined;
    resolveKeyByValue(value: any): string | number | undefined;
    autoJumpToNeighbour(key: any): void;
    handleAdd(): void;
    handleClose(index: number, key: string | number): void;
    handleEdit(index: number, text: string): void;
    handleDragChange(e: any): Promise<void>;
    handleSelect(key: any): Promise<void>;
    /**
     * 动作处理
     */
    doAction(action: Action, args: any): void;
    switchTo(index: number): void;
    currentIndex(): number;
    renderToolbar(): JSX.Element | null;
    renderTabs(): JSX.Element;
    render(): JSX.Element;
}
export declare class TabsRenderer extends Tabs {
    static contextType: React.Context<IScopedContext>;
    constructor(props: TabsProps, context: IScopedContext);
    componentWillUnmount(): void;
}
export {};
