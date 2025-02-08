// Shorten URL (connects to backend)
async function shorten() {
    const longUrl = document.getElementById('longUrl').value;
    const apiUrl = http://localhost:3000/shorten?url=${encodeURIComponent(longUrl)};
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      document.getElementById('result').innerHTML = Short URL: <a href="${data.shortUrl}">${data.shortUrl}</a>;
    } catch (error) {
      alert('Failed to shorten URL. Please try again.');
    }
  }
  
  // Timer for ad pages
  function startTimer(duration, redirectUrl) {
    let timer = duration;
    const timerElement = document.getElementById('counter');
    const secondsElement = document.getElementById('seconds');
  
    const interval = setInterval(() => {
      timer--;
      timerElement.textContent = timer;
      secondsElement.textContent = timer;
  
      if (timer <= 0) {
        clearInterval(interval);
        window.location.href = redirectUrl;
      }
    }, 1000);
  }
  
  // Initialize AdSense ads (add this if using Google AdSense)
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof adsbygoogle !== 'undefined') {
      adsbygoogle.push({});
    }
  }); 