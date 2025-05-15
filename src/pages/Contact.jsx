import React from 'react'

const Contact = () => {
    return (
        <div className="max-w-2xl mx-auto p-5">
            <h1 className="text-center text-2xl font-bold mb-5">Contact Me</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">Name:</label>
                    <input type="text" id="name" name="name" required className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">Email:</label>
                    <input type="email" id="email" name="email" required className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">Message:</label>
                    <textarea id="message" name="message" rows="5" required className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-5 rounded-md cursor-pointer border-none">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact
