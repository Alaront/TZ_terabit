import style from './style.module.scss'

function Main() {

    return (
        <div className={`${style.mainUser} ${style.mainUser__header}`} >
            <div className={`${style.mainUser__item} ${style.mainUser__itemId}`}><span>id</span></div>
            <div className={style.mainUser__item}><span>name</span></div>
            <div className={style.mainUser__item}><span>username</span></div>
            <div className={style.mainUser__item}><span>email</span></div>
            <div className={style.mainUser__item}>
                <span>address</span>
                <div className={style.mainUser__item}>
                    <span>street</span>
                    <span>suite</span>
                    <span>city</span>
                </div>
            </div>
            <div className={style.mainUser__item}><span>phone</span></div>
            <div className={style.mainUser__item}><span>website</span></div>
        </div>
    )
}

export default Main
