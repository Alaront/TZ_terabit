import style from './style.module.scss'
import {use, useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";

function User() {
    let { id } = useParams()

    const [user, setUser] = useState(null);

    const getUserData = async () => {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(data.data)
    }

    useEffect (() => {
        getUserData()
    }, []);

    if(!user) {
        return (
            <div className={style.loading}>Loading...</div>
        )
    } else {
        return (
            <div className={style.user}>
                <h1>Name: {user.name} ({user.username})</h1>
                <div>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>

                <div className={style.user__info}>
                    <h2>Company</h2>
                    <p>bs: {user.company.bs}</p>
                    <p>Catch Phrase: {user.company.catchPhrase}</p>
                    <p>Name: {user.company.name}</p>
                </div>

                <div className={style.user__info}>
                    <h2>Address</h2>
                    <p>city: {user.address.city}</p>
                    <p>street Phrase: {user.address.street}</p>
                    <p>suite: {user.address.suite}</p>
                    <p>zipcode: {user.address.zipcode}</p>
                </div>
            </div>
        )
    }
}

export default User
