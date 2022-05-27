declare type Direction = '' | 'vertical' | 'horizontal';
declare const useTouch: () => {
    move: EventListener;
    start: EventListener;
    reset: () => void;
    isVertical: () => boolean;
    isHorizontal: () => boolean;
    startX: number;
    startY: number;
    deltaX: number;
    deltaY: number;
    offsetX: number;
    offsetY: number;
    direction: Direction;
};
export default useTouch;
