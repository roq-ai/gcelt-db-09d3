import * as yup from 'yup';

export const teacherValidationSchema = yup.object().shape({
  information: yup.string(),
  user_id: yup.string().nullable(),
});
