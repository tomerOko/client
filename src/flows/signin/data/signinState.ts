import { create } from 'zustand'



interface SigninDetails{
    email: string
    password: string
} 

interface SigninDetailsState {
    signinDetails: SigninDetails
    setSigninDetails: (signinDetails: SigninDetails) => void
}

export const useSigninDetailsState = create<SigninDetailsState>((set) => ({
    signinDetails: {
        email: '',
        password: '',
    },
    setSigninDetails: (signinDetails: SigninDetails) => set({signinDetails}),
}))


