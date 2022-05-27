import { Instance, SnapshotIn, IAnyModelType } from 'mobx-state-tree';
import { Api, fetchOptions } from '../types';
export declare const Column: import("mobx-state-tree").IModelType<{
    title: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    key: import("mobx-state-tree").IType<string | undefined, string, string>;
    toggled: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    breakpoint: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    pristine: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    toggable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    index: import("mobx-state-tree").IType<number | undefined, number, number>;
    type: import("mobx-state-tree").IType<string | undefined, string, string>;
    children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>;
}, {
    toggleToggle(): void;
    setToggled(value: boolean): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare type IColumn = Instance<typeof Column>;
export declare type SColumn = SnapshotIn<typeof Column>;
export declare const Row: import("mobx-state-tree").IModelType<{
    storeType: import("mobx-state-tree").IType<string | undefined, string, string>;
    id: import("mobx-state-tree").ISimpleType<string>;
    key: import("mobx-state-tree").ISimpleType<string>;
    pristine: import("mobx-state-tree").IType<any, any, any>;
    data: import("mobx-state-tree").IType<any, any, any>;
    index: import("mobx-state-tree").ISimpleType<number>;
    newIndex: import("mobx-state-tree").ISimpleType<number>;
    depth: import("mobx-state-tree").ISimpleType<number>;
    children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>;
    path: import("mobx-state-tree").IType<string | undefined, string, string>;
}, {
    readonly checked: boolean;
    readonly modified: boolean;
    readonly locals: any;
} & {
    replaceWith(data: any): void;
    change(values: object, savePristine?: boolean | undefined): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare type IRow = Instance<typeof Row>;
export declare type SRow = SnapshotIn<typeof Row>;
export declare const TableStoreV2: import("mobx-state-tree").IModelType<{
    id: import("mobx-state-tree").ISimpleType<string>;
    path: import("mobx-state-tree").IType<string | undefined, string, string>;
    storeType: import("mobx-state-tree").ISimpleType<string>;
    disposed: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    parentId: import("mobx-state-tree").IType<string | undefined, string, string>;
    childrenIds: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").ISimpleType<string>>, [undefined]>;
} & {
    hasRemoteData: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
    data: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    initedAt: import("mobx-state-tree").IType<number | undefined, number, number>;
    updatedAt: import("mobx-state-tree").IType<number | undefined, number, number>;
    pristine: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    action: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    dialogOpen: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    dialogData: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    drawerOpen: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    drawerData: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
} & {
    msg: import("mobx-state-tree").IType<string | undefined, string, string>;
    error: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    fetching: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    saving: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    busying: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    checking: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    initializing: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    schema: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    schemaKey: import("mobx-state-tree").IType<string | undefined, string, string>;
} & {
    columns: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        title: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        key: import("mobx-state-tree").IType<string | undefined, string, string>;
        toggled: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        breakpoint: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        pristine: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        toggable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        index: import("mobx-state-tree").IType<number | undefined, number, number>;
        type: import("mobx-state-tree").IType<string | undefined, string, string>;
        children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>;
    }, {
        toggleToggle(): void;
        setToggled(value: boolean): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    rows: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        storeType: import("mobx-state-tree").IType<string | undefined, string, string>;
        id: import("mobx-state-tree").ISimpleType<string>;
        key: import("mobx-state-tree").ISimpleType<string>;
        pristine: import("mobx-state-tree").IType<any, any, any>;
        data: import("mobx-state-tree").IType<any, any, any>;
        index: import("mobx-state-tree").ISimpleType<number>;
        newIndex: import("mobx-state-tree").ISimpleType<number>;
        depth: import("mobx-state-tree").ISimpleType<number>;
        children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>;
        path: import("mobx-state-tree").IType<string | undefined, string, string>;
    }, {
        readonly checked: boolean;
        readonly modified: boolean;
        readonly locals: any;
    } & {
        replaceWith(data: any): void;
        change(values: object, savePristine?: boolean | undefined): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    selectedRowKeys: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IType<any, any, any>>;
    selectedRows: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IReferenceType<import("mobx-state-tree").IModelType<{
        storeType: import("mobx-state-tree").IType<string | undefined, string, string>;
        id: import("mobx-state-tree").ISimpleType<string>;
        key: import("mobx-state-tree").ISimpleType<string>;
        pristine: import("mobx-state-tree").IType<any, any, any>;
        data: import("mobx-state-tree").IType<any, any, any>;
        index: import("mobx-state-tree").ISimpleType<number>;
        newIndex: import("mobx-state-tree").ISimpleType<number>;
        depth: import("mobx-state-tree").ISimpleType<number>;
        children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>;
        path: import("mobx-state-tree").IType<string | undefined, string, string>;
    }, {
        readonly checked: boolean;
        readonly modified: boolean;
        readonly locals: any;
    } & {
        replaceWith(data: any): void;
        change(values: object, savePristine?: boolean | undefined): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
    expandedRowKeys: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IType<any, any, any>>;
    columnsTogglable: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<boolean | "auto", boolean | "auto", boolean | "auto">, [undefined]>;
    orderBy: import("mobx-state-tree").IType<string | undefined, string, string>;
    order: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ITypeUnion<"desc" | "asc", "desc" | "asc", "desc" | "asc">, [undefined]>;
    query: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
    pageNo: import("mobx-state-tree").IType<number | undefined, number, number>;
    pageSize: import("mobx-state-tree").IType<number | undefined, number, number>;
    dragging: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
}, {
    readonly parentStore: any;
    readonly __: any;
    readonly hasChildren: boolean;
    readonly children: any[];
} & {
    onChildStoreDispose(child: any): void;
    syncProps(props: any, prevProps: any, list?: string[]): void;
    dispose: (callback?: (() => void) | undefined) => void;
    addChildId: (id: string) => void;
    removeChildId: (id: string) => void;
} & {
    getValueByName(name: string, canAccessSuper?: boolean): any;
    getPristineValueByName(name: string): any;
} & {
    initData(data?: object, skipSetPristine?: boolean): void;
    reset(): void;
    updateData(data?: object, tag?: object | undefined, replace?: boolean | undefined): void;
    changeValue(name: string, value: any, changePristine?: boolean | undefined, force?: boolean | undefined, otherModifier?: ((data: Object) => void) | undefined): void;
    setCurrentAction(action: object): void;
    openDialog(ctx: any, additonal?: object | undefined, callback?: ((ret: any) => void) | undefined): void;
    closeDialog(result?: any): void;
    openDrawer(ctx: any, additonal?: object | undefined, callback?: ((ret: any) => void) | undefined): void;
    closeDrawer(result?: any): void;
} & {
    readonly loading: boolean;
} & {
    markFetching: (fetching?: boolean) => void;
    markSaving: (saving?: boolean) => void;
    markBusying: (busying?: boolean) => void;
    fetchInitData: (api: Api, data?: object | undefined, options?: fetchOptions | undefined) => Promise<any>;
    fetchData: (api: Api, data?: object | undefined, options?: fetchOptions | undefined) => Promise<any>;
    reInitData: (data: object | undefined, replace?: boolean) => void;
    updateMessage: (msg?: string | undefined, error?: boolean) => void;
    clearMessage: () => void;
    setHasRemoteData: () => void;
    saveRemote: (api: Api, data?: object | undefined, options?: fetchOptions | undefined) => Promise<any>;
    fetchSchema: (api: Api, data?: object | undefined, options?: fetchOptions | undefined) => Promise<any>;
    checkRemote: (api: Api, data?: object | undefined, options?: fetchOptions | undefined) => Promise<any>;
} & {
    readonly toggable: boolean;
    readonly columnsData: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IModelType<{
        title: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        key: import("mobx-state-tree").IType<string | undefined, string, string>;
        toggled: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        breakpoint: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        pristine: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        toggable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        index: import("mobx-state-tree").IType<number | undefined, number, number>;
        type: import("mobx-state-tree").IType<string | undefined, string, string>;
        children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>;
    }, {
        toggleToggle(): void;
        setToggled(value: boolean): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        title: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        key: import("mobx-state-tree").IType<string | undefined, string, string>;
        toggled: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        breakpoint: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        pristine: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        toggable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        index: import("mobx-state-tree").IType<number | undefined, number, number>;
        type: import("mobx-state-tree").IType<string | undefined, string, string>;
        children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>;
    }, {
        toggleToggle(): void;
        setToggled(value: boolean): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>>;
    readonly toggableColumns: ({
        title: any;
        key: string;
        toggled: boolean;
        breakpoint: any;
        pristine: any;
        toggable: boolean;
        index: number;
        type: string;
        children: import("mobx-state-tree").IMSTArray<IAnyModelType> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        toggleToggle(): void;
        setToggled(value: boolean): void;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        title: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        key: import("mobx-state-tree").IType<string | undefined, string, string>;
        toggled: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        breakpoint: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        pristine: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        toggable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        index: import("mobx-state-tree").IType<number | undefined, number, number>;
        type: import("mobx-state-tree").IType<string | undefined, string, string>;
        children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>;
    }, {
        toggleToggle(): void;
        setToggled(value: boolean): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>)[];
    readonly filteredColumns: any[];
    readonly activeToggaleColumns: ({
        title: any;
        key: string;
        toggled: boolean;
        breakpoint: any;
        pristine: any;
        toggable: boolean;
        index: number;
        type: string;
        children: import("mobx-state-tree").IMSTArray<IAnyModelType> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>>;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        toggleToggle(): void;
        setToggled(value: boolean): void;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        title: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        key: import("mobx-state-tree").IType<string | undefined, string, string>;
        toggled: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        breakpoint: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        pristine: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<any, any, any>, [undefined]>;
        toggable: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        index: import("mobx-state-tree").IType<number | undefined, number, number>;
        type: import("mobx-state-tree").IType<string | undefined, string, string>;
        children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>;
    }, {
        toggleToggle(): void;
        setToggled(value: boolean): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>)[];
    readonly dataSource: any[];
    readonly currentSelectedRowKeys: any[];
    readonly currentExpandedKeys: any[];
    hasColumnHidden(): boolean;
    getData: (superData: any) => any;
    isSelected: (row: IRow) => boolean;
} & {
    update: (config: Partial<STableStore>) => void;
    persistSaveToggledColumns: () => void;
    setOrderByInfo: (key: string, direction: 'asc' | 'desc') => void;
    updateQuery: (values: object, updater?: Function | undefined, pageNoField?: string, pageSizeField?: string, replace?: boolean) => void;
    initRows: (rows: Array<any>, getEntryId?: ((entry: any, index: number) => string) | undefined, reUseRow?: boolean | undefined, keyField?: string | undefined) => void;
    updateSelected: (selectedKeys: Array<any>, keyField?: string | undefined) => void;
    updateSelectedAll: (keyField?: string | undefined) => void;
    updateExpanded: (expandedRowKeys: Array<any>, keyField?: string | undefined) => void;
    afterCreate(): void;
    saveRemote: (api: Api, data?: object | undefined, options?: fetchOptions | undefined) => Promise<any>;
    getRowByIndex(rowIndex: number): {
        storeType: string;
        id: string;
        key: string;
        pristine: any;
        data: any;
        index: number;
        newIndex: number;
        depth: number;
        children: import("mobx-state-tree").IMSTArray<IAnyModelType> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>>;
        path: string;
    } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
        readonly checked: boolean;
        readonly modified: boolean;
        readonly locals: any;
    } & {
        replaceWith(data: any): void;
        change(values: object, savePristine?: boolean | undefined): void;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        storeType: import("mobx-state-tree").IType<string | undefined, string, string>;
        id: import("mobx-state-tree").ISimpleType<string>;
        key: import("mobx-state-tree").ISimpleType<string>;
        pristine: import("mobx-state-tree").IType<any, any, any>;
        data: import("mobx-state-tree").IType<any, any, any>;
        index: import("mobx-state-tree").ISimpleType<number>;
        newIndex: import("mobx-state-tree").ISimpleType<number>;
        depth: import("mobx-state-tree").ISimpleType<number>;
        children: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<IAnyModelType>, [undefined]>;
        path: import("mobx-state-tree").IType<string | undefined, string, string>;
    }, {
        readonly checked: boolean;
        readonly modified: boolean;
        readonly locals: any;
    } & {
        replaceWith(data: any): void;
        change(values: object, savePristine?: boolean | undefined): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export declare type ITableStore = Instance<typeof TableStoreV2>;
export declare type STableStore = SnapshotIn<typeof TableStoreV2>;
