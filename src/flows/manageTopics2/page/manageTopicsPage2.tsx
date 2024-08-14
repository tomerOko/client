import React, { useEffect, useMemo, useState } from "react";
import List from "../../../common/components/list";
import {
  convertMyTopicsToListDetails,
  MyTopic,
  useMyTopicsState,
} from "../data/myTopicState";
import { myTopicsMock } from "../mock/managedTopicsMock";
import MyTopicForm from "../components/myTopicForm";
import { Button, Modal } from "@mui/material";

const EditFormModalButton: React.FC<{ data: MyTopic }> = () => {
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
          <MyTopicForm onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export const ManageTopicsPage2: React.FC = () => {
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
