import type { Meta, StoryObj } from '@storybook/react';
import { Dashboard } from './Dashboard';

const meta: Meta<typeof Dashboard> = {
    title: 'Templates/Banking/Dashboard',
    component: Dashboard,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {
    args: {
        userName: 'Ricardo',
        balance: 12500.00,
    },
};

export const EmptyState: Story = {
    args: {
        userName: 'Novo Usuário',
        balance: 0.00,
    },
};
