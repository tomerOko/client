// src/pages/NextMeetings.tsx
import React, { useEffect, useState } from "react";
import { Container, Grid, Pagination } from "@mui/material";
import { MeetingCard } from "../components/meetingCard";
import { useNextMeetingsState } from "../data/nextMeetingsState";
import { mockNextMeetings } from "../mock/mockNextMeetings";

const NextMeetings: React.FC = () => {
  const { setNextMeetings, nextMeetings } = useNextMeetingsState();
  const [page, setPage] = useState(1);
  const meetingsPerPage = 4;

  //load data from API
  useEffect(() => {
    // fetch("https://api.example.com/meetings")
    //   .then((response) => response.json())
    //   .then((data) => setNextMeetings(data));
    setNextMeetings({ data: mockNextMeetings });
  }, [setNextMeetings]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedMeetings = nextMeetings.data.slice(
    (page - 1) * meetingsPerPage,
    page * meetingsPerPage
  );

  return (
    <Container>
      <Grid container spacing={3}>
        {paginatedMeetings.map((meeting) => (
          <Grid item xs={12} key={meeting.ID}>
            <MeetingCard meeting={meeting} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(nextMeetings.data.length / meetingsPerPage)}
        page={page}
        onChange={handleChange}
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      />
    </Container>
  );
};

export default NextMeetings;
