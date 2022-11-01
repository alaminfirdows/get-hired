import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	const peoples: Array<any> = require('../peoples/a.json');
	console.log(peoples);

	return (
		<>
			<Head>
				<title>Get Hired</title>
				<meta
					name='description'
					content='Public repository for experienced developers to be hired'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className='max-w-6xl mx-auto'>
					<div className='h-14 border-b items-center border-gray-700 flex justify-between px-3 lg:px-0'>
						<h1 className='text-xl'>Awesome Peoples</h1>
						<div></div>
					</div>
				</div>

				<div className='max-w-6xl mx-auto py-6 px-3 lg:px-0'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
						{peoples.length &&
							peoples.map((people, i) => {
								return (
									<div
										key={i}
										className='border border-gray-500 p-4 rounded-md bg-slate-800'>
										<h3 className='text-xl'>
											{people.name}
										</h3>

										<div className='mt-2'>
											<p className='text-sm'>
												{people.email}
											</p>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
