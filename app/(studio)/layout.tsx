import '../globals.css'

export const metadata = {
  title: 'My Personal Site',
  description: 'Generated NextJs and Sanity.io',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
