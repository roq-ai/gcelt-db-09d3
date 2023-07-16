import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  results: yup.string(),
  marks: yup.string(),
  user_id: yup.string().nullable(),
});
