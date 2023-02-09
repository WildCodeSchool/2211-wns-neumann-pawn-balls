import { ReactNode, ReactPortal, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import './LoginForm.css';

export function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const [data, setData] = useState('');
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = async (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    /*
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

      <label>Username</label>
      <input {...register("Username")} placeholder="Username" />

      <label>Password</label>
      <input
        type="password"
        {...register("Password", {
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
        placeholder="Password"
      />
      {errors?.password && <p>{errors.password.message as string}</p>}
      {errors}

      <label>Confirm password</label>
      <input
        type="password"
        {...register("Repeat Password", {
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
        placeholder="Confirm password"
      />
      {errors.password_repeat && <p>{errors.password_repeat.message as string}</p>}


      <p>{data}</p>
      <input type="submit" onClick={handleSubmit(onSubmit)} />
    </form>
    */
    <div>bonjour</div>
  );
}
