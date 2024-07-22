export type Comment = {
    author: string,
    content: string,
    timestamp: Date,
    responses?: Comment[] 
}