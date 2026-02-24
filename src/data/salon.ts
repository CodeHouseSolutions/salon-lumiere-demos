export const salon = {
  name: 'Salon Lumiere',
  tagline: 'Where Confidence Begins',
  description: 'A premier salon experience in the heart of historic Middleburg, Virginia.',
  address: {
    street: '12 East Washington Street',
    city: 'Middleburg',
    state: 'VA',
    zip: '20117',
    full: '12 East Washington Street, Middleburg, VA 20117',
  },
  phone: '(540) 555-0187',
  email: 'hello@salonlumiere.com',
  bookingUrl: 'https://square.site/book/DEMO',
  hours: [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '9:00 AM – 7:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 7:00 PM' },
    { day: 'Thursday', hours: '9:00 AM – 8:00 PM' },
    { day: 'Friday', hours: '9:00 AM – 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Sunday', hours: '10:00 AM – 3:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com/salonlumiere',
    facebook: 'https://facebook.com/salonlumiere',
  },
  yearsInBusiness: 25,
  reviewCount: 127,
  averageRating: 4.9,
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.8!2d-77.738!3d38.968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA1JzA2LjAiTiA3N8KwNDQnMTcuMCJX!5e0!3m2!1sen!2sus!4v1',
} as const
