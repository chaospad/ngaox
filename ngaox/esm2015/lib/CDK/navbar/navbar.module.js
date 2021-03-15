import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
const EXPORTS = [
    SidebarComponent
];
export class NavbarModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYW94L3NyYy9saWIvQ0RLL25hdmJhci9uYXZiYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sR0FBRztJQUNkLGdCQUFnQjtDQUNqQixDQUFBO0FBYUQsTUFBTSxPQUFPLFlBQVk7OztZQVh4QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzFCLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsT0FBTztvQkFDVixZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuY29uc3QgRVhQT1JUUyA9IFtcbiAgU2lkZWJhckNvbXBvbmVudFxuXVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsuLi5FWFBPUlRTXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkVYUE9SVFMsXG4gICAgUm91dGVyTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyTW9kdWxlIHsgfVxuIl19