// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import NavLogo from '../public/assets/logo-stacked2.png';
// import { useRouter } from 'next/router';

// const Navbar = () => {
// 	const [nav, setNav] = useState(false);
// 	const [shadow, setShadow] = useState(false);
// 	const [navBg, setNavBg] = useState('#ecf0f3');
// 	const [linkColor, setLinkColor] = useState('#1f2937');
// 	const [position, setPosition] = useState('fixed')
// 	const router = useRouter();

// 	useEffect(() => {
// 	  if (
// 	    router.asPath === '#Main2.jsx' ||
// 	    router.asPath === '/crypto' ||
// 	    router.asPath === '/netflix' ||
// 	    router.asPath === '/twitch'
// 	  ) {
// 	    setNavBg('white');
// 	    setLinkColor('#black');
// 	  } else {
// 	    setNavBg('transparent');
// 	    setLinkColor('#ecf0f3');
// 	  }
// 	}, [router]);
// 	const handleNav = () => {
// 		setNav(!nav);
// 	};

// 	useEffect(() => {
// 		const handleShadow = () => {
// 			if (window.scrollY >= 90) {
// 				setShadow(true);
// 			} else {
// 				setShadow(false);
// 			}
// 		};
// 		window.addEventListener('scroll', handleShadow);
// 	}, []);

// 	return (
// 		<div
// 			style={{ backgroundColor: `${navBg}` }}
// 			className={
// 				shadow
// 					? 'fixed w-full h-0 shadow-md  z-[100] ease-in-out duration-300'
// 					: 'fixed w-full h-[65px] z-[100]'
// 			}>
// 			<div className='flex justify-between items-center w-full h-full px-8 2xl:px-16'>
// 				<Link href='/'>
// 					<a className='pt-2'>
// 						<Image
// 							src={NavLogo}
// 							alt='/'
// 							width='150%'
// 							height='40%'
// 							className='cursor-pointer'
// 						/>
// 					</a>
// 				</Link>
// 				<div>
// 					<ul
// 						style={{ color: `${linkColor}` }}
// 						className='hidden md:flex p-6'>
// 						<li className='ml-5 text-sm  hover:border-b'>
// 							<Link href='/'>Home</Link>
// 						</li>
// 						<li className='ml-5 text-sm  hover:border-b'>
// 							<Link href='/#about'>About Us</Link>
// 						</li>
// 						<li className='ml-5 text-sm  hover:border-b'>
// 							<Link href='/#skills'>Services</Link>
// 						</li>

// 						<li className='ml-5 text-sm  hover:border-b'>
// 							<Link href='/#contact'>Contact</Link>
// 						</li>
// 					</ul>
// 					{/* Hamburger Icon */}
// 					<div
// 						style={{ color: `${linkColor}` }}
// 						onClick={handleNav}
// 						className='md:hidden'>
// 						<AiOutlineMenu size={25} />
// 					</div>
// 				</div>
// 			</div>

