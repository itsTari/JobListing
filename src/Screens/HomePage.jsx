import Hero from "../components/Hero"
import Home from "../components/Home"
import JobListings from "../components/JobListings"
import ViewAllBtn from "../components/ViewAllBtn"
function HomePage(){
    return(
        <>
          <Hero/>
          <Home/>
          <JobListings isHome={true}/>
          <ViewAllBtn/>
        </>
    )
}
export default HomePage