import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	//   const initialProps = await Document.getInitialProps(ctx)
	//   return { ...initialProps }
	// }

	render() {
		return (
			<Html lang='id'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body className='bg-gradient-to-r from-green to-blue-500 dark:from-dark-700 dark:to-dark-700 dark:text-white'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
