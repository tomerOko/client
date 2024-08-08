import styled from "@emotion/styled";
import { Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import { MainColumn, Page } from "../../styledComponents";
import { ElementCard } from "./components/elementCard";
import { ListProps } from "./data";

const ListMainColumn = styled(MainColumn)`
  max-width: 900px;
  max-height: 90vh;
  justify-content: space-between;
`;

const ListMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 70px;
`;

export const List = <T extends Record<string, any>>({
  ElementExtension,
  data,
  ActionButtons,
}: ListProps<T>): React.ReactElement => {
  const [page, setPage] = useState(1);
  const elementsPerPage = 5;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedElements = data.slice(
    (page - 1) * elementsPerPage,
    page * elementsPerPage
  );

  return (
    <Page>
      <ListMainColumn>
        <ListMainContent>
          {paginatedElements.map((data, index) => (
            <Grid item xs={12} key={index}>
              <ElementCard
                data={data}
                ElementExtension={ElementExtension}
                ActionButtons={ActionButtons}
              />
            </Grid>
          ))}
        </ListMainContent>
        <Pagination
          count={Math.ceil(data.length / elementsPerPage)}
          page={page}
          onChange={handleChange}
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </ListMainColumn>
    </Page>
  );
};

export default List;
