import Head from 'next/head';
import UserBioSection from '../../sections/team/UserBioSection';
import UserHeroSection from '../../sections/team/UserHeroSection';
import UserSocialSection from '../../sections/team/UserSocialSection';
import UserInfoSection from '../../sections/team/UserSocialSection';
import UserWorksHeadingSection from '../../sections/team/UserWorksHeadingSection';
import UserWorksSection from '../../sections/team/UserWorksSection';

export default function Team(props) {
    return (
        <>
            <Head>
                <title>Team | TheBaton</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="TheBaton is a socio-political blog that focuses on the issues of the current state of the world." />
            </Head>

            <UserHeroSection data={props.team}/>

            <div id="page-content">
                <UserBioSection data={props.team}/>
                <div className="tb-section no-padding-bottom">
                    <div className="tb-section-inner">
                        <UserWorksHeadingSection title="Editorials" />
                        <UserWorksSection data={props.team.editorials}/>
                        <UserWorksHeadingSection title="Blogposts" />
                        <UserWorksSection data={props.team.blogposts}/>
                    </div>
                </div>
            </div>

        </>
    );
}

export async function getStaticProps( { params } ) {
    const pid = params.pid
    const res = await fetch(`https://admin.thebaton.in/users?public_id=${pid}`).then(res => res.json());
    return {
        props: {
            team: res
        }
        }
    };

export async function getStaticPaths() {
        const users = await fetch('https://admin.thebaton.in/users').then(res => res.json());
        return {
          paths: users.map(user => {
            const pid = user.public_id;
            return {
              params: {
                pid
              }
            }
          }),
          fallback: false
        }
      }
      