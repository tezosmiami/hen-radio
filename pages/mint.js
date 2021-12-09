import Head from 'next/head';
import Minter from '../components/mint/minter';

const Mint = () => {
        const title = 'Hen Radio Minter';
        const description = 'Mint audio NFTs at radio.hicetnunc.miami';
        const image = 'https://radio.hicetnunc.miami/images/hen-radio-logo-social.png';
        const url = 'https://radio.hicetnunc.miami';

        return <>
            <Head>
                <meta charSet="utf-8"/>
                <title>Hen Radio | Mint</title>
                <meta name="description" content={description}/>
                <link rel="canonical" href={`http://radio.hicetnunc.miami/mint`}/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@hen_radio"/>
                <meta name="twitter:creator" content="@hen_radio"/>
                <meta name="twitter:title" content={title}/>
                <meta
                    name="twitter:description"
                    content={description}
                />
                <meta
                    name="twitter:image"
                    content={image}
                />
                <meta property="og:title" content={title}/>
                <meta property="og:url" content={url}/>
                <meta property="og:type" content="gallery"/>
                <meta
                    property="og:description"
                    content={description}
                />
                <meta
                    property="og:image"
                    content={image}
                />
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Minter/>
        </>;
    }
;

export default Mint;
