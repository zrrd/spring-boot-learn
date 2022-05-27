/// <reference types="react" />
import { OptionsControlProps } from './Options';
import { BaseTransferRenderer, TransferControlSchema } from './Transfer';
import { Option } from '../../components/Select';
import { ItemRenderStates } from '../../components/Selection';
import { Action } from '../../types';
/**
 * TabsTransfer
 * 文档：https://baidu.gitee.io/amis/docs/components/form/tabs-transfer
 */
export interface TabsTransferControlSchema extends Omit<TransferControlSchema, 'type'> {
    type: 'tabs-transfer';
}
export interface TabsTransferProps extends OptionsControlProps, Omit<TabsTransferControlSchema, 'type' | 'options' | 'inputClassName' | 'className' | 'descriptionClassName'> {
}
interface BaseTransferState {
    activeKey: number;
}
export declare class BaseTabsTransferRenderer<T extends OptionsControlProps = TabsTransferProps> extends BaseTransferRenderer<T> {
    state: BaseTransferState;
    onTabChange(key: number): Promise<void>;
    handleTabSearch(term: string, option: Option, cancelExecutor: Function): Promise<any[]>;
    handleChange(value: Array<Option> | Option, optionModified?: boolean): Promise<void>;
}
export declare class TabsTransferRenderer extends BaseTabsTransferRenderer<TabsTransferProps> {
    optionItemRender(option: any, states: ItemRenderStates): JSX.Element;
    doAction(action: Action, args: any): void;
    render(): JSX.Element;
}
export {};
