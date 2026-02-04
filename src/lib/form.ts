import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

import { CheckboxField, SelectField, SubmitButton, TextField } from '~/components/form/fields';

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    SelectField,
    CheckboxField,
  },
  fieldContext,
  formComponents: {
    SubmitButton,
  },
  formContext,
});
