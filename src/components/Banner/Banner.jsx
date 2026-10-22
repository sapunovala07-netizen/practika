import s from './Banner.module.css';
import banner from '../../assets/banner.png';

export function Banner() {
    return (
        <div className="container">
            <div className={s.banner}>
                <div className={s.banner_text}>
                    <h1>Свет для тихих
                        мгновений.</h1>
                    <p>Тепло, созданное с заботой.</p>
                    <a href="">СМОТРЕТЬ КОЛЛЕКЦИЮ →</a>
                </div>
            </div>
        </div>
    )
}