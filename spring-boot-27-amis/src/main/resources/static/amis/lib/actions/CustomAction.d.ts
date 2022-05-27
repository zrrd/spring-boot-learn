import { Action } from '../types';
import { RendererEvent } from '../utils/renderer-event';
import { RendererAction, ListenerAction, ListenerContext } from './Action';
export interface ICustomAction extends ListenerAction {
    actionType: 'custom';
    script: string | ((renderer: any, doAction: (action: Action, data: Record<string, any>) => void, event: RendererEvent<any>, action: ListenerAction) => void);
}
/**
 * 自定义动作，JS脚本
 *
 * @export
 * @class CustomAction
 * @implements {Action}
 */
export declare class CustomAction implements RendererAction {
    run(action: ICustomAction, renderer: ListenerContext, event: RendererEvent<any>): Promise<void>;
}
