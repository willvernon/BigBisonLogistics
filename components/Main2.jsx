import React from 'react';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
	return (
		//Background div
		<div className=' container  '>
			<div className=' row d-flex place-items-center '>
				<div class=' ml-16 grid h-full   sm:grid-cols-3 sm:grid-rows-[min-content,1fr]'>
					<div class='order-first m-2  sm:order-none sm:col-span-2'></div>

					<div class=' m-2 mr-36 sm:col-span-2'>
						<div>
							<h6 className='pb-3  uppercase text-gray-400 '>
								About BBLGX
							</h6>
							<h4 className='pb-3  font-black font-sans text-black  '>
								More than the individual - we are team focused
								to achieve success.
							</h4>
							<br />
							<p className=''>
								While the Founder of Big Bison Logistics has
								over 20 years of experience in law enforcement,
								intelligence, special events and personal
								security industry - Big Bison is about the team.
								We're nimble and we're small because we hire
								teammates through referrals, not <i>Indeed</i>.
							</p>
							<br />
							<p>
								Every team member is personally vetted by the
								founder before they are trained by our team to
								ensure new teammates have values aligned with
								ours; Integrity, Morals, Flexibility, and
								Extreme Ownership are building blocks of our
								culture of service to others.{' '}
							</p>
							<div className=' pt-6 text-center '>
								<button className='w-[50%] h-[55px] '>
									{' '}
									Request Risk Assessment{' '}
								</button>
							</div>
						</div>
					</div>
					<div class='text-center  sm:row-span-2 m-2'>
						<div className='lg:visible md:visible sm:invisible'>
							<Image
								src='/../public/assets/about.png'
								width='600'
								height='665'
								alt='About image'
							/>
						</div>
					</div>
				</div>

				<div class='about-content'>
					<div class='about-content-text'></div>
				</div>
				<div class='col-lg-5 offset-lg-1 col-md-12 col-sm-12'>
					<div class='about-image'>
						<div class='years-design'>
							<h2>20+</h2>
							<h5>Years Experience</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
