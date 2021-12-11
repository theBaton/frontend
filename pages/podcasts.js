import Head from 'next/head'
import PageHeaderSection from '../sections/PageHeaderSection'

export default function Podcasts() {
    return (
        <>
            <Head>
                <title>Podcasts | TheBaton</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="TheBaton Podcasts" />
            </Head>
            <PageHeaderSection title="Podcasts" subtitle="Coming Soon" />
        </>
    )
}
