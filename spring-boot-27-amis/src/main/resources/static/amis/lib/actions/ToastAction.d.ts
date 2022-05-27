import { RendererEvent } from '../utils/renderer-event';
import { RendererAction, ListenerContext, ListenerAction } from './Action';
export interface IToastAction extends ListenerAction {
    actionType: 'toast';
    args: {
        msg: string;
        msgType?: string;
        position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-center' | 'bottom-left' | 'bottom-right' | 'center';
        closeButton?: boolean;
        showIcon?: boolean;
        timeout?: number;
    };
}
/**
 * 全局toast
 */
export declare class ToastAction implements RendererAction {
    run(action: IToastAction, renderer: ListenerContext, event: RendererEvent<any>): Promise<void>;
}
