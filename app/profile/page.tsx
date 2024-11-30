'use client'

import { useAuthStore } from '@/lib/store'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ProfilePage() {
  const { isLoggedIn, tickets } = useAuthStore()

  if (!isLoggedIn) {
    return (
      <Card className="max-w-md mx-auto mt-20">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Please log in to view your profile and tickets.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-4xl mx-auto mt-20">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Your Tickets</h2>
        {tickets.length === 0 ? (
          <p>You haven't purchased any tickets yet.</p>
        ) : (
          <ul className="space-y-4">
            {tickets.map((ticket) => (
              <li key={ticket.id} className="border p-4 rounded-md">
                <h3 className="font-semibold">{ticket.eventName}</h3>
                <p>Purchase Date: {new Date(ticket.purchaseDate).toLocaleDateString()}</p>
                <Link href={`/events/${ticket.eventId}`}>
                  <Button variant="outline" className="mt-2">View Event</Button>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

