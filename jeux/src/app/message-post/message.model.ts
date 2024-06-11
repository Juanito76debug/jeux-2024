export interface Message {
    id : string;
    authorId : string;
    recipientId : string;
    content : string;
    timestamp : Date;
}