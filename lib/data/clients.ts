export type Client = {
  id: string
  name: string
  logo?: string
}

// Replace these with the real businesses/brands that have worked with you.
// If you have a logo file, drop it in public/images/clients/ and set `logo`
// to its path (e.g. '/images/clients/mpesa.png'). Without a logo, the name
// renders as a styled wordmark.
export const clients: Client[] = [
  { id: 'client-1', name: 'Client Company One' },
  { id: 'client-2', name: 'Client Company Two' },
  { id: 'client-3', name: 'Client Company Three' },
  { id: 'client-4', name: 'Client Company Four' },
  { id: 'client-5', name: 'Client Company Five' },
  { id: 'client-6', name: 'Client Company Six' },
]
