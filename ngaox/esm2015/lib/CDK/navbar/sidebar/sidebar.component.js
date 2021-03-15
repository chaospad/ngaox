import { Component, Input } from '@angular/core';
export class SidebarComponent {
    constructor() {
        this.routes = [];
    }
}
SidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngaox-sidebar',
                template: "<div class=\"navbar-box\">\n    <header class=\"navbar-header\">\n        <img width=\"80px\" src=\"https://chaospad.github.io/assets/chaospad/logo-navbar.svg\" alt=\"Chaospad\">\n    </header>\n    <div class=\"navbar\">\n        <ng-template [ngTemplateOutlet]=\"navbar\" [ngTemplateOutletContext]=\"{\n            $implicit: routes,\n            base: '/'\n        }\"></ng-template>\n    </div>\n    <div class=\"navbar-footer\">\n        Chaospad \u00A9 2021\n    </div>\n</div>\n\n<ng-template #navbar let-base=\"base\" let-routesList>\n    <li *ngFor=\"let route of routesList\">\n        <a [routerLink]=\"[ base + route.path ]\"\n            routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: (!route.subroutes) ? true : false }\">\n            <span class=\"icon\">\n                <i [class]=\"route.logo\"></i>\n            </span>\n            <span class=\"title\">{{ route.title }}</span>\n        </a>\n        <div class=\"subroutes\" *ngIf=\"route.subroutes\">\n            <ng-template [ngTemplateOutlet]=\"navbar\" [ngTemplateOutletContext]=\"{\n                $implicit: route.subroutes,\n                base: (base + route.path + '/')\n            }\"></ng-template>\n        </div>\n    </li>\n</ng-template>",
                styles: ['']
            },] }
];
SidebarComponent.ctorParameters = () => [];
SidebarComponent.propDecorators = {
    routes: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2FveC9zcmMvbGliL0NESy9uYXZiYXIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFqRCxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCO1FBRlMsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQUViLENBQUM7OztZQVRsQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDJ1Q0FBdUM7eUJBQzlCLEVBQUU7YUFDWjs7OztxQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcm91dGUgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL25nYW94JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdhb3gtc2lkZWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbJyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHJvdXRlczpyb3V0ZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==