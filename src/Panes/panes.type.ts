
export interface IPane {
    id: string;
    order: number;
    additionalSizeHeight?: number;
    additionalSizeWidth?: number;
}
export type PanesState = IPane[];
