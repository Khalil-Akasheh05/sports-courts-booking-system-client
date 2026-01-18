import "./css/Footer.css"
function Footer(){
    return(
        <footer>
            <div className="copyright">
                <p>Copyright © 2025</p>
            </div>
            <div className="quick-links">
                <ul className="quick-links-list">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div className="social-media-links">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </footer>
    )
}

export default Footer;