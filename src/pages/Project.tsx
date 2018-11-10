import * as React from 'react'

import ProjectDetails from '../components/projects/ProjectDetails'
interface IpropsType {
    history: any,
    location: any,
    match: any
}
const Project = (props: IpropsType):JSX.Element => {
    return (
        <main className='home mt-5 mb-5'>
			<ProjectDetails projectid={props.match.params.projectid}/>
		</main>
    )
}
export default Project;