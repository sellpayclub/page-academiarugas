import React, { useEffect } from 'react';

export const VideoPlayer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="ifr_69960871dcfb6904915b507b_wrapper" style={{ margin: '0 auto', width: '100%', maxWidth: '400px' }}>
      <div style={{ position: 'relative', padding: '100% 0 0 0' }} id="ifr_69960871dcfb6904915b507b_aspect">
        <iframe
          frameBorder="0"
          allowFullScreen
          src="about:blank"
          id="ifr_69960871dcfb6904915b507b"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          referrerPolicy="origin"
          onLoad={(e) => {
            const target = e.target as HTMLIFrameElement;
            target.onload = null;
            target.src = 'https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/69960871dcfb6904915b507b/v4/embed.html' + (window.location.search || '?') + '&vl=' + encodeURIComponent(window.location.href);
          }}
        ></iframe>
      </div>
    </div>
  );
};
