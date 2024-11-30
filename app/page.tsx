import EventCategory from '@/components/EventCategory'
import HeroSection from '@/components/HeroSection'
import { Separator } from "@/components/ui/separator"

const events = [
  {
    id: 1,
    name: 'Coldplay Concert',
    date: '2023-12-15',
    category: 'Music',
    image: 'https://huad34u4m119mhe99.lite.vusercontent.net/placeholder.svg?height=200&width=300'
  },
  {
    id: 2,
    name: 'Diljit Dosanjh Live',
    date: '2023-11-30',
    category: 'Music',
    image: 'https://huad34u4m119mhe99.lite.vusercontent.net/placeholder.svg?height=200&width=300'
  },
  {
    id: 3,
    name: 'Stand-up Comedy Night',
    date: '2023-12-05',
    category: 'Comedy',
    image: 'https://huad34u4m119mhe99.lite.vusercontent.net/placeholder.svg?height=200&width=300'
  },
  {
    id: 4,
    name: 'Local Theater Play',
    date: '2023-12-10',
    category: 'Theater',
    image: 'https://huad34u4m119mhe99.lite.vusercontent.net/placeholder.svg?height=200&width=300'
  },
  {
    id: 5,
    name: 'EDM Festival',
    date: '2024-01-15',
    category: 'Music',
    image: 'https://huad34u4m119mhe99.lite.vusercontent.net/placeholder.svg?height=200&width=300'
  },
  {
    id: 6,
    name: 'Improv Show',
    date: '2023-12-20',
    category: 'Comedy',
    image: 'https://huad34u4m119mhe99.lite.vusercontent.net/placeholder.svg?height=200&width=300'
  }
]

const categories = Array.from(new Set(events.map(event => event.category)))

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Discover Amazing Events</h2>
        <Separator className="my-8" />
        {categories.map(category => (
          <EventCategory 
            key={category} 
            category={category} 
            events={events.filter(event => event.category === category)}
          />
        ))}
      </main>
    </div>
  )
}

