# Genie Project Hub

「교사 AI활용 교수학습 협력설계 챌린지」 사전 심사용 프로젝트 모음 페이지입니다.
React + Vite 기반이며, DD Class의 크림색 배경과 둥근 라이브러리 카드 스타일을 참고해 구성했습니다.

## 구조

- `src/App.jsx`: 섹션 조합
- `src/components/Hero.jsx`: 상단 헤더
- `src/components/ProjectCards.jsx`: 프로젝트 링크 카드 섹션
- `src/data/siteContent.js`: 텍스트와 이미지 URL
- `src/styles.css`: 전체 스타일과 반응형 CSS

카드 정보를 수정하려면 `src/data/siteContent.js`의 `linkCards` 배열을 바꾸면 됩니다.
썸네일 이미지는 `public/screenshots/`에 저장되어 있습니다.

## 포함된 링크

- DD Class 교사용 사이트: https://ddclass.vercel.app/
- DD Class 학생용 사이트: https://ddclass.vercel.app/join
- DD Class 수업 꾸러미 제작 영상: https://youtu.be/-wknt13lCl4
- DD Class 수업 꾸러미 실행 영상: https://youtu.be/RmPrMf1lwYc
- Genie Class 교사용 사이트: https://genieclass.vercel.app/teacher-portal
- Genie Class 학생용 사이트: https://genieclass.vercel.app/
- 수학게임: https://forest-zeta-umber.vercel.app/
- 시뮬레이터 수행평가: https://simul-xi.vercel.app/

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```
