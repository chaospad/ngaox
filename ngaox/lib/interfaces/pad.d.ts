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
    type: Topic | string;
    owner: User | string;
    tags: Topic[] | string[];
    visibility: Topic | string;
    updatedAt: Date;
    createdAt: Date;
}
export interface pad {
    id: number;
    padname: string;
    name: string;
    picture: File | string;
    background: File | string;
    description: string;
    owners: User[] | string[];
    articles: Post[] | string[];
    visibility: Topic;
    updatedAt: Date;
    createdAt: Date;
}
export interface Post {
    id: number;
    type: Topic | string;
    content: string;
    owner: User | string;
    tags: Topic[] | string[];
    replyingTo?: Comment | string;
    comments?: Post[] | string[];
    visibility: Topic | string;
    updatedAt: Date;
    createdAt: Date;
}
