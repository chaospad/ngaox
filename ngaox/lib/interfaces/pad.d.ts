import { User } from "./profile";
export interface Topic {
    id: number;
    topicname: string;
    logo: string;
    title: string;
    description: string;
    aliases?: string[];
    type: "topic" | "gender" | "file" | "career" | "contact-info" | "post-type" | "visibility";
}
export interface File {
    id: number;
    title: string;
    path: string;
    type: Topic;
    owner: User;
    tags: Topic[];
    visibility: Topic;
    uplaodedAt: Date;
}
export interface Post {
    id: number;
    title: string;
    thumbnail: File;
    type: Topic;
    content: string;
    owner: User;
    metas?: Meta[];
    replyingTo?: Comment;
    comments?: Post[];
    visibility: Topic;
    edited: boolean;
    createdAt: Date;
}
export interface Meta {
    id: number;
    key: string;
    value: string;
    post?: Post;
}
