import { http, HttpResponse } from 'msw'

// Import the first 12 originals so Vite resolves URLs correctly
import img028 from '@/assets/originals/petImage_028.jpg'
import img014 from '@/assets/originals/petImage_014.jpg'
import img148 from '@/assets/originals/petImage_148.jpg'
import img160 from '@/assets/originals/petImage_160.jpg'
import img149 from '@/assets/originals/petImage_149.jpg'
import img001 from '@/assets/originals/petImage_001.jpg'
import img015 from '@/assets/originals/petImage_015.jpg'
import img029 from '@/assets/originals/petImage_029.jpg'
import img003 from '@/assets/originals/petImage_003.jpg'
import img017 from '@/assets/originals/petImage_017.jpg'
import img016 from '@/assets/originals/petImage_016.jpg'
import img002 from '@/assets/originals/petImage_002.jpg'

type Pet = { id: string; name: string; kind: 'pig' | 'cat' | 'dog' | 'duck' | 'goose' | 'steer'; image: string }

const pets: Pet[] = [
  { id: 'p1', name: 'Truffle', kind: 'pig', image: img028 },
  { id: 'p2', name: 'Whiskers', kind: 'cat', image: img014 },
  { id: 'p3', name: 'Scout', kind: 'dog', image: img148 },
  { id: 'p4', name: 'Quacklin', kind: 'duck', image: img160 },
  { id: 'p5', name: 'Gander', kind: 'goose', image: img149 },
  { id: 'p6', name: 'Brisket', kind: 'steer', image: img001 },
  { id: 'p7', name: 'Shadow', kind: 'cat', image: img015 },
  { id: 'p8', name: 'Biscuit', kind: 'dog', image: img029 },
  { id: 'p9', name: 'Pepper', kind: 'pig', image: img003 },
  { id: 'p10', name: 'Maple', kind: 'duck', image: img017 },
  { id: 'p11', name: 'Clover', kind: 'goose', image: img016 },
  { id: 'p12', name: 'Ranger', kind: 'steer', image: img002 },
]

export const handlers = [
  http.get('/api/health', () => HttpResponse.json({ ok: true })),

  // Pets list for the UI
  http.get('/api/pets', () => HttpResponse.json(pets)),

  // Backward compatibility with existing lib/api.ts usage
  http.get('/api/animals', () =>
    HttpResponse.json(
      pets.map((p) => ({ name: p.name, species: p.kind, photoUrl: p.image })),
    ),
  ),

  http.post('/api/testimonials', async ({ request }) => {
    // Normally you might validate payload here
    void (await request.json())
    return HttpResponse.json({ id: crypto.randomUUID() })
  }),
]
