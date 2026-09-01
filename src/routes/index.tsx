// src/routes/index.tsx
// TanStack Router root route — App component handles all rendering.

import { createFileRoute } from '@tanstack/react-router'
import App from '../App'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Skye Lexus — Portfolio' },
      {
        name: 'description',
        content:
          'Full Stack Developer & Designer. Explore the archive.',
      },
    ],
  }),
  component: App,
})
