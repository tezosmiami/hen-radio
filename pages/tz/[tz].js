import WalletView from '../../components/views/wallet-view';
import Head from 'next/head';
import getWalletsWithAudio from '../../api/get-wallets-with-audio';

export const getServerSideProps = async({params}) => {
    const wallets = await getWalletsWithAudio();

    return {props: {wallets}};
};

const Tz = ({wallets}) => {
    const title = 'Listen to Hen Radio';
    const description = 'Hic et Nunc audio NFT audio player and playlists';
    const image = 'https://hen.radio/_next/image?url=%2Fimages%2Fplaylist-default.png&w=256&q=75';
    const url = 'https://hen.radio/tz';

    return <>
        <Head>
            <meta charSet="utf-8"/>
            <title>Wallets | Hen Radio</title>
            <link rel="canonical" href={`http://hen.radio/tz`}/>
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
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <WalletView wallets={wallets}/>
    </>;
};

export default Tz;
