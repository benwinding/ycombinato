import './globals.css'
import { Header } from '@/components/Header'

export default function RootLayout(props: React.PropsWithChildren<{}>) {
  return (
    <html lang="en" className="flex justify-center">
      <body className="max-w-3xl w-full">
        <Header />
        <div>
          {props.children}
        </div>
      </body>
    </html>
  )
}
