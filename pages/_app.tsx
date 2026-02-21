import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import BetaNotice from "@/components/BetaNotice"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light" // SaaS marketing sites usually convert better in light mode
      enableSystem={true}
      disableTransitionOnChange
    >
      <BetaNotice />
      <main className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  )
}