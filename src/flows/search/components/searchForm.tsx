import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useSearchState } from "../data/serchState";
import { mockSearchResults } from "../mock/mockResults";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SearchForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setSearch } = useSearchState();
  const { setSearchResults } = useSearchState();

  const onSubmit = async (data: any) => {
    setSearchResults({
      topicSummerys: [],
      isLoading: true,
    });
    setSearch({
      input: data.search,
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSearchResults({
      topicSummerys: mockSearchResults,
      isLoading: false,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "15px" }}>
      <FormContainer>
        <TextField
          {...register("topic", { required: true })}
          label="Topic"
          fullWidth
          error={!!errors.topic}
          helperText={errors.topic ? "Topic is required" : ""}
          margin="normal"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "8px" }}
        >
          <SearchIcon style={{ height: "44px" }} />
        </Button>
      </FormContainer>
    </form>
  );
};
