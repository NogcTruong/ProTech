import { dataPostAuthor } from "../data";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  visibleCount: number;
}

export default function ArticleList({ visibleCount }: ArticleListProps) {
  const dataProcessed = dataPostAuthor.slice(0, visibleCount);

  return (
    <div className="flex flex-col space-y-6">
      {dataProcessed.map((article, idx) => (
        <ArticleCard key={idx} article={article} />
      ))}
    </div>
  );
}
