import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { FormDataType, GenericForm } from './GenericForm'

describe('GenericForm component', () => {
  it('should render the prop correctly', async () => {
    const mocks: never[] = []
    const formField = [
      {
        name: 'username',
        validate: (name: string) => true,
        label: 'Pseudo'
      },
      {
        name: 'email',
        validate: (name: string) => true,
        label: 'Adresse mail'
      },
      {
        name: 'password',
        privateInfos: true,
        validate: (name: string) => true,
        label: 'Mot de passe'
      },
    ]
    const onSubmit = (data: FormDataType): boolean => {
      return true
    }

    const view = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <GenericForm formFields={formField} onSubmit={onSubmit} />
      </MockedProvider>,
      { wrapper: BrowserRouter }
    )

    expect(screen.getByText('username')).toBeVisible()
    expect(screen.getByText('email')).toBeVisible()
    expect(screen.getByText('password')).toBeVisible()
    expect(view.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <form>
            <div
              class="username_field"
              id="username_field"
            >
              <div>
                <label>
                  Pseudo
                </label>
              </div>
              <input
                name="username"
                type="text"
              />
            </div>
            <div
              class="email_field"
              id="email_field"
            >
              <div>
                <label>
                  Adresse mail
                </label>
              </div>
              <input
                name="email"
                type="text"
              />
            </div>
            <div
              class="password_field"
              id="password_field"
            >
              <div>
                <label>
                  Mot de passe
                </label>
              </div>
              <input
                name="password"
                type="password"
              />
            </div>
            <input
              type="submit"
            />
          </form>
        </div>
      </body>
    `)
  })
})
