import styled from "styled-components";
import { SearchResults } from "../components/searchResults";
import { SearchForm } from "../components/searchForm";
import { FilterSideBar } from "../components/filtersSideBar";
import { useEffect } from "react";
import { useSearchState } from "../data/serchState";
import { mockLandingSearchResults } from "../mock/mockResults";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: 100vh;
  max-height: 100%;
  box-sizing: border-box;
  padding-top: 3.5vh;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 400px;
  flex: 1;
`;

const FiltersAndResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  flex: 10;
`;

const FiltersContainer = styled.div`
  flex: 1;
`;

const ResultsContainer = styled.div`
  max-height: 100%;
  overflow-y: scroll;
  flex: 5;
`;

export const SearchPage = () => {
  const { setSearchResults } = useSearchState();
  useEffect(() => {
    setSearchResults({
      isLoading: false,
      topicSummerys: mockLandingSearchResults,
    });
  }, []);

  return (
    <PageContainer>
      <SearchContainer>
        <SearchForm />
      </SearchContainer>
      <FiltersAndResultsContainer>
        <FiltersContainer>
          <FilterSideBar />
        </FiltersContainer>
        <ResultsContainer>
          <SearchResults />
        </ResultsContainer>
      </FiltersAndResultsContainer>
    </PageContainer>
  );
};
