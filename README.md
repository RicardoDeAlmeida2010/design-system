# 🏛️ **DESIGN SYSTEM ENTERPRISE 3.0 (BANKING/FX)**
**Status:** `Beta` | **Version:** `3.0.0` | **Target:** `Web, iOS, Android` | **Segment:** `Banking (Câmbio)`

---

# 🔵 **1. ARQUITETURA GERAL (THE "TRI-BRID" MODEL)**

### **1.1. Filosofia de Convergência**
O sistema opera em três camadas de fidelidade:
1.  **Core (80%):** Tokens semânticos, lógica de negócio (FX), ícones e tipografia (escala) são universais.
2.  **Web (W3C):** Foco em responsividade fluida, navegação por mouse/teclado e acessibilidade via ARIA.
3.  **Mobile Nativo (20%):**
    *   **Android (Material 3):** Ripple, Elevation, Navigation Drawer.
    *   **iOS (HIG):** Blur/Vibrancy, Large Titles, Swipe Gestures.

### **1.2. Base Tecnológica**
*   **Web:** React + Vite + CSS Variables.
*   **Docs:** Storybook 8+.
*   **Tokens:** W3C Design Tokens Format (`tokens.json`).

---

# 🔵 **2. TOKENS ENTERPRISE 3.0**

Estrutura: `sys.{category}.{property}.{variant}`.

### **2.1. Cores Semânticas (Banking FX)**
| Token | Light | Dark | Uso |
| :--- | :--- | :--- | :--- |
| `sys.color.fx.up` | `#16A34A` | `#30D158` | Valorização (Alta) |
| `sys.color.fx.down` | `#DC2626` | `#FF453A` | Desvalorização (Baixa) |
| `sys.color.action.brand` | `#0052CC` | `#0A84FF` | Ação Principal |
| `sys.color.bg.surface` | `#F3F4F6` | `#1C1C1E` | Cards e Containers |

### **2.2. Tipografia Fluida**
*   **Font Family:** `Inter` (Web/Android), `SF Pro` (iOS).
*   **Scale:** `display.lg` (48px), `heading.md` (32px), `body.md` (16px), `caption` (12px).

---

# 🔵 **3. COMPONENTES CORE (IMPLEMENTADOS)**

### **3.1. CurrencyInput (Input de Moeda)**
*   **Anatomia:** Dropdown de Bandeira + Código ISO + Input Numérico.
*   **Comportamento:** Formatação automática de moeda (BRL/USD/EUR).
*   **Local:** `src/components/CurrencyInput`

### **3.2. FxRateCard (Card de Cotação)**
*   **Anatomia:** Par (USD/BRL), Variação (%), Preço, Sparkline SVG.
*   **Variantes:** `Default`, `Compact`, `Live`.
*   **Local:** `src/components/FxRateCard`

### **3.3. DataTable (Tabela Enterprise)**
*   **Features:** Sticky Header, Multi-select, Densidade.
*   **Local:** `src/components/DataTable`

### **3.4. Button (Refatorado)**
*   **Variantes:** `Primary`, `Secondary`, `Ghost`, `Error`.
*   **Local:** `src/components/Button`

---

# 🔵 **4. TEMPLATES (PROTOTIPAGEM)**

### **4.1. Dashboard de Câmbio**
*   **Header:** Saudação e Avatar.
*   **Balance:** Saldo total consolidado.
*   **Rates Grid:** Grade de cotações favoritas.
*   **Quick Action:** Widget de conversão rápida.
*   **Local:** `src/templates/Dashboard`

---

# 🔵 **5. COMO RODAR**

1.  **Instalar dependências:**
    ```bash
    npm install
    ```

2.  **Rodar Storybook (Documentação Interativa):**
    ```bash
    npm run storybook
    ```
    Acesse: `http://localhost:6006` (ou porta disponível).

3.  **Build de Produção:**
    ```bash
    npm run build
    ```

---

# 🔵 **6. STATUS DE MIGRAÇÃO**

| Componente | Status | Versão |
| :--- | :--- | :--- |
| **Tokens** | ✅ Atualizado | 3.0 (FX + Tri-Brid) |
| **Button** | ✅ Refatorado | 3.0 |
| **DataTable** | ✅ Novo | 3.0 |
| **CurrencyInput** | ✅ Novo | 3.0 |
| **FxRateCard** | ✅ Novo | 3.0 |
| **Dashboard** | ✅ Novo | 3.0 |
| *Input (Legacy)* | ⚠️ Pendente | 1.0 |
| *Checkbox (Legacy)* | ⚠️ Pendente | 1.0 |
| *Radio (Legacy)* | ⚠️ Pendente | 1.0 |

---

# 🔵 **7. GOVERNANÇA**

*   **Versionamento:** SemVer.
*   **Contribuição:** Todo novo componente requer spec de Design e Testes.
