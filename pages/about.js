import Head from 'next/head'
import PageHeaderSection from '../sections/PageHeaderSection'
import PageTextSection from '../sections/PageTextSection'

export default function Podcasts() {

    const text = `TheBaton. is a non-profit, social advocacy and legal clinic aimed to 
    critically analyze contemporary socio-economic, political, and legal issues of the 
    world that we artlessly refer to as the global village. Our motivations are driven 
    by making earnest efforts to provide an academic and scholarly perspective to everyday 
    occurrences which hold a critical impact on the population. We look forward to 
    providing detailed examinations of these issues in an easy to digest language, 
    especially for the lay men, foreign to the unnecessary legal and judicial jargon. 
    Our team consists of accomplished and proficient writers, from a diverse set of 
    academic backgrounds, dedicated to investing their time and efforts with the intention 
    that every reader, at the end of each of our piece, takes away a certain degree of 
    practical, objectively represented set of information. We hope that our readers will 
    be able to gain a deeper understanding of the issues that we are trying to address.`

    return (
        <>
            <Head>
                <title>About | TheBaton</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="TheBaton Podcasts" />
            </Head>
            <PageHeaderSection title="About" />
            <PageTextSection data={text} />
        </>
    )
}
