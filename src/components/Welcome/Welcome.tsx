import React from 'react';
import './Welcome.css';

const Welcome: React.FC = () => (
  <div className="welcome">
    <div className="welcome__container">
      <h1 className="welcome__title">
        Design System
      </h1>
      <p className="welcome__subtitle">
        Um sistema completo de componentes construído com React, TypeScript e Storybook,
        utilizando design tokens para consistência visual.
      </p>

      <div className="welcome__grid">
        <div className="welcome__card">
          <h3 className="welcome__card-title">
            🧩 Componentes
          </h3>
          <p className="welcome__card-text">
            Componentes reutilizáveis e bem documentados, prontos para uso em qualquer projeto React.
          </p>
        </div>

        <div className="welcome__card">
          <h3 className="welcome__card-title">
            🎨 Design Tokens
          </h3>
          <p className="welcome__card-text">
            Sistema de tokens centralizado para cores, tipografia, espaçamentos e muito mais.
          </p>
        </div>

        <div className="welcome__card">
          <h3 className="welcome__card-title">
            📚 Documentação
          </h3>
          <p className="welcome__card-text">
            Documentação interativa com Storybook, incluindo exemplos e guias de uso.
          </p>
        </div>
      </div>

      <div className="welcome__cta">
        <h2 className="welcome__cta-title">
          🚀 Comece Agora
        </h2>
        <p className="welcome__cta-text">
          Use o menu lateral para explorar os componentes disponíveis e suas variantes.
        </p>

        <div className="welcome__actions">
          <a
            href="?path=/docs/components-button--docs"
            className="welcome__button welcome__button--primary"
          >
            Ver Componentes
          </a>
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noopener noreferrer"
            className="welcome__button welcome__button--secondary"
          >
            Demo App
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome; 