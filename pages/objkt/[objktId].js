import ObjktView from '../../components/views/objkt-view';
import {useRouter} from 'next/router';
import objktFetcher, {objktFetcherApi} from '../../fetchers/objkt-fetcher';
import {SWRConfig} from 'swr';

export const getServerSideProps = async({params}) => {
    const {objktId} = params;
    const {blockedObjkts, blockedWallets, objkt, ...rest} = await objktFetcher(
        objktFetcherApi,
        objktId
    );

    if(blockedObjkts.includes(Number(objktId)) || blockedWallets.includes(objkt.creator.walletAddress)) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            objktId,
            fallback: {
                [JSON.stringify([objktFetcherApi, objktId])]: {objkt, ...rest}
            }
        }
    };
};

const ObjktPage = ({objktId, fallback}) => {
    const {isFallback} = useRouter();

    if(isFallback) {
        if(typeof window !== 'undefined') {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }

        return <p>Loading...</p>;
    }

    return (
        <SWRConfig
            value={{
                fallback,
                refreshInterval: 1000 * 60 * 15
            }}
        >
            <ObjktView objktId={objktId}/>
        </SWRConfig>
    );
};

export default ObjktPage;


