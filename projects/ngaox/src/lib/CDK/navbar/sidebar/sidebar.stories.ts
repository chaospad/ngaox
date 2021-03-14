// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SidebarComponent } from './sidebar.component';

export default {
    title: 'CDK/Sidebar',
    component: SidebarComponent,
    decorators: [
      moduleMetadata({
        declarations: [],
          imports: [CommonModule, RouterTestingModule.withRoutes([
            { path:"**", component: SidebarComponent }
          ])
        ]
      }),
    ],
} as Meta;

const Template: Story<SidebarComponent> = (args: SidebarComponent) => ({
    component: SidebarComponent,
    props: args,
});  

const routes = [
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

export const Default = Template.bind({});
Default.args = {
    routesList: routes,
};