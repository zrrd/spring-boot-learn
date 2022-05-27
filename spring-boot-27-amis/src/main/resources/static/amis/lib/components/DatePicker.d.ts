/**
 * @file DatePicker
 * @description 时间选择器组件
 * @author fex
 */
/// <reference types="hoist-non-react-statics" />
import React from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { ThemeProps } from '../theme';
import { LocaleProps } from '../locale';
export declare type ShortCutDate = {
    label: string;
    date: moment.Moment;
};
export declare type ShortCutDateRange = {
    label: string;
    startDate?: moment.Moment;
    endDate?: moment.Moment;
};
export declare type ShortCuts = {
    label: string;
    value: string;
} | ShortCutDate | ShortCutDateRange;
export interface DateProps extends LocaleProps, ThemeProps {
    viewMode: 'years' | 'months' | 'days' | 'time' | 'quarters';
    className?: string;
    popoverClassName?: string;
    placeholder?: string;
    inputFormat?: string;
    timeFormat?: string;
    format?: string;
    closeOnSelect: boolean;
    disabled?: boolean;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    clearable?: boolean;
    defaultValue?: any;
    utc?: boolean;
    onChange: (value: any) => void;
    value?: any;
    shortcuts: string | Array<ShortCuts>;
    overlayPlacement: string;
    dateFormat?: string;
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
    popOverContainer?: any;
    borderMode?: 'full' | 'half' | 'none';
    embed?: boolean;
    schedules?: Array<{
        startTime: Date;
        endTime: Date;
        content: any;
        className?: string;
    }>;
    scheduleClassNames?: Array<string>;
    largeMode?: boolean;
    onScheduleClick?: (scheduleData: any) => void;
    useMobileUI?: boolean;
    mobileCalendarMode?: 'picker' | 'calendar';
    onFocus?: Function;
    onBlur?: Function;
    onRef?: any;
}
export interface DatePickerState {
    isOpened: boolean;
    isFocused: boolean;
    value: moment.Moment | undefined;
    inputValue: string | undefined;
}
export declare class DatePicker extends React.Component<DateProps, DatePickerState> {
    static defaultProps: {
        viewMode: "time" | "years" | "months" | "days";
        shortcuts: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
        scheduleClassNames: string[];
    };
    state: DatePickerState;
    constructor(props: DateProps);
    dom: HTMLDivElement;
    inputRef: React.RefObject<HTMLInputElement>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DateProps): void;
    focus(): void;
    handleFocus(e: React.SyntheticEvent<HTMLDivElement>): void;
    handleBlur(e: React.SyntheticEvent<HTMLDivElement>): void;
    handleKeyPress(e: React.KeyboardEvent): void;
    handleClick(): void;
    handlePopOverClick(e: React.MouseEvent<any>): void;
    open(fn?: () => void): void;
    close(): void;
    clearValue(e: React.MouseEvent<any>): void;
    clear(): void;
    reset(resetValue?: any): void;
    handleChange(value: moment.Moment): void;
    inputChange(e: React.ChangeEvent<HTMLInputElement>): void;
    selectRannge(item: any): void;
    checkIsValidDate(currentDate: moment.Moment): boolean;
    getTarget(): HTMLDivElement;
    getParent(): HTMLDivElement;
    domRef: (ref: HTMLDivElement) => void;
    getAvailableShortcuts(key: string): any;
    renderShortCuts(shortcuts: string | Array<ShortCuts>): JSX.Element | null;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Omit<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
        viewMode: "time" | "years" | "months" | "days";
        shortcuts: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
        scheduleClassNames: string[];
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }, keyof ThemeProps> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
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
        shouldComponentUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }, keyof ThemeProps> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<{
        new (props: Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof DatePicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof DatePicker, {}> & {
        ComposedComponent: typeof DatePicker;
    }>;
} & import("hoist-non-react-statics").NonReactStatics<{
    new (props: Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
        viewMode: "time" | "years" | "months" | "days";
        shortcuts: string;
        closeOnSelect: boolean;
        overlayPlacement: string;
        scheduleClassNames: string[];
    }, never>> & {
        locale?: string | undefined;
        translate?: ((str: string, ...args: any[]) => string) | undefined;
    }): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
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
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof DatePicker>;
} & import("hoist-non-react-statics").NonReactStatics<typeof DatePicker, {}> & {
    ComposedComponent: typeof DatePicker;
}, {}> & {
    ComposedComponent: {
        new (props: Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
            viewMode: "time" | "years" | "months" | "days";
            shortcuts: string;
            closeOnSelect: boolean;
            overlayPlacement: string;
            scheduleClassNames: string[];
        }, never>> & {
            locale?: string | undefined;
            translate?: ((str: string, ...args: any[]) => string) | undefined;
        }): {
            ref: any;
            childRef(ref: any): void;
            getWrappedInstance(): any;
            render(): JSX.Element;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
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
            shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<DateProps, keyof LocaleProps>, "classPrefix" | "classnames" | "embed" | "className" | "theme" | "value" | "defaultValue" | "disabled" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "useMobileUI" | "clearable" | "format" | "inputFormat" | "maxDate" | "minDate" | "borderMode" | "popOverContainer" | "timeFormat" | "schedules" | "largeMode" | "onScheduleClick" | "dateFormat" | "timeConstraints" | "utc" | "popoverClassName" | "mobileCalendarMode" | "onRef"> & Partial<Pick<Omit<DateProps, keyof LocaleProps>, "viewMode" | "closeOnSelect" | "shortcuts" | "overlayPlacement" | "scheduleClassNames">> & Partial<Pick<{
                viewMode: "time" | "years" | "months" | "days";
                shortcuts: string;
                closeOnSelect: boolean;
                overlayPlacement: string;
                scheduleClassNames: string[];
            }, never>> & {
                locale?: string | undefined;
                translate?: ((str: string, ...args: any[]) => string) | undefined;
            }>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        contextType: React.Context<string>;
        ComposedComponent: React.ComponentType<typeof DatePicker>;
    } & import("hoist-non-react-statics").NonReactStatics<typeof DatePicker, {}> & {
        ComposedComponent: typeof DatePicker;
    };
};
export default _default;
