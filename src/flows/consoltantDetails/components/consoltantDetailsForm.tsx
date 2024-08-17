// src/components/UserForm.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Autocomplete,
  Button,
  Checkbox,
  MenuItem,
  TextField,
} from "@mui/material";
import {
  languages as allLanguages,
  countries,
  genders,
  teacherValidationProps,
} from "events-tomeroko3";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useAuthStore } from "../../../common/data/authStore";
import { fetchHookFactory } from "../../../common/hooks/fetch/useFetch";

// Define Zod schema
const {
  aboutMe,
  age,
  country,
  gender,
  languages,
  lastName,
  profilePictureUrl,
} = teacherValidationProps;
const schema = z.object({
  aboutMe,
  age: z.string(),
  country,
  gender,
  languages,
  profilePictureUrl,
});
const languageOptions = Object.values(allLanguages);

// Define form data type based on the Zod schema
type FormData = z.infer<typeof schema>;

const useFetchbecomeConsultant = fetchHookFactory("BECOME_TEACHER");

export const ConsoltantDetailsForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { fetch: fetchbecomeConsultant } = useFetchbecomeConsultant();
  const { ID, email, firstName, lastName } = useAuthStore()?.data?.user || {};

  const onSubmit = async (data: FormData) => {
    await fetchbecomeConsultant({
      aboutMe: data.aboutMe,
      age: Number(data.age),
      country: data.country,
      gender: data.gender,
      languages: data.languages,
      profilePictureUrl: data.profilePictureUrl,
      userID: ID as string,
      email: email as string,
      firstName: firstName as string,
      lastName: lastName as string,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="age"
        control={control}
        defaultValue={"0"}
        render={({ field }) => (
          <TextField
            {...field}
            label="Age"
            variant="outlined"
            type="string"
            error={!!errors.age}
            helperText={errors.age?.message}
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Gender"
            variant="outlined"
            error={!!errors.gender}
            helperText={errors.gender?.message}
            fullWidth
            margin="normal"
          >
            {Object.values(genders).map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Controller
        name="languages"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <Autocomplete
            multiple
            options={languageOptions}
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option}
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Languages"
                placeholder="Select languages"
              />
            )}
            value={field.value}
            onChange={(_, data) => field.onChange(data)}
          />
        )}
      />
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Country"
            variant="outlined"
            error={!!errors.country}
            helperText={errors.country?.message}
            fullWidth
            margin="normal"
          >
            {Object.values(countries).map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Controller
        name="profilePictureUrl"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Profile Picture URL"
            variant="outlined"
            error={!!errors.profilePictureUrl}
            helperText={errors.profilePictureUrl?.message}
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name="aboutMe"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="About Me"
            variant="outlined"
            multiline
            rows={4}
            error={!!errors.aboutMe}
            helperText={errors.aboutMe?.message}
            fullWidth
            margin="normal"
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Submit
      </Button>
    </form>
  );
};
