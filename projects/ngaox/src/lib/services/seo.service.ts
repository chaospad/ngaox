import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

interface Tags {
    title?: string;
    description?: string;
    image?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    constructor(private titleService: Title, private metaService: Meta) { }
    
    generateTags(Tags:Tags) {
        let tags = {
            title: "Chaospad",
            description: "Connect to chaospad & make your chaos over the interner.",
            image: "https://res.cloudinary.com/chaospad/logo.png",
            ...Tags
        };

        this.titleService.setTitle(tags.title);

        let definitions: MetaDefinition[] = [
            { name: "og:title", content: tags.title },
            { name: "description", content: tags.description },
            { name: "og:description", content: tags.description },
            { name: "og:image", content: tags.image },
            { name: "og:url", content: "https://www.chaospad.live" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:site", content: "@rabraghib" },
            { name: "og:site_name", content: "Chaospad" },
        ];

        this.metaService.addTags(definitions);
    }

}
