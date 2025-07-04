import { SignIn } from '@clerk/tanstack-react-start'

export const Route = createFileRoute({
  beforeLoad: ({ context }) => {
    if (!context.user.userId) {
      throw new Error('Not authenticated')
    }
  },
  errorComponent: ({ error }) => {
    if (error.message === 'Not authenticated') {
      return (
        <div className="flex items-center justify-center p-12">
          <SignIn routing="hash" forceRedirectUrl={window.location.href} />
        </div>
      )
    }

    throw error
  },
})
