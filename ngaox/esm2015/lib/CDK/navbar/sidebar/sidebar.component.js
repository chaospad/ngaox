import { Component, Input } from '@angular/core';
export class SidebarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2FveC9zcmMvbGliL0NESy9uYXZiYXIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFqRCxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCO1FBRmlCLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFFckIsQ0FBQzs7O1lBVGxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsdzFDQUF1Qzt5QkFDOUIsRUFBRTthQUNaOzs7O3FCQUdFLEtBQUssU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcm91dGUgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL25nYW94JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdhb3gtc2lkZWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbJyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQge1xuXG4gIEBJbnB1dChcInJvdXRlc1wiKSByb3V0ZXM6cm91dGVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==