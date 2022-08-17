import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

const Skeleton = () => {
	return (
		<div className="w-full pt-10">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				{/* Empty div for translucent overlay */}
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-4 lg:grid-cols-5 md:gap-8 pt-8">
				<div className="col-span-3 lg:col-span-4">
					<p className="text-xl tracking-widest uppercase text-[#5651e5] dark:text-[#5651e5]">
						Project
					</p>
					<h2 className="py-2">Overview</h2>
					<p>Description Loading...</p>
				</div>
				<aside className="card col-span-4 md:col-span-1 gap-8">
					<div className="p-2">
						<h6 className="uppercase text-[#5651e5] dark:text-[#5651e5] text-center font-normal tracking-widest pb-2">
							Technologies
						</h6>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								<span>Item</span>
							</p>
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default Skeleton;
