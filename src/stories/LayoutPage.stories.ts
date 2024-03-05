import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import HeaderBar from '@/pages/header-bar';
import '@/styles/main.css';

const meta = {
    title: 'Example/HeaderBar',
    component: HeaderBar,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof HeaderBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
    args: {
        size: 'large',
        label: 'Button',
    },
};
