import React from 'react';
import { IIRendererStore } from './store/index';
import { fetcherResult, SchemaNode, Schema, Action } from './types';
import { ThemeProps } from './theme';
import { LocaleProps } from './locale';
import { RootRenderProps } from './Root';
import { RendererEnv } from './env';
import { OnEventProps } from './utils/renderer-event';
export interface TestFunc {
    (path: string, schema?: Schema, resolveRenderer?: (path: string, schema?: Schema, props?: any) => null | RendererConfig): boolean;
}
export interface RendererBasicConfig {
    test?: RegExp | TestFunc;
    type?: string;
    name?: string;
    storeType?: string;
    shouldSyncSuperStore?: (store: any, props: any, prevProps: any) => boolean | undefined;
    storeExtendsData?: boolean | ((props: any) => boolean);
    weight?: number;
    isolateScope?: boolean;
    isFormItem?: boolean;
    autoVar?: boolean;
}
export interface RendererProps extends ThemeProps, LocaleProps, OnEventProps {
    render: (region: string, node: SchemaNode, props?: any) => JSX.Element;
    env: RendererEnv;
    $path: string;
    $schema: any;
    store?: IIRendererStore;
    syncSuperStore?: boolean;
    data: {
        [propName: string]: any;
    };
    defaultData?: object;
    className?: any;
    [propName: string]: any;
}
export declare type RendererComponent = React.ComponentType<RendererProps> & {
    propsList?: Array<any>;
};
export interface RendererConfig extends RendererBasicConfig {
    component: RendererComponent;
    Renderer?: RendererComponent;
}
export interface RenderSchemaFilter {
    (schema: Schema, renderer: RendererConfig, props?: any): Schema;
}
export interface wsObject {
    url: string;
    responseKey?: string;
    body?: any;
}
export interface RenderOptions {
    session?: string;
    fetcher?: (config: fetcherConfig) => Promise<fetcherResult>;
    wsFetcher?: (ws: wsObject, onMessage: (data: any) => void, onError: (error: any) => void) => void;
    isCancel?: (value: any) => boolean;
    notify?: (type: 'error' | 'success', msg: string, conf?: {
        closeButton?: boolean;
        timeout?: number;
    }) => void;
    jumpTo?: (to: string, action?: Action, ctx?: object) => void;
    alert?: (msg: string) => void;
    confirm?: (msg: string, title?: string) => boolean | Promise<boolean>;
    rendererResolver?: (path: string, schema: Schema, props: any) => null | RendererConfig;
    copy?: (contents: string, options?: any) => void;
    getModalContainer?: () => HTMLElement;
    loadRenderer?: (schema: Schema, path: string, reRender: Function) => Promise<React.ReactType> | React.ReactType | JSX.Element | void;
    affixOffsetTop?: number;
    affixOffsetBottom?: number;
    richTextToken?: string;
    /**
     * 替换文本，用于实现 URL 替换、语言替换等
     */
    replaceText?: {
        [propName: string]: any;
    };
    /**
     * 文本替换的黑名单，因为属性太多了所以改成黑名单的 fangs
     */
    replaceTextIgnoreKeys?: String[];
    /**
     * 过滤 html 标签，可用来添加 xss 保护逻辑
     */
    filterHtml?: (input: string) => string;
    /**
     * 是否开启 amis 调试
     */
    enableAMISDebug?: boolean;
    [propName: string]: any;
}
export interface fetcherConfig {
    url: string;
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'jsonp';
    data?: any;
    config?: any;
}
export declare function addSchemaFilter(fn: RenderSchemaFilter): void;
export declare function filterSchema(schema: Schema, render: RendererConfig, props?: any): Schema;
export declare function Renderer(config: RendererBasicConfig): <T extends RendererComponent>(component: T) => T;
export declare function registerRenderer(config: RendererConfig): RendererConfig;
export declare function unRegisterRenderer(config: RendererConfig | string): void;
export declare function loadRenderer(schema: Schema, path: string): JSX.Element;
export declare function render(schema: Schema, props?: RootRenderProps, options?: RenderOptions, pathPrefix?: string): JSX.Element;
export declare function clearStoresCache(sessions?: Array<string> | string): void;
export declare function updateEnv(options: Partial<RenderOptions>, session?: string): void;
export declare function resolveRenderer(path: string, schema?: Schema): null | RendererConfig;
export declare function getRenderers(): RendererConfig[];
export declare function getRendererByName(name: string): RendererConfig | undefined;
export { RendererEnv };
