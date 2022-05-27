/**
 * @file Radios
 * @description
 * @author fex
 *
 * @param 参数说明：
 * options: [
 *   {
 *      label: '显示的名字',
 *      value: '值',
 *      disabled: false
 *   }
 * ]
 *
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { OptionProps, Option } from './Select';
import { ClassNamesFn } from '../theme';
interface RadioProps extends OptionProps {
    id?: string;
    type: string;
    optionType?: string;
    value?: string;
    className?: string;
    style?: React.CSSProperties;
    inline?: boolean;
    level?: string;
    btnActiveLevel?: string;
    disabled?: boolean;
    onChange?: Function;
    columnsCount: number | number[];
    itemClassName?: string;
    labelField?: string;
    labelClassName?: string;
    classPrefix: string;
    classnames: ClassNamesFn;
}
export declare class Radios extends React.Component<RadioProps, any> {
    static defaultProps: {
        type: string;
        optionType: string;
        btnActiveLevel: string;
        resetValue: string;
        inline: boolean;
        joinValues: boolean;
        clearable: boolean;
        columnsCount: number;
    };
    toggleOption(option: Option): void;
    renderGroup(option: Option, index: number, valueArray: Array<Option>): JSX.Element;
    renderItem(option: Option, index: number, valueArray: Array<Option>): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "style" | "value" | "disabled" | "multiple" | "level" | "id" | "onEdit" | "onAdd" | "onDelete" | "loading" | "delimiter" | "valueField" | "labelField" | "extractValue" | "options" | "placeholder" | "onChange" | "itemClassName" | "removable" | "labelClassName" | "creatable" | "editable" | "pathSeparator" | "simpleValue" | "multi"> & Partial<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "type" | "joinValues" | "resetValue" | "inline" | "btnActiveLevel" | "clearable" | "optionType" | "columnsCount">> & Partial<Pick<{
        type: string;
        optionType: string;
        btnActiveLevel: string;
        resetValue: string;
        inline: boolean;
        joinValues: boolean;
        clearable: boolean;
        columnsCount: number;
    }, never>> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "style" | "value" | "disabled" | "multiple" | "level" | "id" | "onEdit" | "onAdd" | "onDelete" | "loading" | "delimiter" | "valueField" | "labelField" | "extractValue" | "options" | "placeholder" | "onChange" | "itemClassName" | "removable" | "labelClassName" | "creatable" | "editable" | "pathSeparator" | "simpleValue" | "multi"> & Partial<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "type" | "joinValues" | "resetValue" | "inline" | "btnActiveLevel" | "clearable" | "optionType" | "columnsCount">> & Partial<Pick<{
            type: string;
            optionType: string;
            btnActiveLevel: string;
            resetValue: string;
            inline: boolean;
            joinValues: boolean;
            clearable: boolean;
            columnsCount: number;
        }, never>> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "style" | "value" | "disabled" | "multiple" | "level" | "id" | "onEdit" | "onAdd" | "onDelete" | "loading" | "delimiter" | "valueField" | "labelField" | "extractValue" | "options" | "placeholder" | "onChange" | "itemClassName" | "removable" | "labelClassName" | "creatable" | "editable" | "pathSeparator" | "simpleValue" | "multi"> & Partial<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "type" | "joinValues" | "resetValue" | "inline" | "btnActiveLevel" | "clearable" | "optionType" | "columnsCount">> & Partial<Pick<{
            type: string;
            optionType: string;
            btnActiveLevel: string;
            resetValue: string;
            inline: boolean;
            joinValues: boolean;
            clearable: boolean;
            columnsCount: number;
        }, never>> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "style" | "value" | "disabled" | "multiple" | "level" | "id" | "onEdit" | "onAdd" | "onDelete" | "loading" | "delimiter" | "valueField" | "labelField" | "extractValue" | "options" | "placeholder" | "onChange" | "itemClassName" | "removable" | "labelClassName" | "creatable" | "editable" | "pathSeparator" | "simpleValue" | "multi"> & Partial<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "type" | "joinValues" | "resetValue" | "inline" | "btnActiveLevel" | "clearable" | "optionType" | "columnsCount">> & Partial<Pick<{
            type: string;
            optionType: string;
            btnActiveLevel: string;
            resetValue: string;
            inline: boolean;
            joinValues: boolean;
            clearable: boolean;
            columnsCount: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "style" | "value" | "disabled" | "multiple" | "level" | "id" | "onEdit" | "onAdd" | "onDelete" | "loading" | "delimiter" | "valueField" | "labelField" | "extractValue" | "options" | "placeholder" | "onChange" | "itemClassName" | "removable" | "labelClassName" | "creatable" | "editable" | "pathSeparator" | "simpleValue" | "multi"> & Partial<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "type" | "joinValues" | "resetValue" | "inline" | "btnActiveLevel" | "clearable" | "optionType" | "columnsCount">> & Partial<Pick<{
            type: string;
            optionType: string;
            btnActiveLevel: string;
            resetValue: string;
            inline: boolean;
            joinValues: boolean;
            clearable: boolean;
            columnsCount: number;
        }, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "style" | "value" | "disabled" | "multiple" | "level" | "id" | "onEdit" | "onAdd" | "onDelete" | "loading" | "delimiter" | "valueField" | "labelField" | "extractValue" | "options" | "placeholder" | "onChange" | "itemClassName" | "removable" | "labelClassName" | "creatable" | "editable" | "pathSeparator" | "simpleValue" | "multi"> & Partial<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "type" | "joinValues" | "resetValue" | "inline" | "btnActiveLevel" | "clearable" | "optionType" | "columnsCount">> & Partial<Pick<{
            type: string;
            optionType: string;
            btnActiveLevel: string;
            resetValue: string;
            inline: boolean;
            joinValues: boolean;
            clearable: boolean;
            columnsCount: number;
        }, never>> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "style" | "value" | "disabled" | "multiple" | "level" | "id" | "onEdit" | "onAdd" | "onDelete" | "loading" | "delimiter" | "valueField" | "labelField" | "extractValue" | "options" | "placeholder" | "onChange" | "itemClassName" | "removable" | "labelClassName" | "creatable" | "editable" | "pathSeparator" | "simpleValue" | "multi"> & Partial<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "type" | "joinValues" | "resetValue" | "inline" | "btnActiveLevel" | "clearable" | "optionType" | "columnsCount">> & Partial<Pick<{
            type: string;
            optionType: string;
            btnActiveLevel: string;
            resetValue: string;
            inline: boolean;
            joinValues: boolean;
            clearable: boolean;
            columnsCount: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "style" | "value" | "disabled" | "multiple" | "level" | "id" | "onEdit" | "onAdd" | "onDelete" | "loading" | "delimiter" | "valueField" | "labelField" | "extractValue" | "options" | "placeholder" | "onChange" | "itemClassName" | "removable" | "labelClassName" | "creatable" | "editable" | "pathSeparator" | "simpleValue" | "multi"> & Partial<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "type" | "joinValues" | "resetValue" | "inline" | "btnActiveLevel" | "clearable" | "optionType" | "columnsCount">> & Partial<Pick<{
            type: string;
            optionType: string;
            btnActiveLevel: string;
            resetValue: string;
            inline: boolean;
            joinValues: boolean;
            clearable: boolean;
            columnsCount: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "style" | "value" | "disabled" | "multiple" | "level" | "id" | "onEdit" | "onAdd" | "onDelete" | "loading" | "delimiter" | "valueField" | "labelField" | "extractValue" | "options" | "placeholder" | "onChange" | "itemClassName" | "removable" | "labelClassName" | "creatable" | "editable" | "pathSeparator" | "simpleValue" | "multi"> & Partial<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "type" | "joinValues" | "resetValue" | "inline" | "btnActiveLevel" | "clearable" | "optionType" | "columnsCount">> & Partial<Pick<{
            type: string;
            optionType: string;
            btnActiveLevel: string;
            resetValue: string;
            inline: boolean;
            joinValues: boolean;
            clearable: boolean;
            columnsCount: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "style" | "value" | "disabled" | "multiple" | "level" | "id" | "onEdit" | "onAdd" | "onDelete" | "loading" | "delimiter" | "valueField" | "labelField" | "extractValue" | "options" | "placeholder" | "onChange" | "itemClassName" | "removable" | "labelClassName" | "creatable" | "editable" | "pathSeparator" | "simpleValue" | "multi"> & Partial<Pick<Omit<RadioProps, keyof import("../theme").ThemeProps>, "type" | "joinValues" | "resetValue" | "inline" | "btnActiveLevel" | "clearable" | "optionType" | "columnsCount">> & Partial<Pick<{
            type: string;
            optionType: string;
            btnActiveLevel: string;
            resetValue: string;
            inline: boolean;
            joinValues: boolean;
            clearable: boolean;
            columnsCount: number;
        }, never>> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Radios>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Radios, {}> & {
    ComposedComponent: typeof Radios;
};
export default _default;
