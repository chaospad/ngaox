import { User } from "./profile";

export interface Topic {
    id: number;
    topicname: string;
    logo: string;
    title: string;
    description: string; // string 255
    aliases?: string[];
    type: "topic" | "gender" | "file" | "career" | "contact-info" | "post-type" | "visibility";
    //types: ("topic" | "gender" | "file" | "career" | "contact-info" | "post-type" | "visibility")[];
}
export interface File {
    id: number;
    title: string;
    path: string; // unique profiles/photo.fs
    type: Topic; // Topic ID <type:file>
    owner: User;
    tags: Topic[];
    visibility: Topic; // Topic ID <type:visibility>
    uplaodedAt: Date;
}

/*export interface pad {
    id: number;
    padname: string;
    name: string;
    picture: File|string;
    background: File|string;
    description: string;// markdown
    owner: User;// user ID
    blogers: User[]|string[];// user ID
    articles: Post[]|string[];// post <type: article>
    visibility: Topic; // Topic ID
}*/

export interface Post {
    id: number;
    title: string; // 100
    thumbnail: File;
    type: Topic; // Topic IRI <type:post>
    content: string;// markdown Text
    owner: User;// user IRI
    metas?: Meta[]; // Meta IRI
    replyingTo?: Comment;
    comments?: Post[]; // Post IRI <type:post=comment>
    visibility: Topic; // Topic IRI <type:visibility>
    edited: boolean; // default false
    createdAt: Date;
}
export interface Meta {
    id: number;
    key: string;
    value: string;
    post?: Post; // private
}