import { SchemaObject, BaseSchema } from '../Schema';
import { DateControlRenderer } from './Form/InputDate';
interface scheduleItem {
    startTime: string;
    endTime: string;
    content: any;
    className?: string;
}
export interface CalendarSchema extends BaseSchema {
    /**
     * 指定为日历选择控件
     */
    type: 'calendar';
    /**
     * 日程
     */
    schedules?: Array<scheduleItem> | string;
    /**
     * 日程显示颜色自定义
     */
    scheduleClassNames?: Array<string>;
    /**
     * 日程点击展示
     */
    scheduleAction?: SchemaObject;
}
export declare class CalendarRenderer extends DateControlRenderer {
    static defaultProps: {
        embed: boolean;
        placeholder: string;
        dateFormat: string;
        timeFormat: string;
        strictMode: boolean;
        format: string;
        viewMode: string;
        inputFormat: string;
        timeConstraints: {
            minutes: {
                step: number;
            };
        };
        clearable: boolean;
    };
}
export {};
