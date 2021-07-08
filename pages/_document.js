import Document, { Head, Main, NextScript, Html } from 'next/document';
import { renderStatic } from 'glamor/server';

export default class MyDocument extends Document {
	static async getInitialProps({ renderPage }) {
		const page = renderPage();
		const styles = renderStatic(() => page.html);
		return { ...page, ...styles };
	}

	constructor(props) {
		super(props);
		const { __NEXT_DATA__, ids } = props;
		if (ids) {
			__NEXT_DATA__.ids = this.props.ids;
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<title>The Cold North</title>
					<link rel="icon" type="image/png" sizes="32x32" href="./static/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="./static/favicon-96x96.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="./static/favicon-16x16.png" />
					<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=optional" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Spectral:200,300&display=optional" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Open+Sans:200,300&display=optional" rel="stylesheet" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<style dangerouslySetInnerHTML={{ __html: this.props.css }} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
