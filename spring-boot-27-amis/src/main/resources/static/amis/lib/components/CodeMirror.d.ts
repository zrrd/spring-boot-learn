import React from 'react';
import type CodeMirror from 'codemirror';
export interface CodeMirrorEditorProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    editorFactory?: (dom: HTMLElement, cm: typeof CodeMirror, props?: any) => CodeMirror.Editor;
    editorDidMount?: (cm: typeof CodeMirror, editor: CodeMirror.Editor) => void;
    editorWillUnMount?: (cm: typeof CodeMirror, editor: CodeMirror.Editor) => void;
}
export declare class CodeMirrorEditor extends React.Component<CodeMirrorEditorProps> {
    dom: React.RefObject<HTMLDivElement>;
    editor?: CodeMirror.Editor;
    toDispose: Array<() => void>;
    unmounted: boolean;
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: CodeMirrorEditorProps): void;
    componentWillUnmount(): void;
    handleChange(editor: any): void;
    setValue(value?: string): void;
    render(): JSX.Element;
}
export default CodeMirrorEditor;
