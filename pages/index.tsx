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

			<main>Hello</main>
		</>
	);
};

export default Home;
