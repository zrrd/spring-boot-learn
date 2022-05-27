/**
 * @file DateRangePicker
 * @description 自定义日期范围时间选择器组件
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import moment from 'moment';
import { ShortCuts } from './DatePicker';
import { ThemeProps } from '../theme';
import { PlainObject } from '../types';
import { LocaleProps } from '../locale';
export interface DateRangePickerProps extends ThemeProps, LocaleProps {
    className?: string;
    popoverClassName?: string;
    startPlaceholder?: string;
    endPlaceholder?: string;
    theme?: any;
    format: string;
    utc?: boolean;
    inputFormat?: string;
    ranges?: string | Array<ShortCuts>;
    clearable?: boolean;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    minDuration?: moment.Duration;
    maxDuration?: moment.Duration;
    joinValues: boolean;
    delimiter: string;
    value?: any;
    onChange: (value: any) => void;
    data?: any;
    disabled?: boolean;
    closeOnSelect?: boolean;
    overlayPlacement: string;
    timeFormat?: string;
    resetValue?: any;
    popOverContainer?: any;
    dateFormat?: string;
    embed?: boolean;
    viewMode?: 'days' | 'months' | 'years' | 'time' | 'quarters';
    borderMode?: 'full' | 'half' | 'none';
    useMobileUI?: boolean;
    onFocus?: Function;
    onBlur?: Function;
    type?: string;
    onRef?: any;
}
export interface DateRangePickerState {
    isOpened: boolean;
    isFocused: boolean;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
    editState?: 'start' | 'end';
    startInputValue?: string;
    endInputValue?: string;
}
export declare const availableRanges: {
    [propName: string]: any;
};
export declare const advancedRanges: {
    regexp: RegExp;
    resolve: (__: any, _: string, hours: string) => {
        label: any;
        startDate: (now: moment.Moment) => moment.Moment;
        endDate: (now: moment.Moment) => moment.Moment;
    };
}[];
export declare class DateRangePicker extends React.Component<DateRangePickerProps, DateRangePickerState> {
    static defaultProps: {
        startPlaceholder: string;
        endPlaceholder: string;
        format: string;
        inputFormat: string;
        joinValues: boolean;
        clearable: boolean;
        delimiter: string;
        ranges: string;
        resetValue: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
    };
    innerDom: any;
    popover: any;
    input?: HTMLInputElement;
    isFirstClick: boolean;
    static formatValue(newValue: any, format: string, joinValues: boolean, delimiter: string, utc?: boolean): any;
    static unFormatValue(value: any, format: string, joinValues: boolean, delimiter: string): {
        startDate: moment.Moment | undefined;
        endDate: moment.Moment | undefined;
    };
    dom: React.RefObject<HTMLDivElement>;
    calendarRef: React.RefObject<HTMLDivElement>;
    nextMonth: moment.Moment;
    startInputRef: React.RefObject<HTMLInputElement>;
    endInputRef: React.RefObject<HTMLInputElement>;
    constructor(props: DateRangePickerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleOutClick(e: Event): void;
    componentDidUpdate(prevProps: DateRangePickerProps): void;
    focus(): void;
    blur(): void;
    handleFocus(e: React.SyntheticEvent<HTMLDivElement>): void;
    handleBlur(e: React.SyntheticEvent<HTMLDivElement>): void;
    open(): void;
    openStart(): void;
    openEnd(): void;
    close(): void;
    handleClick(): void;
    handlePopOverClick(e: React.MouseEvent<any>): void;
    handleKeyPress(e: React.KeyboardEvent): void;
    confirm(): void;
    filterDate(date: moment.Moment, originValue?: moment.Moment, timeFormat?: string, type?: 'start' | 'end'): moment.Moment;
    handleDateChange(newValue: moment.Moment): void;
    handleStartDateChange(newValue: moment.Moment): void;
    handeleEndDateChange(newValue: moment.Moment): void;
    startInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    endInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    getEndDateByDuration(newValue: moment.Moment): moment.Moment;
    getStartDateByDuration(newValue: moment.Moment): moment.Moment;
    handleTimeStartChange(newValue: moment.Moment): void;
    handleTimeEndChange(newValue: moment.Moment): void;
    handleMobileChange(data: any, callback?: () => void): void;
    selectRannge(range: PlainObject): void;
    renderRanges(ranges: string | Array<ShortCuts> | undefined): JSX.Element | null;
    clearValue(e: React.MouseEvent<any>): void;
    clear(): void;
    reset(): void;
    checkStartIsValidDate(currentDate: moment.Moment): boolean;
    checkEndIsValidDate(currentDate: moment.Moment): boolean;
    renderDay(props: any, currentDate: moment.Moment): JSX.Element;
    renderMonth(props: any, month: number, year: number, date: any): JSX.Element;
    renderQuarter(props: any, quarter: number, year: number): JSX.Element;
    renderYear(props: any, year: number): JSX.Element;
    renderCalendar(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
        startPlaceholder: string;
        endPlaceholder: string;
        format: string;
        inputFormat: string;
        joinValues: boolean;
        clearable: boolean;
        delimiter: string;
        ranges: string;
        resetValue: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof DateRangePicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof DateRangePicker, {}> & {
        ComposedComponent: typeof DateRangePicker;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
        startPlaceholder: string;
        endPlaceholder: string;
        format: string;
        inputFormat: string;
        joinValues: boolean;
        clearable: boolean;
        delimiter: string;
        ranges: string;
        resetValue: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof DateRangePicker>;
} & import("hoist-non-react-statics").NonReactStatics<typeof DateRangePicker, {}> & {
    ComposedComponent: typeof DateRangePicker;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
            startPlaceholder: string;
            endPlaceholder: string;
            format: string;
            inputFormat: string;
            joinValues: boolean;
            clearable: boolean;
            delimiter: string;
            ranges: string;
            resetValue: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "classPrefix" | "classnames" | "data" | "embed" | "className" | "theme" | "value" | "type" | "disabled" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "maxDate" | "minDate" | "maxDuration" | "minDuration" | "borderMode" | "popOverContainer" | "timeFormat" | "dateFormat" | "viewMode" | "utc" | "popoverClassName" | "onRef"> & Partial<Pick<Omit<DateRangePickerProps, keyof LocaleProps>, "delimiter" | "joinValues" | "resetValue" | "clearable" | "format" | "inputFormat" | "ranges" | "startPlaceholder" | "endPlaceholder" | "closeOnSelect" | "overlayPlacement">> & Partial<Pick<{
                startPlaceholder: string;
                endPlaceholder: string;
                format: string;
                inputFormat: string;
                joinValues: boolean;
                clearable: boolean;
                delimiter: string;
                ranges: string;
                resetValue: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof DateRangePicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof DateRangePicker, {}> & {
        ComposedComponent: typeof DateRangePicker;
    };
};
export default _default;
