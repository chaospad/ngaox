import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMinComponent } from './footer-min/footer-min.component';
import { FooterComponent } from './footer/footer.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
const EXPORTS = [
    FooterComponent,
    FooterMinComponent,
    FooterContentComponent
];
export class FooterModule {
}
FooterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...EXPORTS],
                imports: [
                    CommonModule
                ],
                exports: [
                    ...EXPORTS
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nYW94L3NyYy9saWIvQ0RLL2Zvb3Rlci9mb290ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVuRixNQUFNLE9BQU8sR0FBRztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0NBQ3ZCLENBQUE7QUFXRCxNQUFNLE9BQU8sWUFBWTs7O1lBVHhCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFDMUIsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEdBQUcsT0FBTztpQkFDWDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb290ZXJNaW5Db21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci1taW4vZm9vdGVyLW1pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXItY29udGVudC9mb290ZXItY29udGVudC5jb21wb25lbnQnO1xuXG5jb25zdCBFWFBPUlRTID0gW1xuICBGb290ZXJDb21wb25lbnQsXG4gIEZvb3Rlck1pbkNvbXBvbmVudCxcbiAgRm9vdGVyQ29udGVudENvbXBvbmVudFxuXVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsuLi5FWFBPUlRTXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uRVhQT1JUU1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZvb3Rlck1vZHVsZSB7IH1cbiJdfQ==