'use client';  // 이 지시어를 추가합니다.

import React, { useState } from 'react';

export default function Home() {
  const [buttonText, setButtonText] = useState('광고보고 전생보기');
  const [randomImage, setRandomImage] = useState(null);

  // 세 장의 이미지 URL 리스트
  const images = [
    '/path/to/image1.jpg',  // 이미지 1 경로
    '/path/to/image2.jpg',  // 이미지 2 경로
    '/path/to/image3.jpg',  // 이미지 3 경로
  ];

  // 쿠팡 파트너스 페이지 이동 후 돌아오면 텍스트 변경
  const handleAdClick = () => {
    window.open('https://link.coupang.com/a/bUmGTz', '_blank');  // 쿠팡 파트너스 링크 입력
    setButtonText('바로보기');
  };

  // 이미지 랜덤 팝업
  const handleRandomPopup = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
    alert(`랜덤 이미지가 선택되었습니다: ${images[randomIndex]}`);
  };

  // 카카오톡 공유 기능
  const shareToKakao = () => {
    const kakaoLink = `https://your-site.com`;  // 공유할 사이트 링크 입력
    window.open(`https://sharer.kakao.com/talk/friends/picker/link?url=${kakaoLink}`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* 파란색 네모칸에 하얀 글씨 버튼 */}
      <button
        onClick={buttonText === '광고보고 전생보기' ? handleAdClick : handleRandomPopup}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        {buttonText}
      </button>

      {/* 랜덤 이미지 팝업 */}
      {randomImage && (
        <div
          style={{
            width: '85.60mm',  // 신용카드 크기 (폭)
            height: '53.98mm', // 신용카드 크기 (높이)
            margin: '20px auto',
            border: '1px solid black',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={randomImage} alt="랜덤 이미지" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
      )}

      {/* 친구에게 공유하기 버튼 */}
      <button
        onClick={shareToKakao}
        style={{
          backgroundColor: 'yellow',
          color: 'black',
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        친구에게 공유하기
      </button>
    </div>
  );
}
