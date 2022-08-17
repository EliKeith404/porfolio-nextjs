import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import ConnectBtns from './ConnectBtns';

const Contact = () => {
	return (
		<section id="contact" className="w-full md:h-screen p-2 md:pt-[30rem]">
			<div className="max-w-[1240px] mx-auto px-2 py-16 flex flex-col justify-center h-full">
				<span className="text-xl tracking-widest uppercase text-[#5651e5]">
					Contact
				</span>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* Left */}
					<div className="card col-span-3 lg:col-span-2">
						<div className="lg:p-4 h-full">
							<div className="text-center">
								<Image
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src="/assets/workstation.jpg"
									alt="/"
									width="6000"
									height="4000"
								/>
							</div>
							<div>
								<h3 className="text-[30px] py-2">Eli-Keith Bass</h3>
								<p>Fullstack Developer</p>
								<p className="py-4">
									I am available for freelance or full-time positions. Please
									fill out the form or reach out on LinkedIn if you&apos;d like
									to get in touch!
								</p>
							</div>
							<div>
								<p className="uppercase text-center pt-8 text-[#5651e5] dark:text-[#5651e5]">
									Connect with me
								</p>
								<ConnectBtns size="p-6" />
							</div>
						</div>
					</div>
					{/* Right */}
					<div className="card col-span-3 lg:p-4">
						<div className="p-4">
							<form>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label htmlFor="" className="uppercase text-sm py-2">
											Name
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											name=""
											id=""
										/>
									</div>
									<div className="flex flex-col">
										<label htmlFor="" className="uppercase text-sm py-2">
											Phone Number
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											name=""
											id=""
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2" htmlFor="">
										Email
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
										name=""
										id=""
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2" htmlFor="">
										Subject
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="text"
										name=""
										id=""
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2" htmlFor="">
										Message
									</label>
									<textarea
										className="border-2 rounded-lg p-3 border-gray-300"
										name=""
										id=""
										cols="30"
										rows="10"
									></textarea>
								</div>
								<button className="w-full p-4 mt-4 text-gray-100">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center flex-col py-12">
					<Link href="/#home">
						<div className="btn-round hover-grow p-4">
							<HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
						</div>
					</Link>
					<div>
						<p className="uppercase mt-2 text-sm text-gray-600">Back to top</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
