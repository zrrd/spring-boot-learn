/// <reference types="react" />
import type { JSONSchema } from '../../utils/DataScope';
import { SchemaEditorItemCommon, SchemaEditorItemCommonProps } from './Common';
export interface SchemaEditorItemObjectState {
    members: Array<{
        id: string;
        key: string;
        hasError?: boolean;
        required?: boolean;
        schema: JSONSchema;
    }>;
    collapsed: boolean;
}
export declare class SchemaEditorItemObject extends SchemaEditorItemCommon<SchemaEditorItemCommonProps, SchemaEditorItemObjectState> {
    state: {
        members: {
            id: string;
            key: string;
            hasError?: boolean | undefined;
            required?: boolean | undefined;
            schema: JSONSchema;
        }[];
        collapsed: boolean;
    };
    lastValue: any;
    componentDidUpdate(prevProps: SchemaEditorItemCommonProps): void;
    propsToMembers(props: SchemaEditorItemCommonProps): {
        id: string;
        key: string;
        hasError?: boolean | undefined;
        required?: boolean | undefined;
        schema: JSONSchema;
    }[];
    pipeOut(): void;
    handleAdd(): void;
    handlePropKeyChange(index: number, key: string): void;
    handlePropTitleChange(index: number, title: string): void;
    handlePropRemove(index: number): void;
    handlePropChange(index: number, item: any): void;
    handlePropRequiredChange(index: number, required: boolean): void;
    toggleCollapsed(): void;
    rendererProps(): JSX.Element;
    render(): JSX.Element;
}
