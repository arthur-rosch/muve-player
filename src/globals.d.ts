// src/globals.d.ts ou src/window.d.ts
declare global {
  interface Window {
    initReactApp: () => void;
  }
}

// Isso fará com que o TypeScript reconheça a propriedade 'initReactApp' no objeto 'window'
