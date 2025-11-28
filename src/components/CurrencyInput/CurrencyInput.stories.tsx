import type { Meta, StoryObj } from '@storybook/react';
import { CurrencyInput } from './CurrencyInput';
import { useState } from 'react';

const meta: Meta<typeof CurrencyInput> = {
    title: 'Components/Banking/CurrencyInput',
    component: CurrencyInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        currency: {
            control: 'select',
            options: ['USD', 'EUR', 'BRL', 'GBP', 'JPY'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof CurrencyInput>;

export const Default: Story = {
    args: {
        label: 'Você envia',
        value: 1000,
        currency: 'BRL',
        helperText: 'Saldo disponível: R$ 5.000,00',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        const [currency, setCurrency] = useState(args.currency);

        return (
            <div style={{ width: '360px' }}>
                <CurrencyInput
                    {...args}
                    value={value}
                    currency={currency}
                    onValueChange={setValue}
                    onCurrencyChange={setCurrency}
                />
            </div>
        );
    },
};

export const USD: Story = {
    args: {
        label: 'Beneficiário recebe',
        value: 185.50,
        currency: 'USD',
        helperText: 'Taxa comercial: 5,39',
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        return (
            <div style={{ width: '360px' }}>
                <CurrencyInput
                    {...args}
                    value={value}
                    onValueChange={setValue}
                />
            </div>
        );
    },
};

export const ExchangeFlow: Story = {
    render: () => {
        const [sendAmount, setSendAmount] = useState(5000);
        const [receiveAmount, setReceiveAmount] = useState(927.64); // Mock rate 5.39

        const handleSendChange = (val: number) => {
            setSendAmount(val);
            setReceiveAmount(val / 5.39);
        };

        return (
            <div style={{ width: '360px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <CurrencyInput
                    label="Você envia"
                    currency="BRL"
                    value={sendAmount}
                    onValueChange={handleSendChange}
                    helperText="IOF (1.1%): R$ 55,00"
                />

                <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--sys-color-content-tertiary)' }}>
                    ↓ 1 USD = 5,39 BRL
                </div>

                <CurrencyInput
                    label="Beneficiário recebe"
                    currency="USD"
                    value={receiveAmount}
                    onValueChange={() => { }} // Read only simulation
                    helperText="Chegada estimada: 1 dia útil"
                />
            </div>
        );
    },
};
