export declare type Colors = 'info' | 'success' | 'danger';
export interface Props {
    className?: string;
    color: Colors;
    header: string;
    body: string;
    isDisabled?: boolean;
    isFilled?: boolean;
}
