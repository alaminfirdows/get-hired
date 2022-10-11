import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
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

			<main className='bg-slate-900 text-white h-screen overflow-hidden overflow-y-auto'>
				<div className='max-w-6xl mx-auto'>
					<div className='h-12 border-b items-center border-gray-700 flex justify-between'>
						<h1 className='text-xl'>Awesome Peoples</h1>
						<div></div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
