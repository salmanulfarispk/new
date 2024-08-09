

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>

            <footer className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2">
                        <div
                            className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
                        >
                            <div className="block text-teal-600 lg:hidden">
                                 <img src="/club.svg" />
                            </div>

                            <div className="mt-8 space-y-4 lg:mt-0">
                                <span className="hidden h-1 w-10 rounded bg-graybg lg:block"></span>

                                <div>
                                    <h2 className="text-2xl font-medium text-gray-900">Get in Touch</h2>

                                    <p className="mt-4 max-w-lg text-gray-500">
                                        Have any questions or need support with your booking?
                                        Feel free to send us an email. Our dedicated team is here to assist with all your inquiries, from room details to special requests. We aim to provide
                                        timely and helpful responses to ensure your experience is seamless and enjoyable.
                                    </p>
                                </div>

                                <form className="mt-6 w-full">
                                    <label for="UserEmail" className="sr-only"> Email </label>

                                    <div
                                        className="rounded-md border mb-3 border-gray-100 p-2 focus-within:ring-2 focus-within:ring-graybg sm:flex sm:items-center sm:gap-4"
                                    >
                                        <input
                                            type="email"
                                            id="UserEmail"
                                            placeholder="@gmail.com"
                                            className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                                        />

                                    </div>
                                    <label for="UserMessage" className="sr-only"> Message </label>
                                    <div
                                        className="rounded-md border mb-3 border-gray-100 p-2 focus-within:ring-2 focus-within:ring-graybg  sm:flex sm:items-center sm:gap-4"
                                    >
                                        <textarea
                                            id="UserMessage"
                                            placeholder="Type your message here"
                                            className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                                        ></textarea>


                                    </div>

                                    <div className="w-full p-4 flex justify-end">
                                        <button
                                            className="w-full rounded bg-gray-800 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-black/80 sm:w-auto"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="py-8 lg:py-16 lg:pe-16">
                            <div className="hidden text-teal-600 lg:block">
                                <img src="/club.svg" />
                            </div>

                            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                                <div>
                                    <p className="font-medium text-gray-900">Explore</p>

                                    <ul className="mt-6 space-y-4 text-sm">
                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> Responsible Luxury</a>
                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> Offers & Experiences </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> The Luxury Collection </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> Wellness </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> IRC Limited </a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-medium text-gray-900">Company</p>

                                    <ul className="mt-6 space-y-4 text-sm">
                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> About </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-medium text-gray-900">Connect With Us</p>

                                    <ul className="mt-6 space-y-4 text-sm">
                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> Contact </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> FAQs </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-700 transition hover:opacity-75"> Live Chat </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-gray-100 pt-8">
                                <ul className="flex flex-wrap gap-4 text-xs">
                                    <li>
                                        <a className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:opacity-75"> Cookies </a>
                                    </li>
                                </ul>

                                <p className="mt-8 text-xs text-gray-500">&copy; {year}. IRC'S LuxeLodgings. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer