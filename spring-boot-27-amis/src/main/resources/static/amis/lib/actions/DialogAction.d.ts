import { SchemaNode } from '../types';
import { RendererEvent } from '../utils/renderer-event';
import { RendererAction, ListenerAction, ListenerContext } from './Action';
export interface IAlertAction extends ListenerAction {
    actionType: 'alert';
    args: {
        msg: string;
        [propName: string]: any;
    };
}
export interface IConfirmAction extends ListenerAction {
    actionType: 'confirm';
    args: {
        title: string;
        msg: string;
        [propName: string]: any;
    };
}
export interface IDialogAction extends ListenerAction {
    actionType: 'dialog';
    dialog: SchemaNode;
}
/**
 * 打开弹窗动作
 *
 * @export
 * @class DialogAction
 * @implements {Action}
 */
export declare class DialogAction implements RendererAction {
    run(action: IDialogAction, renderer: ListenerContext, event: RendererEvent<any>): Promise<void>;
}
export interface ICloseDialogAction extends ListenerAction {
    actionType: 'closeDialog';
}
/**
 * 关闭弹窗动作
 *
 * @export
 * @class CloseDialogAction
 * @implements {Action}
 */
export declare class CloseDialogAction implements RendererAction {
    run(action: ListenerAction, renderer: ListenerContext, event: RendererEvent<any>): Promise<void>;
}
/**
 * alert提示动作
 */
export declare class AlertAction implements RendererAction {
    run(action: IAlertAction, renderer: ListenerContext, event: RendererEvent<any>): Promise<void>;
}
/**
 * confirm确认提示动作
 */
export declare class ConfirmAction implements RendererAction {
    run(action: IConfirmAction, renderer: ListenerContext, event: RendererEvent<any>): Promise<void>;
}
