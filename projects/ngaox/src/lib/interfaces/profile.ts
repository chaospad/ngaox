import { File, Topic } from "./pad";

export interface User {
    id: number; //uuid
    username: string;
    roles?: string[]; // private
    files?: File[]; // private
    firstname: string; // 25
    lastname: string; // 25
    gender: Topic; // Topic IRI <type:gender>
    birthday: Date;//
    picture?: File;
    background?: File;
    bio?: string; // string 255
    contactInfos?: ContactInfo[]; // ContactInfo
    visibility: Topic; // Topic IRI <type:visibility>
    joinedAt: Date;
    careers?: Career[]; // Careeer IRIs
    //skills?: Topic[]; // Topic
    projects?: Project[] // Project IRIs
}
export interface ContactInfo {
    id: number;
    value: string;
    type: string;
    logo: string;
    owner?: User;
    token?: string; // private
    validated: Boolean;
    visibility: Topic; // Topic IRI <type:visibility>
}
export interface Career {
    id: number;
    title: string; // 50
    description?: string;
    type: Topic; // Topic IRI <type:career>
    startedAt: Date;
    donedAt?: Date;
    corporation: string; // 50
    owner: User;// user
    visibility: Topic; // Topic IRI <type:visibility>
    createdAt: Date;
}
export interface Project {
    id: number;
    title: string; // 50
    thumbnail: File; // type image
    description: string; // 255
    topics: Topic[]; // Topic IRI
    liveAction: string; // url
    sourceUrl: string; // url
    owner: User;// user
    visibility: Topic; // Topic IRI <type:visibility>
    createdAt: Date;
}