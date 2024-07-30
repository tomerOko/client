import { ConsultantGrid } from "../components/firstResults/ConsultantGrid";
import { mockLandingConsultants } from "../components/firstResults/mockFirstResults";
import { SearchForm } from "../components/searchForm";
import { SearchResults } from "../components/searchResults";

export const SearchPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <SearchForm />
        <SearchResults />
        <div style={{ width: "80%", margin: "50px auto" }}>
          <ConsultantGrid consultants={mockLandingConsultants} />
        </div>
      </div>
    </div>
  );
};
