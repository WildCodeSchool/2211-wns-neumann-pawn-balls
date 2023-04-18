import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { FormDataType, FormField, GenericForm } from '../../components/Form/GenericForm'
import { isLengthBetween, isValidEmail } from '../../utils/validator'

interface Props {
  goToSignUpPage: (route: string) => void
}

export default function SignIn({ goToSignUpPage }: Props) {
    const [formData, setFormData] = useState<FormDataType>({})

    const onSubmit = (data: FormDataType) => {
        setFormData(data)
        return true
    }

    const formFieldsSignIn: FormField[] = [
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
      <GenericForm formFields={formFieldsSignIn} onSubmit={onSubmit} />
      <Button variant="link" onClick={() => goToSignUpPage('signup')}>Pas de compte ? Viens t'inscrire</Button>
    </>
  )
}