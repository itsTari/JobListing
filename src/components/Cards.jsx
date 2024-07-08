function Cards({children, bg="bg-slate-300"}){
    return(
        <>
            <div className={`${bg} p-6 rounded-lg shadow-md`} >
                {children}
            </div>
        </>
    )
}
export default Cards