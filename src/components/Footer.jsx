import Socials from './Socials';
import personalData from '../data/personal.json';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-gray-400 py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm mb-4 md:mb-0">
                &copy; {currentYear} {personalData.name}. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
