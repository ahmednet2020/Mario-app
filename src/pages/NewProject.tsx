import * as React from 'react'

// import components
import CreateProject from '../components/projects/CreateProject'

// interface for props
interface IpropsType {
    [key:string]:any
}
// start function jsx
const NewProject = (props: IpropsType):JSX.Element => {
    return (
        <main className='new-project mt-5 mb-5'>
			<CreateProject />
		</main>
    )
}
export default NewProject;