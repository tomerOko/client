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
} from "@mui/material";
import * as z from "zod";

// Define enums for genders, languages, and countries
enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

enum Language {
  English = "english",
  Spanish = "spanish",
  French = "french",
}

enum Country {
  USA = "USA",
  Canada = "Canada",
  Mexico = "Mexico",
}

// Define Zod schema
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(0),
  gender: z
    .string()
    .refine((value) => value in Gender)
    .transform((value) => value as Gender),
  languages: z.array(
    z
      .string()
      .refine((value) => value in Language)
      .transform((value) => value as Language)
  ),
  country: z
    .string()
    .refine((value) => value in Country)
    .transform((value) => value as Country),
  profilePictureUrl: z.string().url(),
  aboutMe: z.string(),
});

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

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

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
            {Object.values(Gender).map((gender) => (
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
          <div>
            {Object.values(Language).map((language) => (
              <FormControlLabel
                key={language}
                control={
                  <Checkbox
                    {...field}
                    value={language}
                    checked={field.value.includes(language)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        field.onChange([...field.value, language]);
                      } else {
                        field.onChange(
                          field.value.filter((val) => val !== language)
                        );
                      }
                    }}
                  />
                }
                label={language}
              />
            ))}
            {errors.languages && <p>{errors.languages.message}</p>}
          </div>
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
            {Object.values(Country).map((country) => (
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
