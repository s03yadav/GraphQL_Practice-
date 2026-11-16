import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const query = gql`
              {
              getUsers{
                      id 
                      name 
                      address{
                        houseNumber
                        buildingName
                        Area
                        City
                      }
                      email
                      }
                    }
            `



const Home = () => {
    const { loading, data, error } = useQuery(query);


    if (loading) {
        return <h1> Loading.... </h1>
    } else if (error) {
        return <h1> Error Occured! : {error.message}</h1>
    }
    else {
        return (
            <>
                <h1 className=''>User Detials</h1>

                <div className="container mt-4">
                    <div className="row g-3">
                        {data.getUsers.map((user) => (
                            <div key={user.id} className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <span className="badge bg-secondary mb-2">ID: {user.id}</span>
                                        <h5 className="card-title mb-1">{user.name}</h5>
                                        <p className="card-text text-muted mb-0">{user.email}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}


export default Home