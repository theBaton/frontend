import Head from 'next/head'
import PageHeaderSection from '../sections/PageHeaderSection'
import TeamSection from '../sections/team/TeamSection'

export default function Team(props) {
    return (
        <>
            <Head>
                <title>Team | TheBaton</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="TheBaton Team" />
            </Head>
            <PageHeaderSection title="Our Team" />
            <div id="page-content">
            <div className="tb-section no-padding-bottom">
                <div className="tb-section-inner">
                <TeamSection data={props.users} />
                </div>
            </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://admin.thebaton.in/users`);
    const users = await res.json();
    return {
        props: {
            users
        },
        revalidate: 60,
    };
}
