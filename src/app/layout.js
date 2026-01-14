import './globals.css'

export const metadata = {
  title: 'OnlineMenus | Websites for Takeaways in Birmingham',
  description: 'Stop paying 30% to Just Eat. Get your own online ordering website for your takeaway. Fixed pricing, no commission. Based in Birmingham.',
  keywords: 'takeaway website, online ordering, Birmingham, halal, pizza, kebab, curry, Just Eat alternative',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
