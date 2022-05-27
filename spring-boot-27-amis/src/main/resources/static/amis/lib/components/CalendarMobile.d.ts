/**
 * @file CalendarMobile
 * @description 移动端日历组件
 * @author hongyang03
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import moment from 'moment';
import { ThemeProps } from '../theme';
import { LocaleProps } from '../locale';
export interface CalendarMobileProps extends ThemeProps, LocaleProps {
    className?: string;
    timeFormat?: string;
    inputFormat?: string;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    minDuration?: moment.Duration;
    maxDuration?: moment.Duration;
    dateFormat?: string;
    embed?: boolean;
    viewMode?: 'days' | 'months' | 'years' | 'time' | 'quarters';
    close?: () => void;
    confirm?: (startDate?: any, endTime?: any) => void;
    onChange?: (data: any, callback?: () => void) => void;
    footerExtra?: JSX.Element | null;
    showViewMode?: 'years' | 'months';
    isDatePicker?: boolean;
    timeConstraints?: {
        hours?: {
            min: number;
            max: number;
            step: number;
        };
        minutes?: {
            min: number;
            max: number;
            step: number;
        };
        seconds: {
            min: number;
            max: number;
            step: number;
        };
    };
    defaultDate?: moment.Moment;
}
export interface CalendarMobileState {
    startDate?: moment.Moment;
    endDate?: moment.Moment;
    monthHeights?: number[];
    currentDate: moment.Moment;
    showToast: boolean;
    isScrollToBottom: boolean;
    dateTime: any;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
}
export declare class CalendarMobile extends React.Component<CalendarMobileProps, CalendarMobileState> {
    mobileBody: any;
    mobileHeader: any;
    timer: any;
    static defaultProps: Pick<CalendarMobileProps, 'showViewMode'>;
    constructor(props: CalendarMobileProps);
    getDateRange(minDate?: moment.Moment, maxDate?: moment.Moment, defaultDate?: moment.Moment): {
        currentDate: moment.Moment;
        minDate: moment.Moment;
        maxDate: moment.Moment;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: CalendarMobileProps): void;
    componentWillUnmount(): void;
    initMonths(): void;
    scollToDate(date: moment.Moment): void;
    onMobileBodyScroll(e: any): void;
    scrollPreYear(): void;
    scrollAfterYear(): void;
    getDaysOfWeek(): string[];
    handleCalendarClick(isDisabled: boolean): void;
    getRenderProps(props: any, currentDate: moment.Moment): {
        props: any;
        footerText: string;
        rdtDisabled: boolean;
    };
    handleTimeChange(newTime: any): void;
    checkIsValidDate(currentDate: moment.Moment): boolean;
    renderMobileDay(props: any, currentDate: moment.Moment): JSX.Element;
    renderMonth(props: any, month: number, year: number): JSX.Element;
    renderQuarter(props: any, quarter: number, year: number): JSX.Element;
    handleMobileChange(newValue: moment.Moment): void;
    renderMobileCalendarBody(): JSX.Element | undefined;
    renderMobileTimePicker(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof CalendarMobile>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof CalendarMobile, {}> & {
        ComposedComponent: typeof CalendarMobile;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof CalendarMobile>;
} & import("hoist-non-react-statics").NonReactStatics<typeof CalendarMobile, {}> & {
    ComposedComponent: typeof CalendarMobile;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "close" | "confirm" | "onChange" | "inputFormat" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "timeFormat" | "dateFormat" | "timeConstraints" | "viewMode" | "startDate" | "endDate" | "footerExtra" | "isDatePicker" | "defaultDate"> & Partial<Pick<Omit<CalendarMobileProps, keyof LocaleProps>, "showViewMode">> & Partial<Pick<Pick<CalendarMobileProps, "showViewMode">, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof CalendarMobile>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof CalendarMobile, {}> & {
        ComposedComponent: typeof CalendarMobile;
    };
};
export default _default;
