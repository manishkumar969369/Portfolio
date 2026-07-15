import './globals.css';
import localFont from 'next/font/local';
import { Caprasimo, Merriweather, Young_Serif } from 'next/font/google';
import Script from 'next/script';
import Providers from './providers';

/* App-wide default body / UI sans (local woff2) */
const averta = localFont({
    src: '../../public/fonts/Averta.woff2',
    variable: '--font-averta-loaded',
    weight: '400',
    display: 'swap',
});

/* Big display headlines — the signature warm rounded serif */
const caprasimo = Caprasimo({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-caprasimo-loaded',
    display: 'swap',
});

/* Geometric sans for sub-headlines, eyebrows, feature titles (Geom loaded locally) */
const geom = localFont({
    src: [
        {
            path: '../../public/fonts/Geom-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Geom-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
    ],
    variable: '--font-geom-loaded',
    display: 'swap',
});

/* Serif for emphasis numerals */
const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    variable: '--font-merriweather-loaded',
    display: 'swap',
});

/* Alternate editorial serif */
const youngSerif = Young_Serif({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-young-serif-loaded',
    display: 'swap',
});

export const metadata = {
    title: 'Manish Kumar| AI Developer Portfolio',
    description:
        'Portfolio website of Manish Kumar - Specializing in ML, DL, GenAI, and MERN stack.',
};

export const viewport = {
    colorScheme: 'light dark',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#fffbf1' },
        { media: '(prefers-color-scheme: dark)', color: '#1c1917' },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${averta.variable} ${caprasimo.variable} ${geom.variable} ${merriweather.variable} ${youngSerif.variable} antialiased`}
        >
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-7D7YK2Q0GR"
                    strategy="afterInteractive"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7D7YK2Q0GR');
            `,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Manish Kumar',
                            url: 'https://princekhunt16.github.io/PortfolioWebsite/',
                            sameAs: [
                                'linkedin.com/in/manish-kumar-b95610307/',
                                'https://github.com/manishkumar969369',
                            ],
                        }),
                    }}
                />
            </head>
            <body suppressHydrationWarning={true}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
