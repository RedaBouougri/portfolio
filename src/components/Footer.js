import React, {useState} from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import "../styles/footer.css"
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



export default function Footer() {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    function handleSubmit() {
        if (email.trim() === '' || subject.trim() === '' || message.trim() === '') {
            const confirmed = window.confirm('Please fill in all fields before submitting.');
            if (!confirmed) {
                return;
            }
        }

        setLoading(true);

        // do your form submission logic here, e.g. with axios
    }

    return (
        <div className="fixed-bottom footer-dark" style={{marginTop:"50",position:'static'}}>
            <footer>
                


                <div style={{ display: 'grid', justifyContent: 'center' }}>

                    <div className="text-center mt-5">
                        



                        <div className="col item social">
                            <a href="https://www.facebook.com/reda.bouougri.7/"><RiFacebookCircleFill/></a>
                            <a href="https://www.linkedin.com/in/bouougri-reda-250846212/"><TiSocialLinkedin/></a>
                            <a href="https://www.instagram.com/bouougri/"><AiFillInstagram/></a>
                        </div>
                    </div>

                    <p className="copyright">Bouougri Reda © 2023</p>
                </div>


            </footer>
        </div>
    );
}
