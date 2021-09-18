export interface Comment {
    userId: string;
    comment: string;
    date?: Date;
    avatar: string;
    reactions: { type: string, num: number }[];
}