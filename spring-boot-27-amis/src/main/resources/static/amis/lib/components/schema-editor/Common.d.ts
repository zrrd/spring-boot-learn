import React from 'react';
import { LocaleProps } from '../../locale';
import { ThemeProps } from '../../theme';
import type { JSONSchema } from '../../utils/DataScope';
export interface SchemaEditorItemCommonProps extends LocaleProps, ThemeProps {
    value?: JSONSchema;
    onChange: (value: JSONSchema) => void;
    types: Array<{
        label: string;
        value: string;
        [propName: string]: any;
    }>;
    onTypeChange?: (type: string, value: JSONSchema, origin?: JSONSchema) => JSONSchema | void;
    disabled?: boolean;
    required?: boolean;
    onRequiredChange?: (value: boolean) => void;
    typeMutable?: boolean;
    showInfo?: boolean;
    renderExtraProps?: (value: JSONSchema, onChange: (value: JSONSchema) => void) => JSX.Element;
    renderModalProps?: (value: JSONSchema, onChange: (value: JSONSchema) => void) => JSX.Element;
    prefix?: JSX.Element;
    affix?: JSX.Element;
}
export declare class SchemaEditorItemCommon<P extends SchemaEditorItemCommonProps = SchemaEditorItemCommonProps, S = any> extends React.Component<P, S> {
    handleTypeChange(type: any): void;
    handlePropsChange(newValue: JSONSchema): void;
    renderCommon(): JSX.Element;
    render(): JSX.Element;
}
