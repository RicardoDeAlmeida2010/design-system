import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Button } from '../../components/Button/Button';
import { FxRateCard } from '../../components/FxRateCard/FxRateCard';
import { CurrencyInput } from '../../components/CurrencyInput/CurrencyInput';
import { DataTable } from '../../components/DataTable/DataTable';
import { Skeleton } from '../../components/Skeleton/Skeleton';

export interface DashboardProps {
    userName?: string;
    balance?: number;
}

const mockRates = [
    { pair: 'USD/BRL', buy: 5.28, sell: 5.30, variation: 0.45, data: [5.20, 5.22, 5.21, 5.23, 5.25, 5.24, 5.26, 5.28, 5.27, 5.30] },
    { pair: 'EUR/BRL', buy: 5.65, sell: 5.68, variation: -0.23, data: [5.70, 5.68, 5.69, 5.65, 5.62, 5.63, 5.60, 5.58, 5.59, 5.65] },
    { pair: 'GBP/BRL', buy: 6.50, sell: 6.55, variation: 0.12, data: [6.45, 6.48, 6.49, 6.50, 6.52, 6.51, 6.53, 6.54, 6.52, 6.50] },
    { pair: 'JPY/BRL', buy: 0.034, sell: 0.035, variation: -0.05, data: [0.036, 0.035, 0.035, 0.034, 0.034, 0.034, 0.033, 0.033, 0.034, 0.034] },
];

const mockTransactions = [
    { id: 1, date: '2023-11-28', type: 'Compra', currency: 'USD', amount: 500.00, status: 'Concluído' },
    { id: 2, date: '2023-11-27', type: 'Venda', currency: 'EUR', amount: 120.00, status: 'Concluído' },
    { id: 3, date: '2023-11-25', type: 'Envio', currency: 'GBP', amount: 1000.00, status: 'Pendente' },
];

const transactionColumns = [
    { key: 'date' as const, label: 'Data', width: '120px' },
    { key: 'type' as const, label: 'Tipo', width: '100px' },
    { key: 'currency' as const, label: 'Moeda', width: '80px' },
    { key: 'amount' as const, label: 'Valor', width: '120px' },
    { key: 'status' as const, label: 'Status', width: '100px' },
];

export const Dashboard: React.FC<DashboardProps> = ({
    userName = 'Ricardo',
    balance = 12500.00
}) => {
    const [sendAmount, setSendAmount] = useState(1000);
    const [receiveAmount, setReceiveAmount] = useState(185.50);
    const [isDark, setIsDark] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate initial loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Theme Toggle Logic
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const handleSendChange = (val: number) => {
        setSendAmount(val);
        setReceiveAmount(val / 5.39); // Mock calculation
    };

    return (
        <div className="design-system-dashboard">
            {/* Header */}
            <header className="design-system-dashboard__header">
                <h1 className="design-system-dashboard__title">Olá, {userName}</h1>
                <div className="design-system-dashboard__user">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsDark(!isDark)}
                    >
                        {isDark ? '☀️ Light' : '🌙 Dark'}
                    </Button>
                    <Button variant="ghost" size="sm">Notificações</Button>
                    <div className="design-system-dashboard__avatar">RD</div>
                </div>
            </header>

            {/* Balance Card */}
            <section className="design-system-dashboard__balance-card">
                <div>
                    <span className="design-system-dashboard__balance-label">Saldo Total Estimado (BRL)</span>
                    <div className="design-system-dashboard__balance-value">
                        {isLoading ? (
                            <Skeleton width={200} height={48} />
                        ) : (
                            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(balance)
                        )}
                    </div>
                </div>
                <div className="design-system-dashboard__actions">
                    <Button variant="secondary" onClick={() => { }}>Adicionar Saldo</Button>
                    <Button variant="secondary" onClick={() => { }}>Extrato</Button>
                </div>
            </section>

            <div className="design-system-dashboard__grid">
                {/* Left Column: Market & History */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                    {/* Market Rates */}
                    <section>
                        <h2 className="design-system-dashboard__section-title">Mercado Agora</h2>
                        <div className="design-system-dashboard__rates-grid">
                            {isLoading
                                ? Array(4).fill(0).map((_, i) => (
                                    <Skeleton key={i} height={140} style={{ borderRadius: '16px' }} />
                                ))
                                : mockRates.map((rate) => (
                                    <FxRateCard key={rate.pair} {...rate} />
                                ))
                            }
                        </div>
                    </section>

                    {/* Recent Transactions */}
                    <section>
                        <h2 className="design-system-dashboard__section-title">Últimas Transações</h2>
                        {isLoading ? (
                            <Skeleton height={200} style={{ borderRadius: '16px' }} />
                        ) : (
                            <DataTable
                                data={mockTransactions}
                                columns={transactionColumns}
                                density="standard"
                            />
                        )}
                    </section>
                </div>

                {/* Right Column: Quick Conversion */}
                <aside>
                    <h2 className="design-system-dashboard__section-title">Conversão Rápida</h2>
                    <div className="design-system-dashboard__conversion">
                        <CurrencyInput
                            label="Você envia"
                            currency="BRL"
                            value={sendAmount}
                            onValueChange={handleSendChange}
                        />

                        <div className="design-system-dashboard__conversion-arrow">↓</div>

                        <CurrencyInput
                            label="Você recebe"
                            currency="USD"
                            value={receiveAmount}
                            onValueChange={() => { }}
                            helperText="Cotação: 5.39 | IOF incluso"
                        />

                        <Button fullWidth size="lg">Continuar</Button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Dashboard;
