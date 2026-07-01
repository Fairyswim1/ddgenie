import { linkCards, projectSections } from "../data/siteContent.js";

export default function ProjectCards() {
  return (
    <section className="library-section" aria-label="프로젝트 링크">
      <div className="library-header">
        <div>
          <h1>전체 프로젝트 라이브러리</h1>
          <p>총 {linkCards.length}개의 사이트와 활용 자료입니다.</p>
        </div>
      </div>

      <div className="section-stack">
        {projectSections.map((section, index) => (
          <section className="project-group" key={section.title} aria-labelledby={`project-section-${index}`}>
            <div className="project-group-header">
              <span className="section-number">{index + 1}</span>
              <div>
                <h2 id={`project-section-${index}`}>{section.title}</h2>
                <p>{section.subtitle}</p>
              </div>
            </div>

            <div className="project-grid">
              {section.cards.map((project) => (
                <ProjectCard project={project} key={project.title} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function buildJoinUrl(baseUrl, pin) {
  const url = new URL(baseUrl);
  url.searchParams.set("pin", pin);
  url.searchParams.set("nickname", "학생");
  url.searchParams.set("autoJoin", "1");
  return url.toString();
}

function ProjectCard({ project }) {
  const hasPins = project.pins?.length > 0;

  return (
    <article className={`project-card ${project.type}`}>
      <a className="project-card-link" href={project.url} target="_blank" rel="noreferrer">
        <div className="project-thumb">
          <img src={project.image} alt={project.imageAlt} />
          <span className="thumb-badge">{project.label}</span>
        </div>
        <div className="project-body">
          <div className="card-meta">
            <span>{project.group}</span>
            <span>{project.label}</span>
          </div>
          <h3>{project.title}</h3>
          {!hasPins && project.note && <p className="card-note">{project.note}</p>}
          <div className="card-footer">
            <span>Genie</span>
            <strong>열기 →</strong>
          </div>
        </div>
      </a>
      {hasPins && (
        <p className="card-note card-note-pins">
          {project.note}{" "}
          {project.pins.map((pin, index) => (
            <span key={pin}>
              {index > 0 && ", "}
              <a
                className="pin-link"
                href={buildJoinUrl(project.url, pin)}
                target="_blank"
                rel="noreferrer"
              >
                {pin}
              </a>
            </span>
          ))}
        </p>
      )}
    </article>
  );
}
