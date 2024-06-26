import { BoxData, LayerId } from '@lidojs/design-core';
import { RefObject } from 'react';
export declare const useSelectLayer: ({ frameRef, pageListRef, selectionBoxRef, }: {
    frameRef: RefObject<HTMLDivElement | null>;
    pageListRef: RefObject<HTMLDivElement[]>;
    selectionBoxRef: RefObject<HTMLDivElement | null>;
}) => {
    tmpSelected: {
        selectedPage: number;
        selectedLayers: Record<LayerId, BoxData>;
    };
    onSelectStart: (e: MouseEvent) => void;
};
