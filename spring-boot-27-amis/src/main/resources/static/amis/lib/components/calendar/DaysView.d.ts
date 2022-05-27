/// <reference types="hoist-non-react-statics" />
import moment from 'moment';
import React from 'react';
import { LocaleProps } from '../../locale';
import { ClassNamesFn } from '../../theme';
import { PickerOption } from '../PickerColumn';
import { DateType } from './Calendar';
interface CustomDaysViewProps extends LocaleProps {
    classPrefix?: string;
    prevIcon?: string;
    nextIcon?: string;
    viewDate: moment.Moment;
    selectedDate: moment.Moment;
    minDate: moment.Moment;
    maxDate: moment.Moment;
    useMobileUI: boolean;
    embed: boolean;
    timeFormat: string;
    requiredConfirm?: boolean;
    isEndDate?: boolean;
    renderDay?: Function;
    onClose?: () => void;
    onChange: (value: moment.Moment) => void;
    onConfirm?: (value: number[], types: DateType[]) => void;
    setDateTimeState: (state: any) => void;
    showTime: () => void;
    setTime: (type: string, amount: number) => void;
    scrollToTop: (type: string, amount: number, i: number, lable?: string) => void;
    subtractTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    addTime: (amount: number, type: string, toSelected?: moment.Moment) => () => void;
    isValidDate?: (currentDate: moment.Moment, selected?: moment.Moment) => boolean;
    showView: (view: string) => () => void;
    updateSelectedDate: (event: React.MouseEvent<any>, close?: boolean) => void;
    handleClickOutside: () => void;
    classnames: ClassNamesFn;
    schedules?: Array<{
        startTime: Date;
        endTime: Date;
        content: any;
        className?: string;
    }>;
    largeMode?: boolean;
    onScheduleClick?: (scheduleData: any) => void;
    hideHeader?: boolean;
    getColumns: (types: DateType[], dateBoundary: void) => any;
    getDateBoundary: (currentDate: moment.Moment) => any;
}
export declare class CustomDaysView extends React.Component<CustomDaysViewProps> {
    state: {
        columns: {
            options: PickerOption[];
        }[];
        types: DateType[];
        pickerValue: number[];
        uniqueTag: any;
    };
    getDaysOfWeek(locale: any): any[];
    alwaysValidDate(): number;
    renderDays(): React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>[];
    constructor(props: any);
    componentWillMount(): void;
    componentDidMount(): void;
    updateSelectedDate: (event: React.MouseEvent<any>) => void;
    showTime: () => JSX.Element;
    setTime: (type: 'hours' | 'minutes' | 'seconds' | 'milliseconds', value: number) => void;
    scrollToTop: (type: 'hours' | 'minutes' | 'seconds' | 'milliseconds', value: number, i: number, label?: string | undefined) => void;
    confirm: () => void;
    cancel: () => void;
    renderDay: (props: any, currentDate: moment.Moment) => JSX.Element;
    computedTimeOptions(total: number): {
        label: string;
        value: string;
    }[];
    renderTimes: () => JSX.Element;
    renderFooter: () => JSX.Element | null;
    onPickerConfirm: (value: number[]) => void;
    onPickerChange: (value: number[], index: number) => void;
    renderPicker: () => JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<CustomDaysViewProps, keyof LocaleProps> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<CustomDaysViewProps, keyof LocaleProps> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<React.ComponentClass<CustomDaysViewProps, any>>;
} & import("hoist-non-react-statics").NonReactStatics<React.ComponentClass<CustomDaysViewProps, any>, {}> & {
    ComposedComponent: React.ComponentClass<CustomDaysViewProps, any>;
};
export default _default;
