import Script from 'next/script'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

const AnalyticsLib = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
const AnalyticsScript = {
  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
                });
            `,
}

export default function Analytics() {
  return (
    <>
      <Script src={AnalyticsLib} />
      <Script dangerouslySetInnerHTML={AnalyticsScript} />
    </>
  )
}
