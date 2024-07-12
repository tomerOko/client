import { create } from 'zustand'


interface UserDetails{
    email: string
    firstName: string
    lastName: string
    isTeacher: boolean
} 

interface UserDetailsState {
    userDetails: UserDetails
    setUserDetails: (userDetails: UserDetails) => void
}

export const useUserDetailsState = create<UserDetailsState>((set) => ({
    userDetails: {
        email: '',
        firstName: '',
        lastName: '',
        isTeacher: false
    },
    setUserDetails: (userDetails: UserDetails) => set({userDetails}),
}))


