import type { Meta, StoryObj } from '@storybook/react';
import { FxRateCard } from './FxRateCard';

const meta: Meta<typeof FxRateCard> = {
    title: 'Components/Banking/FxRateCard',
    component: FxRateCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FxRateCard>;

const mockDataUp = [5.20, 5.22, 5.21, 5.23, 5.25, 5.24, 5.26, 5.28, 5.27, 5.30];
const mockDataDown = [5.40, 5.38, 5.39, 5.35, 5.32, 5.33, 5.30, 5.28, 5.29, 5.25];

export const Default: Story = {
    args: {
        pair: 'USD/BRL',
        name: 'Dólar Americano',
        buy: 5.2840,
        sell: 5.3050,
        variation: 0.45,
        data: mockDataUp,
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <FxRateCard {...args} />
        </div>
    ),
};

export const Negative: Story = {
    args: {
        pair: 'EUR/BRL',
        name: 'Euro',
        buy: 5.6500,
        sell: 5.6800,
        variation: -1.20,
        data: mockDataDown,
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <FxRateCard {...args} />
        </div>
    ),
};

export const Compact: Story = {
    args: {
        pair: 'GBP/BRL',
        buy: 6.5000,
        sell: 6.5500,
        variation: 0.10,
        variant: 'compact',
    },
    render: (args) => (
        <div style={{ width: '240px' }}>
            <FxRateCard {...args} />
        </div>
    ),
};

export const Live: Story = {
    args: {
        pair: 'USD/BRL',
        name: 'Dólar Comercial',
        buy: 5.2840,
        sell: 5.3050,
        variation: 0.45,
        data: mockDataUp,
        variant: 'live',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <FxRateCard {...args} />
        </div>
    ),
};

export const DashboardGrid: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '660px' }}>
            <FxRateCard
                pair="USD/BRL"
                name="Dólar"
                buy={5.28}
                sell={5.30}
                variation={0.45}
                data={mockDataUp}
            />
            <FxRateCard
                pair="EUR/BRL"
                name="Euro"
                buy={5.65}
                sell={5.68}
                variation={-0.23}
                data={mockDataDown}
            />
            <FxRateCard
                pair="GBP/BRL"
                name="Libra"
                buy={6.50}
                sell={6.55}
                variation={0.12}
                data={mockDataUp}
            />
            <FxRateCard
                pair="JPY/BRL"
                name="Iene"
                buy={0.034}
                sell={0.035}
                variation={-0.05}
                data={mockDataDown}
            />
        </div>
    ),
};
