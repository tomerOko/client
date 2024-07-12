import { FC } from 'react'
import {create} from 'zustand'

interface UserGeneralDetails {
    email: string
    firstName: string
    lastName: string
}

interface UserGeneralDetailsState {
    userGeneralDetails: UserGeneralDetails
    setUserGeneralDetails: (userGeneralDetails: UserGeneralDetails) => void
}

export const useUserGeneralDetails = create<UserGeneralDetailsState>((set) => ({
    userGeneralDetails: {
        email: '',
        firstName: '',
        lastName: '',
    },
    setUserGeneralDetails: (userGeneralDetails) => set({userGeneralDetails}),
}))

const example: FC = () => {
    const {userGeneralDetails, setUserGeneralDetails} = useUserGeneralDetails()

    return 
        <>
        <p>{userGeneralDetails.email}</p>
        </>

    
}

