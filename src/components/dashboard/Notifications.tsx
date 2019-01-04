import * as moment from 'moment'
import * as React from 'react'
import { Link } from 'react-router-dom'
const Notifications = ({notifications}:any):JSX.Element => {
  return (
    <div className='notifications bg-white rounded border border-dark'>
		<h2 className='p-2'>Notifications</h2>
		<ul className="list-group">
		{ notifications && notifications
			.sort((x:any, y:any):any => (x.time.seconds >= y.time.seconds ? -1:1))
			.map((item:any) => {
			return (
				<li className="list-group-item rounded-0" key={item.id}>
					<h5>{item.user}</h5>
					<p className='m-0'>{item.content} - { item.projsId && <Link to={`/project/${item.projsId}`}> GO </Link>}</p>
					<h6 className="text-muted">{moment(item.time.toDate()).fromNow()}</h6>
				</li>
			)
        })}
		</ul>
    </div>
  )
}

export default Notifications