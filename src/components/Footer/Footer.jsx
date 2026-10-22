import s from './Footer.module.css'
import footerLogo from '../../assets/footerLogo.svg';


export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={s.footer_block}>
                    <div className={s.footer_logo}>
                        <img src={footerLogo} alt="" />
                        <p>СВЕЧИ РУЧНОЙ РАБОТЫ ДЛЯ СВЕТЛЫХ ДНЕЙ.</p>
                    </div>
                    <div className={s.footer_nav}>
                        <a href="">Главная</a>
                        <a href="">Каталог</a>
                        <a href="">Корзина</a>
                    </div>
                    <div className={s.footer_sub}>
                        <h3>БУДЬТЕ БЛИЖЕ К НАМ</h3>
                        <p>Новые ароматы, новости и истории из нашей мастерской.</p>
                    </div>
                </div>
                <hr />
                <div className={s.footer_cop}>
                    <p>© 2026  ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
                    <p>ПУСТЬ КАЖДЫЙ ДЕНЬ БУДЕТ СВЕТЛЕЕ.</p>
                </div>
            </div>
        </footer>
    )
}