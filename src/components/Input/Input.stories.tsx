import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Um componente de input customizável com diferentes variantes, tamanhos, estados e suporte a ícones.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do input',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Estado de erro',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado desabilitado',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Ocupar toda a largura disponível',
    },
    label: {
      control: { type: 'text' },
      description: 'Label do input',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Texto de ajuda',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Campo obrigatório',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder do input',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Nome',
    placeholder: 'Digite seu nome',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Senha',
    type: 'password',
    placeholder: 'Digite sua senha',
    helperText: 'A senha deve ter pelo menos 8 caracteres',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    error: true,
    helperText: 'Email inválido',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    placeholder: 'Não é possível editar',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Input pequeno',
    placeholder: 'Digite algo...',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Input grande',
    placeholder: 'Digite algo...',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Input de largura completa',
    placeholder: 'Digite algo...',
    fullWidth: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input size="sm" label="Small" placeholder="Digite algo..." />
      <Input size="md" label="Medium" placeholder="Digite algo..." />
      <Input size="lg" label="Large" placeholder="Digite algo..." />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input label="Normal" placeholder="Digite algo..." />
      <Input label="Erro" placeholder="Digite algo..." error helperText="Campo obrigatório" />
      <Input label="Desabilitado" placeholder="Digite algo..." disabled />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const [errors, setErrors] = React.useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const handleChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));

      // Clear error when user starts typing
      if (errors[field as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    };

    const validateForm = () => {
      const newErrors = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      };

      if (!formData.name) newErrors.name = 'Nome é obrigatório';
      if (!formData.email) newErrors.email = 'Email é obrigatório';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';

      if (!formData.password) newErrors.password = 'Senha é obrigatória';
      else if (formData.password.length < 6) newErrors.password = 'Senha deve ter pelo menos 6 caracteres';

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Senhas não coincidem';
      }

      setErrors(newErrors);
      return Object.values(newErrors).every(error => !error);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Formulário enviado com sucesso!');
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Formulário de Cadastro</h3>

        <Input
          label="Nome completo"
          placeholder="Digite seu nome completo"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          required
        />

        <Input
          label="Email"
          type="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          required
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          required
        />

        <Input
          label="Confirmar senha"
          type="password"
          placeholder="Confirme sua senha"
          value={formData.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          required
        />

        <button
          type="submit"
          style={{
            padding: '12px 24px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
        >
          Cadastrar
        </button>
      </form>
    );
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const [size, setSize] = React.useState<'sm' | 'md' | 'lg'>('md');
    const [error, setError] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '500px' }}>
        <div>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>Controles</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <select value={size} onChange={(e) => setSize(e.target.value as any)}>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>

            <label>
              <input
                type="checkbox"
                checked={error}
                onChange={(e) => setError(e.target.checked)}
              />
              Error
            </label>

            <label>
              <input
                type="checkbox"
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
              />
              Disabled
            </label>
          </div>
        </div>

        <Input
          label="Input interativo"
          placeholder="Digite algo para testar..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size={size}
          error={error}
          disabled={disabled}
          helperText={
            error ? 'Este é um erro' :
              value ? `Você digitou: "${value}"` :
                'Digite algo para ver a mudança'
          }
        />

        <div style={{
          padding: '12px',
          backgroundColor: '#f8fafc',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#64748b'
        }}>
          <strong>Valor atual:</strong> {value || '(vazio)'}
        </div>
      </div>
    );
  },
};