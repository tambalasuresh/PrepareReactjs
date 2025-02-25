import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MainCompoennt = () => {
    const [users, setUsers] = useState(null);
    const [show,setShow]=useState(null);   
    const getUser=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            setUsers(response.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getUser();
    },[])

    const checkUser=(value)=>{
        setShow(preId=>(preId === value?.id ? null : value?.id));
        console.log(value);
     
    }

    return(
        <div className="d-flex flex-wrap justify-content-center">
        {users && users.map((user, index)=>{
            const isExpanded = show === user.id;
            return(
                <Card key={index} style={{ width: '20rem' }} className="m-3">
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                        {user.email}
                        </Card.Text>
                        <Button variant="primary"
                        onClick={()=>checkUser(user)}
                        >{isExpanded ? "Show Less" :"Show More"}</Button>
                        <Button variant="primary " className="m-1">Show Company</Button>
                        {isExpanded && <Card.Text>
                        Address :: {user.address.street}
                        </Card.Text>}
                    </Card.Body>
                </Card>
        
        )})}
       </div>
    )
}
export default MainCompoennt;