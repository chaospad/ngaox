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
    type: Topic|string; // Topic ID <type:file>
    owner: User|string;
    tags: Topic[]|string[];
    visibility: Topic | string; // Topic ID <type:visibility>
    
    updatedAt: Date;
    createdAt: Date;
}

export interface pad {
    id: number;
    padname: string;
    name: string;
    picture: File|string;
    background: File|string;
    description: string;// markdown
    owners: User[] | string[];// user ID
    articles: Post[]|string[];// post <type: article>
    visibility: Topic; // Topic ID
    updatedAt: Date;
    createdAt: Date;
}

export interface Post {
    id: number;
    // title: string; // 100
    // thumbnail: File;
    type: Topic | string; // Topic IRI <type:post>
    content: string;// markdown Text
    owner: User | string;// user IRI
    tags: Topic[] | string[];
    // metas?: Meta[] | string[]; // Meta IRI
    replyingTo?: Comment | string;
    comments?: Post[] | string[]; // Post IRI <type:post=comment>
    visibility: Topic | string; // Topic IRI <type:visibility>
    
    updatedAt: Date;
    createdAt: Date;
}
// export interface Meta {
//     id: number;
//     key: string;
//     value: string;
//     post?: Post | string; // private
// }