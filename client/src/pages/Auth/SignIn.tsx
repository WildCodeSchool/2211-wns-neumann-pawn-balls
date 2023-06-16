/* eslint-disable react/no-unescaped-entities */
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { FormDataType, FormField, GenericForm } from '../../components/Form/GenericForm'
import { isLengthBetween, isValidEmail } from '../../utils/validator'
import { useGetProfileQuery, useLoginMutation, UserLoginInput } from '../../gql/generated/schema'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

interface Props {
  goToSignUpPage: (route: string) => void
}

export default function SignIn({ goToSignUpPage }: Props) {
  const [formData, setFormData] = useState<UserLoginInput>({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const [login, { error, data }] = useLoginMutation()

  const { data: currentUser, client } = useGetProfileQuery({
    errorPolicy: 'ignore',
  })

  // console.log('currentUser', client)

  const onSubmit = async (dataForm: FormDataType) => {
    try {
      await login({ variables: { data: dataForm as UserLoginInput } })
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
      navigate('/dashboard')
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
    },
    {
      name: 'password',
      privateInfos: true,
      validate: (password: string) => isLengthBetween({ text: password, min: 8, max: 200 }),
    },
  ]
  return (
    <>
      <GenericForm formFields={formFieldsSignIn} onSubmit={onSubmit} />
      <Button variant="link" onClick={() => goToSignUpPage('signup')}>
        {'Pas de compte ? Viens t\'inscrire'}
      </Button>
    </>
  )
}
