import React from 'react';
interface CalendarProps {
    view: string;
    viewProps: any;
}
export default class CustomCalendarContainer extends React.Component<CalendarProps> {
    viewComponents: any;
    render(): React.CElement<any, React.Component<any, any, any>>;
}
export {};
