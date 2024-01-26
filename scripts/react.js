function App() {
    const [toggleBurger, setToggleBurger] = React.useState(false)
    const [toggleModalBuy, setToggleModalBuy] = React.useState(false)
    const [price, setPrice] = React.useState(null)
    const [data, setData] = React.useState([
        {
            name: "Дымка",
            content: "Компактный дистиллятор с сухопарником и эффективным охладителем. Можно ароматизировать напитки во время перегонки",
            img: "./img/earn-catalogue-still-30.webp",
            price: 2000
        },
        {
            name: "Cухопарник",
            content: "Cухопарник, мощный холодильник и удлинённая царга. Кламповое соединение для модернизации. Можно установить джин-корзину ",
            img: "./img/earn-catalogue-still-31.webp",
            price: 3012
        },
        {
            name: "Спиртник",
            content: "1.5” колонна с узлом отбора по жидкости и доохладителем. Можно модернизировать под производство чистого спирта ",
            img: "./img/earn-catalogue-still-1.webp",
            price: 632
        },
        {
            name: "Трубник",
            content: "Мощная и экономичная система охлаждения. Узел отбора по жидкости. Есть врезка под ТЭН. Можно модернизировать под производство спирта  ",
            img: "./img/earn-catalogue-still-3.webp",
            price: 4100
        },
        {
            name: "Дизентегратор",
            content: "2” продвинутый дистиллятор с узлом отбора по жидкости. Мощная и экономичная система охлаждения. Есть врезка под ТЭН  ",
            img: "./img/earn-catalogue-still-4.webp",
            price: 4121
        },
        {
            name: "Охладитель",
            content: "Паровой и водный режим. Вмещает до 15 банок. Любой тип крышек на банках. Кламповое соединение для установки 2” колонны для самогона и спирта ",
            img: "./img/earn-catalogue-avtoclave-1.webp",
            price: 9032
        }
    ])

    function burgerToggle() {
        setToggleBurger(!toggleBurger)
    }
    function modalToggle(priceTopass) {
        setPrice(priceTopass)
        setToggleModalBuy(!toggleModalBuy)
    }
    return (
        <div className="main">
            <div className={toggleModalBuy === false ? "modal hidden" : "modal"}>
                <div className="modal-body">
                    <span className="modal-cross" onClick={()=>modalToggle(null)}>+</span>
                    <p>Заказ без предоплаты!</p>
                    <p className="modal-body_state">Оплата после получение и проверки заказа</p>
                    <input placeholder="Как вас зовут ?" />
                    <input placeholder="Ваш телефон" />
                    <div className="modal-value">
                        <p>Сумма заказа:</p>
                        <p>{price} р <button>Купить</button></p>
                    </div>
                    <div className="modal-slice"></div>
                    <p>
                        Нажимая кнопку "Отправить" вы подтверждаете, что согласны с нашей политикой конфиденциальности и соглашением на обработку персональных данных. Для оформления заказа, введите Ваш телефон. Мы перезвоним вам для оформления доставки на удобный пункт выдачи в вашем городе.
                    </p>
                </div>

            </div>
            <header>
                <video className="header-background" autoPlay={true} muted loop={true} id="myVideo" src="./img/Water.mp4" type='video/mp4' />
                <div className="background-vid"></div>
                <div className="navigation">
                    <span className="navigation-logo">
                        <img src="./img/logo-full-ru.svg" alt="logo" />
                        <h1>Колба</h1>
                        <p>Cамогонные аппараты</p>
                    </span>
                    <nav>
                        <p><a href="#listwhere">Продукция</a></p>
                        <p><a href="#mapwhere">Магазин</a></p>
                        <button><a href="#listwhere">Купить</a></button>
                        <p>+48 182 833-32-32</p>
                        <div className="burger mobile" onClick={burgerToggle}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={toggleBurger === false ? "burger-menu hidden" : "burger-menu"}>
                            <p><a href="#listwhere">Продукция</a></p>
                            <p><a href="#mapwhere">Магазин</a></p>
                            <button><a href="#listwhere">Купить</a></button>
                        </div>
                    </nav>

                </div>
                <section className="aboutus">
                    <h3>Магазин самогоноварени <br /> <span className="text-grad header-maintext ">колба</span></h3>
                    <p>Собственное производство товаров наивысшего качества:</p>
                    <div className="items-list">
                        <ul>
                            <li>Самогонные аппараты</li>
                            <li>Автоклавы</li>
                            <li>Пивоварни</li>
                            <li>Коптильни</li>
                        </ul>
                        <ul>
                            <li>Дымогенераторы</li>
                            <li>Сыроварни</li>
                            <li>Комплектующие</li>
                            <li>Аксессуары</li>
                        </ul>
                        <img src="./img/main-scrn.png" alt="smookey" />
                    </div>
                </section>
            </header>
            <div className="content">
                <div className="orders">
                    <h2><span className="text-grad">Хиты</span> продаж</h2>
                    <div className="items-list" id="listwhere">
                        {data.map(index => 
                            <div key={index.name} className="content-item">
                                <p>{index.name}</p>
                                <p>{index.content} </p>
                                <span className="items-sizes">
                                    <div className="item-size_active">
                                        20 л
                                    </div>
                                    <div className="item-size">
                                        30 л
                                    </div>
                                </span>
                                <span>
                                    <button onClick={()=>modalToggle(index.price)}>{index.price} Р Купить</button>
                                    <img src={index.img} alt="smokey" />
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="whereus" id="mapwhere">
                    <h3><span>Где мы </span>находимся?</h3>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1124.0462161302407!2d9.540918836453551!3d55.70476506702005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c825356a51c21%3A0x11a5379e354562cc!2zU2rDpmxsYW5kc2dhZGUgMjMgQSwgNzEwMCBWZWpsZSwg0JTQsNC90LjRjw!5e0!3m2!1sru!2sru!4v1705582401812!5m2!1sru!2sru" className="map" loading="lazy"></iframe>
            </div>
            <footer>
                <div className="footer-nav">
                    <span>
                        <img src="./img/logo-full-ru-a.svg" alt="colba" />
                        <p>Колба</p>
                    </span>
                    <ul>
                        <li>Продукция</li>
                        <li>Доставка</li>
                        <li>Магазин</li>
                        <li>Купить</li>
                    </ul>
                </div>
                <div className="footer-slice"></div>
                <div className="footer-info">
                    <div className="policy">
                        <p>
                            © 2022 ООО «ПЕТРОГРАД ПЛАСТ», 236023, Россия, Калужская обл, г Малая Ялта, ул Лейтенанта Яналова, 42, 6, ИНН 39066, КПП 391001, ОГРН 1203900434002228
                        </p>
                        <p>
                            Внимание! Все материалы, размещенные на сайте, являются собственностью .
                        </p>
                        <span>
                            <a href="@@">Политика конфиденциальности </a>
                            {" | "}
                            <a href="@@">Соглашение на обработку персональных данных</a>
                        </span>
                    </div>
                    <div className="inform">
                        <p>+48 182 833-32-32</p>
                        <p>Kloba@mail.ru</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}



const domContainer = document.querySelector('#main');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);