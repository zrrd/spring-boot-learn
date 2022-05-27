import React from 'react';
import { RendererConfig, RendererEnv, RendererProps } from './factory';
import { Schema, SchemaNode } from './types';
import { RendererEvent } from './utils/renderer-event';
interface SchemaRendererProps extends Partial<RendererProps> {
    schema: Schema;
    $path: string;
    env: RendererEnv;
}
export declare class SchemaRenderer extends React.Component<SchemaRendererProps, any> {
    static displayName: string;
    static contextType: React.Context<import("./Scoped").IScopedContext>;
    rendererKey: string;
    renderer: RendererConfig | null;
    ref: any;
    cRef: any;
    schema: any;
    path: string;
    reaction: any;
    unbindEvent: (() => void) | undefined;
    constructor(props: SchemaRendererProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: SchemaRendererProps): boolean;
    resolveRenderer(props: SchemaRendererProps, force?: boolean): any;
    getWrappedInstance(): any;
    refFn(ref: any): void;
    childRef(ref: any): void;
    dispatchEvent(e: React.MouseEvent<any>, data: any): Promise<RendererEvent<any> | void>;
    renderChild(region: string, node?: SchemaNode, subProps?: {
        data?: object;
        [propName: string]: any;
    }): import("./Root").ReactElement;
    reRender(): void;
    render(): JSX.Element | null;
}
export {};
