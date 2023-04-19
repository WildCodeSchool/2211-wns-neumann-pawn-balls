import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { FormDataType, FormField, GenericForm } from '../../components/Form/GenericForm'
import { isLengthBetween, isValidEmail } from '../../utils/validator'

interface Props {
  goToSignInPage: (route: string) => void
}

export default function SignUp({ goToSignInPage }: Props) {
  const [formData, setFormData] = useState<FormDataType>({})

  const onSubmit = (data: FormDataType) => {
    setFormData(data)
    return true
  }

  const formFieldsSignUp: FormField[] = [
    {
      name: 'username',
      validate: (name: string) => isValidEmail({ text: name }),
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
  ]

  return (
    <>
      <GenericForm formFields={formFieldsSignUp} onSubmit={onSubmit} />
      <Button variant="link" onClick={() => goToSignInPage('signin')}>
        Déjà un compte ? Viens ici !
      </Button>
    </>
  )
}
