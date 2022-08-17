import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useTheme } from 'next-themes';

import ConnectBtns from './ConnectBtns';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);

		const handleNavShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleNavShadow);
	}, []);

	const handleNav = () => {
		setNav(!nav);
	};

	const handleChangeTheme = () => {
		if (!mounted) return null;

		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	return (
		<div className={shadow ? 'nav shadow-xl' : 'nav'}>
			{/* Desktop Nav */}
			<header
				className={
					nav
						? 'hidden'
						: 'flex justify-between items-center w-full h-full px-2'
				}
			>
				<div className="px-5">
					<Link href="/">
						<a>
							<Image
								className="cursor-pointer"
								src="/assets/ek-logo.png"
								alt="Eli's Logo"
								width="48"
								height="48"
							/>
						</a>
					</Link>
				</div>
				<nav className="flex items-center h-full min-h-full">
					<ul className="hidden md:flex h-full">
						<Link href="/">
							<a>
								<li className="group h-full flex items-center">
									<span className="mx-5 py-1 border-b-2 border-transparent group-hover:border-[#5451e5] uppercase text-sm">
										Home
									</span>
								</li>
							</a>
						</Link>
						<Link href="/#about">
							<a>
								<li className="group h-full flex items-center">
									<span className="mx-5 py-1 border-b-2 border-transparent group-hover:border-[#5451e5] uppercase text-sm">
										About
									</span>
								</li>
							</a>
						</Link>
						<Link href="/#skills">
							<a>
								<li className="group h-full flex items-center">
									<span className="mx-5 py-1 border-b-2 border-transparent group-hover:border-[#5451e5] uppercase text-sm">
										Skills
									</span>
								</li>
							</a>
						</Link>
						<Link href="/#projects">
							<a>
								<li className="group h-full flex items-center">
									<span className="mx-5 py-1 border-b-2 border-transparent group-hover:border-[#5451e5] uppercase text-sm">
										Projects
									</span>
								</li>
							</a>
						</Link>
						<Link href="/#contact">
							<a>
								<li className="group h-full flex items-center">
									<span className="mx-5 py-1 border-b-2 border-transparent group-hover:border-[#5451e5] uppercase text-sm">
										Contact
									</span>
								</li>
							</a>
						</Link>
						<li
							className="group h-full flex items-center"
							onClick={() => handleChangeTheme()}
						>
							<span className="mx-5 py-1 border-b-2 border-transparent group-hover:border-[#5451e5] uppercase text-sm">
								{mounted && (theme === 'dark' ? 'Light' : 'Dark')}
							</span>
						</li>
					</ul>
					<div onClick={handleNav} className="md:hidden pr-4">
						<AiOutlineMenu size={25} />
					</div>
				</nav>
			</header>
			{/* Mobile Nav Menu */}
			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<header
					className={
						nav
							? 'nav-mobile right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] dark:bg-gray-800'
							: 'nav-mobile right-[-100%] top-0'
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image
								src="/assets/ek-logo.png"
								alt="Eli's Logo"
								width="48"
								height="48"
							/>
							<div onClick={handleNav} className="btn-round p-3 cursor-pointer">
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let&apos;s build something amazing
							</p>
						</div>
					</div>
					<nav>
						<ul className="uppercase">
							<Link href="/">
								<a>
									<li className="py-4 text-sm" onClick={handleNav}>
										Home
									</li>
								</a>
							</Link>
							<Link href="/#about">
								<a>
									<li className="py-4 text-sm" onClick={handleNav}>
										About
									</li>
								</a>
							</Link>
							<Link href="/#skills">
								<a>
									<li className="py-4 text-sm" onClick={handleNav}>
										Skills
									</li>
								</a>
							</Link>
							<Link href="/#projects">
								<a>
									<li className="py-4 text-sm" onClick={handleNav}>
										Projects
									</li>
								</a>
							</Link>
							<Link href="/#contact">
								<a>
									<li className="py-4 text-sm" onClick={handleNav}>
										Contact
									</li>
								</a>
							</Link>
							<li className="py-4 text-sm" onClick={handleChangeTheme}>
								{mounted && theme === 'dark' ? 'Light' : 'Dark'}
							</li>
						</ul>
						<div className="pt-[5rem]">
							<p className="uppercase tracking-widest text-center text-[#5651e5] dark:text-[#5651e5]">
								Connect With Me
							</p>
							<ConnectBtns size="p-3" />
						</div>
					</nav>
				</header>
			</div>
		</div>
	);
};

export default Navbar;
