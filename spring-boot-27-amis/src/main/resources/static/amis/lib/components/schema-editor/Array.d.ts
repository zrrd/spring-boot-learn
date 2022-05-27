/// <reference types="react" />
import { SchemaEditorItemCommon } from './Common';
export declare class SchemaEditorItemArray extends SchemaEditorItemCommon {
    state: {
        collapsed: boolean;
    };
    toggleCollapsed(): void;
    handleItemsChange(items: any): void;
    renderItems(): JSX.Element;
    render(): JSX.Element;
}
