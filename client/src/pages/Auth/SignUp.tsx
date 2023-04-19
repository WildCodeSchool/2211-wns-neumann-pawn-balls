import { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { FormDataType, FormField, GenericForm } from '../../components/Form/GenericForm'
import { useCreateUserMutation, UserInput } from '../../gql/generated/schema'
import { isLengthBetween, isValidEmail } from '../../utils/validator'

interface Props {
  goToSignInPage: (route: string) => void
}

interface IWilderInput {
  lastname?: string | null
  email?: string | null
}

export default function SignUp({ goToSignInPage }: Props) {
  const [formData, setFormData] = useState<UserInput>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })
  const [name, setName] = useState<IWilderInput['lastname']>('')
  const [email, setEmail] = useState<IWilderInput['email']>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const [createUser] = useCreateUserMutation()

  const onSubmit = (data: FormDataType) => {
    setFormData(data as UserInput)
    createUser({ variables: { data: formData } })
    // setName('')
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
        T'as déjà un compte ? Viens ici !
      </Button>
    </>
  )
}
