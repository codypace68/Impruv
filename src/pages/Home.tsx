import './Home.css';
import hero from '../images/impruv-hero.png';
import Header from '../common/Header';


function Home() {
    return (
        <>
            <Header />
            <div id='impruv-home-circles'>
                <div></div>
                <div></div>
            </div>

            <div id='impruv-home'>
                <div id="impruv-home-daily-tip-container">
                    <h2 id="impruv-home-daily-tip-header" className='text-xl'>
                        Daily Improvement
                    </h2>
                    <div className='impruv-home-daily-tip'>
                        <h4 className='impruv-home-daily-top-header text-lg'>Tip</h4>
                        <p className='text-md'>
                            Those who view <span className='color-mint'>stress</span> as enhancing enjoy increased performance during periods of <span className='color-mint'>stress</span>.
                            <span className='impruv-home-daily-tip-citation text-sm'>“Andrew Huberman 2023”</span>
                        </p>
                    </div>
                    <div className='impruv-home-daily-tip'>
                        <h4 className='impruv-home-daily-top-header text-lg'>Action</h4>
                        <p className='text-md'>
                            You can start to take advantage of <span className='color-peach'>“stress is enhancing mindset”</span> by educating yourself on the benefits of stress
                            <span className='impruv-home-daily-tip-citation text-sm'>“Becker and Becker 1998”</span>
                        </p>
                    </div>
                </div>
                <div id='impruv-home-hero-img'>
                    <img src={hero}></img>
                </div>
            </div>
        </>
    );
}

export default Home;