export default function Home() {
  const projects = [
    {
      title: "GEARZ.GG",
      description:
        "전 세계 약 9000개 게이밍 기어 제품에 대한 리뷰와 정보, 프로게이머, 인기 리뷰어 또는 팔로잉하는 유저의 게이밍 기어 세팅 정보를 제공하는 게이밍 기어 리뷰 플랫폼 - MAU 3만 달성",
      tags: [
        "TypeScript",
        "Tailwind",
        "Next.js (App router)",
        "Supabase",
        "aws-sdk",
        "Vercel",
      ],
    },
    {
      title: "TFTPS.GG",
      description:
        "리그 오브 레전드 '전략적 팀 전투(TFT)' 플레이어들을 위해 설계된 플랫폼으로, 메타 분석, 팀 구성 가이드, 유저 전적 검색, 인게임 요소 성능 통계 등의 기능을 제공 - MAU 8만 달성",
      tags: [
        "TypeScript",
        "styled-components",
        "Next.js (Page router)",
        "React Query",
        "Chart.js",
      ],
    },
    {
      title: "인턴십 프로젝트 <br>(LOL 밴픽 시뮬레이터)",
      description:
        "리그 오브 레전드의 팀 전략 수립 단계인 챔피언 선택 및 금지 과정을 실제 인게임과 유사한 멀티플레이 환경에서 시뮬레이션하는 프로젝트",
      tags: [
        "javascript",
        " socket.io",
        "React",
        "express.js",
        "Next.js (Page router) ",
        "Nest.js",
        "mongoDB",
        "docker",
      ],
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "styled-components",
    "Redux",
    "Zustand",
    "React-Query",
    "Chart.js",
    "git",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-slate-800 shadow-md border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-blue-400">HyeSeong</span>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              안녕하세요, 개발자 문혜성입니다
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              프론트엔드 개발자 | UX 엔지니어
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                프로젝트 보기
              </a>
              <a
                href="#contact"
                className="border border-blue-500 text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-900/30 transition-colors"
              >
                연락하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-900 py-20">
        <div className="max-w-8xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                Introduction.
              </h3>
              <p className="text-gray-300">
                UI/UX와 DX 개선을 중심으로 간결하고 이해하기 쉬운 코드를
                지향하며, 적극적인 의견 제시와 협업을 통해 사용자와 개발자
                모두의 경험을 지속적으로 향상시키고자 노력합니다.
                <br />
                나의 코드에 책임감을 갖되 애착을 가지지 않도록 하여 피드백에
                열린 자세를 취합니다.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                Skills.
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700"
              >
                <h3
                  className="text-xl font-semibold mb-2 text-gray-100 break-keep"
                  dangerouslySetInnerHTML={{ __html: project.title }}
                />
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-slate-800 text-gray-300 px-2 py-1 rounded-full text-sm border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Contact
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com"
              className="text-gray-300 hover:text-white transition-colors"
            ></a>
            <a
              href="https://linkedin.com"
              className="text-gray-300 hover:text-white transition-colors"
            ></a>
            <a
              href="mailto:email@example.com"
              className="text-gray-300 hover:text-white transition-colors"
            ></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-400">
            © 2024 문혜성. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
