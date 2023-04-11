import * as Yup from 'yup';

export const DEFAULT_PAGE = '1';
export const DEFAULT_ITEMS_PER_PAGE = '4';
export const GITHUB = 'https://github.com/valntyn';

export const SignupSchema = Yup.object().shape({
  english: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!')
    .matches(/^[a-zA-Z_\-/.]+$/, 'Forbidden symbols')
    .required('Required'),
  native: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});
