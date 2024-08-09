import styled from "styled-components";
import { ConsultantGrid } from "../components/ConsultantGrid";
import { SearchForm } from "../components/searchForm";
import { mockLandingConsultants } from "../mockFirstResults";
import { FiltersSideBar } from "../components/FiltersSideBar";

const PageContainer = styled.div``;
const SearchContainer = styled.div``;
const FiltersAndResultsContainer = styled.div``;
const FiltersContainer = styled.div``;
const ResultsContainer = styled.div``;

export const SearchPage = () => {
  return (
    <PageContainer>
      <SearchContainer>
        <SearchForm />
      </SearchContainer>
      <FiltersAndResultsContainer>
        <FiltersContainer>
          <FiltersSideBar
            onFilterChange={(filters) => {
              console.log(filters);
            }}
          />
        </FiltersContainer>
        <ResultsContainer>
          <ConsultantGrid consultants={mockLandingConsultants} />
        </ResultsContainer>
      </FiltersAndResultsContainer>
    </PageContainer>
  );
};
