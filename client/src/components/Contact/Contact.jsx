import React from 'react'
import "./Contact.scss"
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Pinterest from '@mui/icons-material/Pinterest'
import Google from '@mui/icons-material/Google'

const Contact = () => {
    return (
        <div className="contact">
            <div className="wrapper">
                <span>
                    BE IN TOUCH WITH US
                </span>
                <div className="mail">
                    <input type="text" placeholder="Enter your email" />
                    <button>JOIN US</button>
                </div>
                
                <div className="icons">
                    <Facebook />
                    <Instagram />
                    <Google />
                    <Twitter />
                    <Pinterest />
                </div>

            </div>
        </div>
    )
}

export default Contact;
