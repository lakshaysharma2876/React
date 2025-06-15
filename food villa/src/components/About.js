import { Link } from "react-router";

const About = () => {
    return (
        <div>
        <h1>This is About Us Page</h1>
        <h2>Want to know about the user, click here :
            <Link to = "user"> User</Link>
        </h2>
        <h2>Want to know about the Admin, click here :
            <Link to = "admin">  Admin</Link>
        </h2>
        </div>
    )
}

export default About;