export const heroContent = {
  title: "Genie",
  subtitle: "AI 활용 교수학습 프로젝트 라이브러리",
  profile: ["인천과학예술영재학교", "이현진", "수학"],
};

export const linkCards = [
  {
    title: "DD Class 교사용",
    label: "Teacher",
    group: "DD Class",
    type: "main",
    url: "https://ddclass.vercel.app/",
    image: "/screenshots/ddclass-teacher.png",
    imageAlt: "DD Class teacher site screenshot",
  },
  {
    title: "DD Class 학생용",
    label: "Student",
    group: "DD Class",
    type: "student",
    url: "https://ddclass.vercel.app/join",
    image: "/screenshots/ddclass-student.png",
    imageAlt: "DD Class student site screenshot",
  },
  {
    title: "수업 꾸러미 만들기",
    label: "Video",
    group: "DD Class",
    type: "video",
    url: "https://youtu.be/-wknt13lCl4",
    image: "/screenshots/ddclass-video-create.png",
    imageAlt: "DD Class lesson package creation video screenshot",
  },
  {
    title: "수업 꾸러미 실행",
    label: "Video",
    group: "DD Class",
    type: "video",
    url: "https://youtu.be/RmPrMf1lwYc",
    image: "/screenshots/ddclass-video-run.png",
    imageAlt: "DD Class lesson package run video screenshot",
  },
  {
    title: "Genie Class 교사용",
    label: "Teacher",
    group: "Genie Class",
    type: "genie",
    url: "https://genieclass.vercel.app/teacher-portal",
    image: "/screenshots/genieclass-teacher.png",
    imageAlt: "Genie Class teacher site screenshot",
  },
  {
    title: "Genie Class 학생용",
    label: "Student",
    group: "Genie Class",
    type: "genie",
    url: "https://genieclass.vercel.app/",
    image: "/screenshots/genieclass-student.png",
    imageAlt: "Genie Class student site screenshot",
  },
  {
    title: "넘버 트레일",
    label: "Math Game",
    group: "수학게임",
    type: "game",
    url: "https://forest-zeta-umber.vercel.app/",
    image: "/screenshots/math-game.png",
    imageAlt: "Number Trail math game screenshot",
  },
  {
    title: "시뮬레이터 수행평가",
    label: "Simulation",
    group: "학생 작품",
    type: "simulator",
    url: "https://simul-xi.vercel.app/",
    image: "/screenshots/simulator-gallery.png",
    imageAlt: "Math simulator gallery screenshot",
  },
];

export const projectSections = [
  {
    title: "DD Class",
    subtitle: "수업 꾸러미 제작·실행과 학생 참여를 확인할 수 있습니다.",
    cards: linkCards.slice(0, 4),
  },
  {
    title: "Genie Class",
    subtitle: "발표 기록과 관찰 메모를 남기는 교사용·학생용 사이트입니다.",
    cards: linkCards.slice(4, 6),
  },
  {
    title: "번외",
    subtitle: "수학 게임과 학생 시뮬레이터 수행평가 갤러리입니다.",
    cards: linkCards.slice(6),
  },
];
