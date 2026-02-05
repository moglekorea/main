// Mogle 플로팅 구매 버튼
(function() {
  // 이미 버튼이 있으면 중복 생성 방지
  if (document.querySelector('.mogle-buy-button')) return;
  
  // 스타일 추가
  const style = document.createElement('style');
  style.textContent = `
    .mogle-buy-button {
      position: fixed;
      top: 60vh;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      
      width: 70%;
      max-width: 400px;
      padding: clamp(10px, 1.5vw, 20px) clamp(20px, 4vw, 50px);
      
      font-family: 'Noto Sans KR', sans-serif;
      font-size: clamp(14px, 1.8vw, 20px);
      font-weight: 700;
      line-height: 1;
      text-align: center;
      text-decoration: none;
      color: #ffffff;
      
      background: #202124;
      border: 0;
      border-radius: 50px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.20);
      
      cursor: pointer;
      transition: all 0.30s ease;
      animation: mogle-pulse 2.0s ease-in-out infinite;
    }
    
    .mogle-buy-button:hover {
      background: #000000;
      transform: translateX(-50%) translateY(-2px);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.30);
      color: #ffffff;
    }
    
    @keyframes mogle-pulse {
      0%, 100% { opacity: 1.0; }
      50% { opacity: 0.90; }
    }
    
    @media (max-width: 767px) {
      .mogle-buy-button {
        width: 80%;
        max-width: 300px;
      }
    }
  `;
  document.head.appendChild(style);
  
  // 버튼 생성
  document.addEventListener('DOMContentLoaded', function() {
    // URL에서 템플릿명 자동 감지
    const path = window.location.pathname;
    const templateMatch = path.match(/templates\/(\w+)\//);
    const template = templateMatch ? templateMatch[1] : 'sapphire';
    
    // 버튼 생성
    const btn = document.createElement('a');
    btn.className = 'mogle-buy-button';
    btn.href = `../../pages/order.html?template=${template}`;
    btn.textContent = '지금, 시작하기';
    btn.setAttribute('aria-label', '템플릿 구매하기');
    
    // body에 추가
    document.body.appendChild(btn);
  });
})();
