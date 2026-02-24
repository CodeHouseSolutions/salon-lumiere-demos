import type { ServiceCategory } from '../../data/services'
import { cn } from '../../lib/cn'

interface ServiceCategoryCardProps {
  category: ServiceCategory
  className?: string
}

export default function ServiceCategoryCard({ category, className }: ServiceCategoryCardProps) {
  return (
    <div className={cn('bg-white rounded-lg p-6 shadow-sm', className)}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="font-display text-xl md:text-2xl text-charcoal-dark">{category.name}</h3>
      </div>
      <ul className="space-y-3">
        {category.services.map((service) => (
          <li key={service.name} className="flex justify-between items-baseline gap-2">
            <div>
              <span className="font-body text-sm text-charcoal">{service.name}</span>
              {service.description && (
                <p className="font-body text-xs text-charcoal-light mt-0.5">{service.description}</p>
              )}
            </div>
            <span className="font-body text-sm font-semibold text-walnut whitespace-nowrap">
              {service.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
