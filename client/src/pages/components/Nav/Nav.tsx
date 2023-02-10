import { useState } from 'react'
import Modal from '../../../components/Modal'
import './nav.css'

export default function Nav() {

  return (
    <>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 form-group">
                <input className="form-control mt-2 inpt-search" type="text" />
                <i className="bi search bi-search"></i>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
                <p className="mb-0">Login</p>
                <button className="btn my-2 my-sm-0" type="submit">
                    <i className="bi cart bi-cart2"></i>
                </button>
            </div>
        </div>
    </>
  )
}
