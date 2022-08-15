import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push('/');
		}, 5000);

		return () => clearTimeout(timer);
	});

	return (
		<section className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Are you lost?
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, You <span className="text-[#5651e5]">404</span>&apos;d
					</h1>
					<h2 className="py-2 text-gray-700">Page Not Found</h2>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						Hmm it seems this page doesn&apos;t exist. Don&apos;t worry,
						I&apos;ll get you back on track! Redirecting you to the{' '}
						<Link href="/">
							<a className="text-[#5651e5] underline">homepage</a>
						</Link>{' '}
						very shortly.
					</p>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
