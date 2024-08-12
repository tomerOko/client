import {
  TopicAvailabilityBlock,
  TopicRatings,
} from "../data/currentTopicState";

export const mockTopicAvalabilities: TopicAvailabilityBlock[] = [
  {
    dateOfStart: new Date("2024-07-15T08:00:00").getTime(),
    dateOfEnd: new Date("2024-07-15T10:30:00").getTime(),
  },
  {
    dateOfStart: new Date("2024-07-16T14:00:00").getTime(),
    dateOfEnd: new Date("2024-07-16T15:00:00").getTime(),
  },
];

export const mockTopicRatings: TopicRatings = {
  averageRating: 4.5,
  examples: [
    {
      rating: 5,
      comment: "Great teacher!",
    },
    {
      rating: 4,
      comment: "Very helpful, but a bit fast-paced.",
    },
  ],
};
