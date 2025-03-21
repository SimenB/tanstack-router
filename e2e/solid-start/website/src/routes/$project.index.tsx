import { createFileRoute, redirect } from '@tanstack/solid-router'

export const Route = createFileRoute('/$project/')({
  loader: ({ params }) => {
    throw redirect({
      to: '/$project/$version',
      params: {
        project: params.project,
        version: 'latest',
      },
    })
  },
})
