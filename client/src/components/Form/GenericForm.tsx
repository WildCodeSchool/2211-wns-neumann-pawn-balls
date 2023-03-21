import { useState } from 'react';
import './LoginForm.css';

export type FormProps = {
  formFields: FormField[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => EventTarget; //useless right now
};

export type FormField = {
  name: string;
  privateInfos?: boolean;
  validate: (name: string) => boolean;
};

export function GenericForm(prop: FormProps) {
  type FormDataType = Record<string, string | number>;

  let formData: FormDataType = {};
  prop.formFields.map((field) => {
    formData = {
      ...formData,
      [field.name]: '',
    };
  });

  const [responseBody, setResponseBody] = useState<FormDataType>(formData);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(responseBody);
    //Form submission happens here
  };
  return (
    <form onSubmit={onSubmitHandler}>
      {prop.formFields.map((field) => {
        const className = `${field.name}_field`;
        return (
          <div className={className} key={field.name}>
            <div>
              <label>{field.name}</label>
            </div>
            <input
              name={field.name}
              onChange={(e) => inputChangeHandler(e)}
              type={field.privateInfos ? 'password' : 'text'}
            />
          </div>
        );
      })}
      <input type="submit" />
    </form>
  );
}
