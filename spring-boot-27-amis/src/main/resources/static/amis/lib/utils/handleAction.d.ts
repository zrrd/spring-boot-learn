/**
 * 后续好多地方可能都要支持 action，所以提取公共功能
 */
/// <reference types="react" />
import { RendererProps } from '../factory';
import { ActionSchema } from '../renderers/Action';
export default function handleAction(e: React.MouseEvent<any>, action: ActionSchema, props: RendererProps, data?: any): void;
