import ArticleGrid from "../components/articles/ArticleGrid";
import type { Article } from "../types/article";

const SAMPLE_ARTICLES: Article[] = [
  {
    id: "1",
    title: "25 Best & Fun Things to Do in Huntersville (NC)",
    image: "https://thetouristchecklist.com/wp-content/uploads/2023/01/Historic-Rural-Hill.jpg",
    link: "https://thetouristchecklist.com/things-to-do-in-huntersville-nc/",
    // category: "Sustainability",
  },
  {
    id: "2",
    title: "25 Best & Fun Things to Do in League City (TX)",
    image: "https://thetouristchecklist.com/wp-content/uploads/2023/02/Glorys-Paintball.jpg",
    link: "https://thetouristchecklist.com/things-to-do-in-league-city-tx/",
    // category: "Retail",
  },
  // One of the link was down, hence i commented it out
  {
    id: "3",
    title: "25 Best & Fun Things to Do in Lee’s Summit (MO)",
    image: "https://thetouristchecklist.com/wp-content/uploads/2023/02/Blue-Springs-Lake.jpg",
    link: "https://thetouristchecklist.com/fun-things-to-do-in-lees-summit-mo/",
    // category: "Operations",
  },
  {
    id: "4",
    title: "23 Best & Fun Things to Do in Plant City (FL)",
    image: "https://thetouristchecklist.com/wp-content/uploads/2023/02/Dinosaur-World.jpg",
    link: "https://thetouristchecklist.com/fun-things-to-do-in-plant-city-fl",
    // category: "Content",
  },
  {
    id: "5",
    title: "15 Best Bowling Centers in Charlotte, NC",
    image: "https://thetouristchecklist.com/wp-content/uploads/2023/05/AMF-University-Lanes.jpg",
    link: "https://thetouristchecklist.com/best-bowling-centers-in-charlotte-nc/",
    // category: "Brand",
  },
  {
    id: "6",
    title: "25 Best & Fun Things to Do in Olathe (KS)",
    image: "https://thetouristchecklist.com/wp-content/uploads/2023/03/Lake-Olathe.jpg",
    link: "https://thetouristchecklist.com/fun-things-to-do-in-olathe-ks/",
    // category: "Technology",
  },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default function CompanyArticlesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* ── Page header ─────────────────────────────────────────────── */}
      <header className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
          {/* Eyebrow */}
          <span className="inline-block text-amber-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Acme Publishing · Insights
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-2xl">
            Stories that move{" "}
            <em className="not-italic text-amber-400">industries</em> forward
          </h1>

          <p className="mt-5 text-stone-400 text-base md:text-lg max-w-xl leading-relaxed">
            In-depth reporting, brand strategy, and cultural analysis for teams
            building the next chapter of commerce.
          </p>
        </div>

        {/* Thin accent bar */}
        <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500" />
      </header>

      {/* ── Articles section ─────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-5 py-14 md:py-20">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px flex-1 bg-stone-200" aria-hidden="true" />
          <p className="text-stone-400 text-sm font-medium uppercase tracking-widest whitespace-nowrap">
            Latest Articles
          </p>
          <span className="h-px flex-1 bg-stone-200" aria-hidden="true" />
        </div>

        <ArticleGrid articles={SAMPLE_ARTICLES} />
      </main>

    </div>
  );
}