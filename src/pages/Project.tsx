import * as React from 'react'

// import components
import ProjectDetails from '../components/projects/ProjectDetails'

// interface for props
interface IpropsType {
    [key:string]:any
}
// start function jsx
const Project = (props: IpropsType):JSX.Element => {
    return (
        <main className='project mt-5 mb-5'>
			<ProjectDetails projectid={props.match.params.projectid}/>
		</main>
    )
}
export default Project;