import { ListPersonProps } from './listPersonProps';


export interface ToolBarProps {
    textSearch?: string | null;
    showInputSearch?: boolean;
    changeTextSearch?: (newText: string) => void;
    textButtonNew?: string;
    showButtonNew?: boolean;
    onClickButtonNew?: () => void;
}