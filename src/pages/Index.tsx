import { useState } from "react";
import PptxGenJS from "pptxgenjs";

const IMG_BOOK = "https://cdn.poehali.dev/projects/44509c7e-5214-44d3-8a48-f350dde7faa3/files/5f454a97-ae67-4f95-a9a0-f1d0b62f6d19.jpg";
const IMG_PLAY = "https://cdn.poehali.dev/projects/44509c7e-5214-44d3-8a48-f350dde7faa3/files/cda330c2-c162-4c94-bd3a-db31e6f09bc4.jpg";
const IMG_HANDS = "https://cdn.poehali.dev/projects/44509c7e-5214-44d3-8a48-f350dde7faa3/files/d1bc97d3-b199-404d-bc60-6d6ff01fc121.jpg";

interface Slide {
  id: number;
  tag: string;
  title: string;
  subtitle?: string;
  text?: string;
  facts?: string[];
  image?: string;
  imagePosition?: string;
  accent: string;
  bg: string;
  isEnd?: boolean;
}

const slides: Slide[] = [
  {
    id: 0,
    tag: "",
    title: "Права ребёнка\nв современном\nобществе",
    subtitle: "Каждый ребёнок рождается со своими правами",
    image: IMG_HANDS,
    imagePosition: "right",
    accent: "#2D6A4F",
    bg: "#F8F6F1",
  },
  {
    id: 1,
    tag: "01 — Основа",
    title: "Конвенция ООН о правах ребёнка",
    text: "Принята в 1989 году и ратифицирована 196 странами мира. Это главный международный документ, защищающий интересы каждого ребёнка на планете.",
    facts: ["196 государств подписали конвенцию", "54 статьи о правах и свободах", "Дети до 18 лет под защитой закона"],
    accent: "#1D3557",
    bg: "#FFFFFF",
  },
  {
    id: 2,
    tag: "02 — Жизнь",
    title: "Право на жизнь\nи здоровье",
    text: "Каждый ребёнок имеет неотъемлемое право на жизнь. Государство обязано обеспечить медицинскую помощь, вакцинацию и условия для полноценного развития.",
    facts: ["Бесплатная медицина для детей", "Право на питание и кров", "Защита от опасных условий"],
    image: IMG_HANDS,
    imagePosition: "left",
    accent: "#2D6A4F",
    bg: "#F0F7F4",
  },
  {
    id: 3,
    tag: "03 — Знания",
    title: "Право на образование",
    text: "Образование — это фундамент будущего. Каждый ребёнок вправе получать знания, развивать таланты и раскрывать свой потенциал в безопасной среде.",
    facts: ["Бесплатное начальное образование", "Доступ к информации и культуре", "Защита от дискриминации в школе"],
    image: IMG_BOOK,
    imagePosition: "right",
    accent: "#5C4033",
    bg: "#FDF8F3",
  },
  {
    id: 4,
    tag: "04 — Игра",
    title: "Право на отдых\nи игру",
    text: "Игра — это не просто развлечение, это способ познавать мир. Дети имеют право на досуг, творчество и участие в культурной жизни общества.",
    facts: ["Время для игры и отдыха", "Участие в культурных мероприятиях", "Безопасные пространства для игр"],
    image: IMG_PLAY,
    imagePosition: "left",
    accent: "#7B5EA7",
    bg: "#F8F5FC",
  },
  {
    id: 5,
    tag: "05 — Семья",
    title: "Право на семью",
    text: "Семья — первая среда для развития ребёнка. Дети имеют право знать своих родителей, получать заботу и не разлучаться с близкими без веских оснований.",
    facts: ["Право знать своих родителей", "Защита семейных связей", "Поддержка при разлучении"],
    accent: "#D4601A",
    bg: "#FEF9F5",
  },
  {
    id: 6,
    tag: "06 — Защита",
    title: "Право на защиту\nот насилия",
    text: "Государство и общество обязаны защищать детей от любых форм жестокого обращения, эксплуатации и пренебрежения — дома, в школе и в интернете.",
    facts: ["Защита от физического насилия", "Запрет детского труда", "Безопасность в цифровой среде"],
    accent: "#C0392B",
    bg: "#FFF5F5",
  },
  {
    id: 7,
    tag: "07 — Голос",
    title: "Право голоса\nи участия",
    text: "Дети — не просто объекты защиты, они активные участники общества. Их мнение должно учитываться в вопросах, которые непосредственно их касаются.",
    facts: ["Свобода выражения мнений", "Участие в принятии решений", "Право на информацию"],
    accent: "#1D3557",
    bg: "#F5F7FA",
  },
  {
    id: 8,
    tag: "08 — Сеть",
    title: "Цифровые права\nребёнка",
    text: "В эпоху интернета появляются новые вызовы. Дети имеют право на безопасное использование цифровых технологий и защиту персональных данных.",
    facts: ["Защита от онлайн-угроз", "Конфиденциальность данных", "Цифровая грамотность"],
    accent: "#0077B6",
    bg: "#F0F8FF",
  },
  {
    id: 9,
    tag: "",
    title: "Защита детства —\nответственность\nкаждого",
    subtitle: "Права ребёнка начинаются с осознания каждым взрослым своей роли в жизни детей",
    image: IMG_PLAY,
    imagePosition: "right",
    accent: "#2D6A4F",
    bg: "#F8F6F1",
    isEnd: true,
  },
];

