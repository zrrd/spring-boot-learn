/// <reference types="react" />
import { RendererProps } from '../factory';
import { RendererEvent } from '../utils/renderer-event';
import { IBreakAction } from './BreakAction';
import { IContinueAction } from './ContinueAction';
import { ILoopAction } from './LoopAction';
import { IParallelAction } from './ParallelAction';
import { ISwitchAction } from './SwitchAction';
export declare enum LoopStatus {
    NORMAL = 0,
    BREAK = 1,
    CONTINUE = 2
}
export interface ListenerAction {
    actionType: string;
    description?: string;
    componentId?: string;
    args?: Record<string, any>;
    outputVar?: string;
    preventDefault?: boolean;
    stopPropagation?: boolean;
    expression?: string;
    execOn?: string;
}
export interface ILogicAction extends ListenerAction {
    children?: ListenerAction[];
}
export declare type LogicAction = IParallelAction | ISwitchAction | ILoopAction | IContinueAction | IBreakAction;
export interface ListenerContext extends React.Component<RendererProps> {
    [propName: string]: any;
}
export interface RendererAction {
    run: (action: ListenerAction, renderer: ListenerContext, event: RendererEvent<any>, mergeData?: any) => Promise<RendererEvent<any> | void>;
}
export declare const registerAction: (type: string, action: RendererAction) => void;
export declare const getActionByType: (type: string) => RendererAction;
export declare const runActions: (actions: ListenerAction | ListenerAction[], renderer: ListenerContext, event: any) => Promise<void>;
export declare const runAction: (actionInstrance: RendererAction, actionConfig: ListenerAction, renderer: ListenerContext, event: any) => Promise<void>;
