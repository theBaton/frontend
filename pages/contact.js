import Head from "next/head";
import ContactForm from "../sections/ContactForm";
import PageHeaderSection from "../sections/PageHeaderSection";

export default function Contact() {
    return (    
        <>
            <Head>
                <title>Contact | TheBaton</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Contact TheBaton" />
                <meta name="keywords" content="contact, baton, thebaton, thebaton.com, thebaton.com/contact" />
                <meta name="author" content="TheBaton" />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="1 day" />
                <meta name="language" content="english" />
                <meta name="distribution" content="global" />
                <meta name="rating" content="general" />
                <meta name="expires" content="never" />
                <meta name="copyright" content="TheBaton" />
                <meta name="classification" content="business" />
                <meta name="googlebot" content="index, follow" />
                <meta name="msnbot" content="index, follow" />
                <meta name="yahoobot" content="index, follow" />
                <meta name="alexabot" content="index, follow" />
                <meta name="slurp" content="index, follow" />
                <meta name="spider" content="index, follow" />
                <meta name="archiver" content="index, follow" />
                </Head>
                <PageHeaderSection title="Contact" />

                <div id="page-content">
                    <ContactForm />
                </div>
        </>
    )
}