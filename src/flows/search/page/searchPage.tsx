import { SearchForm } from "../components/searchForm";
import { SearchResults } from "../components/searchResults";


export const SearchPage = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <SearchForm />
        <SearchResults />
      </div>
    </div>
  );

}