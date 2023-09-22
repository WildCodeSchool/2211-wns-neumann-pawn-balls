import Close from '../../Auth/Close'
import { FormDataType, GenericForm } from '../../../components/Form/GenericForm'
import { isLengthBetween } from '../../../utils/validator'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { ItemInput, useCreateItemMutation } from '../../../gql/generated/schema'

type Props = {
    show: boolean | undefined
    handleClose?: () => void
  }

export default function ModalProduct({show, handleClose}: Props) {
  const [createItem, {error, data}] = useCreateItemMutation()
  const formFieldsAddProduct = [
    {
      name: 'name',
      validate: (name: string) => isLengthBetween({ text: name, min: 2, max: 200 }),
      label: 'Intitulé'
    },
    {
      name: 'description',
      validate: (description: string) => isLengthBetween({ text: description, min: 2, max: 400 }),
      label: 'Description'
    },
    {
      name: 'price',
      validate: (price: string) => isLengthBetween({ text: price, min: 1, max: 5 }),
      label: 'Prix'
    },
  ]

  const onSubmit = async (dataForm:FormDataType) => {
    console.log(dataForm)
    try {
      await createItem({variables: {data: dataForm as unknown as ItemInput}})
      toast.success('Article ajouté', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } catch (err: any) {
        toast.error('Une erreur est survenue', {
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
    return (
        <ModalContainer show={show}>
        <ModalContent>
            <ModalHeader>
            <CloseButton onClick={handleClose}>
                <Close />
            </CloseButton>
            </ModalHeader>
            <ModalBody>
                <ModalTitle>Ajouter un article</ModalTitle>
                <GenericForm formFields={formFieldsAddProduct} onSubmit={onSubmit} />
            </ModalBody>
      </ModalContent>
    </ModalContainer>
    )
}

const ModalContainer = styled.div<{ show?: boolean | undefined }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 10px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const ModalTitle = styled.span`
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: black;
`

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
`

const ModalBody = styled.div`
  padding: 50px;
`
