export declare function getContainer(container: any, defaultContainer: any): any;
export declare function ownerDocument(componentOrElement: any): Document;
export declare function calculatePosition(placement: any, overlayNode: any, target: HTMLElement, container: any, padding?: any, customOffset?: [number, number]): {
    positionLeft: number;
    positionTop: number;
    arrowOffsetLeft: number;
    arrowOffsetTop: number;
    activePlacement: string;
};
/**
 * 专门用来获取样式的像素值，默认返回 0
 */
export declare function getStyleNumber(element: HTMLElement, styleName: string): number;
