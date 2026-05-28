
import ArticleGrid from "../components/articles/ArticleGrid";
import type { Article } from "../types/article";

const SAMPLE_ARTICLES: Article[] = [
  {
    id: "1",
    title: "Don’t Let Hackers Ruin Your Marketing Campaigns",
    image: "",
    link: "https://www.atamgo.com/dont-let-hackers-ruin-your-marketing-campaigns/",
    // category: "Sustainability",
  },
  {
    id: "2",
    title: "Business Travel Mistakes: 5 Things to Avoid to Keep Your Data Safe",
    image: "https://cdn.prod.website-files.com/630d4d1c4a462569dd189855/67abe4f8d1ae95174ae93475_AD_4nXcsBVr2gzFNb_yiZvI0hOBSzkUzN05MtrLcQNLoM59KJ_vny8H5eHh3eJ63TC3W8Ay_kDfJDa7aTeznajBgJXFcrguWCRaHA73hcxsjq6bX5HfLm1YiiJDBx8M85P6NXpSyr5AHVMsPTLWHGByw2g.jpeg",
    link: "https://thetouristchecklist.com/things-to-do-in-league-city-tx/",
    // category: "Retail",
  },
  
  {
    id: "3",
    title: "How to Stay Productive While Working Remotely: A Guide for Digital Nomads",
    image: "",
    link: "https://luxafor.com/how-to-stay-productive-while-working-remotely/",
    // category: "Operations",
  },
  {
    id: "4",
    title: "How To Thrive and Succeed as an Influencer?",
    image: "https://cms.starngage.com/assets/3739f747-005e-4bda-92ab-6e154741f17f?key=landscape",
    link: "https://starngage.com/plus/en-us/blog/how-to-thrive-and-succeed-as-an-influencer",
    // category: "Content",
  },
  {
    id: "5",
    title: "What it Takes to Build a Sustainable Digital Nomad Lifestyle",
    image: "",
    link: "https://www.instagram.com/bbntimesofficial/p/DFdGhKrtJQB/",
    // category: "Brand",
  },
//   linkedin content writing
  {
    id: "6",
    title: "25 Best & Fun Things to Do in Olathe (KS)",
    image: "",
    link: "https://www.linkedin.com/posts/partfinda_everything-big-starts-small-but-theres-activity-7079742222539046912-K_sI?utm_source=share&utm_medium=member_android",
    // category: "Technology",
    
  },
  {
    id: "7",
    title: "15 Best Bowling Centers in Charlotte, NC",
    image: "",
    link: "https://www.linkedin.com/posts/partfinda_leveraging-linkedin-as-a-platform-activity-7080466424216829952-6W6N?utm_source=share&utm_medium=member_android",
    // category: "Brand",
  },
  {
    id: "8 ",
    title: "25 Best & Fun Things to Do in Olathe (KS)",
    image: "",
    link: "https://www.linkedin.com/posts/partfinda_funding-capital-investment-activity-7083370413765910528-4Lgy?utm_source=share&utm_medium=member_android",
    // category: "Technology",
    
  },
];


export default function FreelanceWritingPage(){
    return (
        <div>

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
    )
}