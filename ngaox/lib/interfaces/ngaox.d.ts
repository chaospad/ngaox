export interface route {
    title: string;
    logo: string;
    path: string;
    subroutes?: route[];
}
