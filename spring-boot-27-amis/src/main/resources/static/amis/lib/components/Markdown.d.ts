import React from 'react';
interface MarkdownProps {
    content: string;
    options: object;
}
export default class Markdown extends React.Component<MarkdownProps> {
    dom: any;
    static defaultProps: {
        content: string;
        options: {
            linkify: boolean;
        };
    };
    constructor(props: MarkdownProps);
    htmlRef(dom: any): void;
    componentDidUpdate(nextProps: MarkdownProps): void;
    _render(): void;
    render(): JSX.Element;
}
export {};
