import { team } from '../../data/team'
import TeamCard from '../components/TeamCard'

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal-dark">Meet Our Team</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
        </div>
        {/* Mobile: horizontal scroll, Tablet: 2-col, Desktop: 4-col */}
        <div className="flex md:hidden gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4">
          {team.map((stylist) => (
            <div key={stylist.id} className="snap-center shrink-0 w-64">
              <TeamCard stylist={stylist} />
            </div>
          ))}
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((stylist) => (
            <TeamCard key={stylist.id} stylist={stylist} />
          ))}
        </div>
      </div>
    </section>
  )
}
