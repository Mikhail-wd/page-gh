import Mark_grey from "../images/icons/header/mark_grey.svg"
import Mark_yellow from "../images/icons/header/mark_yellow.svg"
import Heart_grey from "../images/icons/header/heart_grey.png"
import Logo from "../images/icons/header/logo_sdaem.svg"

function header() {

    return (
        <div className="navigation-bar">
            <div className="upper-menu">
                <nav>
                    <p>Главная</p>
                    <p>Новости</p>
                    <p>Размещение и тарифы</p>
                    <p> <img src={Mark_grey} alt="marker_grey" /> Объявления на карте</p>
                    <p>Контакты</p>
                    <p>Закладки <img src={Heart_grey} alt="heart_grey" /></p>
                </nav>
                <p className="enter-and-reg">Вход и регистрация</p>
            </div>

            <div className="lower-menu">
                <img src={Logo} alt="logo" />
                <p>Квартиры на сутки <img src={Mark_yellow} alt="marker_yellow" /></p>
                <p>Коттеджи и усадьбы</p>
                <p>Бани и Сауны</p>
                <p>Авто напрокат</p>
                <p><span>+</span> Разместить объяаление</p>
            </div>
        </div>
    )

}

export default header;