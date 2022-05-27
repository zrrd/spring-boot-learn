/// <reference types="react" />
import { OptionsControlProps } from './Options';
import { BaseTabsTransferRenderer } from './TabsTransfer';
import { TabsTransferControlSchema } from './TabsTransfer';
import { ItemRenderStates } from '../../components/Selection';
import { Action } from '../../types';
/**
 * TabsTransferPicker 穿梭器的弹框形态
 * 文档：https://baidu.gitee.io/amis/docs/components/form/tabs-transfer-picker
 */
export interface TabsTransferPickerControlSchema extends Omit<TabsTransferControlSchema, 'type'> {
    type: 'tabs-transfer-picker';
}
export interface TabsTransferProps extends OptionsControlProps, Omit<TabsTransferPickerControlSchema, 'type' | 'options' | 'inputClassName' | 'className' | 'descriptionClassName'> {
}
interface BaseTransferState {
    activeKey: number;
}
export declare class TabsTransferPickerRenderer extends BaseTabsTransferRenderer<TabsTransferProps> {
    state: BaseTransferState;
    dispatchEvent(name: string): void;
    optionItemRender(option: any, states: ItemRenderStates): JSX.Element;
    doAction(action: Action): void;
    render(): JSX.Element;
}
export {};
