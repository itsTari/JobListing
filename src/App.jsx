import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import HomePage from "./Screens/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./Screens/JobsPage";
import NotFound from "./Screens/NotFound";
import JobPage, {jobLoader} from "./Screens/JobPage";
import AddJobPage from "./Screens/AddJobPage";
import EditJobPage from "./Screens/EditJobPage";


function App () {
  // add newjob
  const addJob = async (newJob) =>{
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  }
  // delete job
  const deleteJob = async(id)=>{
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }
  // edit job
  const editJob = async(job)=> {
    const res =  await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;

  }
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}> 
        <Route index element={<HomePage/>}/> 
        <Route path="/jobs" element={<JobsPage/>}/> 
        <Route path="*" element={<NotFound/>}/> 
        <Route path="/job/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path="/add-jobs" element={<AddJobPage addJobSumbit={addJob}/>}/>
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={editJob}/>} loader={jobLoader}/>
    </Route>)
  );
  return <RouterProvider router={router} />
}

export default App