function SlideHero({ slide }: { slide: Slide }) {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden" style={{ backgroundColor: slide.bg }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, #000 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />
      <div className="relative z-10 flex w-full h-full">
        <div className="flex flex-col justify-center px-16 lg:px-24 py-16 flex-1">
          {slide.tag && (
            <span className="font-['Golos_Text'] text-xs tracking-[0.2em] uppercase mb-8 opacity-40" style={{ color: slide.accent }}>
              {slide.tag}
            </span>
          )}
          <h1
            className="font-['Cormorant'] font-light leading-[1.05] mb-8"
            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", color: "#1a1a1a", whiteSpace: "pre-line" }}
          >
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="font-['Golos_Text'] font-light text-lg max-w-md leading-relaxed" style={{ color: "#666" }}>
              {slide.subtitle}
            </p>
          )}
          {slide.isEnd && (
            <div className="mt-10 flex items-center gap-3">
              <div className="h-px w-12" style={{ backgroundColor: slide.accent }} />
              <span className="font-['Golos_Text'] text-sm tracking-widest uppercase opacity-50">Конец</span>
            </div>
          )}
        </div>
        {slide.image && (
          <div className="w-2/5 h-full relative overflow-hidden">
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{
              background: `linear-gradient(to right, ${slide.bg} 0%, transparent 30%)`
            }} />
          </div>
        )}
      </div>
    </div>
  );
}

function SlideContent({ slide }: { slide: Slide }) {
  return (
    <div className="relative w-full h-full flex overflow-hidden" style={{ backgroundColor: slide.bg }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, #000 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />
      <div className="relative z-10 flex w-full h-full">
        {slide.imagePosition === "left" && slide.image && (
          <div className="w-2/5 h-full relative overflow-hidden flex-shrink-0">
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{
              background: `linear-gradient(to left, ${slide.bg} 0%, transparent 30%)`
            }} />
          </div>
        )}
        <div className="flex flex-col justify-center px-16 lg:px-20 py-16 flex-1">
          <span className="font-['Golos_Text'] text-xs tracking-[0.2em] uppercase mb-6 opacity-40" style={{ color: slide.accent }}>
            {slide.tag}
          </span>
          <h2
            className="font-['Cormorant'] font-light leading-tight mb-8"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: "#1a1a1a", whiteSpace: "pre-line" }}
          >
            {slide.title}
          </h2>
          {slide.text && (
            <p className="font-['Golos_Text'] font-light text-base leading-relaxed mb-10 max-w-lg" style={{ color: "#555" }}>
              {slide.text}
            </p>
          )}
          <div className="space-y-4">
            {(slide.facts || []).map((fact, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: slide.accent }} />
                <span className="font-['Golos_Text'] text-sm text-gray-600">{fact}</span>
              </div>
            ))}
          </div>
        </div>
        {slide.imagePosition === "right" && slide.image && (
          <div className="w-2/5 h-full relative overflow-hidden flex-shrink-0">
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{
              background: `linear-gradient(to right, ${slide.bg} 0%, transparent 30%)`
            }} />
          </div>
        )}
      </div>
    </div>
  );
}

