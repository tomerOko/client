// src/components/UserForm.tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Autocomplete,
} from "@mui/material";
import * as z from "zod";
import {
  languages,
  genders,
  countries,
  teacherValidationProps,
} from "events-tomeroko3";

// Define enums for genders, languages, and countries

// Define Zod schema
const schema = z.object(teacherValidationProps);
const languageOptions = Object.values(languages);

// Define form data type based on the Zod schema
type FormData = z.infer<typeof schema>;

export const BecomeTeacherForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            margin="normal"
          />
        )}
      />
      <Controller
        name="age"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <TextField
            {...field}
            label="Age"
            variant="outlined"
            type="number"
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
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
