import "./content.css";
import RelatedArticle from "./components/RelatedArticle";
import InfoAuthor from "./components/InfoAuthor";
import StickyHeader from "./components/StickyHeader";
import ArticleHeader from "./components/ArticleHeader";
import ArticleContent from "./components/ArticleContent";

const articleData = {
  title: "Tổng hợp 6 điều cần biết về kính thực tế ảo bạn nên biết",
  author: {
    name: "Phạm Quốc Toàn",
    avatar:
      "https://i.pinimg.com/736x/7c/e1/15/7ce115ed51c87099717528f35d819f21.jpg",
    profileUrl: "/",
  },
  publishDate: "11:06 04-07-2025",
};

export default function ContentIdClient() {
  return (
    <main className="md:py-10">
      <StickyHeader />
      <div className="max-w-[900px] mx-auto">
        <div className="container mt-3 md:mt-4">
          <div className="flex flex-col space-y-4 md:space-y-6">
            <ArticleHeader
              title={articleData.title}
              author={articleData.author}
              publishDate={articleData.publishDate}
            />
            <ArticleContent />
          </div>
          <div className="mt-5 md:mt-10">
            <RelatedArticle />
          </div>
        </div>
        <InfoAuthor />
      </div>
    </main>
  );
}
