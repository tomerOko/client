import { Button, TextField } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useSearchState } from '../data/searchResultsState';
import { useSearchResultsState } from '../data/serchState';
import { mockSearchResults } from '../mock/results';

export const SearchForm:FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setSearch} = useSearchState()
  const { setSearchResults } = useSearchResultsState()  


  const onSubmit = async (data: any) => {
    console.log(data);
    setSearch({
      topic: data.search,
    })
    //get search results from api
    setSearchResults({
      topicSummerys: [],
      isLoading: true
    })
    await new Promise(resolve => setTimeout(resolve, 500));
    setSearchResults({
      topicSummerys: mockSearchResults,
      isLoading: false
    })
  };

    return (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h3>Find the right person with the right knowledge </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        
          <TextField
            {...register("topic", { required: true })}
            label="Topic"
            fullWidth
            error={!!errors.topic}
            helperText={errors.topic ? "Topic is required" : ""}
            margin="normal"
          />
          

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Search
          </Button>
        </form>
      </div>
    );
  };



