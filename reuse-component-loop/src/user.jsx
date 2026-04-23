const User = ({data})=>{
    return(
        <div style={{
            border:" 1px solid lime",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            width: "300px",
        }}>
            <div className="details">
                <h3>Name: <span style={{color: 'limegreen'}}>{data.name}</span></h3>
                <h3>Age: <span style={{color: 'limegreen'}}>{data.age}</span></h3>
                <h3>Email: <span style={{color: 'limegreen'}}>{data.email}</span></h3>
                <h3>Id: <span style={{color: 'limegreen'}}>{data.id}</span></h3>
            </div>
        </div>
    )
}
export default User;