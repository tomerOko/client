import { create } from 'zustand'



interface PaymentMethods {
    methods: {
        name: string;
        type: string;
    }[]
}

interface PaymentMethodsState {
    paymentMethods: PaymentMethods
    setPaymentMethods: (paymentMethods: PaymentMethods) => void
}

export const usePaymentMethodsState = create<PaymentMethodsState>((set) => ({
    paymentMethods: {
        methods:[]
    },
    setPaymentMethods: (paymentMethods: PaymentMethods) => set({paymentMethods}),
}))


