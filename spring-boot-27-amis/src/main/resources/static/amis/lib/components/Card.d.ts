/// <reference types="hoist-non-react-statics" />
import React from 'react';
import { ClassNamesFn, ThemeProps } from '../theme';
export interface CardProps extends ThemeProps {
    className?: string;
    headerClassName?: string;
    titleClassName?: string;
    subTitleClassName?: string;
    descriptionClassName?: string;
    avatarTextStyle?: object;
    avatarTextClassName?: string;
    avatarClassName?: string;
    secondaryClassName?: string;
    imageClassName?: string;
    bodyClassName?: string;
    footerClassName?: string;
    media?: React.ReactNode;
    mediaPosition?: 'top' | 'left' | 'right' | 'bottom';
    toolbar?: React.ReactNode;
    children?: React.ReactNode;
    actions?: React.ReactNode;
    title?: string | JSX.Element;
    subTitle?: string | JSX.Element;
    subTitlePlaceholder?: string | JSX.Element;
    description?: string | JSX.Element;
    descriptionPlaceholder?: string | JSX.Element;
    avatar?: string;
    avatarText?: string | JSX.Element;
    secondary?: string | JSX.Element;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    classnames: ClassNamesFn;
    data?: any;
}
export declare class Card extends React.Component<CardProps> {
    static defaultProps: Partial<CardProps>;
    constructor(props: CardProps);
    handleClick(e: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
declare const _default: {
    new (props: Pick<Omit<CardProps, keyof ThemeProps>, never> & Partial<Pick<Omit<CardProps, keyof ThemeProps>, "data" | "title" | "children" | "toolbar" | "description" | "onClick" | "media" | "avatar" | "headerClassName" | "footerClassName" | "subTitle" | "bodyClassName" | "descriptionClassName" | "secondary" | "actions" | "titleClassName" | "subTitleClassName" | "avatarTextStyle" | "avatarTextClassName" | "avatarClassName" | "secondaryClassName" | "imageClassName" | "mediaPosition" | "subTitlePlaceholder" | "descriptionPlaceholder" | "avatarText">> & Partial<Pick<Partial<CardProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps): {
        ref: any;
        childRef(ref: any): void;
        getWrappedInstance(): any;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Omit<CardProps, keyof ThemeProps>, never> & Partial<Pick<Omit<CardProps, keyof ThemeProps>, "data" | "title" | "children" | "toolbar" | "description" | "onClick" | "media" | "avatar" | "headerClassName" | "footerClassName" | "subTitle" | "bodyClassName" | "descriptionClassName" | "secondary" | "actions" | "titleClassName" | "subTitleClassName" | "avatarTextStyle" | "avatarTextClassName" | "avatarClassName" | "secondaryClassName" | "imageClassName" | "mediaPosition" | "subTitlePlaceholder" | "descriptionPlaceholder" | "avatarText">> & Partial<Pick<Partial<CardProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Omit<CardProps, keyof ThemeProps>, never> & Partial<Pick<Omit<CardProps, keyof ThemeProps>, "data" | "title" | "children" | "toolbar" | "description" | "onClick" | "media" | "avatar" | "headerClassName" | "footerClassName" | "subTitle" | "bodyClassName" | "descriptionClassName" | "secondary" | "actions" | "titleClassName" | "subTitleClassName" | "avatarTextStyle" | "avatarTextClassName" | "avatarClassName" | "secondaryClassName" | "imageClassName" | "mediaPosition" | "subTitlePlaceholder" | "descriptionPlaceholder" | "avatarText">> & Partial<Pick<Partial<CardProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Omit<CardProps, keyof ThemeProps>, never> & Partial<Pick<Omit<CardProps, keyof ThemeProps>, "data" | "title" | "children" | "toolbar" | "description" | "onClick" | "media" | "avatar" | "headerClassName" | "footerClassName" | "subTitle" | "bodyClassName" | "descriptionClassName" | "secondary" | "actions" | "titleClassName" | "subTitleClassName" | "avatarTextStyle" | "avatarTextClassName" | "avatarClassName" | "secondaryClassName" | "imageClassName" | "mediaPosition" | "subTitlePlaceholder" | "descriptionPlaceholder" | "avatarText">> & Partial<Pick<Partial<CardProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Omit<CardProps, keyof ThemeProps>, never> & Partial<Pick<Omit<CardProps, keyof ThemeProps>, "data" | "title" | "children" | "toolbar" | "description" | "onClick" | "media" | "avatar" | "headerClassName" | "footerClassName" | "subTitle" | "bodyClassName" | "descriptionClassName" | "secondary" | "actions" | "titleClassName" | "subTitleClassName" | "avatarTextStyle" | "avatarTextClassName" | "avatarClassName" | "secondaryClassName" | "imageClassName" | "mediaPosition" | "subTitlePlaceholder" | "descriptionPlaceholder" | "avatarText">> & Partial<Pick<Partial<CardProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Omit<CardProps, keyof ThemeProps>, never> & Partial<Pick<Omit<CardProps, keyof ThemeProps>, "data" | "title" | "children" | "toolbar" | "description" | "onClick" | "media" | "avatar" | "headerClassName" | "footerClassName" | "subTitle" | "bodyClassName" | "descriptionClassName" | "secondary" | "actions" | "titleClassName" | "subTitleClassName" | "avatarTextStyle" | "avatarTextClassName" | "avatarClassName" | "secondaryClassName" | "imageClassName" | "mediaPosition" | "subTitlePlaceholder" | "descriptionPlaceholder" | "avatarText">> & Partial<Pick<Partial<CardProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CardProps, keyof ThemeProps>, never> & Partial<Pick<Omit<CardProps, keyof ThemeProps>, "data" | "title" | "children" | "toolbar" | "description" | "onClick" | "media" | "avatar" | "headerClassName" | "footerClassName" | "subTitle" | "bodyClassName" | "descriptionClassName" | "secondary" | "actions" | "titleClassName" | "subTitleClassName" | "avatarTextStyle" | "avatarTextClassName" | "avatarClassName" | "secondaryClassName" | "imageClassName" | "mediaPosition" | "subTitlePlaceholder" | "descriptionPlaceholder" | "avatarText">> & Partial<Pick<Partial<CardProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Omit<CardProps, keyof ThemeProps>, never> & Partial<Pick<Omit<CardProps, keyof ThemeProps>, "data" | "title" | "children" | "toolbar" | "description" | "onClick" | "media" | "avatar" | "headerClassName" | "footerClassName" | "subTitle" | "bodyClassName" | "descriptionClassName" | "secondary" | "actions" | "titleClassName" | "subTitleClassName" | "avatarTextStyle" | "avatarTextClassName" | "avatarClassName" | "secondaryClassName" | "imageClassName" | "mediaPosition" | "subTitlePlaceholder" | "descriptionPlaceholder" | "avatarText">> & Partial<Pick<Partial<CardProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Omit<CardProps, keyof ThemeProps>, never> & Partial<Pick<Omit<CardProps, keyof ThemeProps>, "data" | "title" | "children" | "toolbar" | "description" | "onClick" | "media" | "avatar" | "headerClassName" | "footerClassName" | "subTitle" | "bodyClassName" | "descriptionClassName" | "secondary" | "actions" | "titleClassName" | "subTitleClassName" | "avatarTextStyle" | "avatarTextClassName" | "avatarClassName" | "secondaryClassName" | "imageClassName" | "mediaPosition" | "subTitlePlaceholder" | "descriptionPlaceholder" | "avatarText">> & Partial<Pick<Partial<CardProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Omit<CardProps, keyof ThemeProps>, never> & Partial<Pick<Omit<CardProps, keyof ThemeProps>, "data" | "title" | "children" | "toolbar" | "description" | "onClick" | "media" | "avatar" | "headerClassName" | "footerClassName" | "subTitle" | "bodyClassName" | "descriptionClassName" | "secondary" | "actions" | "titleClassName" | "subTitleClassName" | "avatarTextStyle" | "avatarTextClassName" | "avatarClassName" | "secondaryClassName" | "imageClassName" | "mediaPosition" | "subTitlePlaceholder" | "descriptionPlaceholder" | "avatarText">> & Partial<Pick<Partial<CardProps>, "classPrefix" | "classnames" | "className" | "theme">> & import("../theme").ThemeOutterProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
    contextType: React.Context<string>;
    ComposedComponent: React.ComponentType<typeof Card>;
} & import("hoist-non-react-statics").NonReactStatics<typeof Card, {}> & {
    ComposedComponent: typeof Card;
};
export default _default;