// 			{/* Mobile Menu */}
// 			{/* Overlay */}
// 			<div
// 				className={
// 					nav
// 						? 'md:hidden fixed left-0 top-0 w-full h-screen bg-[#222222]]'
// 						: ''
// 				}>
// 				{/* Side Drawer Menu */}
// 				<div
// 					className={
// 						nav
// 							? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#F7F7F7] p-10 ease-in duration-500'
// 							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
// 					}>
// 					<div>
// 						<div className='flex w-full items-center justify-between'>
// 							<Link href='/'>
// 								<a>
// 									<Image
// 										src={NavLogo}
// 										width='87'
// 										height='35'
// 										alt='/'
// 									/>
// 								</a>
// 							</Link>
// 							<div
// 								onClick={handleNav}
// 								className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
// 								<AiOutlineClose />
// 							</div>
// 						</div>
// 						<div className='border-b border-gray-300 my-4'>
// 							<p className='w-[85%] md:w-[90%] py-4'>
// 								Let&#39;s build something legendary together
// 							</p>
// 						</div>
// 					</div>
// 					<div className='py-4 flex flex-col'>
// 						<ul className='uppercase'>
// 							<Link href='/'>
// 								<li
// 									onClick={() => setNav(false)}
// 									className='py-4 text-sm'>
// 									Home
// 								</li>
// 							</Link>
// 							<Link href='/#about'>
// 								<li
// 									onClick={() => setNav(false)}
// 									className='py-4 text-sm'>
// 									About
// 								</li>
// 							</Link>
// 							<Link href='/#skills'>
// 								<li
// 									onClick={() => setNav(false)}
// 									className='py-4 text-sm'>
// 									Skills
// 								</li>
// 							</Link>
// 							<Link href='/#projects'>
// 								<li
// 									onClick={() => setNav(false)}
// 									className='py-4 text-sm'>
// 									Projects
// 								</li>
// 							</Link>
// 							<Link href='/resume'>
// 								<li
// 									onClick={() => setNav(false)}
// 									className='py-4 text-sm'>
// 									Resume
// 								</li>
// 							</Link>
// 							<Link href='/#contact'>
// 								<li
// 									onClick={() => setNav(false)}
// 									className='py-4 text-sm'>
// 									Contact
// 								</li>
// 							</Link>
// 						</ul>
// 						<div className='pt-40'>
// 							<p className='uppercase tracking-widest text-[#F7F7F7]'>
// 								Let&#39;s Connect
// 							</p>
// 							<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
// 								<a
// 									href='https://www.linkedin.com/in/clint-briley-50056920a/'
// 									target='_blank'
// 									rel='noreferrer'>
// 									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
// 										<FaLinkedinIn />
// 									</div>
// 								</a>
// 								<a
// 									href='https://github.com/fireclint'
// 									target='_blank'
// 									rel='noreferrer'>
// 									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
// 										<FaGithub />
// 									</div>
// 								</a>
// 								<Link href='/#contact'>
// 									<div
// 										onClick={() => setNav(!nav)}
// 										className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
// 										<AiOutlineMail />
// 									</div>
// 								</Link>
// 								<Link href='/resume'>
// 									<div
// 										onClick={() => setNav(!nav)}
// 										className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
// 										<BsFillPersonLinesFill />
// 									</div>
// 								</Link>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import NavLogo from '../public/assets/logo-stacked2-white.png';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#ecf0f3');
	const [linkColor, setLinkColor] = useState('#ecf0f3');
	const [position, setPosition] = useState('fixed');

	useEffect(() => {
		const handleColor = () => {
			if (window.scrollY >= 90) {
				setNavBg('white');
				setLinkColor('#1f2937');
			} else {
				setNavBg('transparent');
				setLinkColor('#ecf0f3');
			}
		};
		window.addEventListener('scroll', handleColor);
	}, []);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
					: 'fixed w-full h-20 z-[100]'
			}>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Link href='/'>
					<a className='pl-6 '>
						<Image
							src={NavLogo}
							alt='/'
							width='175'
							height='50'
							className='cursor-pointer'
						/>
					</a>
				</Link>
				<div>
					<ul
						style={{ color: `${linkColor}` }}
						className='hidden md:flex pr-16'>
						<li className='ml-4 text-md  hover:border-b'>
							<Link href='/'>Home</Link>
						</li>
						<li className='ml-4 text-md  hover:border-b'>
							<Link href='/#about'>About Us</Link>
						</li>
						<li className='ml-4 text-md  hover:border-b'>
							<Link href='/#skills'>Services</Link>
						</li>

						<li className='ml-4 text-md  hover:border-b'>
							<Link href='/#contact'>Contact</Link>
						</li>
					</ul>
					{/* Hamburger Icon */}
					<div
						style={{ color: `${linkColor}` }}
						onClick={handleNav}
						className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen' : ''
				}>
				{/* Side Drawer Menu */}
				<div
					className={
						nav
							? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#222222] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Link href='/'>
								<a>
									<Image
										src='/../public/assets/WhiteGold_logistics.png'
										width='100%'
										height='90%'
										alt='/'
										quality={100}
									/>
								</a>
							</Link>
							<div
								onClick={handleNav}
								className='rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer'>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-[85%] md:w-[90%] py-2'>
								Let&#39;s work together
							</p>
						</div>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className=''>
							<Link href='/'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-3xl'>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-3xl'>
									About Us
								</li>
							</Link>
							<Link href='/#skills'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-3xl'>
									Services
								</li>
							</Link>

							<Link href='/#contact'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-3xl'>
									Contact
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
