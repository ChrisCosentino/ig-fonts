import React, { useEffect } from 'react';
import AdSense from 'react-adsense';

const Ads = () => {
  useEffect(() => {
    const installGoogleAds = () => {
      const elem = document.createElement('script');
      elem.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      elem.async = true;
      elem.defer = true;
      document.body.insertBefore(elem, document.body.firstChild);
    };

    installGoogleAds();
    // (adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <AdSense.Google
      class='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client='ca-pub-7640467312832916'
      data-ad-slot='5134446067'
      data-ad-format='auto'
      data-full-width-responsive='true'></AdSense.Google>
  );
};

export default Ads;
