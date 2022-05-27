import type { FormControlProps } from '../renderers/Form/Item';
import type { RendererEvent } from '../utils/renderer-event';
/**
 * 渲染器事件派发
 *
 * @param props 组件props
 * @param e 事件类型
 * @param ctx 上下文数据
 */
export declare function rendererEventDispatcher<T extends FormControlProps, E = any>(props: T, e: E, ctx?: Record<string, any>): Promise<RendererEvent<any> | undefined>;
/**
 * 渲染器事件方法装饰器
 *
 * @param event 事件类型
 * @param ctx 上下文数据
 * @returns {Function}
 */
export declare function bindRendererEvent<T extends FormControlProps, E = any>(event: E, ctx?: Record<string, any>): (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    value: (...params: any[]) => Promise<any>;
    enumerable?: boolean | undefined;
    configurable?: boolean | undefined;
    writable?: boolean | undefined;
    get?: (() => any) | undefined;
    set?: ((value: any) => void) | undefined;
};
