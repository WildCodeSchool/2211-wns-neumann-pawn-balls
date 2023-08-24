import { createContext } from 'react'

export type User = {
    firstname: string
    lastname: string
    role: 'admin' | 'visitor'
    email: string
    orders: any
}

const UserContext = createContext(null)

/*export function UserContextProvider({children}) {
    useProfile
}*/