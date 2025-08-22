import { dataAuthor } from "../data";
import AuthorCard from "./AuthorCard";

export default function AuthorList() {
  return (
    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-10 md:gap-y-6">
      {dataAuthor.map((auth, idx) => (
        <AuthorCard key={idx} author={auth} />
      ))}
    </div>
  );
}
