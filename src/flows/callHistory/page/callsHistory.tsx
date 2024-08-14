import React, { useEffect, useMemo, useState } from "react";
import List from "../../../common/components/list";
import {
  convertCallHistoryToListDetails,
  PastCall,
  useCallHistoryState,
} from "../data/callsHistoryState";
import { myTopicsMock } from "../mock/callsHistoryMock";
import { Box, Button, Modal } from "@mui/material";

const EditFormModalButton: React.FC<{ data: PastCall }> = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={handleEditClick}>actions</Button>
      {showModal && (
        <Modal open={showModal} onClose={handleCloseModal} component="div">
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            Actins Form
          </Box>
        </Modal>
      )}
    </>
  );
};

export const CallsHistoryPage: React.FC = () => {
  const { callHistory, setCallHistory } = useCallHistoryState();

  useEffect(() => {
    setCallHistory(myTopicsMock);
  }, [setCallHistory]);

  const listData = useMemo(() => {
    const result = convertCallHistoryToListDetails(callHistory);
    return result;
  }, [callHistory, convertCallHistoryToListDetails]);

  return (
    <List
      data={listData}
      header="Calls History"
      ActionButtons={EditFormModalButton}
    />
  );
};
