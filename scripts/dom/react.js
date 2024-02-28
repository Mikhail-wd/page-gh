function Header() {
    return (
        <header className="header container rows">
            <div className="header-logo">
                <img src="./img/dom/logo.svg" alt="logo" />
            </div>
            <div className="header-phones rows"><img src="./img/dom/phone.svg" alt="phone" /><p>Телефон <br /> <b><a href="tel:+921">+7 (666) 345-044</a>   <a href="tel:+921">+7 101-332-9956</a></b></p></div>
            <div className="header-worktimes rows"><img src="./img/dom/time.svg" alt="time" /><p>Время работы <br /> ПН-ВС : С <b>8:00</b> ДО <b>20:00</b></p></div>
            <div className="header-note rows"><img src="./img/dom/mail.svg" alt="note" />Оставить заявку</div>
            <nav className="header-navigation">
                <ol className="rows">
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Услуги</li>
                    <li>Новости</li>
                    <li>Галерея</li>
                    <li>Готовые проекты</li>
                    <li>Контакты</li>
                    <li><img src="./img/dom/search.svg" alt="search" /></li>
                </ol>
            </nav>
        </header>
    )
}
function Footer() {
    return (
        <footer className="footer container rows">
            <ul>
                <li>О компании</li>
                <li><img src="./img/dom/logo.svg" alt="logo" /></li>
                <li>
                    <h3>Строить дом с нами — это шанс получить максимально уютный коттедж своей мечты при минимуме затрат. Вы сможете наблюдать за ходом работ или принять готовый проект, не опасаясь за то, что мы сделаем что-нибудь не так. </h3>
                </li>
            </ul>
            <ul>
                <li>Информация</li>
                <li>Главная</li>
                <li>О нас</li>
                <li>Услуги</li>
                <li>Новости</li>
                <li>Галерея</li>
                <li>Готовые проекты</li>
                <li>Контакты</li>
            </ul>
            <ul>
                <li>Контакты</li>
                <li>г.Лондон, Бэйкер стрит 22-14</li>
                <li>Телефон: <br/>+7 (666) 345-044 <br/>  +7 101-332-9956</li>
                <li>Время работы: <br/> с 8-00 до 20-00 <br/> без выходных </li>
                <li>E-mail: <a href="mailto:"> skm@wakandafrv.af</a></li>
            </ul>
        </footer>
    )
}
function Information(){
    return(
        <div className="info rows">
            <p>Ковырялся и настраивал это Mikhail 2022</p>
        </div>
    )
}

function App() {
    return (
        <>
            <Header />
            <Footer />
            <Information />
        </>
    )
}

const domContainer = document.querySelector('#main');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);