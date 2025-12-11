'use client';
import { useEffect } from 'react';
import Script from 'next/script';

interface BMCWidget {
  init: () => void;
}

declare global {
  interface Window {
    BMCWidget?: BMCWidget;
  }
}

export default function BMACWidget() {
  useEffect(() => {
    // Re-init on mount/navigation
    const initWidget = () => {
      if (typeof window !== 'undefined' && window.BMCWidget) {
        window.BMCWidget.init();
      }
    };

    // Try to init immediately
    initWidget();

    // Also listen for DOMContentLoaded in case the script loads after this component mounts
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initWidget);
      return () => document.removeEventListener('DOMContentLoaded', initWidget);
    }
  }, []);

  return (
    <Script
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      strategy="afterInteractive"
      data-name="BMC-Widget"
      data-cfasync="false"
      data-id="thaka"
      data-description="Support me on Buy me a coffee!"
      data-color="#5F7FFF"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
      onLoad={() => {
        // Force init after script loads
        if (typeof window !== 'undefined' && window.BMCWidget) {
          window.BMCWidget.init();
        }
        // Also dispatch DOMContentLoaded to ensure widget initializes
        if (document.readyState !== 'loading') {
          window.dispatchEvent(new Event('DOMContentLoaded'));
        }
      }}
    />
  );
}
