import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CurrencyInput } from './CurrencyInput';

describe('CurrencyInput', () => {
    it('renders correctly with label', () => {
        render(<CurrencyInput label="Valor" currency="BRL" value={0} onValueChange={() => { }} />);
        expect(screen.getByText('Valor')).toBeDefined();
        expect(screen.getByText('BRL')).toBeDefined();
    });

    it('formats initial value correctly', () => {
        render(<CurrencyInput label="Valor" currency="BRL" value={1000} onValueChange={() => { }} />);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        // 1000 deve ser formatado como 1.000,00
        expect(input.value).toBe('1.000,00');
    });

    it('updates value on change', () => {
        const handleChange = vi.fn();
        render(<CurrencyInput label="Valor" currency="BRL" value={0} onValueChange={handleChange} />);

        const input = screen.getByRole('textbox');

        // Simula digitar "1" -> 0,01
        fireEvent.change(input, { target: { value: '0,01' } });
        expect(handleChange).toHaveBeenCalledWith(0.01);

        // Simula digitar "12" -> 0,12
        fireEvent.change(input, { target: { value: '0,12' } });
        expect(handleChange).toHaveBeenCalledWith(0.12);
    });

    it('handles helper text', () => {
        render(<CurrencyInput label="Valor" currency="BRL" value={0} onValueChange={() => { }} helperText="Texto de ajuda" />);
        expect(screen.getByText('Texto de ajuda')).toBeDefined();
    });

    it('handles error state', () => {
        render(<CurrencyInput label="Valor" currency="BRL" value={0} onValueChange={() => { }} error helperText="Erro inválido" />);
        const helperText = screen.getByText('Erro inválido');
        expect(helperText.className).toContain('error');
    });
});
