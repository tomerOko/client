import { create } from 'zustand'

export interface TopicSummery {
    topicName: string;
    teacherName: string;
    teacherEmail: string;
    description: string;
    hourlyRate: number;
    profilePictureUrl: string;
    rating: number;
  }

  
interface SearchResults{
    topicSummerys: TopicSummery[],
    isLoading: boolean,
} 

interface SearchResultsState {
    searchResults: SearchResults
    setSearchResults: (searchResults: SearchResults) => void
}

export const useSearchResultsState = create<SearchResultsState>((set) => ({
    searchResults: {
        topicSummerys: [],
        isLoading: false,
    },
    setSearchResults: (searchResults: SearchResults) => set({searchResults}),
}))


