import "./author.css";
import AuthorList from "./components/AuthorList";

export default function AuthorClient() {
  return (
    <div className="author-listing-page container">
      <div className="max-w-[800px] py-5 md:py-10 mx-auto">
        <div className="flex flex-col space-y-5 md:space-y-10">
          <h1 className="text-2xl md:text-5xl font-bold font-lexend">
            Danh sách tác giả
          </h1>
          <AuthorList />
        </div>
      </div>
    </div>
  );
}
