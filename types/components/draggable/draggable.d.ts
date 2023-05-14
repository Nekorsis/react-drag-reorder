import { ReactElement, ReactNode } from "react";

export default function DraggableComponent(props: {
    children?: ReactNode;
    onPosChange?: (currentPos: number, newPos: number, currentElement?: React.ReactNode, toElement?: React.ReactNode) => void;
}): ReactElement;