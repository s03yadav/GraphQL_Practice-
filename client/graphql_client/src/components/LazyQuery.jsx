import { gql } from '@apollo/client';
import { useLazyQuery } from '@apollo/client/react'

const query = gql`
{
    getUsers {
        id
        name
    }
}

`

const LazyQuery = () => {

    const [fetchData, { loading, data, error }] = useLazyQuery(query);

    if (loading) {
        return <h1 className="em">Loading....</h1>
    }

    if (error) {
        return <h1 className="em">Error Occured : {error.message}</h1>
    }

    return (
        <>
            <div className="container mt-4">

                <button
                    onClick={() => fetchData()}
                    className="btn btn-primary"
                >
                    Fetch Data
                </button>

                <hr />

                {data && (
                    <p className="small">
                        {JSON.stringify(data.getUsers)}
                    </p>
                )}

            </div>
        </>
    )

}

export default LazyQuery