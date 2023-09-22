import { useContext } from 'react'
import { ContextApp } from '../context/CartContext'

export default function useCart() {
  const context = useContext(ContextApp)

  return {
    ...context,
  }
}
