// src/pages/NextMeetings.tsx
import React, { useEffect, useMemo } from "react";
import List from "../../../common/components/list";
import {
  convertMeetingToListDetails,
  useNextMeetingsState,
} from "../data/nextMeetingsState";
import { mockNextMeetings } from "../mock/mockNextMeetings";
import { NextMeetingsElementExtension } from "../components/NextMeetingsElementExtension";

export const UpcomingMeetingsPage: React.FC = () => {
  const { setNextMeetings, nextMeetings } = useNextMeetingsState();

  useEffect(() => {
    setNextMeetings({ data: mockNextMeetings });
  }, [setNextMeetings]);

  const listData = useMemo(() => {
    const result = convertMeetingToListDetails(nextMeetings);
    return result;
  }, [nextMeetings, convertMeetingToListDetails]);

  return (
    <>
      <List
        data={listData}
        ElementExtension={NextMeetingsElementExtension}
        header="Upcoming Meetings"
        hideExpandButton={false}
      />
    </>
  );
};
