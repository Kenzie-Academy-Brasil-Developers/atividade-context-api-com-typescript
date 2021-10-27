import { ReactNode } from 'react'
import { CartProvider } from './Cart'

interface ProviderProps {
	children: ReactNode
}

export const AppProvider = ({ children }: ProviderProps) => {
	return <CartProvider>{children}</CartProvider>
}
