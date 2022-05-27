import React from 'react';
import { RendererProps } from '../../factory';
import { Action } from '../../types';
import { ITableStore } from '../../store/table-v2';
export interface QuickSearchConfig {
    type?: string;
    controls?: any;
    tabs?: any;
    fieldSet?: any;
    [propName: string]: any;
}
export interface HeadCellSearchProps extends RendererProps {
    name: string;
    searchable: boolean | QuickSearchConfig;
    classPrefix: string;
    onSearch?: (values: object) => void;
    onAction?: Function;
    store: ITableStore;
}
export declare class HeadCellSearchDropDown extends React.Component<HeadCellSearchProps, any> {
    formItems: Array<string>;
    constructor(props: HeadCellSearchProps);
    buildSchema(): any;
    handleAction(e: any, action: Action, ctx: object, confirm: Function): void;
    handleReset(): Promise<void>;
    handleSubmit(values: any, confirm: Function): Promise<void>;
    isActive(): any;
    render(): JSX.Element;
}
