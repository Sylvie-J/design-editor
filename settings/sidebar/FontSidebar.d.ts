import { FontData } from '@lidojs/design-core';
import React from 'react';
import { SidebarProps } from './Sidebar';
interface FontSidebarProps extends SidebarProps {
    selected: FontData[];
    onChangeFontFamily: (font: FontData) => void;
}
declare const _default: React.ForwardRefExoticComponent<FontSidebarProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
