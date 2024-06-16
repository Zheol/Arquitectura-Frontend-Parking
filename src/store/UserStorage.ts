import { create } from 'zustand'
import {devtools, persist} from 'zustand/middleware'

interface UserState {
    id_user: number
    email_user: string
    tipoUser: string
    token: string

    setIdUser: (id_user: number) => void
    setEmailUser: (email_user: string) => void
    setTipoUser: (tipoUser: string) => void
    setToken: (token: string) => void

    clearUser: () => void
}

export const useUserStore = create<UserState>()(
 
        persist(
            (set) => ({
                id_user: -1,
                email_user: '',
                tipoUser: '',
                token: '',

                setIdUser: (id_user) => set({ id_user }),
                setEmailUser: (email_user) => set({ email_user }),
                setTipoUser: (tipoUser) => set({ tipoUser }),
                setToken: (token) => set({ token }),

                clearUser: () => set({ id_user: -1, email_user: '', tipoUser: '', token: ''}),
            }),
            {
                name: 'user-storage',
            },
        ),
    )

