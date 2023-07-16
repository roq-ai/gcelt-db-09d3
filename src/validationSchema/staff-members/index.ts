import * as yup from 'yup';

export const staffMemberValidationSchema = yup.object().shape({
  notices: yup.string(),
  programs: yup.string(),
  activities: yup.string(),
  user_id: yup.string().nullable(),
});
