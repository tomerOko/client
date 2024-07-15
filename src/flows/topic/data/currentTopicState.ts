import { create } from 'zustand'

export interface CurrentTopic{
    identifier: {
        teacherEmail: string,
        topicName: string
    },
    data: {
        teacher: {
            firstName: string,
            lastName: string,
            description: string,
        }
        topic: {
            extendedDescription: string,
            hourlyRate: number,
            minimalMinutes: number,
        },
        ratings: {
            averageRating: number,
            examples: {
                rating: number,
                comment: string
            }[]
        },
        availability: {
            fromTime: number,
            toTime: number,
            day: number
        }[]
    }
}

interface CurrentTopicState {
    currentTopic: CurrentTopic
    setCurrentTopic: (currentTopic: CurrentTopic) => void
}

export const useCurrentTopicState = create<CurrentTopicState>((set) => ({
    currentTopic: {
        identifier: {
            teacherEmail: "",
            topicName: ""
            },
            data: {
                teacher: {
                firstName: "",
                lastName: "",
                description: "",
                },
                topic: {
                extendedDescription: "",
                hourlyRate: 0,
                minimalMinutes: 0,
                },
                ratings: {
                averageRating: 0,
                examples: [],
                },
                availability: [],
        },
    },
        
    setCurrentTopic: (currentTopic: CurrentTopic) => set({currentTopic}),
}))


