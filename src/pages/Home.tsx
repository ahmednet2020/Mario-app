import * as React from 'react'

// import components
import Dashboard from '../components/dashboard/Dashboard'

// interface for props
interface IpropsType {
    [key:string]:any
}
// start function jsx
const Home = (props: IpropsType):JSX.Element => {
    return (
        <main className='home mt-5 mb-5'>
			<Dashboard />
		</main>
    )
}
export default Home;