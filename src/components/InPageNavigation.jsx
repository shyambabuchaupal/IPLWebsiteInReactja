

const InPageNavigation = ({teams}) => {
    console.log(teams)
  return (
   <>
   {
    teams.map((data)=>{
        return(
            <>
            <button>{data}</button>
            </>
        )
    })
   }
   </>
  )
}

export default InPageNavigation;
