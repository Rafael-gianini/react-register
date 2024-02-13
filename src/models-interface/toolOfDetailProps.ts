export interface ToolOfDetailProps {
    textButtonNew?: string;

    showButtonNew?: boolean;
    showButtonBack?: boolean;
    showButtonSave?: boolean;
    showButtonDelete?: boolean;
    showButtonSaveAndClose?: boolean;

    showButtonNewLoading?: boolean;
    showButtonBackLoading?: boolean;
    showButtonSaveLoading?: boolean;
    showButtonDeleteLoading?: boolean;
    showButtonSaveAndCloseLoading?: boolean;

    clickNew?: () => void;
    clickBack?: () => void;
    clickDelete?: () => void;
    clickSave?: () => void;
    clickSaveAndClose?: () => void;
}





