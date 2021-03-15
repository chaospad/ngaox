// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { FooterComponent } from './footer.component';
import { FooterMinComponent } from '../footer-min/footer-min.component';
import { FooterContentComponent } from '../footer-content/footer-content.component';
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'CDK/Footer',
    component: FooterComponent,
    decorators: [
        moduleMetadata({
          declarations: [FooterMinComponent, FooterContentComponent],
        })
    ]
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
    component: FooterComponent,
    props: args,
});

export const Default = Template.bind({});