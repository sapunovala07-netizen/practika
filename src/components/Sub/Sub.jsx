import s from './Sub.module.css'
import subImg from '../../assets/email.svg'

export function Sub() {
    return (
        <div className="container">
            <div className={s.sub}>
                <div className={s.sub_text}>
                    <img src={subImg} alt="" />
                    <h2>Подпишитесь на рассылку</h2>
                    <p>Новые ароматы, истории из мастерской и вдохновение для тихих вечеров — прямо в вашу почту.</p>
                </div>
                <div className={s.sub_form}>
                    <form action="">
                        <label htmlFor="">Ваша электронная почта</label>
                        <input type="text" placeholder='Введите ваш email' />
                        <input type="submit" value="Подписаться" />
                        <p>Только тёплые письма. Отписаться можно в любой момент.</p>
                    </form>
                </div>
            </div>
        </div>
    )
}