import { useState } from 'react'
import { FormDataType, FormField, GenericForm } from '../../components/Form/GenericForm'
import { isLengthBetween, isValidEmail } from '../../utils/validator'
import { useGetProfileQuery, useLoginMutation, UserLoginInput } from '../../gql/generated/schema'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import Cookies from 'js-cookie'

interface Props {
  goToSignUpPage: (route: string) => void
}

export default function SignIn({ goToSignUpPage }: Props) {
  const [formData, setFormData] = useState<UserLoginInput>({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  /*function navigateToDashboard(token: string) {
    const role = Cookies.get(token)
    console.log('token', token)
    console.log('role',)
    if (role === 'admin') {
      navigate('/dashboard')
    }
  }*/
  const [login, { error, data }] = useLoginMutation()

  const { data: currentUser, client } = useGetProfileQuery({
    errorPolicy: 'ignore',
  })

  const onSubmit = async (dataForm: FormDataType) => {
    try {
      const res = await login({ variables: { data: dataForm as UserLoginInput } })
      console.log(res)
      toast.success('Tu es connecté !', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
      if (res.data) {
        //navigateToDashboard(res.data.login)
        navigate('/dashboard')
      }
    } catch (err: any) {
      if (err?.message === 'invalid credentials') {
        toast.error('Ton email ou mot de passe est pas valide, réessaie 🙂', {
          icon: '⛔️',
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    }
  }

  const formFieldsSignIn: FormField[] = [
    {
      name: 'email',
      validate: (name: string) => isValidEmail({ text: name }),
      label: 'Adresse mail'
    },
    {
      name: 'password',
      privateInfos: true,
      validate: (password: string) => isLengthBetween({ text: password, min: 8, max: 200 }),
      label: 'Mot de passe'
    },
  ]
  return (
    <>
      <GenericForm formFields={formFieldsSignIn} onSubmit={onSubmit} />
      <Button onClick={() => goToSignUpPage('signup')}>
        Pas de compte ? Viens t'inscrire
      </Button>
    </>
  )
}

const Button = styled.button`
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
`