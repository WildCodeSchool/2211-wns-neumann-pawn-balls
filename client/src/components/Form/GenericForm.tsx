import React, { useState } from 'react'

import styled from 'styled-components'

export type FormProps = {
  formFields: FormField[]
  onSubmit: (data: FormDataType) => void
}

export type FormField = {
  name: string
  privateInfos?: boolean
  validate: (name: string) => boolean
  label: string
}

export type FormDataType = Record<string, string>

export function GenericForm(prop: FormProps) {
  let formData: FormDataType = {}
  prop.formFields.map((field) => {
    formData = {
      ...formData,
      [field.name]: '',
    }
  })

  const [responseBody, setResponseBody] = useState<FormDataType>(formData)

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setResponseBody({ ...responseBody, [name]: value })
  }
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    prop.onSubmit(responseBody)
  }
  const [touched, setTouched] = useState(false)

  return (
    <Form onSubmit={onSubmitHandler}>
      {prop.formFields.map((field) => {
        const className = `${field.name}_field`
        return (
          <FormFieldContainer key={field.name}>
            <div>
              <label>{field.label}</label>
            </div>
            <Input
              name={field.name}
              onChange={(e) => inputChangeHandler(e)}
              type={field.privateInfos ? 'password' : 'text'}
              onBlur={() => setTouched(true)}
            />
            {touched && !field.validate(responseBody[field.name]) && <FieldError>{field.name} is invalid.</FieldError>}
          </FormFieldContainer>
        )
      })}
      <SubmitButton type="submit" />
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
`

const Input = styled.input`
  padding: 5px 60px;
  border-radius: 30px;
  text-decoration: none;
  outline: none;
  border: 1px solid green;
`

const FormFieldContainer = styled.div``

const SubmitButton = styled.input`
  margin-top: 20px;
  padding: 5px 40px;
  border-radius: 30px;
  background-color: #4ecb71;
  border: none;
  color: white;
`

const FieldError = styled.div`
  color: red;
`
