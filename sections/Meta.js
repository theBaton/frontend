import Head from 'next/head'

export default function Meta(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content={props.description} />
            <meta name="author" content={props.author} />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="en" />
            <meta name="expires" content={props.expires} />
            <meta name="copyright" content="TheBaton" />
            <meta name="slurp" content="index, follow" />

            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:locale:alternate" content="en_US" />
            <meta property="og:url" content={props.url} />
            <meta property="og:site_name" content="TheBaton" />
            <meta property="og:image" itemProp="image" content={props.image} />
            <meta property="og:image:secure_url" content={props.image} />
            <meta property="og:image:type" content={props.mime} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:url" content={props.url} />
            <meta name="twitter:image" content={props.image} />
            <meta name="twitter:image:alt" content={props.imagealt} />
            <meta name="twitter:site" content="@thebatonindia" />
            <meta name="twitter:creator" content="@thebatonindia" />

            <link rel="canonical" href={props.url} />
            <link rel="shortlink" href={props.url} />
        </Head>
    )
}
