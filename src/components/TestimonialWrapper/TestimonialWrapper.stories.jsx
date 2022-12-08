import React from 'react';

import { TestimonialWrapper } from './TestimonialWrapper';
import {data} from './TestimonialCard/data';

export default {
    title: 'TestimonialWrapper',
    component: TestimonialWrapper,
    args: {
        title: 'Testimonials',
        data: data.slice(0,4),
    },
};

const provideTheme = (theme) => {
    return [
        (Story) => (
            <div theme={theme}>
                <Story />
            </div>
        ),
    ];
};

const Template = (args) => <TestimonialWrapper {...args} />;

export const Home = Template.bind({});
Home.decorators = provideTheme('home');

export const Developers = Template.bind({});
Developers.decorators = provideTheme('developers');

export const Testers = Template.bind({});
Testers.decorators = provideTheme('testers');

export const FrontEnd = Template.bind({});
FrontEnd.decorators = provideTheme('front-end');
