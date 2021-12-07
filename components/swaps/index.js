import useTools from '../../hooks/use-tools';
import useToast from '../../hooks/use-toast';
import useTezos from '../../hooks/use-tezos';
import mutezToXtz from '../../utilities/mutez-to-xtz';
import styles from './styles.module.css';
import objktFetcher, {objktFetcherApi} from '../../fetchers/objkt-fetcher';
import useSWR, {mutate} from 'swr';
import serialise from '../../fetchers/serialiser';

const Swaps = ({objktId}) => {
    const {data} = useSWR([objktFetcherApi, objktId], objktFetcher,
        {use: [serialise]});
    const {objkt, tracks, ...rest} = data;

    const {auth} = useTezos();
    const {collect, cancel} = useTools();
    const {setMessage} = useToast();

    const handleCollect = (swapId, xtzAmount) => async() => {
        try {
            setMessage('Transaction in progress…');
            const isSuccessful = await collect(swapId, xtzAmount);
            setMessage(isSuccessful ? 'Purchase Successful' : 'Failed');
            if(isSuccessful) {
                setTimeout(() => {
                    mutate(JSON.stringify([objktFetcherApi, objktId]));
                }, 2500);
            }
        } catch(e) {
            setMessage('Failed');
            console.log('Error: ', e);
        }
        setTimeout(() => {
            setMessage(null);
        }, 3200);
    };

    const handleCancel = (id) => async() => {
        try {
            setMessage('Transaction in progress…');
            const isSuccessful = await cancel(id);
            setMessage(isSuccessful ? 'Swap Cancelled' : 'Failed');
            if(isSuccessful) {
                setTimeout(() => {
                    mutate(JSON.stringify([objktFetcherApi, objktId]));
                }, 2500);
            }
        } catch(e) {
            setMessage('Failed');
            console.log('Error: ', e);
        }
        setTimeout(() => {
            setMessage(null);
        }, 3200);
    };

    return (
        <div className={styles.swapsContainer}>
            {objkt?.swaps?.length ? (
                <>
                    <h2 className={styles.swapTitle}>Swaps</h2>
                    <ul className={styles.swapList}>
                        {objkt.swaps.map((swap, i) => (
                            <li key={swap.id} className={styles.swapListItem}>
                                <p>
                                    Price: {mutezToXtz(swap.price)}xtz
                                    Available: {swap.amount_left}/{swap.amount}<br/>Listed
                                    By: {swap.creator_id}
                                </p>
                                {auth && <p>
                                    {swap.creator_id === auth?.address
                                        ? (
                                            <button
                                                onClick={handleCancel(swap.id)}
                                            >Cancel</button>
                                        ) : (
                                            <button
                                                onClick={handleCollect(swap.id,
                                                    swap.price)}
                                            >Collect</button>
                                        )
                                    }
                                </p>}
                            </li>
                        ))}
                    </ul>
                </>
            ) : null}
        </div>
    );
};

export default Swaps;
