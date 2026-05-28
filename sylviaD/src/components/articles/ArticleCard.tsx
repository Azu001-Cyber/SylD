import { Link } from "react-router-dom";
import type { ArticleCardProps } from "../../types/article";

export default function ArticleCard({
  title,
  image,
  link,
  // category,
  // excerpt,
}: ArticleCardProps) {
  return (
    <Link
      to={link}
      className="group block rounded-2xl overflow-hidden relative aspect-[4/3] shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
      aria-label={`Read article: ${title}`}
    >
      {/* Background image with zoom on hover */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />

      {/* Dark gradient overlay — darkens slightly on hover */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/80 via-black/30 to-transparent
          transition-opacity duration-300
          group-hover:opacity-90
        "
        aria-hidden="true"
      />

      {/* Faint brand-tinted vignette at top */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-stone-900/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Text content anchored to card bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
        {/* {category && (
          <span
            className="
              self-start text-[11px] font-semibold uppercase tracking-widest
              px-2.5 py-1 rounded-full
              bg-amber-400/90 text-stone-900
              transition-colors duration-300
              group-hover:bg-amber-300
            "
          >
            {category}
          </span>
        )} */}

        <h3
          className="
            font-serif text-white text-lg leading-snug font-medium
            transition-colors duration-300
            group-hover:text-amber-100
            line-clamp-3
          "
        >
          {title}
        </h3>

        {/* {excerpt && (
          <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mt-0.5">
            {excerpt}
          </p>
        )} */}

        {/* Animated read cue */}
        <span
          className="
            mt-1 inline-flex items-center gap-1 text-amber-400 text-xs font-semibold
            opacity-0 -translate-y-1 transition-all duration-300
            group-hover:opacity-100 group-hover:translate-y-0
          "
          aria-hidden="true"
        >
          Read article
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H4a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}