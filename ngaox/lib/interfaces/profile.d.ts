import { File, Topic } from "./pad";
export interface User {
    id: number;
    username: string;
    roles?: string[];
    files?: File[];
    firstname: string;
    lastname: string;
    gender: Topic;
    birthday: Date;
    picture?: File;
    background?: File;
    bio?: string;
    contactInfos?: ContactInfo[];
    visibility: Topic;
    joinedAt: Date;
    careers?: Career[];
    projects?: Project[];
}
export interface ContactInfo {
    id: number;
    value: string;
    type: string;
    logo: string;
    owner?: User;
    token?: string;
    validated: Boolean;
    visibility: Topic;
}
export interface Career {
    id: number;
    title: string;
    description?: string;
    type: Topic;
    startedAt: Date;
    donedAt?: Date;
    corporation: string;
    owner: User;
    visibility: Topic;
    createdAt: Date;
}
export interface Project {
    id: number;
    title: string;
    thumbnail: File;
    description: string;
    topics: Topic[];
    liveAction: string;
    sourceUrl: string;
    owner: User;
    visibility: Topic;
    createdAt: Date;
}
