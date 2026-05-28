export interface Article {
  id: string;
  title: string;
  image: string;
  link: string;
//   category?: string;
//   excerpt?: string;
}

export interface ArticleGridProps {
  articles: Article[];
  className?: string;
}

export interface ArticleCardProps {
  title: string;
  image: string;
  link: string;
//   category?: string;
//   excerpt?: string;
}