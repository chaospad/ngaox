import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class SeoService {
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
SeoService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SeoService_Factory() { return new SeoService(i0.ɵɵinject(i1.Title), i0.ɵɵinject(i1.Meta)); }, token: SeoService, providedIn: "root" });
SeoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SeoService.ctorParameters = () => [
    { type: Title },
    { type: Meta }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ2FveC9zcmMvbGliL3NlcnZpY2VzL3Nlby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBa0IsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQVd4RSxNQUFNLE9BQU8sVUFBVTtJQUVuQixZQUFvQixZQUFtQixFQUFVLFdBQWlCO1FBQTlDLGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQU07SUFBSSxDQUFDO0lBRXZFLFlBQVksQ0FBQyxJQUFTO1FBQ2xCLElBQUksSUFBSSxtQkFDSixLQUFLLEVBQUUsVUFBVSxFQUNqQixXQUFXLEVBQUUsMERBQTBELEVBQ3ZFLEtBQUssRUFBRSw4Q0FBOEMsSUFDbEQsSUFBSSxDQUNWLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkMsSUFBSSxXQUFXLEdBQXFCO1lBQ2hDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN6QyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEQsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3pDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUU7WUFDeEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUU7WUFDL0MsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7U0FDaEQsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7WUE3QkosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7WUFWOEIsS0FBSztZQUEzQixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWV0YSwgTWV0YURlZmluaXRpb24sIFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmludGVyZmFjZSBUYWdzIHtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBpbWFnZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZW9TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSwgcHJpdmF0ZSBtZXRhU2VydmljZTogTWV0YSkgeyB9XG4gICAgXG4gICAgZ2VuZXJhdGVUYWdzKFRhZ3M6VGFncykge1xuICAgICAgICBsZXQgdGFncyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkNoYW9zcGFkXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDb25uZWN0IHRvIGNoYW9zcGFkICYgbWFrZSB5b3VyIGNoYW9zIG92ZXIgdGhlIGludGVybmVyLlwiLFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vY2hhb3NwYWQvbG9nby5wbmdcIixcbiAgICAgICAgICAgIC4uLlRhZ3NcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSh0YWdzLnRpdGxlKTtcblxuICAgICAgICBsZXQgZGVmaW5pdGlvbnM6IE1ldGFEZWZpbml0aW9uW10gPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwib2c6dGl0bGVcIiwgY29udGVudDogdGFncy50aXRsZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImRlc2NyaXB0aW9uXCIsIGNvbnRlbnQ6IHRhZ3MuZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJvZzpkZXNjcmlwdGlvblwiLCBjb250ZW50OiB0YWdzLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwib2c6aW1hZ2VcIiwgY29udGVudDogdGFncy5pbWFnZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIm9nOnVybFwiLCBjb250ZW50OiBcImh0dHBzOi8vd3d3LmNoYW9zcGFkLmxpdmVcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcInR3aXR0ZXI6Y2FyZFwiLCBjb250ZW50OiBcInN1bW1hcnlcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcInR3aXR0ZXI6c2l0ZVwiLCBjb250ZW50OiBcIkByYWJyYWdoaWJcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIm9nOnNpdGVfbmFtZVwiLCBjb250ZW50OiBcIkNoYW9zcGFkXCIgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLm1ldGFTZXJ2aWNlLmFkZFRhZ3MoZGVmaW5pdGlvbnMpO1xuICAgIH1cblxufVxuIl19