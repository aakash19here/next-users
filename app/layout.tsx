import Link from 'next/link'
import './globals.css'
import { Metadata } from 'next'


export const metadata : Metadata = {
  title: 'Home',
  description: 'Generated by create next app',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <nav className='bg-slate-100 py-4'>
        <ul className='flex justify-around'>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/users"}>Users</Link>
        </ul>
      </nav>
        {children}
      </body>
    </html>
  )
}
