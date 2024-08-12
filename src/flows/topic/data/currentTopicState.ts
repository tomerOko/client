import { create } from "zustand";

export interface TopicAvailabilityBlock {
  dateOfStart: number;
  dateOfEnd: number;
}

export interface TopicRatings {
  averageRating: number;
  examples: {
    rating: number;
    comment: string;
  }[];
}

export interface TopicMetaData {
  ID: string;
  name: string;
  extendedDescription: string;
  hourlyRate?: number;
  minimalMinutes?: number;
  teacher: {
    ID: string;
    email: string;
    firstName: string;
    lastName: string;
    description: string;
  };
}

export interface CurrentTopicState {
  availability: TopicAvailabilityBlock[];
  setAvailability: (availability: TopicAvailabilityBlock[]) => void;
  ratings: TopicRatings;
  setRatings: (ratings: TopicRatings) => void;
  metaData: TopicMetaData;
  setMetaData: (metaData: TopicMetaData) => void;
}

export const useCurrentTopicState = create<CurrentTopicState>((set) => ({
  availability: [],
  setAvailability: (availability: TopicAvailabilityBlock[]) =>
    set({ availability }),
  ratings: {
    averageRating: 0,
    examples: [],
  },
  setRatings: (ratings: TopicRatings) => set({ ratings }),
  metaData: {
    ID: "",
    name: "",
    extendedDescription: "",
    teacher: {
      ID: "",
      email: "",
      firstName: "",
      lastName: "",
      description: "",
    },
  },
  setMetaData: (metaData: TopicMetaData) => set({ metaData }),
}));
