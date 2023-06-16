/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { FormDataType, FormField, GenericForm } from '../../components/Form/GenericForm'
import { useCreateUserMutation, UserInput } from '../../gql/generated/schema'
import { isLengthBetween, isValidEmail } from '../../utils/validator'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Props {
  goToSignInPage: (route: string) => void
}

export default function SignUp({ goToSignInPage }: Props) {
  const [formData, setFormData] = useState<UserInput>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })
  const inputRef = useRef<HTMLInputElement>(null)

  const [createUser, { error, data }] = useCreateUserMutation()

  const onSubmit = async (dataForm: FormDataType) => {
    try {
      await createUser({ variables: { data: dataForm as UserInput } })
      toast.success('Ton compte a bien été créer', {
        icon: '✅',
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } catch (err: any) {
      if (err?.message === 'EMAIL_ALREADY_EXISTS') {
        toast.error('Tu possèdes déjà un compte chez nous !!', {
          icon: '⛔️',
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      } else {
        toast.error('Une erreur est survenue, réessaie 🥹', {
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

  const formFieldsSignUp: FormField[] = [
    {
      name: 'firstname',
      validate: (name: string) => isLengthBetween({ text: name, min: 2, max: 200 }),
    },
    {
      name: 'lastname',
      validate: (lastname: string) => isLengthBetween({ text: lastname, min: 2, max: 200 }),
    },
    {
      name: 'email',
      validate: (email: string) => isValidEmail({ text: email }),
    },
    {
      name: 'password',
      privateInfos: true,
      validate: (password: string) => isLengthBetween({ text: password, min: 8, max: 200 }),
    },
  ]

  return (
    <>
      <GenericForm formFields={formFieldsSignUp} onSubmit={onSubmit} />
      <Button variant="link" onClick={() => goToSignInPage('signin')}>
        {'T\'as déjà un compte ? Viens ici !'}
      </Button>
    </>
  )
}
