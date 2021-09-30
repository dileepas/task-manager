import {Link, useLocation, useParams} from "react-router-dom"
const About = () => {

    return (
        <div>
            <h4>Version 1.0</h4>
             <Link to= '/'>Go back</Link>
        </div>
    )
}

function BlogPost() {
    let { slug } = useParams();
    return <div>Now showing post {slug}</div>;
}

export default About