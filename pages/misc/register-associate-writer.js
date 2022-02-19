import RegisterForm from "../../sections/misc/RegisterForm"
var slugify = require('voca/slugify');
var snakeCase = require('voca/snake_case');

const position = "Associate Writer"

function Form() {
    const registerUser = async event => {
      event.preventDefault()
  

      const body = JSON.stringify({
        username: `0${snakeCase(position)}_${snakeCase(event.target.name.value)}`,
        email: event.target.email.value,
        password: "password",
        name: event.target.name.value,
        position_title: position,
        education_course: event.target.education_course.value,
        education_university: event.target.education_university.value,
        socials_linkedin: event.target.socials_linkedin.value,
        socials_facebook: event.target.socials_facebook.value,
        socials_twitter: event.target.socials_twitter.value,
        socials_instagram: event.target.socials_instagram.value,
        bio: event.target.bio.value,
        public_id: `${slugify(event.target.name.value)}-${Math.floor(Math.random() * (1000 - 100) + 100)}`,
      })

      const res = await fetch(
        'https://admin.thebaton.in/auth/local/register',
        {
          body: body,
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )
  
      const result = await res.json()

      // window popup if successful
      if (result.jwt) {
        alert("congratulations! you are now registered!")
      } else {
        alert(result.message[0].messages[0].message)
      }
    }

    
    return (
      <>
      <div id="page-content">
      <div className="tb-section no-padding-bottom">
          <div className="tb-section-inner">
          <div className="section-title text-center">
            <h2 className="title">Register as {position}</h2>
        </div>
          <RegisterForm handleSubmit={registerUser} position={position} />
          </div>
      </div>
      </div>
      </>
    )
}

export default Form