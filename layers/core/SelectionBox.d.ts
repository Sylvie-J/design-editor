import { BoxData, LayerId } from '@lidojs/design-core';
import React from 'react';
interface SelectionBoxProps {
    selectedLayers?: Record<LayerId, BoxData>;
}
declare const _default: React.ForwardRefExoticComponent<SelectionBoxProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
