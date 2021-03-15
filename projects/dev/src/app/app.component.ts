import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'dev';
    routesList = [
        { title: "Home", logo: "fas fa-home", path: "" },
        { title: "Ngaox", logo: "fas fa-fire", path: "ngaox" },
        {
            title: "Subroutes Ex", logo: "fas fa-quidditch", path: "sub-routes",
            subroutes: [
                { title: "rourte1", logo: "fas fa-trash-restore", path: "rourte1" },
                { title: "route2", logo: "fab fa-expeditedssl", path: "route2" },
                { title: "Subroutes Ex 2", logo: "fas fa-list", path: "subroutes-ex2",
                    subroutes: [
                        { title: "Exemple", logo: "fas fa-road", path: "b1-c" },
                        { title: "Lorem", logo: "fas fa-fire", path: "c1-d" }
                    ]
                }
            ]
        },
        { title: "Chaospad API", logo: "fab fa-tripadvisor", path: "chaospad-api" },
    ];
}
