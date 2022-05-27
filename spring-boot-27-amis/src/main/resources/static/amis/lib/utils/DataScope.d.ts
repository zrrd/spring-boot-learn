import type { JSONSchema7 } from 'json-schema';
export declare type JSONSchema = JSONSchema7;
export declare class DataScope {
    parent?: DataScope;
    readonly children: Array<DataScope>;
    readonly id: string;
    ref?: string;
    name?: string;
    tag?: string;
    description?: string;
    readonly schemas: Array<JSONSchema>;
    constructor(schemas: JSONSchema | Array<JSONSchema>, id: string);
    addChild(id: string, schema?: JSONSchema | Array<JSONSchema>): DataScope;
    removeChild(idOrScope: string | DataScope): void;
    setSchemas(schemas: Array<JSONSchema>): this;
    addSchema(schema: JSONSchema): this;
    removeSchema(id: string): this;
    contains(scope: DataScope): boolean;
    getMergedSchema(): any;
    protected buildOptions(options: Array<any>, schema: JSONSchema, path?: string, key?: string): void;
    getDataPropsAsOptions(): any;
    getSchemaByPath(path: string): JSONSchema7 | null;
}
