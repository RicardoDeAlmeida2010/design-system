import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';

const meta: Meta<typeof DataTable> = {
    title: 'Components/DataTable',
    component: DataTable,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        density: {
            control: 'select',
            options: ['compact', 'standard', 'comfortable'],
        },
        selectionMode: {
            control: 'select',
            options: ['none', 'single', 'multi'],
        },
        stickyHeader: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
}

const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Admin', status: 'Inactive' },
];

const columns = [
    { key: 'name' as const, label: 'Name', sortable: true },
    { key: 'email' as const, label: 'Email', sortable: true },
    { key: 'role' as const, label: 'Role', sortable: true },
    { key: 'status' as const, label: 'Status', sortable: true },
];

export const Default: Story = {
    args: {
        data: users,
        columns: columns,
        density: 'standard',
        selectionMode: 'none',
    },
};

export const Compact: Story = {
    args: {
        ...Default.args,
        density: 'compact',
    },
};

export const Comfortable: Story = {
    args: {
        ...Default.args,
        density: 'comfortable',
    },
};

export const WithSelection: Story = {
    args: {
        ...Default.args,
        selectionMode: 'multi',
    },
};

export const StickyHeader: Story = {
    args: {
        data: [...users, ...users, ...users, ...users], // More data to scroll
        columns: columns,
        stickyHeader: true,
    },
    decorators: [
        (Story) => (
            <div style={{ height: '200px', overflow: 'auto' }}>
                <Story />
            </div>
        ),
    ],
};
