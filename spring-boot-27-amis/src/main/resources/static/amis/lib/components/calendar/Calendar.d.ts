/**
 * @file 基于 react-datetime 改造。
 */
import React from 'react';
import moment from 'moment';
export declare type DateType = 'year' | 'month' | 'date' | 'hours' | 'minutes' | 'seconds';
export interface BoundaryObject {
    max: number;
    min: number;
}
export interface DateBoundary {
    year: BoundaryObject;
    month: BoundaryObject;
    date: BoundaryObject;
    hours: BoundaryObject;
    minutes: BoundaryObject;
    seconds: BoundaryObject;
}
interface BaseDatePickerProps {
    className?: string;
    value?: any;
    defaultValue?: any;
    viewMode?: 'years' | 'months' | 'days' | 'time' | 'quarters';
    dateFormat?: boolean | string;
    inputFormat?: boolean | string;
    timeFormat?: any;
    input?: boolean;
    locale: string;
    date?: any;
    isValidDate?: (currentDate: moment.Moment, selected?: moment.Moment) => boolean;
    onViewModeChange?: (type: string) => void;
    requiredConfirm?: boolean;
    onClose?: () => void;
    onChange?: (value: any) => void;
    isEndDate?: boolean;
    minDate?: moment.Moment;
    maxDate?: moment.Moment;
    viewDate?: moment.Moment;
    renderDay?: (props: any, currentDate: moment.Moment, selectedDate: moment.Moment) => JSX.Element;
    renderMonth?: (props: any, month: number, year: number, date: any) => JSX.Element;
    renderQuarter?: (props: any, quartar: number, year?: number, date?: moment.Moment) => JSX.Element;
    renderYear?: (props: any, year: number) => JSX.Element;
    schedules?: Array<{
        startTime: Date;
        endTime: Date;
        content: string | React.ReactElement;
        color?: string;
    }>;
    largeMode?: boolean;
    onScheduleClick?: (scheduleData: any) => void;
    hideHeader?: boolean;
    updateOn?: string;
    useMobileUI?: boolean;
    embed?: boolean;
    closeOnSelect?: boolean;
    showToolbar?: boolean;
    open?: boolean;
    utc?: boolean;
    displayTimeZone?: string;
    timeConstraints?: any;
    timeRangeHeader?: string;
}
declare const _default: React.ComponentType<BaseDatePickerProps>;
export default _default;
