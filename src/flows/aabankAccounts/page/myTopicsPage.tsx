import React, { useEffect, useMemo, useState } from "react";
import List from "../../../common/components/list";
import {
  convertMyTopicsToListDetails,
  BankAccount,
  useMyTopicsState,
} from "../data/bankAccountsState";
import { myTopicsMock } from "../mock/myTopicsMock";
import MyTopicForm from "../components/myTopicForm";
import { Box, Button, Modal } from "@mui/material";

const EditFormModalButton: React.FC<{ data: BankAccount }> = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={handleEditClick}>Edit</Button>
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
            <MyTopicForm onClose={handleCloseModal} />
          </Box>
        </Modal>
      )}
    </>
  );
};

export const MyTopicsPage: React.FC = () => {
  const { myTopics, setMyTopics } = useMyTopicsState();

  useEffect(() => {
    setMyTopics(myTopicsMock);
  }, [setMyTopics]);

  const listData = useMemo(() => {
    const result = convertMyTopicsToListDetails(myTopics);
    return result;
  }, [myTopics, convertMyTopicsToListDetails]);

  return (
    <List
      data={listData}
      header="My Topics"
      NewElementForm={MyTopicForm}
      ActionButtons={EditFormModalButton}
    />
  );
};
