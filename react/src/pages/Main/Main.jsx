import style from './style.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import MainItemUser from "../../components/Main/MainItemUser.jsx";

function Main() {
    const [users, setUsers] = useState([]);

    const getUserData = async () => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data.data)
    }

    useEffect (() => {
        getUserData()
    }, []);

    return (
        <div className={style.main}>
            <MainItemUser
                id={"id"}
                name={"name"}
                username={"username"}
                email={"email"}
                street={"street"}
                suite={"suite"}
                city={"city"}
                phone={"phone"}
                website={"website"}
                isHeader={true}
                 />

            {
                users.length &&
                users.map(item => <MainItemUser
                    id={item.id}
                    name={item.name}
                    username={item.username}
                    email={item.email}
                    street={item.address.street}
                    suite={item.address.suite}
                    city={item.address.city}
                    phone={item.phone}
                    website={item.website}
                    key={item.id} />)
            }
        </div>
    )
}

export default Main
