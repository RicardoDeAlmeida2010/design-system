# 🎨 Design System - Banking & Fintech

Design System completo e moderno para aplicações financeiras, implementado com React, TypeScript e CSS Variables. Baseado nas especificações do **DS_banco00.md**.

![Design System Banner](https://via.placeholder.com/1200x300?text=Design+System+Banking+%26+Fintech)

## 🚀 Visão Geral

Este Design System fornece uma coleção robusta de componentes, tokens e padrões de design focados em:
- **Clareza Cognitiva**: Interfaces limpas e intuitivas.
- **Consistência**: Experiência unificada em toda a plataforma.
- **Acessibilidade**: Conformidade WCAG 2.2 Nível AAA.
- **Performance**: Componentes leves e otimizados.
- **Domínio Fintech**: Componentes especializados para câmbio e transações.

## 📚 Documentação

A documentação completa está disponível no Storybook e nos arquivos do projeto:

- **[IMPLEMENTATION.md](./IMPLEMENTATION.md)**: Detalhes técnicos da implementação.
- **[MIGRATION.md](./MIGRATION.md)**: Guia de migração dos tokens antigos.
- **Storybook**: Execute `npm run storybook` para visualizar a documentação interativa.

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+
- npm 9+

### Instalação
```bash
npm install
```

### Rodando o Storybook
```bash
npm run storybook
```
Acesse http://localhost:6006 para visualizar os componentes e documentação.

## 🎨 Tokens de Design

O sistema utiliza CSS Variables para todos os tokens de design, garantindo consistência e facilidade de manutenção.

| Categoria | Prefixo | Exemplo |
|-----------|---------|---------|
| **Cores** | `--brand-`, `--gray-`, `--text-` | `var(--brand-500)`, `var(--text-primary)` |
| **Espaçamento** | `--space-` | `var(--space-4)` (16px) |
| **Tipografia** | `--font-size-`, `--font-weight-` | `var(--font-size-lg)`, `var(--font-weight-bold)` |
| **Sombras** | `--elevation-` | `var(--elevation-2)` |
| **Border Radius** | `--radius-` | `var(--radius-md)` |
| **Motion** | `--duration-`, `--ease-` | `var(--duration-fast)`, `var(--ease-standard)` |

### Extensão Fintech
Tokens específicos para o domínio financeiro:
- `--rate-positive-*`: Para variações positivas (verde)
- `--rate-negative-*`: Para variações negativas (vermelho)

## 🧩 Componentes

### Core
- **Button**: Botões com variantes (primary, secondary, ghost, error).
- **Input**: Campos de texto com validação e ícones.
- **Checkbox**: Seleção binária.
- **Skeleton**: Loading states.
- **DataTable**: Tabelas de dados responsivas.

### Fintech
- **CurrencyInput**: Input formatado para valores monetários com seletor de moeda.
- **FxRateCard**: Card para exibição de cotações com variação e sparkline.

## 🛠️ Estrutura do Projeto

```
src/
├── components/        # Componentes React (Button, Input, etc.)
├── stories/           # Documentação MDX do Storybook
├── tokens/            # Arquivos CSS de tokens (colors, spacing, etc.)
├── utils/             # Funções utilitárias (tokens.ts)
└── index.css          # Estilos globais e importação de tokens
```

## 🤝 Contribuição

1. Siga os padrões de código definidos no projeto.
2. Utilize os tokens de design existentes.
3. Escreva testes para novos componentes.
4. Documente no Storybook.

## 📄 Licença

MIT
