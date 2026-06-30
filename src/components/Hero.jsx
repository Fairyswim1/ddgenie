import { heroContent } from "../data/siteContent.js";

export default function Hero() {
  return (
    <header className="site-header" aria-label="Genie project header">
      <div className="brand-logo">
        <span className="logo-icon">☁️</span>
        <div className="logo-text">
          <span className="logo-main">{heroContent.title}</span>
          <span className="logo-sub">Class</span>
        </div>
      </div>

      <div className="header-actions" aria-label="팀 정보">
        <span className="header-pill blue">프로젝트 모음</span>
        <span className="header-pill orange">교사 AI활용 챌린지</span>
        <div className="teacher-card">
          {heroContent.profile.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
