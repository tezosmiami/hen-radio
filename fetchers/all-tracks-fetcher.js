import getAllTracks from '../api/get-all-tracks';
import getAllTracksCount from '../api/get-all-tracks-count';
import {getBlockedTracks, getBlockedWallets} from '../api/get-blocked-lists';
import searchAllTracks from '../api/search-all-tracks';
import searchAllTracksCount from '../api/search-all-tracks-count';
import filterBannedTracks from '../utilities/filter-banned-tracks';

export const allTracksApi = '/api/tracks';


function shuffleTracks(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  

const allTracksFetcher= async(shuffle, url = allTracksApi, page = 1, search = '') => {
    page = page > 0 ? page : 1;
    const limit = shuffle === true ? null : 250;
    const [allTracks, total, blockedObjkts, blockedWallets] = await Promise.all(
        [
            !search ? getAllTracks(page, limit) : searchAllTracks(page, limit, search),
            !search ? getAllTracksCount() : searchAllTracksCount(search),
            getBlockedTracks(),
            getBlockedWallets()
        ]);

    var tracks = filterBannedTracks(
        allTracks,
        blockedWallets,
        blockedObjkts
    );

    if (shuffle===true) {tracks = shuffleTracks(tracks)};
    console.log(tracks)
    return {tracks, page, search, total, limit};
};

export default allTracksFetcher;
