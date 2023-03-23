import React, { useState } from 'react';
import './LoginForm.css';

export type FormProps = {
  formFields: FormField[];
  onSubmit: (data: FormDataType) => boolean;
};

export type FormField = {
  name: string;
  privateInfos?: boolean;
  validate: (name: string) => boolean;
};

export type FormDataType = Record<string, string>;

export function GenericForm(prop: FormProps) {
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
    prop.onSubmit(responseBody);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {prop.formFields.map((field) => {
        const className = `${field.name}_field`;
        const [touched, setTouched] = useState(false);
        return (
          <div id={className} className={className} key={field.name}>
            <div>
              <label>{field.name}</label>
            </div>
            <input
              name={field.name}
              onChange={(e) => inputChangeHandler(e)}
              type={field.privateInfos ? 'password' : 'text'}
              onBlur={() => setTouched(true)}
            />
            {touched && !field.validate(responseBody[field.name]) && (
              <div className="field_error">{field.name} is invalid.</div>
            )}
          </div>
        );
      })}
      <input type="submit" />
    </form>
  );
}
