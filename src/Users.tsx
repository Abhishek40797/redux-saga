import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from "react-redux";
import { getUsers } from './reduxStore/action';
import { Istate } from './reduxStore/store';

const Users = () => {
    const users = useSelector((state:Istate)=>state.userReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUsers())
    },[])

    return (
        <>
            <Container>
                <UsersTable>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((user,i)=>{
                                return (
                                    <tr key={i}>
                                            <TD>{user.id}</TD>
                                            <TD>{user.name}</TD>
                                            <TD>{user.username}</TD>
                                            <TD>{user.phone}</TD>
                                        </tr>
                                )
                            })
                        }
                    </tbody>
                </UsersTable>
            </Container>
        </>
    )
}

export default Users;

const Container = styled.div`
    width : 1200px;
    margin : auto;
`

const UsersTable = styled.table`
    border : 1px solid #000;
    text-align : center;
`
const TD = styled.td`
    padding-inline : 10px;
`