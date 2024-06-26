import { FontData } from '@lidojs/design-core';
import { FC, PropsWithChildren } from 'react';
import { GetFontQuery } from '../types';
import { EditorConfig } from './EditorContext';
export type EditorProps = {
    config: EditorConfig;
    getFonts: (query: GetFontQuery) => Promise<FontData[]>;
};
declare const Editor: FC<PropsWithChildren<EditorProps>>;
export default Editor;
