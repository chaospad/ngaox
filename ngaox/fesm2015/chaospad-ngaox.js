import { ɵɵdefineInjectable, ɵɵinject, Injectable, NgModule, Component, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

class SeoService {
    constructor(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
    }
    generateTags(Tags) {
        let tags = Object.assign({ title: "Chaospad", description: "Connect to chaospad & make your chaos over the interner.", image: "https://res.cloudinary.com/chaospad/logo.png" }, Tags);
        this.titleService.setTitle(tags.title);
        let definitions = [
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
SeoService.ɵprov = ɵɵdefineInjectable({ factory: function SeoService_Factory() { return new SeoService(ɵɵinject(Title), ɵɵinject(Meta)); }, token: SeoService, providedIn: "root" });
SeoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SeoService.ctorParameters = () => [
    { type: Title },
    { type: Meta }
];

class NgaoxModule {
}
NgaoxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: []
            },] }
];

class FileModule {
}
FileModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            },] }
];

class PostModule {
}
PostModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            },] }
];

class ShareModule {
}
ShareModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            },] }
];

class TopicModule {
}
TopicModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            },] }
];

class UserModule {
}
UserModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            },] }
];

class ContactInfoModule {
}
ContactInfoModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            },] }
];

class CareerModule {
}
CareerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            },] }
];

class ProjectModule {
}
ProjectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            },] }
];

class SidebarComponent {
    constructor() {
        this.routes = [];
    }
}
SidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngaox-sidebar',
                template: "<div class=\"navbar-box\">\n    <header class=\"navbar-header\">\n        <img width=\"80px\" src=\"https://chaospad.github.io/assets/chaospad/logo-navbar.svg\" alt=\"Chaospad\">\n    </header>\n    <hr>\n    <div class=\"navbar\">\n        <ng-template [ngTemplateOutlet]=\"navbar\" [ngTemplateOutletContext]=\"{\n            $implicit: routes,\n            base: '/'\n        }\"></ng-template>\n    </div>\n    <hr>\n    <div class=\"navbar-footer\">\n        <b style=\"text-align: center;display:block;\">\n            Chaospad \u00A9 2021\n        </b>\n        <br>\n    </div>\n</div>\n\n<ng-template #navbar let-base=\"base\" let-routesList>\n    <li *ngFor=\"let route of routesList\">\n        <a [routerLink]=\"[ base + route.path ]\"\n            routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: (!route.subroutes) ? true : false }\">\n            <span class=\"icon\">\n                <i [class]=\"route.logo\"></i>\n            </span>\n            <span class=\"title\">{{ route.title }}</span>\n        </a>\n        <div class=\"subroutes\" *ngIf=\"route.subroutes\">\n            <ng-template [ngTemplateOutlet]=\"navbar\" [ngTemplateOutletContext]=\"{\n                $implicit: route.subroutes,\n                base: (base + route.path + '/')\n            }\"></ng-template>\n        </div>\n    </li>\n</ng-template>",
                styles: ['']
            },] }
];
SidebarComponent.ctorParameters = () => [];
SidebarComponent.propDecorators = {
    routes: [{ type: Input, args: ["routes",] }]
};

const EXPORTS = [
    SidebarComponent
];
class NavbarModule {
}
NavbarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...EXPORTS],
                imports: [
                    CommonModule,
                    RouterModule
                ],
                exports: [
                    ...EXPORTS,
                    RouterModule
                ]
            },] }
];

/*
 * Public API Surface of ngaox
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CareerModule, ContactInfoModule, FileModule, NavbarModule, NgaoxModule, PostModule, ProjectModule, SeoService, ShareModule, TopicModule, UserModule, SidebarComponent as ɵa };
//# sourceMappingURL=chaospad-ngaox.js.map
