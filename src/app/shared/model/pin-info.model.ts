export interface PinInfo {
    imageUrl: string;
    imageSource: string;
    imageTitle: string;
    imageDescription?:string;
    suggestionTable: string;
    reactions?: string[];
    reactionNumber?: number;
}