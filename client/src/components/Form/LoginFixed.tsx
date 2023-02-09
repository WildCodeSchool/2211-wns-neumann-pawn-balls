import { Resolver, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import './LoginForm.css';

type FormValues = {
  username: string;
  password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.username ? values : {},
    errors: !values.username
      ? {
          username: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

export function LoginFormFixed() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({ resolver });

  const watchUsername = watch('username');
  const watchPassword = watch('password');

  // const onSubmit = handleSubmit((data) => console.log(data));
  const onSubmit = async (data: FormValues) => {
    if (data.password.length < 8) {
      errors.password = { type: 'minLength', message: 'Password must have at least 8 characters' };
    }
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>username</label>
      <input {...register('username')} placeholder="Username" />
      {errors?.username && <p>{errors.username.message}</p>}

      <label>Password</label>
      <input
        type={'password'}
        {...register('password', {
          required: {
            value: true,
            message: 'You must specify a password',
          },
          minLength: {
            value: 8,
            message: 'Password must have at least 8 characters',
          },
        })}
        placeholder="Password"
      />
      {watchPassword && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  );
}
