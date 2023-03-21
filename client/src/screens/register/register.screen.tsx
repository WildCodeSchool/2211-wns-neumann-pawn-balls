import { GenericForm, type FormField } from '../../components/form/GenericForm';

export function RegisterScreen() {
  const formFields: FormField[] = [
    {
      name: 'username',
      validate: (name: string) => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(name);
      },
    },
    {
      name: 'email',
      validate: (name: string) => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(name);
      },
    },
    {
      name: 'password',
      privateInfos: true,
      validate: (name: string) => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(name);
      },
    },
  ];

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    return event.target;
  };

  return (
    <div className="App">
      <GenericForm formFields={formFields} onSubmit={onSubmit} />
      <div>Already an account? Login!</div>
    </div>
  );
}