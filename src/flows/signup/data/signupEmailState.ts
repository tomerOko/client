import { create } from 'zustand'

interface SignupEmailState {
    signupEmail: string
    setSignupEmail: (signupEmail: string) => void
}

export const useSignupEmailState = create<SignupEmailState>((set) => ({
    signupEmail: '',
    setSignupEmail: (signupEmail) => set({signupEmail}),
}))

