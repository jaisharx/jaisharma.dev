import Helmet from '../components/helmet';
import styles from '../styles/contact.module.scss';
import Navbar from '../components/navbar';
import { Fade } from 'react-awesome-reveal';

function Contact() {
    return (
        <>
            <Helmet title="Contact me" description="Social media platforms where you can find me" />
            <Navbar active="contact" isBack="true" />
            <Fade top>
                <div className={styles.container}>
                    <ul>
                        <li>
                            <a
                                href="https://twitter.com/jaisharx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/contact/twitter.png" alt="" /> Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/jaisharx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/contact/github.png" alt="" /> Github
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://dev.to/jaisharx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/contact/devto.png" alt="" /> Dev.to
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://medium.com/@jaisharx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/contact/medium.png" alt="" /> Medium
                            </a>
                        </li>
                        <li>
                            <a href="mailto:sendtojsharma@gmail.com">
                                <img src="/contact/gmail.png" alt="" /> Write a mail
                            </a>
                        </li>
                    </ul>
                </div>
            </Fade>
        </>
    );
}

export default Contact;
