import React from 'react'

const ShowData = ({ inputValue, store, handleDelete, handleEdit }) => {
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        store.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>
                                    <button className="btn btn-warning me-1" onClick={(e) => { 
                                        console.log(e.target)
                                        handleEdit(index) }}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => { handleDelete(index) }}>Delete</button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default ShowData