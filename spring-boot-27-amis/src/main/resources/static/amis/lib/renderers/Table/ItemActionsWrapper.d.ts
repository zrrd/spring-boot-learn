/// <reference types="react" />
import { ITableStore } from '../../store/table';
import { ClassNamesFn } from '../../theme';
export interface ItemActionsProps {
    classnames: ClassNamesFn;
    children: JSX.Element;
    store: ITableStore;
}
declare function ItemActionsWrapper(props: ItemActionsProps): JSX.Element;
declare const _default: typeof ItemActionsWrapper;
export default _default;
