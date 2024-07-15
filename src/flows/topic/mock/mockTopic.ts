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
  availability:  [
      { dateOfStart: new Date('2024-07-15T08:00:00').getTime(), dateOfEnd: new Date('2024-07-15T10:30:00').getTime() },
      { dateOfStart: new Date('2024-07-16T14:00:00').getTime(), dateOfEnd: new Date('2024-07-16T15:00:00').getTime() },
  ]
}
  