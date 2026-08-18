export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  company: string
  rating: number
  avatar?: string
}

// Replace these with real client reviews. `avatar` is optional — drop a
// photo in public/images/testimonials/ and reference it, otherwise a
// initials badge is shown instead.
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'Add the real testimonial quote here — what the client said about working with you and the result you delivered.',
    name: 'Client Name',
    role: 'Job Title',
    company: 'Company Name',
    rating: 5,
  },
  {
    id: 't2',
    quote: 'Add the real testimonial quote here — what the client said about working with you and the result you delivered.',
    name: 'Client Name',
    role: 'Job Title',
    company: 'Company Name',
    rating: 5,
  },
  {
    id: 't3',
    quote: 'Add the real testimonial quote here — what the client said about working with you and the result you delivered.',
    name: 'Client Name',
    role: 'Job Title',
    company: 'Company Name',
    rating: 5,
  },
]
