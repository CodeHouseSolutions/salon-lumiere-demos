import { serviceCategories } from '../../data/services'
import ServiceCategoryCard from '../components/ServiceCategoryCard'

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal-dark">Our Services</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category) => (
            <ServiceCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
