import { PlainObject } from '../types';
import { Enginer } from './tpl';
import { prettyBytes, escapeHtml, formatDuration, filterDate, relativeValueRe, parseDuration, getFilters, registerFilter, pickValues, resolveVariable, isPureVariable, resolveVariableAndFilter, tokenize, stripNumber } from 'amis-formula';
export { prettyBytes, escapeHtml, formatDuration, filterDate, relativeValueRe, parseDuration, getFilters, registerFilter, pickValues, resolveVariable, isPureVariable, resolveVariableAndFilter, tokenize, stripNumber };
export declare function resolveMapping(value: any, data: PlainObject, defaultFilter?: string): any;
export declare function dataMapping(to: any, from?: PlainObject, ignoreFunction?: boolean | ((key: string, value: any) => boolean), convertKeyToPath?: boolean): any;
export declare function register(): Enginer & {
    name: string;
};
