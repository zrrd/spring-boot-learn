/**
 * @file 扩展 codemirror
 */
import type CodeMirror from 'codemirror';
import type { FormulaEditorProps, VariableItem } from './Editor';
export declare function editorFactory(dom: HTMLElement, cm: typeof CodeMirror, props: any): CodeMirror.Editor;
export declare class FormulaPlugin {
    readonly editor: CodeMirror.Editor;
    readonly cm: typeof CodeMirror;
    readonly getProps: () => FormulaEditorProps;
    constructor(editor: CodeMirror.Editor, cm: typeof CodeMirror, getProps: () => FormulaEditorProps);
    autoMarkText(): void;
    computedBracesPosition(exp: string): {
        begin: number;
        end: number;
    }[];
    checkStrIsInBraces([from, to]: number[], braces: {
        begin: number;
        end: number;
    }[]): boolean;
    insertBraces(originFrom: CodeMirror.Position, originTo: CodeMirror.Position): void;
    insertContent(value: any, type?: 'variable' | 'func'): void;
    markText(from: CodeMirror.Position, to: CodeMirror.Position, label: string, className?: string): void;
    autoMark(variables: Array<VariableItem>): void;
    dispose(): void;
    validate(): void;
}
