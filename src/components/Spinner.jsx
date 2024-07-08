import  ClipLoader  from "react-spinners/ClipLoader"

function Spinner({loading, color="#4338ca"}) {
    const override = {
        display:'block',
        margin: '100px auto'
    }
  return (

       <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
      />
    
  )
}

export default Spinner
