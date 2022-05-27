/// <reference types="hoist-non-react-statics" />
import moment from 'moment';
import React from 'react';
import { LocaleProps } from '../../locale';
interface CustomYearsViewProps extends LocaleProps {
    viewDate: moment.Moment;
    selectedDate: moment.Moment;
    subtractTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    addTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    showView: (view: string) => () => void;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    onChange?: () => void;
    onClose?: () => void;
    onConfirm?: (value: number[], types: string[]) => void;
    useMobileUI: boolean;
    updateOn?: string;
    setDate?: (date: string) => void;
    renderYear?: (props: any, year: number) => JSX.Element;
    updateSelectedDate: (event: React.MouseEvent<any>, close?: boolean) => void;
    isValidDate?: (currentDate: moment.Moment, selected?: moment.Moment) => boolean;
}
export declare class CustomYearsView extends React.Component<CustomYearsViewProps> {
    state: {
        pickerValue: number[];
    };
    constructor(props: any);
    renderYears(year: number): React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>[];
    updateSelectedYear(event: any): void;
    renderYear: (props: any, year: number, date?: moment.Moment | undefined) => JSX.Element;
    onConfirm: (value: number[]) => void;
    onPickerChange: (value: number[]) => void;
    renderYearPicker: () => JSX.Element;
    alwaysValidDate(): boolean;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<any, keyof LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<any, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<any>;
} & import("hoist-non-react-statics").NonReactStatics<any, {}> & {
    ComposedComponent: any;
};
export default _default;
