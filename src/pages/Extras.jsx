import { extras } from '../data/extras';
import { FaTrophy } from 'react-icons/fa';

const Extras = () => {
    return (
        <div className="py-20 px-4 min-h-screen text-gray-100">
            <h2 className="text-4xl md:text-5xl text-center mb-16 font-extrabold tracking-tight">
                Extra <span className="text-gray-400">Activities</span>
            </h2>

            <div className="max-w-6xl mx-auto space-y-16">
                {/* Hackathons Section */}
                <div className="space-y-8">
                    <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-200">Hackathons</h3>

                    {/* Won Hackathons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {extras.Hackathons.won.map((hackathon, index) => (
                            <div key={index} className="backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 shadow-xl hover:shadow-gray-500/30 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <FaTrophy className="text-yellow-500 text-2xl flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-200">{hackathon.name}</h4>
                                        <p className="text-yellow-400/90 font-medium mt-1">{hackathon.position}</p>
                                        <p className="text-gray-400 mt-2">{hackathon.description}</p>
                                        <p className="text-gray-500 mt-2">Prize: {hackathon.prize}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hosted Hackathons */}
                    <div className="space-y-8 flex flex-col items-center">
                        <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-200">Hosted Hackathons</h3>

                        <div className="max-w-xl">
                            {extras.Hackathons.hosted.map((hackathon, index) => (
                                <div key={index} className="backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 shadow-xl">
                                    <h4 className="text-lg font-semibold text-gray-200">{hackathon.name}</h4>
                                    <p className="text-gray-400 mt-2">{hackathon.description}</p>
                                    <p className="text-gray-500 mt-2 text-sm">{hackathon.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="space-y-8">
                    <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-200">Certifications</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {extras.Certifications.map((cert, index) => (
                            <div key={index} className="backdrop-blur-sm bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 shadow-xl hover:shadow-gray-500/30 transition-all duration-300">
                                <h4 className="text-xl font-semibold text-gray-200">{cert.name}</h4>
                                <p className="text-gray-400 mt-1">{cert.issuer}</p>
                                <p className="text-gray-400 mt-2">{cert.description}</p>
                                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                                    <span>Credential ID: {cert.credentialId}</span>
                                    <span>{cert.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extras;
