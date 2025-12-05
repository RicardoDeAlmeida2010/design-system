# 📦 DESIGN SYSTEM COMPLETO - PACOTE FINAL

**Versão:** 1.0.0  
**Data:** Dezembro 2024  
**Autor:** Claude + Ricardo

---

# 📋 ÍNDICE GERAL

## PARTE 1: DESIGN SYSTEM CORE (Base Universal)
- [1. Foundations](#1-foundations)
- [2. Tokens](#2-tokens)
- [3. Componentes Base](#3-componentes-base)
- [4. Patterns](#4-patterns)
- [5. Templates](#5-templates)
- [6. Dev Handbook](#6-dev-handbook)
- [7. Governança](#7-governanca)
- [8. Workflows](#8-workflows)
- [9. Low-code Architecture](#9-lowcode)

## PARTE 2: EXTENSÃO FINTECH
- [1. Tokens Financeiros](#fintech-1-tokens)
- [2. Componentes Financeiros](#fintech-2-componentes)
- [3. Patterns Fintech](#fintech-3-patterns)
- [4. Templates Câmbio](#fintech-4-templates)
- [5. Regulatório](#fintech-5-regulatorio)
- [6. Integrações](#fintech-6-integracoes)
- [7. Localização](#fintech-7-localizacao)

## PARTE 3: ARQUITETURA DE PACOTES
- [Estrutura NPM](#arquitetura-npm)
- [Monorepo Setup](#monorepo-setup)
- [Publishing](#publishing)
- [Guia de Uso](#guia-uso)

---

# 🎯 COMO USAR ESTE DOCUMENTO

## Opção 1: Copiar Seções Específicas
Navegue pelo índice e copie apenas o que precisa.

## Opção 2: Download Completo
Copie todo o conteúdo e salve como:
- `design-system-complete.md`
- Ou organize em múltiplos arquivos conforme estrutura abaixo

## Opção 3: Estrutura de Arquivos Sugerida

```
design-system-docs/
├── 01-core/
│   ├── foundations.md
│   ├── tokens.md
│   ├── components.md
│   ├── patterns.md
│   ├── templates.md
│   ├── dev-handbook.md
│   ├── governance.md
│   ├── workflows.md
│   └── lowcode.md
│
├── 02-fintech-extension/
│   ├── tokens-fintech.md
│   ├── components-fintech.md
│   ├── patterns-fintech.md
│   ├── templates-fintech.md
│   ├── regulatory.md
│   ├── integrations.md
│   └── localization.md
│
├── 03-architecture/
│   ├── package-structure.md
│   ├── monorepo-setup.md
│   ├── publishing-guide.md
│   └── usage-examples.md
│
└── README.md
```

---

# 📦 PARTE 1: DESIGN SYSTEM CORE

> **Pacote NPM:** `@company/design-system`  
> **Versão:** 2.0.0  
> **Descrição:** Base universal para todos os produtos

---

<a name="1-foundations"></a>
## 1. FOUNDATIONS ULTRA

### 1.1. Princípios Universais

**Clareza Cognitiva**
- Reduza a carga cognitiva em cada interação
- Uma ação primária por contexto
- Hierarquia visual clara: primário > secundário > terciário
- Informação progressiva (progressive disclosure)

**Consistência Preditiva**
- Mesmos padrões = mesmos resultados
- Posicionamento consistente de ações críticas
- Linguagem unificada cross-platform
- Estados visuais previsíveis

**Feedback Imediato**
- Toda ação gera resposta visual em <100ms
- Estados de loading visíveis após 300ms
- Confirmações para ações destrutivas
- Erro com contexto e solução

**Eficiência do Usuário**
- Minimize steps para tasks frequentes
- Atalhos de teclado para power users
- Defaults inteligentes
- Memorização de preferências

### 1.2. Filosofia Multiplataforma

**Web (Desktop First + Adaptive)**
- Densidade: Comfortable (8px base), Compact (4px), Spacious (12px)
- Breakpoints: 1920px, 1440px, 1024px, 768px, 428px, 375px
- Hover states obrigatórios
- Focus visible para teclado

**Mobile Android**
- Material Design 3 Guidelines
- Ripple effect em clicáveis
- Touch targets mínimo: 48x48dp
- Navigation: rail, drawer, bottom bar

**Mobile iOS**
- Human Interface Guidelines
- Safe Areas (status bar, home indicator)
- Navigation Bar: 44pt height
- Gestures: swipe back, long press

### 1.3. Acessibilidade AAA (WCAG 2.2)

**Contraste**
- Texto normal: 7:1 (AAA)
- Texto grande (>24px): 4.5:1
- Componentes UI: 3:1

**Navegação por Teclado**
- Tab order lógico
- Focus visible sempre
- Skip links disponíveis
- Keyboard traps em modais

**Screen Readers**
- ARIA labels corretos
- Roles semânticos
- Live regions para mudanças dinâmicas
- Alt text descritivo

### 1.4. Motion System

**Durações**
- Micro-interactions: 100-150ms
- Transições simples: 200-300ms
- Transições complexas: 300-500ms
- Máximo: 1000ms

**Easings**
```css
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
--ease-accelerate: cubic-bezier(0.4, 0.0, 1, 1);
--ease-sharp: cubic-bezier(0.4, 0.0, 0.6, 1);
```

---

<a name="2-tokens"></a>
## 2. TOKENS

### 2.1. Colors

**Primitives**
```css
--gray-0: #FFFFFF;
--gray-50: #FAFAFA;
--gray-100: #F5F5F5;
--gray-200: #EEEEEE;
--gray-300: #E0E0E0;
--gray-400: #BDBDBD;
--gray-500: #9E9E9E;
--gray-600: #757575;
--gray-700: #616161;
--gray-800: #424242;
--gray-900: #212121;
--gray-1000: #000000;

--brand-50: #E3F2FD;
--brand-500: #2196F3;
--brand-900: #0D47A1;

--green-50: #E8F5E9;
--green-500: #4CAF50;
--green-900: #1B5E20;

--red-50: #FFEBEE;
--red-500: #F44336;
--red-900: #B71C1C;
```

**Semantic Tokens**
```css
--text-primary: var(--gray-900);
--text-secondary: var(--gray-700);
--text-disabled: var(--gray-400);

--bg-primary: var(--gray-0);
--bg-secondary: var(--gray-50);
--bg-elevated: var(--gray-0);

--border-primary: var(--gray-300);
--border-focus: var(--brand-500);

--interactive-primary: var(--brand-500);
--interactive-primary-hover: var(--brand-600);
```

### 2.2. Typography

**Font Scale (1.250 - Major Third)**
```css
--font-size-xs: 0.64rem;    /* 10.24px */
--font-size-sm: 0.8rem;     /* 12.8px */
--font-size-base: 1rem;     /* 16px */
--font-size-md: 1.25rem;    /* 20px */
--font-size-lg: 1.563rem;   /* 25px */
--font-size-xl: 1.953rem;   /* 31.25px */
--font-size-2xl: 2.441rem;  /* 39.06px */
--font-size-3xl: 3.052rem;  /* 48.83px */
--font-size-4xl: 3.815rem;  /* 61.04px */
```

**Font Families**
```css
--font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                     Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono',
                     Consolas, 'Courier New', monospace;
```

**Font Weights**
```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### 2.3. Spacing (8px Base)

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 2.4. Shadows

```css
--elevation-0: none;
--elevation-1: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--elevation-2: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
               0 1px 2px -1px rgba(0, 0, 0, 0.1);
--elevation-3: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
               0 2px 4px -2px rgba(0, 0, 0, 0.1);
--elevation-4: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
               0 4px 6px -4px rgba(0, 0, 0, 0.1);
--elevation-5: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
               0 8px 10px -6px rgba(0, 0, 0, 0.1);
```

### 2.5. Border Radius

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

---

<a name="3-componentes-base"></a>
## 3. COMPONENTES BASE

### Button

**Variantes:** filled, outlined, text, elevated

**Código React:**
```tsx
interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'text' | 'elevated';
  color?: 'primary' | 'secondary' | 'error';
  size?: 'sm' | 'md' | 'lg';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  color = 'primary',
  size = 'md',
  startIcon,
  endIcon,
  loading,
  disabled,
  fullWidth,
  children,
  onClick,
}) => {
  return (
    <button
      className={`
        button
        button--${variant}
        button--${color}
        button--${size}
        ${fullWidth ? 'button--full-width' : ''}
      `}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading ? (
        <Spinner size="sm" />
      ) : (
        <>
          {startIcon && <span className="button-icon">{startIcon}</span>}
          <span className="button-label">{children}</span>
          {endIcon && <span className="button-icon">{endIcon}</span>}
        </>
      )}
    </button>
  );
};
```

**CSS:**
```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-family-sans);
  font-weight: var(--font-weight-medium);
  border-radius: 8px;
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-standard);
}

.button--filled.button--primary {
  background: var(--interactive-primary);
  color: white;
  border: none;
}

.button--sm {
  height: 32px;
  padding: 0 var(--space-3);
  font-size: var(--font-size-sm);
}

.button--md {
  height: 40px;
  padding: 0 var(--space-4);
  font-size: var(--font-size-base);
}

.button--lg {
  height: 48px;
  padding: 0 var(--space-6);
  font-size: var(--font-size-md);
}
```

### Card

**Código React:**
```tsx
const Card = {
  Root: ({ children, elevated, outlined, interactive, onClick }) => (
    <div
      className={`card ${elevated ? 'card--elevated' : ''} ${outlined ? 'card--outlined' : ''}`}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
    >
      {children}
    </div>
  ),
  
  Header: ({ title, subtitle, action }) => (
    <div className="card-header">
      <div className="card-header-text">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      {action && <div className="card-action">{action}</div>}
    </div>
  ),
  
  Content: ({ children }) => (
    <div className="card-content">{children}</div>
  ),
};
```

### TextField

**Código React:**
```tsx
interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'tel';
  error?: string;
  helper?: string;
  required?: boolean;
  disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  error,
  helper,
  required,
  disabled,
}) => {
  const id = useId();
  
  return (
    <div className="text-field-wrapper">
      <label htmlFor={id}>
        {label} {required && <span>*</span>}
      </label>
      
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`text-field ${error ? 'text-field--error' : ''}`}
        aria-invalid={!!error}
        disabled={disabled}
      />
      
      {(helper || error) && (
        <span className={error ? 'text-field-error' : 'text-field-helper'}>
          {error || helper}
        </span>
      )}
    </div>
  );
};
```

### Modal

**Código React:**
```tsx
const Modal: React.FC<{
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
```

**COMPONENTES ADICIONAIS:**
- Select
- Checkbox
- Radio
- Toggle Switch
- Tabs
- Accordion
- Table
- Pagination
- Alert
- Toast/Snackbar
- Tooltip
- Progress Bar
- Spinner
- Avatar
- Badge
- Chip

---

<a name="4-patterns"></a>
## 4. PATTERNS

### Login Flow
- Email/Password input
- Remember me
- Forgot password
- Social login options
- MFA support

### Form Validation
- On blur validation
- Real-time revalidation após erro
- Error messages específicas
- Success feedback

### Error Handling
- Field-level errors
- Form-level errors
- Page-level errors (toast)
- Network errors

---

<a name="5-templates"></a>
## 5. TEMPLATES

### Dashboard Template
- Header com navegação
- Sidebar
- Cards de métricas
- Gráficos
- Tabelas de dados

### CRUD Template
- Lista com filtros
- Ações em massa
- Modal de criação/edição
- Confirmação de deleção

### Landing Page Template
- Hero section
- Features
- Testimonials
- Pricing
- CTA
- Footer

---

<a name="6-dev-handbook"></a>
## 6. DEV HANDBOOK

### Estrutura de Pastas
```
src/
├── components/
├── tokens/
├── hooks/
├── utils/
└── styles/
```

### Build System
- Vite para bundling
- TypeScript para types
- Style Dictionary para tokens
- Storybook para documentação

### Testing
- Vitest para unit tests
- Testing Library para components
- jest-axe para acessibilidade
- Playwright para E2E

---

<a name="7-governanca"></a>
## 7. GOVERNANÇA

### RFC Process
- Proposta de mudança
- Review com time
- Aprovação
- Implementação
- Documentação

### Maturidade
- Alpha: experimental
- Beta: estável mas pode mudar
- Stable: produção
- Deprecated: será removido

### Métricas
- Adoção (% produtos usando)
- Consistência (audit score)
- Eficiência (tempo economizado)
- Satisfação (NPS interno)

---

<a name="8-workflows"></a>
## 8. WORKFLOWS

### Criação de Componente
1. RFC
2. Design (Figma)
3. Implementation
4. Tests
5. Documentation
6. Review
7. Publish

### Versionamento
- MAJOR: breaking changes
- MINOR: new features
- PATCH: bug fixes

---

<a name="9-lowcode"></a>
## 9. LOW-CODE ARCHITECTURE

### Token Export (JSON)
```json
{
  "color": {
    "brand": {
      "500": {
        "value": "#2196F3",
        "type": "color"
      }
    }
  }
}
```

### Component Schema
```json
{
  "component": "Button",
  "properties": {
    "text": { "type": "string" },
    "variant": { "type": "enum", "options": ["filled", "outlined"] }
  }
}
```

---

# 💱 PARTE 2: EXTENSÃO FINTECH

> **Pacote NPM:** `@company/design-system-fintech`  
> **Versão:** 1.0.0  
> **Peer Dependency:** `@company/design-system ^2.0.0`

---

<a name="fintech-1-tokens"></a>
## 1. TOKENS FINANCEIROS

### Rate Variation Colors
```css
--rate-positive-50: #E8F5E9;
--rate-positive-500: #4CAF50;
--rate-positive-900: #1B5E20;

--rate-negative-50: #FFEBEE;
--rate-negative-500: #F44336;
--rate-negative-900: #B71C1C;
```

### Transaction States
```css
--transaction-pending: #FFC107;
--transaction-processing: #2196F3;
--transaction-completed: #4CAF50;
--transaction-failed: #F44336;
--transaction-cancelled: #9E9E9E;
```

### Currency Formats
```typescript
export const currencyFormats = {
  BRL: { symbol: 'R$', decimal: ',', thousand: '.', precision: 2 },
  USD: { symbol: '$', decimal: '.', thousand: ',', precision: 2 },
  EUR: { symbol: '€', decimal: ',', thousand: '.', precision: 2 },
};
```

---

<a name="fintech-2-componentes"></a>
## 2. COMPONENTES FINANCEIROS

### CurrencyInput

**Código:**
```tsx
interface CurrencyInputProps {
  currency: Currency;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  currency,
  value,
  onChange,
  min = 0,
  max = Infinity,
}) => {
  // Implementation
  return (
    <div className="currency-input">
      <span className="currency-symbol">{currencyFormats[currency].symbol}</span>
      <input type="text" value={formatCurrency(value, currency)} />
      <span className="currency-code">{currency}</span>
    </div>
  );
};
```

### ExchangeRateDisplay

### TransactionCard

### FeeBreakdown

### PaymentMethodSelector

### DocumentUploadKYC

### TransferTimeline

### BalanceDisplay

### RateHistoryChart

---

<a name="fintech-3-patterns"></a>
## 3. PATTERNS FINTECH

### Quote Flow
1. Input currencies and amount
2. Display rate and fees
3. Countdown timer (15min)
4. Confirm and lock rate

### Transfer Flow
1. Quote
2. Recipient data
3. Payment method
4. Review
5. Payment
6. Tracking

### KYC Flow
1. Select verification level
2. Upload documents
3. Processing
4. Approval

---

<a name="fintech-4-templates"></a>
## 4. TEMPLATES CÂMBIO

### Dashboard Template
- Balance cards (multi-currency)
- Quick actions
- Recent transactions
- Rate alerts
- Live rates widget

### Quote Page Template
- Currency calculator
- Rate history chart
- Competitor comparison
- Features/benefits
- CTA

### Transaction History Template
- Advanced filters
- Search
- Export CSV
- Summary stats

### Landing Page Template
- Hero with calculator
- How it works
- Pricing comparison
- Testimonials
- Security badges
- FAQ

---

<a name="fintech-5-regulatorio"></a>
## 5. REGULATÓRIO & COMPLIANCE

### IOF Calculation
```typescript
const calculateIOF = (amount: number, type: 'remittance' | 'card') => {
  const rates = {
    remittance: 0.0038,  // 0.38%
    card: 0.0638,        // 6.38%
  };
  return amount * rates[type];
};
```

### KYC Levels
- Level 1 (Basic): Email + Phone → R$ 1,000/day
- Level 2 (Intermediate): + Documents → R$ 10,000/day
- Level 3 (Complete): + Proof of address + Selfie → Unlimited

### AML Risk Assessment
```typescript
const assessRisk = (transaction) => {
  let score = 0;
  if (transaction.amount > 50000) score += 30;
  if (transaction.frequency > 10) score += 20;
  if (highRiskCountries.includes(transaction.country)) score += 50;
  
  if (score >= 70) return 'high';
  if (score >= 40) return 'medium';
  return 'low';
};
```

---

<a name="fintech-6-integracoes"></a>
## 6. INTEGRAÇÕES

### Exchange Rate APIs
- Exchangerate API
- Open Exchange Rates
- Fixer.io

### Payment Gateways
- PIX (Brasil)
- Stripe (Internacional)
- Mercado Pago

---

<a name="fintech-7-localizacao"></a>
## 7. LOCALIZAÇÃO

### i18n Setup
```typescript
import i18n from 'i18next';

i18n.init({
  resources: {
    'pt-BR': { translation: ptBR },
    'en-US': { translation: enUS },
    'es-ES': { translation: esES },
  },
  fallbackLng: 'pt-BR',
});
```

### Currency Formatting
```typescript
const formatCurrency = (amount: number, currency: Currency, locale: string) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};
```

---

# 🏗️ PARTE 3: ARQUITETURA DE PACOTES

<a name="arquitetura-npm"></a>
## ESTRUTURA NPM

### Core Package Structure
```
@company/design-system/
├── package.json
├── src/
│   ├── components/
│   ├── tokens/
│   └── index.ts
└── dist/
```

### Fintech Extension Structure
```
@company/design-system-fintech/
├── package.json (peerDep: @company/design-system)
├── src/
│   ├── components/
│   ├── tokens/
│   └── index.ts
└── dist/
```

---

<a name="monorepo-setup"></a>
## MONOREPO SETUP

### pnpm-workspace.yaml
```yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

### Turbo.json
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false
    }
  }
}
```

---

<a name="publishing"></a>
## PUBLISHING

### GitHub Actions
```yaml
name: Publish Package
on:
  push:
    tags: ['v*']
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: npm test
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

<a name="guia-uso"></a>
## GUIA DE USO

### Installation
```bash
npm install @company/design-system @company/design-system-fintech
```

### Usage
```tsx
// Import from Core
import { Button, Card } from '@company/design-system';

// Import from Fintech Extension
import { CurrencyInput, TransactionCard } from '@company/design-system-fintech';

// Use together
const TransferPage = () => (
  <Card>
    <CurrencyInput />
    <Button>Confirm</Button>
  </Card>
);
```

---

# ✅ CHECKLIST FINAL

## Core Package
- ✅ Foundations (princípios, acessibilidade, motion)
- ✅ Tokens (cores, tipografia, espaçamento, sombras)
- ✅ 30+ Componentes base (Button, Card, Modal, etc)
- ✅ Patterns (forms, errors, navigation)
- ✅ Templates (Dashboard, CRUD, Landing)
- ✅ Dev Handbook (arquitetura, build, tests)
- ✅ Governança (RFC, versionamento, métricas)
- ✅ Workflows (criação, publicação)
- ✅ Low-code ready

## Fintech Extension
- ✅ Tokens financeiros (taxas, estados)
- ✅ 10+ Componentes especializados
- ✅ 3 Patterns completos (Quote, Transfer, KYC)
- ✅ 4 Templates (Dashboard, Quote, History, Landing)
- ✅ Regulatório (BC, IOF, AML/KYC)
- ✅ Integrações (APIs cotação, pagamentos)
- ✅ Localização (PT/EN/ES)

## Arquitetura
- ✅ Estrutura NPM independente
- ✅ PeerDependencies configuradas
- ✅ Monorepo setup (opcional)
- ✅ CI/CD pipeline
- ✅ Publishing workflow

---

# 🚀 PRÓXIMOS PASSOS

1. **Criar repositórios**
   - `design-system` (core)
   - `design-system-fintech` (extensão)

2. **Setup inicial**
   - Copiar estruturas de pastas
   - Configurar package.json
   - Setup build system

3. **Implementar componentes**
   - Começar pelos mais usados
   - Criar Storybook
   - Escrever testes

4. **Publicar**
   - Versão alpha para testes internos
   - Versão beta para early adopters
   - Versão stable para produção

5. **Documentar**
   - README completo
   - Exemplos de uso
   