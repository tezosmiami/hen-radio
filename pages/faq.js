const FaqPage = () =>
    <>
        <h1>FAQ</h1>
        <div>
            <p><strong>Q. What is Hen.radio?</strong><br/>
                A. Hen.radio is Hic et Nunc, or HEN, NFT Music Player. It has been created during the first Hicathon in 2021.<br/>
                It aims at making it easier to discover, listen to and reward NFT music artists. See our presentation <a href="https://docs.google.com/presentation/d/1t7zirrVZ0wHu0Fx6HJeGZzsDzS0s5n4TEwT9QdC-by4/edit?usp=sharing"><u>here</u></a>.</p>
            <p><strong>Q. How does the minting work on hen radio?</strong></p>
            <p> A. Mint your audio file (preferably ogg or mp3) as usual on{' '}
                <a href="https://www.hicetnunc.miami/mint">https://www.hicetnunc.miami/mint</a>
            </p>
            <p><strong>Q. Is everything here also work on Hic et Nunc?</strong></p>
            <p>A. Yes, everything on hen.radio will also be available on the main Hic et Nunc
               site</p>
            <p><strong>Q. Is there an app?</strong></p>
            <p>A. Not at the moment. It is optimised for viewing in the mobile browser, but no app yet.</p>
            <p><strong>Q. Why don&apos;t you support video or html music?</strong></p>
            <p>A. Currently technical restrictions are making it difficult to differenciate music HTML from other HTML objkt.</p>
            <p>and handling video is different than handling audio, so it is also difficult to implement at the moment.</p>
            <p><strong>Q. How do I create a playlist?</strong></p>
            <p>A1. To create a local playlist (only visible to you):</p>
            <ol>
                <li>Go to &quot;Playlists&quot; in the top right menu</li>
                <li>Enter a title in the textbox &quot;Playlist Title&quot;</li>
                <li>Click &quot;Create Playlist&quot;</li>
                <li>Add tracks to the playlist by clicking the little &quot;+&quot; button next
                    to each track.
                </li>
                <li>Clicking the link icon will copy the link to the playlist. You can share
                    this link via Twitter or email. For example:
                    {' '}<a href="https://radio.hicetnunc.miami/playlists/178891,11305,10159,8228">https://radio.hicetnunc.miami/playlists/178891,11305,10159,8228</a>
                </li>
            </ol>
            <p>A2. To create a playlist with a cover image and visible to everybody you can message our twitter account
               @hen_radio with:</p>
            <ol>
                <li>The link to the playlist (see above, eg:
                    {' '}<a href="https://radio.hicetnunc.miami/playlists/178891,11305,10159,8228">https://radio.hicetnunc.miami/playlists/178891,11305,10159,8228</a>)
                </li>
                <li>Title of the playlist</li>
                <li>Description</li>
                <li>The playlist creator alias, name or twitter handle</li>
                <li>Cover image in jpeg format</li>
            </ol>
            <p>Playlists are a work in progress, please be patient, we will do our best to include all submissions.</p>
            <p><strong>Q. What is the difference between this site and the OG hen.radio?</strong></p>
            <p>A. Only the visual experience for now  - this one is a hub for the Miami Scene</p>
            <p><strong>Q. How can I contribute? How do we contact Hen.radio?</strong><br/>
                A. <li>Ideas, praises, feedbacks? Here is <a href="https://forms.gle/sajNsHuW9GESQNaFA"><u>the form</u></a>.</li>
                   <li>You can find the HEN Discord from this <a href="https://hicetnunc.miami/about"><u>About page</u></a>, and from there find the hicathon-wg-7-2-hic-radio group.</li>
                   <li>Twitter: <a href='https://twitter.com/hen_radio'>@hen_radio</a></li>
                   <li>Github: <a href='https://github.com/tezosmiami/hen-radio'>hen-radio</a></li>
                </p>
        </div>
    </>;

export default FaqPage;
