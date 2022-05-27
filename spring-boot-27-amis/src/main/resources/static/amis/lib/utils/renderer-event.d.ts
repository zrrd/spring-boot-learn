/// <reference types="react" />
import { ListenerAction } from '../actions/Action';
import { RendererProps } from '../factory';
import { IScopedContext } from '../Scoped';
export interface EventListeners {
    [propName: string]: {
        weight?: number;
        actions: ListenerAction[];
    };
}
export interface OnEventProps {
    onEvent?: {
        [propName: string]: {
            weight?: number;
            actions: ListenerAction[];
        };
    };
}
export interface RendererEventListener {
    renderer: React.Component<RendererProps>;
    type: string;
    weight: number;
    actions: ListenerAction[];
}
export declare type RendererEvent<T, P = any> = {
    context: T;
    type: string;
    prevented?: boolean;
    stoped?: boolean;
    data?: P;
    preventDefault: () => void;
    stopPropagation: () => void;
    setData: (data: P) => void;
};
export interface RendererEventContext {
    data?: any;
    [propName: string]: any;
}
export declare function createRendererEvent<T extends RendererEventContext>(type: string, context: T): RendererEvent<T>;
export declare const bindEvent: (renderer: any) => (() => void) | undefined;
export declare function dispatchEvent(e: string | React.MouseEvent<any>, renderer: React.Component<RendererProps>, scoped: IScopedContext, data: any, broadcast?: RendererEvent<any>): Promise<RendererEvent<any> | void>;
export declare const getRendererEventListeners: () => RendererEventListener[];
declare const _default: {};
export default _default;
