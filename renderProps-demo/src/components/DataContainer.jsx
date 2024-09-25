


const  DataContainer = ({ children, show, users, otro }) => {
    return (
      <>
        {users.length > 0 && show()}
        {users.length == 0 && otro()}
        {children}
       
      </>
    )
}


export default DataContainer