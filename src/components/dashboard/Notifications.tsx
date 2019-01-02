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
				<li className="list-group-item rounded-0 card" key={item.id}>
					<Link to={`/project/${item.projsId}`}>
						<div className="card-body">
							<h5 className="card-title">{item.user}</h5>
							<h6 className="card-subtitle mb-2 text-muted">{moment(item.time.toDate()).fromNow()}</h6>
							<p className="card-text">{item.content}</p>
						</div>
					</Link>
				</li>
			)
        })}
		</ul>
    </div>
  )
}

export default Notifications