const RegisterForm = ({
    handleSubmit,
    position
}) => {
    return (
        <>
        <div className="tb-section padding-bottom-xlg-150">
            <div className="tb-section-inner tb-wrap max-width-800">
                <form 
                    onSubmit={handleSubmit}
                    className="tb-form-lg"
                >
                    <div className="tb-form-group">
                        <label>Name*</label>
                        <input className="tb-form-control" id={88733492} type="text" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="tb-form-group">
                        <label>Email address*</label>
                        <input className="tb-form-control" id={17876522} type="email" name="email" placeholder="Enter your email" required />
                        <small className="tb-form-text">This is the email that will be visible on the website.</small>
                    </div>
                    <div className="tb-form-group">
                        <label>Position*</label>
                        <input className="tb-form-control" id={33564998} type="text" placeholder={position} disabled />
                    </div>
                    <div className="tb-form-group">
                        <label>Education Course*</label>
                        <input className="tb-form-control" id={33564998} type="text" name="education_course" placeholder="Enter your education course" required />
                        <small className="tb-form-text">Example: B.A. LL.B.</small>
                    </div>
                    <div className="tb-form-group">
                        <label>Education Institution*</label>
                        <input className="tb-form-control" id={33564998} type="text" name="education_university" placeholder="Enter your institution" required />
                    </div>
                    <div className="tb-form-group">
                        <label>Bio</label>
                        <textarea className="tb-form-control" id={67300957} rows={6} name="bio" placeholder="Enter your bio" defaultValue={""} />
                    </div>

                    <div className="tb-form-group">
                        <label>LinkedIn</label>
                        <input className="tb-form-control" id={67300957} type="url" name="socials_linkedin" placeholder="Enter your linkedin profile url" />
                    </div>

                    <div className="tb-form-group">
                        <label>Twitter</label>
                        <input className="tb-form-control" id={67300957} type="url" name="socials_twitter" placeholder="Enter your twitter profile url" />
                    </div>

                    <div className="tb-form-group">
                        <label>Facebook</label>
                        <input className="tb-form-control" id={67300957} type="url" name="socials_facebook" placeholder="Enter your facebook profile url" />
                    </div>

                    <div className="tb-form-group">
                        <label>Instagram</label>
                        <input className="tb-form-control" id={67300957} type="url" name="socials_instagram" placeholder="Enter your instagram profile url" />
                    </div>
                    
            <div className="tb-btn tb-btn-dark-outline">
                <button type="submit" data-hover="Register">Register</button>
            </div>
        </form>
    </div>
    </div>
    </>
)};

export default RegisterForm;