import * as React from 'react'

import Dashboard from '../components/dashboard/Dashboard'
interface IpropsType {
    history: any,
    location: any,
    match: any
}
const Home = (props: IpropsType):JSX.Element => {
    return (
        <main className='home mt-5 mb-5'>
			<Dashboard />
		</main>
    )
}
export default Home;