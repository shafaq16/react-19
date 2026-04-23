function StudentData(){
    const data = [
        {
            name: "Huma",
            age: "23",
            email: "huma@gmail.com",
            id: 1
        },
        {
            name: "Nishat",
            age: "20",
            email: "nishat@gmail.com",
            id: 2
        },
        {
            name: "Shafaq",
            age: "22",
            email: "shafaq@gmail.com",
            id: 3
        },
        {
            name: "Soriful",
            age: "23",
            email: "soriful@gmail.com",
            id: 4
        },
        {
            name: "Rashu",
            age: "23",
            email: "rashid@gmail.com",
            id: 5
        }
    ]
    return(
        <div>
            <h1>Loop in jSX</h1>

        <div className="wrap">
            <h3 style={{color:'blue'}}>Dummy data without loop</h3>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>                
                </thead>
                <tbody>
                     <tr>
                        <td>1</td>
                        <td>Huma</td>
                        <td>huma@gmail.com</td>
                        <td>23</td>
                    </tr>   
                      <tr>
                        <td>1</td>
                        <td>Huma</td>
                        <td>huma@gmail.com</td>
                        <td>23</td>
                    </tr> 
                      <tr>
                        <td>1</td>
                        <td>Huma</td>
                        <td>huma@gmail.com</td>
                        <td>23</td>
                    </tr> 
                      <tr>
                        <td>1</td>
                        <td>Huma</td>
                        <td>huma@gmail.com</td>
                        <td>23</td>
                    </tr> 
                      <tr>
                        <td>1</td>
                        <td>Huma</td>
                        <td>huma@gmail.com</td>
                        <td>23</td>
                    </tr> 
                </tbody>
            </table>

            <h1 style={{color:'Crimson'}}>Using Loop</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>                
                </thead>
                <tbody>
                  {
                    data.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>
                    ))
                  }
                </tbody>
            </table>
        </div>

        </div>
    )
}
export default StudentData;