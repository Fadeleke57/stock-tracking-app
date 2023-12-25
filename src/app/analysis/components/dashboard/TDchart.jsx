// TradingViewWidget.jsx
'use client'

import React, { useEffect, useRef } from 'react';

export default function TradingViewWidget({ stock, exchange }) {
  const tvWidgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = initializeTradingView;
  
    document.body.appendChild(script);
  
    return () => {
      const widgetContainer = document.getElementById('tradingview_ce7b3');
      if (widgetContainer) {
        while (widgetContainer.firstChild) {
          widgetContainer.removeChild(widgetContainer.firstChild);
        }
      }
    };
  }, [stock, exchange]);

  function initializeTradingView() {
    if (!window.TradingView) return;

    const widget = new window.TradingView.widget({
      width: '100%',
      height: '100%',
      symbol: stock,
      interval: 'D',
      timezone: 'America/New_York',
      theme: 'light',
      style: '3',
      locale: 'en',
      enable_publishing: false,
      backgroundColor: 'rgba(242, 242, 242, 1)',
      allow_symbol_change: true,
      save_image: false,
      container_id: 'tradingview_ce7b3',
    });

    tvWidgetRef.current = widget;
  }

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_ce7b3' />
    </div>
  );
}