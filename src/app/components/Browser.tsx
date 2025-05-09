'use client'; 

import { useEffect, useState } from 'react';

export default function BrowserInfo() {
  const [browser, setBrowser] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    let name = 'Unknown', version = '';

    if (userAgent.indexOf('Firefox') > -1) {
      name = 'Firefox';
      version = userAgent.match(/Firefox\/(\d+\.\d+)/)?.[1] || '';
    } else if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Edg') === -1) {
      name = 'Chrome';
      version = userAgent.match(/Chrome\/(\d+\.\d+)/)?.[1] || '';
    } else if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
      name = 'Safari';
      version = userAgent.match(/Version\/(\d+\.\d+)/)?.[1] || '';
    } else if (userAgent.indexOf('Edg') > -1) {
      name = 'Edge';
      version = userAgent.match(/Edg\/(\d+\.\d+)/)?.[1] || '';
    }

    setBrowser(`${name} ${version}`);
  }, []);

  return <>Your browser: {browser}</>;
}