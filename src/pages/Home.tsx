import * as React from 'react'

interface Iprops {
    history: any,
    location: any,
    match: any
}
const Home = (props: Iprops) => {
    return (
        <div className='home'>
			welcome to home page
		</div>
    )
}
export default Home;