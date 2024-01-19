function App() {
    const [toggleBurger, setToggleBurger] = React.useState(false)
    const [toggleModalBuy, setToggleModalBuy] = React.useState(false)

    function burgerToggle() {
        setToggleBurger(!toggleBurger)
    }
    function modalToggle() {
        setToggleModalBuy(!toggleModalBuy)
    }
    return (
        <div className="main">
            <div className={toggleModalBuy === false ? "modal hidden" : "modal"}>
                <div className="modal-body">
                    <span className="modal-cross" onClick={modalToggle}>+</span>
                    <p>Заказ без предоплаты!</p>
                    <p className="modal-body_state">Оплата после получение и проверки заказа</p>
                    <input placeholder="Как вас зовут ?" />
                    <input placeholder="Ваш телефон" />
                    <div className="modal-value">
                        <p>Сумма заказа:</p>
                        <p>2000 р <button>Купить</button></p>
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
                        <div className="content-item">
                            <p>Дымка</p>
                            <p>Компактный дистиллятор с сухопарником и эффективным охладителем. Можно ароматизировать напитки во время перегонки </p>
                            <span className="items-sizes">
                                <div className="item-size_active">
                                    20 л
                                </div>
                                <div className="item-size">
                                    30 л
                                </div>
                            </span>
                            <span>
                                <button onClick={modalToggle}>2000 Р Купить</button>
                                <img src="./img/earn-catalogue-still-30.webp" alt="smokey" />
                            </span>
                        </div>
                        <div className="content-item">
                            <p>Дымка</p>
                            <p>Компактный дистиллятор с сухопарником и эффективным охладителем. Можно ароматизировать напитки во время перегонки </p>
                            <span className="items-sizes">
                                <div className="item-size_active">
                                    20 л
                                </div>
                                <div className="item-size">
                                    30 л
                                </div>
                            </span>
                            <span>
                                <button onClick={modalToggle}>2000 Р Купить</button>
                                <img src="./img/earn-catalogue-still-30.webp" alt="smokey" />
                            </span>
                        </div>
                        <div className="content-item">
                            <p>Дымка</p>
                            <p>Компактный дистиллятор с сухопарником и эффективным охладителем. Можно ароматизировать напитки во время перегонки </p>
                            <span className="items-sizes">
                                <div className="item-size_active">
                                    20 л
                                </div>
                                <div className="item-size">
                                    30 л
                                </div>
                            </span>
                            <span>
                                <button>2000 Р Купить</button>
                                <img src="./img/earn-catalogue-still-30.webp" alt="smokey" />
                            </span>
                        </div>
                        <div className="content-item">
                            <p>Дымка</p>
                            <p>Компактный дистиллятор с сухопарником и эффективным охладителем. Можно ароматизировать напитки во время перегонки </p>
                            <span className="items-sizes">
                                <div className="item-size_active">
                                    20 л
                                </div>
                                <div className="item-size">
                                    30 л
                                </div>
                            </span>
                            <span>
                                <button>2000 Р Купить</button>
                                <img src="./img/earn-catalogue-still-30.webp" alt="smokey" />
                            </span>
                        </div>
                        <div className="content-item">
                            <p>Дымка</p>
                            <p>Компактный дистиллятор с сухопарником и эффективным охладителем. Можно ароматизировать напитки во время перегонки </p>
                            <span className="items-sizes">
                                <div className="item-size_active">
                                    20 л
                                </div>
                                <div className="item-size">
                                    30 л
                                </div>
                            </span>
                            <span>
                                <button>2000 Р Купить</button>
                                <img src="./img/earn-catalogue-still-30.webp" alt="smokey" />
                            </span>
                        </div>
                        <div className="content-item">
                            <p>Дымка</p>
                            <p>Компактный дистиллятор с сухопарником и эффективным охладителем. Можно ароматизировать напитки во время перегонки </p>
                            <span className="items-sizes">
                                <div className="item-size_active">
                                    20 л
                                </div>
                                <div className="item-size">
                                    30 л
                                </div>
                            </span>
                            <span>
                                <button>2000 Р Купить</button>
                                <img src="./img/earn-catalogue-still-30.webp" alt="smokey" />
                            </span>
                        </div>
                        <div className="content-item">
                            <p>Дымка</p>
                            <p>Компактный дистиллятор с сухопарником и эффективным охладителем. Можно ароматизировать напитки во время перегонки </p>
                            <span className="items-sizes">
                                <div className="item-size_active">
                                    20 л
                                </div>
                                <div className="item-size">
                                    30 л
                                </div>
                            </span>
                            <span>
                                <button>2000 Р Купить</button>
                                <img src="./img/earn-catalogue-still-30.webp" alt="smokey" />
                            </span>
                        </div>
                        <div className="content-item">
                            <p>Дымка</p>
                            <p>Компактный дистиллятор с сухопарником и эффективным охладителем. Можно ароматизировать напитки во время перегонки </p>
                            <span className="items-sizes">
                                <div className="item-size_active">
                                    20 л
                                </div>
                                <div className="item-size">
                                    30 л
                                </div>
                            </span>
                            <span>
                                <button>2000 Р Купить</button>
                                <img src="./img/earn-catalogue-still-30.webp" alt="smokey" />
                            </span>
                        </div>
                        <div className="content-item">
                            <p>Дымка</p>
                            <p>Компактный дистиллятор с сухопарником и эффективным охладителем. Можно ароматизировать напитки во время перегонки </p>
                            <span className="items-sizes">
                                <div className="item-size_active">
                                    20 л
                                </div>
                                <div className="item-size">
                                    30 л
                                </div>
                            </span>
                            <span>
                                <button>2000 Р Купить</button>
                                <img src="./img/earn-catalogue-still-30.webp" alt="smokey" />
                            </span>
                        </div>
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
                            © 2024 ООО «КОЛБА КАЛИНИНГРАД», 236023, Россия, Калининградская обл, г Калининград, ул Лейтенанта Яналова, 42, 6, ИНН 3906388966, КПП 390601001, ОГРН 1203900002228
                        </p>
                        <p>
                            Внимание! Все материалы, размещенные на сайте, являются собственностью ООО «КОЛБА КАЛИНИНГРАД». Любое копирование и использование материалов возможно только с разрешения правообладателя.
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