import { create } from 'zustand'

const useStore = create((set) => ({
  showContactForm: false,
  openContactForm: () => set(() =>  {
    return { showContactForm: true }
  }),
  closeContactForm: () => set(() =>  {
    return { showContactForm: false }
  })
}))

export default useStore;