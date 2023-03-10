import Loading from './Loading.js'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useEffect } from 'react'
import Job from './Job'
import Alert from './Alert.js'
import { useAppContext } from '../context/appContext'
import PageBtnContainer from './PageBtnContainer.js'


const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs,search, searchStatus, searchType, sort, numOfPages, showAlert } = useAppContext()

  useEffect(() => {
    getJobs()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search,page, searchStatus, searchType, sort])

  if (isLoading) {
    <Loading center />
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {showAlert && <Alert/>}
      <h5>
        {totalJobs} job{jobs.length>1 && 's'} found
      </h5>
      <div className="jobs">
          {
            jobs.map((job)=>{
              return <Job key={job._id} {...job}/>
            })
          }
        </div>
        {numOfPages >1 && <PageBtnContainer/>}
    </Wrapper>
  )
}
export default JobsContainer