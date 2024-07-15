import { CurrentTopic } from "../data/currentTopicState";

export const currentTopicMock: CurrentTopic["data"]= {
  teacher: {
    firstName: "John",
    lastName: "Doe",
    description: "Experienced mathematics teacher with over 10 years of teaching experience."
  },
  topic: {
    extendedDescription: "This topic covers advanced calculus concepts.",
    hourlyRate: 50,
    minimalMinutes: 30
  },
  ratings: {
    averageRating: 4.5,
    examples: [
      {
        rating: 5,
        comment: "Great teacher!"
      },
      {
        rating: 4,
        comment: "Very helpful, but a bit fast-paced."
      }
    ]
  },
  availability: [
    { fromTime: 9, toTime: 12, day: 0 },
    { fromTime: 13, toTime: 16, day: 0 },
  ]
}
  