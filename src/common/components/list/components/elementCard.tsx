import DropDownIcon from "@mui/icons-material/ArrowDropDownCircle";
import DropUpIcon from "@mui/icons-material/ArrowDropUpOutlined";

import { Card, CardContent, Grid, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { ListElementPops, ListElementState } from "../data";

const ShownContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const ShownDetails = styled.div`
  display: flex;
  gap: 20px;
`;

export const ElementCard = <T extends Record<string, any>>({
  ElementExtension,
  data,
  ShownActionButtons,
}: ListElementPops<T>): React.ReactElement => {
  const { imageUrl, header, secondHeader, description } = data;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <ShownContent>
          <ShownDetails>
            {imageUrl && (
              <img
                src={imageUrl}
                alt={header}
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            )}
            <div>
              <Typography variant="h6">{header}</Typography>
              {secondHeader && (
                <Typography variant="body2">{secondHeader}</Typography>
              )}
            </div>
          </ShownDetails>
          {!!ShownActionButtons ? (
            <ShownActionButtons data={data.additionalData} />
          ) : (
            <button onClick={handleExpandClick} style={{ color: "#1a80e6" }}>
              {expanded ? (
                <DropUpIcon fontSize="large" />
              ) : (
                <DropDownIcon fontSize="large" />
              )}
            </button>
          )}
        </ShownContent>

        {expanded && (
          <div style={{ marginTop: "16px" }}>
            <Typography variant="body2">{description}</Typography>
            {ElementExtension && (
              <ElementExtension data={data.additionalData} />
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