async function exportToPPTX() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.title = "Права ребёнка в современном обществе";

  const accentMap: string[] = [
    "2D6A4F","1D3557","2D6A4F","5C4033","7B5EA7","D4601A","C0392B","1D3557","0077B6","2D6A4F"
  ];

  for (let i = 0; i < slides.length; i++) {
    const s = slides[i];
    const pSlide = pptx.addSlide();
    pSlide.background = { color: s.bg.replace("#", "") };

    const accent = accentMap[i] || "1D3557";
    const isHero = i === 0 || s.isEnd;

    if (isHero) {
      pSlide.addText(s.title.replace(/\n/g, "\n"), {
        x: 0.5, y: 1.2, w: 7, h: 3,
        fontSize: 44, color: "1a1a1a", fontFace: "Georgia", valign: "top",
      });
      if (s.subtitle) {
        pSlide.addText(s.subtitle, {
          x: 0.5, y: 4.3, w: 6, h: 1, fontSize: 16, color: "777777", fontFace: "Arial",
        });
      }
    } else {
      if (s.tag) {
        pSlide.addText(s.tag, {
          x: 0.5, y: 0.35, w: 5, h: 0.35, fontSize: 9, color: accent, fontFace: "Arial",
        });
      }
      pSlide.addText(s.title.replace(/\n/g, " "), {
        x: 0.5, y: 0.85, w: 6, h: 1.6, fontSize: 34, color: "1a1a1a", fontFace: "Georgia", valign: "top",
      });
      if (s.text) {
        pSlide.addText(s.text, {
          x: 0.5, y: 2.65, w: 6, h: 1.5, fontSize: 13, color: "555555", fontFace: "Arial",
        });
      }
      (s.facts || []).forEach((fact, fi) => {
        pSlide.addText(`• ${fact}`, {
          x: 0.5, y: 4.1 + fi * 0.35, w: 6, h: 0.35, fontSize: 12, color: "555555", fontFace: "Arial",
        });
      });
    }

    if (s.image) {
      pSlide.addImage({ path: s.image, x: 7.0, y: 0, w: 5.8, h: 5.63 });
    }

    pSlide.addText(`${i + 1} / ${slides.length}`, {
      x: 11.5, y: 5.2, w: 1, h: 0.3, fontSize: 9, color: "bbbbbb", fontFace: "Arial", align: "right",
    });
  }

  await pptx.writeFile({ fileName: "Права ребёнка.pptx" });
}

export default function Index() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  const slide = slides[current];
  const isHero = current === 0 || slide.isEnd;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-6xl">
        <div
          className="w-full relative shadow-2xl"
          style={{ aspectRatio: "16/9", borderRadius: "4px", overflow: "hidden" }}
        >
          {isHero ? <SlideHero slide={slide} /> : <SlideContent slide={slide} />}
        </div>

        <div className="flex items-center justify-between mt-6 px-1">
          <button
            onClick={prev}
            disabled={current === 0}
            className="font-['Golos_Text'] text-sm px-6 py-2.5 border border-gray-300 text-gray-600 rounded hover:bg-white hover:border-gray-400 transition-all disabled:opacity-20 disabled:cursor-not-allowed bg-white"
          >
            ← Назад
          </button>

          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? "20px" : "6px",
                    height: "6px",
                    backgroundColor: i === current ? "#1a1a1a" : "#ccc",
                  }}
                />
              ))}
            </div>
            <span className="font-['Golos_Text'] text-xs text-gray-400 ml-2">
              {current + 1} / {slides.length}
            </span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={exportToPPTX}
              className="font-['Golos_Text'] text-sm px-5 py-2.5 border border-gray-300 text-gray-600 rounded hover:bg-white hover:border-gray-400 transition-all bg-white flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Скачать PPTX
            </button>
            <button
              onClick={next}
              disabled={current === slides.length - 1}
              className="font-['Golos_Text'] text-sm px-6 py-2.5 rounded transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#1a1a1a", color: "#fff" }}
            >
              Далее →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
