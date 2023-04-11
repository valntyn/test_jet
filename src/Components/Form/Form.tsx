import { Formik, Form } from 'formik';
import { memo, useState } from 'react';

import './Form.scss';

import { useAppDispatch } from '../../app/hooks';
import { addWordToList } from '../../features/wordsSlice/wordsSlice';
import { InputType } from '../../types/InputType';
import { SignupSchema } from '../../variables/variables';
import { InputField } from '../InputField';
import { Modal } from '../Modal';

export const FormForNewItem = memo(() => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = (values: InputType, { resetForm }: any) => {
    resetForm({ values: '' });

    const { english, native } = values;

    setModalActive(true);

    dispatch(
      addWordToList({
        id: +new Date(),
        english,
        native,
        status: false,
      }),
    );
  };

  const initialValues = {
    english: '',
    native: '',
  };

  return (
    <div className="form form__dimension">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({
          values, errors, touched, handleChange,
        }) => (
          <Form className="form__form">
            <InputField
              placeholder="Enter the word"
              error={errors.english}
              touched={touched.english}
              values={values.english}
              handleChange={handleChange}
              type="text"
              name="english"
            />
            <InputField
              placeholder="Введіть переклад"
              error={errors.native}
              touched={touched.native}
              values={values.native}
              handleChange={handleChange}
              type="text"
              name="native"
            />
            <button className="form__button form__button--submit" type="submit">
              Add the new word to the list
            </button>
          </Form>
        )}
      </Formik>
      <Modal setActive={setModalActive} active={modalActive}>
        Word was successfully added to the list
      </Modal>
    </div>
  );
});
