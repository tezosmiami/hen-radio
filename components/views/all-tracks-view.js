import TrackList from '../track-lists/track-list';
import useRadio from '../../hooks/use-radio';
import {useEffect,useState} from 'react';
import {audio} from '../../constants';
import SearchBar from '../track-lists/search-bar';
import useTrack from '../../hooks/use-track';
import useSWR,{useSWRConfig} from 'swr';
import serialise from '../../fetchers/serialiser';
import usePlaylist from '../../hooks/use-playlist';
import ShuffleIcon from '../icons/shuffle-icon';
import ShuffleDisableIcon from '../icons/shuffle-disable-icon';
import styles from './styles.module.css';
import {useRouter} from 'next/router';

const AllTracksView = ({swrKey,fetcher}) => {
    const [shuffle, setShuffle] = useState(false);
    const {data} = useSWR(swrKey, fetcher(shuffle), {use: [serialise],  refreshInterval: !shuffle ? 1000 * 60 * 15 : 0 });
    const {tracks, objkt} = data;
    const {setTracks} = usePlaylist();
    const {controls} = useRadio();
    const {trackState} = useTrack();        
    const {mutate} = useSWRConfig();

    const handleClick = () => {
            setShuffle(!shuffle);
            mutate(swrKey, fetcher(!shuffle), {use: [serialise]})
        }

    if(audio) {
        audio.onended = () => {
            if(!tracks.length) return;
            controls.next(tracks)();
        };
    }
    useEffect(() => {
        setTracks(tracks);
        if(trackState.currentTrack === null || shuffle ) {
      
        const foundIndex = tracks.findIndex(t => t.id === Number(objkt));
        controls.initialiseTrack(tracks)(
            foundIndex !== -1 ? foundIndex : 0)();
            shuffle && audio.play()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tracks]);
 
const router= useRouter();

    if(!tracks) return <p>Loading...</p>;
    return (
        <>
            <SearchBar/>
            {router.pathname==='/' &&<button onClick={handleClick} className={`${styles.button_shuffle} ${styles.button}`}>
                {shuffle ? <ShuffleDisableIcon/> : <ShuffleIcon />}
            </button>}
            <TrackList tracks={tracks}/>
        </>
    );
};

export default AllTracksView;


