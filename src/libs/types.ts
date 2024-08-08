// You can define interfaces for all React components here.
// Do not forget to export properly.
interface PostOwnerProps{
    userImagePath: string,
    username: string,
    commentText: string,
    likeNum: string;
}

interface CommentProps {
    userImagePath: string,
    username: string,
    commentText: string,
    likeNum: number,
    replies: ReplyProps;
}

interface ReplyProps {
    userImagePath: string,
    username: string,
    replyText: string,
    likeNum: number;
}
export type { PostOwnerProps , CommentProps , ReplyProps };
