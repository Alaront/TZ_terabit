import style from './style.module.scss'
import {useEffect} from "react";
import {useNavigate} from "react-router";

function Main({id, name, username, email, street, suite , city, phone, website, isHeader}) {

    const navigate = useNavigate()

    const handleClick = () => {
        if(isHeader) return

        navigate(`/${id}`);
    };

    return (
        <div className={`${style.mainUser} ${isHeader ? style.mainUser__header : ''}`}
            onClick={handleClick}
        >
            <div className={style.mainUser__item}><span>{id}</span></div>
            <div className={style.mainUser__item}><span>{name}</span></div>
            <div className={style.mainUser__item}><span>{username}</span></div>
            <div className={style.mainUser__item}><span>{email}</span></div>
            <div className={style.mainUser__item}>
                {
                    isHeader && <span>address</span>
                }
                <div className={style.mainUser__item}>
                    <span>{street}</span>
                    <span>{suite}</span>
                    <span>{city}</span>
                </div>
            </div>
            <div className={style.mainUser__item}><span>{phone}</span></div>
            <div className={style.mainUser__item}><span>{website}</span></div>
        </div>
    )
}

export default Main
