import { useState } from 'react';

export default function ShareButton({ shareData, className = '' }) {
  const [copied, setCopied] = useState(false);
  
  const defaultShareData = {
    title: 'SpinBreak',
    text: 'I just completed a SpinBreak quest! Join me for quick wellness breaks.',
    url: window.location.href,
  };
  
  const data = { ...defaultShareData, ...shareData };
  
  const canShare = navigator.share !== undefined;
  
  const handleShare = async () => {
    if (canShare) {
      try {
        await navigator.share(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Share failed:', err);
          fallbackCopy();
        }
      }
    } else {
      fallbackCopy();
    }
  };
  
  const fallbackCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };
  
  const shareToWhatsApp = () => {
    const text = encodeURIComponent(`${data.text} ${data.url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };
  
  const shareToTwitter = () => {
    const text = encodeURIComponent(data.text);
    const url = encodeURIComponent(data.url);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };
  
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <button onClick={handleShare} className="btn btn-primary">
        {copied ? '✓ Copied!' : canShare ? '🌍 Share' : '📋 Copy Link'}
      </button>
      <button onClick={shareToWhatsApp} className="btn btn-secondary">
        WhatsApp
      </button>
      <button onClick={shareToTwitter} className="btn btn-secondary">
        Twitter
      </button>
    </div>
  );
}