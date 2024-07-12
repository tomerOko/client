import { create } from 'zustand'



interface SignupDetails{
    isSent: boolean
    sentAt: number
    email: string
    password: string
    firstName: string
    lastName: string

} 
interface SignupDetailsState {
    signupDetails: SignupDetails
    setSignupDetails: (signupDetails: SignupDetails) => void
}

export const useSignupDetailsState = create<SignupDetailsState>((set) => ({
    signupDetails: {
        isSent: false,
        sentAt: 0,
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    },
    setSignupDetails: (signupDetails: SignupDetails) => set({signupDetails}),
}))


