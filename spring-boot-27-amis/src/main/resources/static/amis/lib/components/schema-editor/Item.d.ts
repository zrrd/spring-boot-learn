import React from 'react';
import { LocaleProps } from '../../locale';
import { ThemeProps } from '../../theme';
import { SchemaEditorItemCommonProps } from './Common';
export interface SchemaEditorItemProps extends SchemaEditorItemCommonProps, LocaleProps, ThemeProps {
}
export declare class SchemaEditorItem extends React.Component<SchemaEditorItemProps> {
    render(): JSX.Element;
}
