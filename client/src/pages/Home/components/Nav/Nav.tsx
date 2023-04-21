import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetProfileQuery, useLogoutMutation } from '../../../../gql/generated/schema'
import ModalLogin from '../../../Auth/ModalLogin'
import './nav.css'

export default function Nav() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [logout] = useLogoutMutation()
  const navigate = useNavigate()


  const {
    data: currentUser,
    client,
    error,
  } = useGetProfileQuery({
    errorPolicy: 'ignore',
  })

  return (
    <>
      <div className="row g-0">
        <div className="col-4"></div>
        <div className="col-4 form-group">
          <input className="form-control mt-2 inpt-search" type="text" />
          <i className="bi search bi-search"></i>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          {currentUser?.profile ? (
            <button
              type="button"
              className="btn btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={async () => {
                await logout()
                client.resetStore()
                navigate('/')
              }}
            >
              <p className="mb-0">Logout</p>
            </button>
          ) : (
            <button
              type="button"
              className="btn btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleShow()}
            >
              <p className="mb-0">Login</p>
            </button>
          )}

          <button className="btn my-2 my-sm-0" type="submit">
            <i className="bi cart bi-cart2"></i>
          </button>
        </div>
      </div>
      {show && <ModalLogin show={show} handleClose={handleClose} />}
    </>
  )
}
