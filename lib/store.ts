import { create } from 'zustand'

interface Ticket {
  id: number
  eventId: number
  eventName: string
  purchaseDate: string
}

interface AuthState {
  isLoggedIn: boolean
  tickets: Ticket[]
  login: () => void
  logout: () => void
  addTicket: (ticket: Ticket) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  tickets: [],
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
  addTicket: (ticket) => set((state) => ({ tickets: [...state.tickets, ticket] })),
}))

