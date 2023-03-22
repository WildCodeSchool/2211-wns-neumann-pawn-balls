import { useState } from 'react';
import { FormDataType, GenericForm, type FormField } from '../../components/form/GenericForm';
import { isAlphanumeric, isLengthBetween, isValidEmail } from '../../lib/validator';

//idea: maybe turn fields (username, email, password, ...) into classes or something
//so we can just create a new instance of it for the props.
export function RegisterScreen() {
  const formFields: FormField[] = [
    {
      name: 'username',
      validate: (name: string) => isLengthBetween({ text: name, min: 3, max: 12 }) && isAlphanumeric({ text: name }),
    },
    {
      name: 'email',
      validate: (name: string) => isValidEmail({ text: name }),
    },
    {
      name: 'password',
      privateInfos: true,
      validate: (name: string) => isLengthBetween({ text: name, min: 8, max: 200 }),
    },
  ];

  //useless for now, idk if it's gonna be necessary to keep once we link register to the back.
  const [formData, setFormData] = useState<FormDataType>({});

  const onSubmit = (data: FormDataType) => {
    setFormData(data);
    console.log(formData);
    return true;
  };

  return (
    <div className="App">
      <GenericForm formFields={formFields} onSubmit={onSubmit} />
      <div>Already an account? Login!</div>
    </div>
  );
}
