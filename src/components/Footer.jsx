import Socials from './Socials';
import personalData from '../data/personal.json';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-gray-400 py-6 sm:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <p className="text-sm mb-4 md:mb-0">
                    &copy; {currentYear} {personalData.name}. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0">
                    <Socials />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
