import { create } from 'zustand'



interface Search{
    topic: string,
} 

interface SearchState {
    search: Search
    setSearch: (search: Search) => void
}

export const useSearchState = create<SearchState>((set) => ({
    search: {
        topic: "",
    },
    setSearch: (search: Search) => set({search}),
}))


