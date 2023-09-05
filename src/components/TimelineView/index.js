import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="chrono-container">
      <div className="responsive-container">
        <div className="heading-container">
          <h1 className="heading">
            MY JOURNEY OF
            <br />
            <span className="ccbp-heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(each => {
            if (each.categoryId === 'PROJECT') {
              return <ProjectTimelineCard key={each.id} Details={each} />
            }
            return <CourseTimelineCard key={each.id} Details={each} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
