import { create } from "zustand";
import { ListElementState } from "../../../common/components/list/data";

interface Consultant {
  ID: number;
  name: string;
  email: string;
  imageUrl: string;
}

interface Topic {
  ID: number;
  name: string;
  description: string;
  hourlyRate: number;
}

interface Client {
  ID: number;
  name: string;
  email: string;
}

export interface Meeting {
  ID: number;
  roomID: number;
  consultant: Consultant;
  topic: Topic;
  additionalClients: Client[];
  date: number;
}

export interface NextMeetings {
  data: Meeting[];
}

interface NextMeetingsState {
  nextMeetings: NextMeetings;
  setNextMeetings: (nextMeetings: NextMeetings) => void;
}

export const useNextMeetingsState = create<NextMeetingsState>((set) => ({
  nextMeetings: {
    data: [],
  },
  setNextMeetings: (nextMeetings: NextMeetings) => set({ nextMeetings }),
}));

export const convertMeetingToListDetails = (
  meetings: NextMeetings
): ListElementState<Meeting>[] => {
  const data = meetings.data.map((meeting) => {
    const { topic, consultant, date } = meeting;
    const result = {
      description: topic.description,
      header: topic.name,
      secondHeader: `${consultant.name}: ${date}`,
      imageUrl: consultant.imageUrl,
      additionalData: meeting,
    };
    return result;
  });
  return data;
};
