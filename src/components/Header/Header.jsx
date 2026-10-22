import s from './Header.module.css';
import headerLogo from '../../assets/logo.svg'; 

export function Header(){
    return(
        <header className='container'>
            <div className="logo">
                <img src={headerLogo} alt="" />
            </div>
            <div className={s.nav}>
                <a href="">Главная</a>
                <a href="">Каталог</a>
                <a href="">Корзина</a>
            </div>
        </header>
    )
}