import { Meta, Title } from '@angular/platform-browser';
interface Tags {
    title?: string;
    description?: string;
    image?: string;
}
export declare class SeoService {
    private titleService;
    private metaService;
    constructor(titleService: Title, metaService: Meta);
    generateTags(Tags: Tags): void;
}
export {};
