import about1 from '../images/about1.png'
import about2 from '../images/about2.jpg'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
function About(){
    return(
        <>
            <center>
        <div className='body'>
        <div className="container">
            <div className="left"><img src={about1} className="aboutimg" alt="Companies"></img></div>
            <div className="center">
            <br></br><br></br><br></br>
            <h2><b>About Us</b></h2><br></br>
            <p class=".fs-6 text .text-info-emphasis">GLOBAL UNITED ENTERPRISES LLC has accumulated a strong and healthy market trust through our strategies and principles. 
                Customer satisfaction is the ultimate goal of our company. The company has been engaged in the export and 
            distribution of a wide range of Safety Equipment and product to various countries across the world since 2006.</p>
            <br></br><br></br><br></br>
            </div>
            <div className='right'><img src={about2} className="aboutimg" alt="Certification"></img></div>
            </div></div></center>
        </>
    );
}
export default About;