// src/components/UserForm.tsx
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Autocomplete,
  Slider,
} from "@mui/material";
import * as z from "zod";
import {
  languages as allLanguages,
  genders,
  countries,
  teacherValidationProps,
} from "events-tomeroko3";
import { fetchHookFactory } from "../../../common/hooks/fetch/useFetch";
import { useAuthStore } from "../../../common/data/authStore";
import { all } from "axios";

// Define Zod schema
const { country, gender, languages } = teacherValidationProps;
const schema = z.object({
  priceRange: z.tuple([z.number(), z.number()]),
  age: z.string().optional(),
  country: country.optional(),
  gender: gender.optional(),
  languages: languages.optional(),
});
const languageOptions = Object.values(allLanguages);

// Define form data type based on the Zod schema
type FormData = z.infer<typeof schema>;

export const FilterSideBar: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="priceRange"
        control={control}
        defaultValue={[0, 100]}
        render={({ field }) => (
          <div>
            <label>Price Range</label>
            <Slider
              style={{ marginTop: 16 }}
              {...field}
              value={field.value}
              onChange={(_, value) => field.onChange(value)}
              valueLabelDisplay="auto"
              min={0}
              max={100}
              marks={[
                { value: 0, label: "$0" },
                { value: 100, label: "$100" },
              ]}
            />
          </div>
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
      <Button type="submit" variant="contained" color="primary">
        Apply Filters
      </Button>
    </form>
  );
};
