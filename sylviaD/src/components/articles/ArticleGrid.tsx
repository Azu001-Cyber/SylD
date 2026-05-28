import ArticleCard from "./ArticleCard";
import type { ArticleGridProps } from "../../types/article";

export default function ArticleGrid({ articles, className = "" }: ArticleGridProps) {
  if (!articles.length) {
    return (
      <p className="text-center text-stone-400 py-20 font-serif text-lg italic">
        No articles available.
      </p>
    );
  }

  return (
    <section
      aria-label="Article grid"
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 ${className}`}
    >
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          image={article.image}
          link={article.link}
        //   category={article.category}
        //   excerpt={article.excerpt}
        />
      ))}
    </section>
  );
}