import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import ConnectBtns from './ConnectBtns';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	return (
		<nav
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]'
					: 'fixed w-full h-20 z-[100] bg-[#ecf0f3]'
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Link href="/#home">
					<Image
						className="cursor-pointer"
						src=""
						alt="Eli's Logo"
						width="125"
						height="50"
					/>
				</Link>
				<div>
					<ul className="hidden md:flex pr-4">
						<Link href="/">
							<li className="ml-10 text-sm uppercase border-b-[3px] border-transparent hover:border-[#5451e5]">
								Home
							</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase border-b-[3px] border-transparent hover:border-[#5451e5]">
								About
							</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase border-b-[3px] border-transparent hover:border-[#5451e5]">
								Skills
							</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase border-b-[3px] border-transparent hover:border-[#5451e5]">
								Projects
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-10 text-sm uppercase border-b-[3px] border-transparent hover:border-[#5451e5]">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden pr-4">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed right-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image src="" alt="Eli's Logo" width="87" height="35" />
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">Hello</p>
						</div>
					</div>
					<div>
						<ul className="uppercase">
							<Link href="/">
								<li className="py-4 text-sm" onClick={handleNav}>
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li className="py-4 text-sm" onClick={handleNav}>
									About
								</li>
							</Link>
							<Link href="/#skills">
								<li className="py-4 text-sm" onClick={handleNav}>
									Skills
								</li>
							</Link>
							<Link href="/#projects">
								<li className="py-4 text-sm" onClick={handleNav}>
									Projects
								</li>
							</Link>
							<Link href="/#contact">
								<li className="py-4 text-sm" onClick={handleNav}>
									Contact
								</li>
							</Link>
						</ul>
						<div className="pt-[7rem]">
							<p className="uppercase tracking-widest text-center text-[#5651e5]">
								Connect With Me
							</p>
							<ConnectBtns size="p-3" />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
