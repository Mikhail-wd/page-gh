const initialState = {
    page: "main"
}

function reducer(state, action) {
    switch (action.type) {
        case "changePage":
            return { ...state, page: action.payload };
        default:
            return console.log("error in reducer")
    }
}

const Store = React.createContext(null);

function Slider() {
    React.useEffect(() => {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
            a11y: 'true'
        })
        gsap.from(document.querySelector(".swiper-initialized").children[0], { opacity: 0.8, duration: 2 })
        gsap.from(document.querySelector(".swiper-slide-active").children[1].children[0], { opacity: 0, y: 100, duration: 0.5, delay: 0.5 })
        gsap.from(document.querySelector(".swiper-slide-active").children[1].children[1], { opacity: 0, y: 100, duration: 1, delay: 1 })

        document.querySelector(".next-btn",).addEventListener("click", () => {
            let element = document.querySelector(".swiper-slide-active").children[0]
            let textElem1 = document.querySelector(".swiper-slide-active").children[1].children[0]
            let textElem2 = document.querySelector(".swiper-slide-active").children[1].children[1]
            gsap.from(element, { opacity: 0, duration: 1 })
            gsap.from(textElem1, { opacity: 0, y: 100, duration: 0.5 })
            gsap.from(textElem2, { opacity: 0, y: 100, duration: 1, delay: 1 })
        })
        document.querySelector(".prew-btn",).addEventListener("click", () => {
            let element = document.querySelector(".swiper-slide-active").children[0]
            let textElem1 = document.querySelector(".swiper-slide-active").children[1].children[0]
            let textElem2 = document.querySelector(".swiper-slide-active").children[1].children[1]
            gsap.from(element, { opacity: 0, duration: 1 })
            gsap.from(textElem1, { opacity: 0, y: 100, duration: 1 })
            gsap.from(textElem2, { opacity: 0, y: 100, duration: 1, delay: 1 })
        })
    }, [])
    return (
        <div>
            <div className="swiper main-swiper">
                <div className="swiper-wrapper slides">
                    <div className="swiper-slide">
                        <img src="./img/dom/brick.jpg" alt="window" />
                        <div className="slider-text">
                            <h3>Строим  по цене 1990 годов !</h3>
                            <span>
                                <button>Наши услуги</button>
                                <button>О нас</button>
                            </span>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <img src="./img/dom/brikcs.jpg" alt="window" />
                        <div className="slider-text">
                            <h3>Делаем с душой и огоньком !</h3>
                            <span>
                                <button>Наши услуги</button>
                                <button>О нас</button>
                            </span>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <img src="./img/dom/brikcs.jpg" alt="window" />
                        <div className="slider-text">
                            <h3>Каждая наша работа - шедевр !</h3>
                            <span>
                                <button>Наши услуги</button>
                                <button>О нас</button>
                            </span>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <img src="./img/dom/brikcs.jpg" alt="window" />
                        <div className="slider-text">
                            <h3>Надежда Вениаминовна рекомендует !</h3>
                            <span>
                                <button>Наши услуги</button>
                                <button>О нас</button>
                            </span>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <img src="./img/dom/hugebrick.jpg" alt="window" />
                        <div className="slider-text">
                            <h3>Используем только самые лучшие материалы !</h3>
                            <span>
                                <button>Наши услуги</button>
                                <button>О нас</button>
                            </span>
                        </div>
                    </div >
                </div >
                <div className="swiper-button-prev next-btn"></div>
                <div className="swiper-button-next prew-btn"></div>
            </div >
        </div >
    )
}
function MainPage() {
    const [slideDown, setSlideDown] = React.useState("mission")

    function toggleOpen(string) {
        setSlideDown(string);
    }

    React.useEffect(() => {
        const elemArray = document.querySelectorAll(".content")
        elemArray.forEach(index => {
            index.addEventListener("mouseenter", () => {
                gsap.to(index.children[0].children[1], { duration: 0.4, y: -240 })
            })
            index.addEventListener("mouseleave", () => {
                gsap.to(index.children[0].children[1], { duration: 0.4, y: 0 })
            })
        }
        )

    }, [])
    return (
        <div className="main-page">
            <Slider />
            <div className="page-slice">
                <p>Вы можете посчитать стоимость вашего будущего дома уже сегодня!</p>
                <div className="page-slice-button"><img src="./img/dom/mail.svg" alt="note" />Оставить заявку</div>
            </div>
            <section className="section-mp container">
                <div className="section-left-col">
                    <div className="section-header">
                        <h2>Строим дома с душой!</h2>
                        <h3>Компания <b>«Stoim Kak Mojem»</b> занимается строительством домов и коттеджей под ключ от начала проектирования, выбранного вами проекта дома, и до логического его завершения. Всю свою жизнь мы посвятили себя столь удивительному ремеслу!</h3>
                    </div>
                    <div>
                        <img src="./img/dom/question.svg" alt="question" />
                        <div>
                            <p>Почему стоит работать именно с нами?</p>
                            <p>Работа с нами строится на абсолютной честности и прозрачности. Перед началом работы или проектирования мы вместе с нашими будущими клиентами все обговариваем и фиксируем в договоре.</p>
                        </div>
                    </div>
                    <div>
                        <img src="./img/dom/tools.svg" alt="work" />
                        <div>
                            <p>Надежность и качество</p>
                            <p>При заключении договора на застройку вы платите только ту сумму, которая указана в договоре – ни рублем больше.
                                Никакие навязчивые «доплаты» или же дополнительные услуги после заключения договора и во время строительства мы не предлагаем.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section-right-col">
                    <div>
                        <h4 onClick={() => toggleOpen("mission")}><span>Наша миссия</span><span>{slideDown == "mission" ? "-" : "+"}</span></h4>
                        <p className={slideDown == "mission" ? "mission" : "materials noheigh"}>
                            Помочь как можно большим людям обрести свой собственный дом,
                            который будет служить им надежной опорой на долгие годы вперед.
                        </p>
                        <h4 onClick={() => toggleOpen("materials")}><span>Из чего делаем</span><span>{slideDown == "materials" ? "-" : "+"}</span></h4>
                        <p className={slideDown == "materials" ? "materials" : "materials noheigh"} >
                            Мы возводим наши коттеджи только из самых надежных и проверенных материалов.
                            Поэтому  вы можете быть уверены, что наши дома не «промерзают», «протекают» или же «продуваются».
                        </p>
                        <h4 onClick={() => toggleOpen("clients")}><span>Наши клиенты</span><span>{slideDown == "clients" ? "-" : "+"}</span></h4>
                        <p className={slideDown == "clients" ? "clients" : "materials noheigh"}>
                            Главные для нас люди, к каждому из которых, мы найдем индивидуальный подход.
                        </p>
                    </div>
                </div>
            </section>
            <div className="page-slice">
                <div>
                    <img src="./img/dom/mail.svg" alt="note" />
                    <p><span>12</span> <br />Построенных коттеджей</p>
                </div>
                <div>
                    <img src="./img/dom/mail.svg" alt="note" />
                    <p><span>22</span> <br />Счастливых клиента</p>
                </div>
                <div>
                    <img src="./img/dom/mail.svg" alt="note" />
                    <p><span>7</span> <br />Сертифицированных сотрудника</p>
                </div>
            </div>
            <div className="our-work">
                <div className="our-work-header container">
                    <span></span>
                    <h3>Что мы делаем ?</h3>
                    <p>Здесь представлена лишь малая часть наших услуг по строительству и проектированию домов и коттеджей</p>
                </div>
                <div className="our-work-conten container">
                    <div className="content">
                        <div>
                            <span>
                                <img src="./img/dom/party.jpg" alt="picture" />
                            </span>
                            <p className="content-hover" >
                                <div>Строительство коттеджей любых форм и размеров</div>
                                <button>Подробнее</button>
                            </p>
                        </div>
                        <div className="content-card-footer">
                            <img src="./img/dom/construction.svg" alt="icon" />
                            <p>Строительство коттеджей</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <span>
                                <img src="./img/dom/boys.jpg" alt="picture" />
                            </span>
                            <p className="content-hover" >
                                <span>Компания «Stoim Kak Mojem» делает возможным сделать правильный выбор при разработке и заливке фундамента.</span>
                                <button>Подробнее</button>
                            </p>
                        </div>
                        <div className="content-card-footer">
                            <img src="./img/dom/wall.svg" alt="icon" />
                            <p>Заливка фундамента</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <span>
                                <img src="./img/dom/blocks.jpg" alt="picture" />
                            </span>
                            <p className="content-hover" >
                                <span>Мы покрываем высококачественными материалами крыши жилых домов и хозяйственных построек</span>
                                <button>Подробнее</button>
                            </p>
                        </div>
                        <div className="content-card-footer">
                            <img src="./img/dom/home.svg" alt="icon" />
                            <p>Кровельные работы</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <span>
                                <img src="./img/dom/cran.jpg" alt="picture" />
                            </span>
                            <p className="content-hover" >
                                <span>Главная цель разработки документации — создать технически грамотный проект и при этом удовлетворить требования заказчика</span>
                                <button>Подробнее</button>
                            </p>
                        </div>
                        <div className="content-card-footer">
                            <img src="./img/dom/plan.svg" alt="icon" />
                            <p>Проектированние коттеджей</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <span>
                                <img src="./img/dom/concree.jpg" alt="picture" />
                            </span>
                            <p className="content-hover" >
                                <span>Мы имеем солидный опыт в сфере построения инженерных сетей в коттеджах и загородных домах и предоставляем полный комплекс услуг</span>
                                <button>Подробнее</button>
                            </p>
                        </div>
                        <div className="content-card-footer">
                            <img src="./img/dom/pipe.svg" alt="icon" />
                            <p>Инженерные сети</p>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <span>
                                <img src="./img/dom/blueprint.jpg" alt="picture" />
                            </span>
                            <p className="content-hover" >
                                <span>Компания «Stoim Kak Mojem» зарекомендовала себя как надежный партнер в сфере строительства и внутренней отделки домов</span>
                                <button>Подробнее</button>
                            </p>
                        </div>
                        <div className="content-card-footer">
                            <img src="./img/dom/roller.svg" alt="icon" />
                            <p>Отделочные работы</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-slice">
                <p>Вы можете посчитать стоимость вашего будущего дома уже сегодня!</p>
                <div className="page-slice-button"><img src="./img/dom/mail.svg" alt="note" />Оставить заявку</div>
            </div>
            <div className="news">
                <div className="our-work-header container">
                    <span></span>
                    <h3>Новости</h3>
                </div>
                <div className="news-content container">
                    <div>
                        <img src="./img/dom/underconstr.jpg" alt="news-img" />
                        <h3>Продолжается стройка дома в Лупе</h3>
                        <h5><span>12 июля, 2019</span></h5>
                        <p>Компания продолжает ход строительства нашего объекта в Лупе.</p>
                    </div>
                    <div>
                        <img src="./img/dom/panelsbuild.jpg" alt="news-img" />
                        <h3>Продолжается стройка дома в Лупе</h3>
                        <h5>12 июля, 2019</h5>
                        <p>Компания продолжает ход строительства нашего объекта в Лупе.</p>
                    </div>
                    <div>
                        <img src="./img/dom/gazbet.jpg" alt="news-img" />
                        <h3>Продолжается стройка дома в Лупе</h3>
                        <h5>12 июля, 2019</h5>
                        <p>Компания продолжает ход строительства нашего объекта в Лупе.</p>
                    </div>
                    <div>
                        <img src="./img/dom/lumber.jpg" alt="news-img" />
                        <h3>Продолжается стройка дома в Лупе</h3>
                        <h5>12 июля, 2019</h5>
                        <p>Компания продолжает ход строительства нашего объекта в Лупе.</p>
                    </div>
                </div>
                <button>Все новости </button>
                <div className="our-work-header container">
                    <span></span>
                    <h3>Наши партнеры</h3>
                </div>
                <img src="./img/dom/pocta_bank.png" alt="partner" />
                <img src="./img/dom/sber.jpg" alt="partner" />
            </div>
        </div>
    )
}
function Header() {
    const store = React.useContext(Store)
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
                    <li className={store.storeState.page == "main" ? "active" : null}
                        onClick={() => store.storeDispatch({ type: "changePage", payload: "main" })}>Главная</li>
                    <li className={store.storeState.page == "about" ? "active" : null}
                        onClick={() => store.storeDispatch({ type: "changePage", payload: "about" })}>О нас</li>
                    <li className={store.storeState.page == "service" ? "active" : null}
                        onClick={() => store.storeDispatch({ type: "changePage", payload: "service" })}>Услуги</li>
                    <li className={store.storeState.page == "news" ? "active" : null}
                        onClick={() => store.storeDispatch({ type: "changePage", payload: "news" })}>Новости</li>
                    <li className={store.storeState.page == "gallery" ? "active" : null}
                        onClick={() => store.storeDispatch({ type: "changePage", payload: "gallery" })}>Галерея</li>
                    <li className={store.storeState.page == "projects" ? "active" : null}
                        onClick={() => store.storeDispatch({ type: "changePage", payload: "projects" })}>Готовые проекты</li>
                    <li className={store.storeState.page == "contacts" ? "active" : null}
                        onClick={() => store.storeDispatch({ type: "changePage", payload: "contacts" })}>Контакты</li>
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
                <li>Телефон: <br />+7 (666) 345-044 <br />  +7 101-332-9956</li>
                <li>Время работы: <br /> с 8-00 до 20-00 <br /> без выходных </li>
                <li>E-mail: <a href="mailto:"> skm@wakandafrv.af</a></li>
            </ul>
        </footer>
    )
}
function Information() {
    return (
        <div className="info rows">
            <p>Ковырялся и настраивал это Mikhail 2022</p>
        </div>
    )
}
function BredCrums() {
    const store = React.useContext(Store)

    function currentPage() {
        switch (store.storeState.page) {
            case "main":
                return "Главная"
            case "contacts":
                return "Контакты"
            case "about":
                return "О нас"
            case "service":
                return "Услуги"
            default:
                return "Страница не найдена 404"
        }
    }

    return (
        <div className="crums-body">
            <ul className="crums container">
                <li><a href="###" onClick={() => store.storeDispatch({ type: "changePage", payload: "main" })}>Главная</a></li>
                <li><a href="###">{currentPage()}</a></li>
            </ul>
        </div>
    )
}
function Service() {
    React.useEffect(() => {
        const elemArray = document.querySelectorAll(".service-content-plate")
        elemArray.forEach(index => {
            index.addEventListener("mouseenter", () => {
                gsap.to(index.children[0], { duration: 0.4, x: 300 })
            })
            index.addEventListener("mouseleave", () => {
                gsap.to(index.children[0], { duration: 0.4, x: 0 })
            })
        }
        )
    }, [])
    return (
        <div className="service">
            <BredCrums />
            <div className="service-header">
                <div>
                    <div className="our-work-header">
                        <span></span>
                        <h3>Что мы делаем ?</h3>
                        <p>Здесь представлена лишь малая часть наших услуг по строительству и проектированию домов и коттеджей </p>
                    </div>
                </div>
            </div>
            <div className="service-content container">
                <div className="service-content-plate">
                    <div>
                        <div className="scp-left-col">
                            <button>Смотреть</button>
                        </div>
                        <div className="scp-right-col">
                            <img src="./img/dom/construction.svg" alt="icon" />
                            <h3>Строительство коттеджей</h3>
                            <span></span>
                            <p>Строительство коттеджей. Хотите построить загородный дом или коттедж?</p>
                        </div>
                    </div>
                </div>
                <div className="service-content-plate">
                    <div>
                        <div className="scp-left-col">
                            <button>Смотреть</button>
                        </div>
                        <div className="scp-right-col">
                            <img src="./img/dom/wall.svg" alt="icon" />
                            <h3>Заливка фундамента</h3>
                            <span></span>
                            <p>Строительство коттеджей. Хотите построить загородный дом или коттедж?</p>
                        </div>
                    </div>
                </div>
                <div className="service-content-plate">
                    <div>
                        <div className="scp-left-col">
                            <button>Смотреть</button>
                        </div>
                        <div className="scp-right-col">
                            <img src="./img/dom/home.svg" alt="icon" />
                            <h3>Кровельные работы</h3>
                            <span></span>
                            <p>Строительство коттеджей. Хотите построить загородный дом или коттедж?</p>
                        </div>
                    </div>
                </div>
                <div className="service-content-plate">
                    <div>
                        <div className="scp-left-col">
                            <button>Смотреть</button>
                        </div>
                        <div className="scp-right-col">
                            <img src="./img/dom/plan.svg" alt="icon" />
                            <h3>Проектированние коттеджей</h3>
                            <span></span>
                            <p>Строительство коттеджей. Хотите построить загородный дом или коттедж?</p>
                        </div>
                    </div>

                </div>
                <div className="service-content-plate">
                    <div>
                        <div className="scp-left-col">
                            <button>Смотреть</button>
                        </div>
                        <div className="scp-right-col">
                            <img src="./img/dom/pipe.svg" alt="icon" />
                            <h3>Инженерные сети</h3>
                            <span></span>
                            <p>Строительство коттеджей. Хотите построить загородный дом или коттедж?</p>
                        </div>
                    </div>
                </div>
                <div className="service-content-plate">
                    <div>
                        <div className="scp-left-col">
                            <button>Смотреть</button>
                        </div>
                        <div className="scp-right-col">
                            <img src="./img/dom/roller.svg" alt="icon" />
                            <h3>Отделочные работы</h3>
                            <span></span>
                            <p>Строительство коттеджей. Хотите построить загородный дом или коттедж?</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
function Contacts() {
    return (
        <div className="contacts">
            <BredCrums namepage={"contacts"} />
            <div className="map container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9859417552575!2d-0.15580492301112994!3d51.513473910259044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876053298d70567%3A0x33b7ae4360a73181!2zTiBBdWRsZXkgU3QsIExvbmRvbiwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sru!2sru!4v1709804934144!5m2!1sru!2sru" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contacts-forms container">
                <div className="left-col-cntc">
                    <div className="our-work-header">
                        <span></span>
                        <h3>Контакты</h3>
                    </div>
                    <div>
                        <h3>ООО «Stoim Kak Mojem»</h3>
                        <p>ИНН 5453453453<br />ОГРН 12123281764398<br />Юр. Адрес: г.Лондон, Бэйкер стрит 22-14<br /> Офис: г.Лондон, Бэйкер стрит 22-14<br /></p>
                        <h3>Телефон</h3>
                        <p>+7 101-332-9956</p>
                        <h3>Телефон</h3>
                        <p>+7 101-332-9956</p>
                        <h3>Время работы</h3>
                        <p> с 8-00 до 20-00<br />Работаем без выходных</p>
                        <h3>E-Mail</h3>
                        <p><a href="mailto:"> skm@wakandafrv.af</a></p>
                    </div>
                </div>
                <div className="right-col-cntc">
                    <div className="our-work-header">
                        <span></span>
                        <h3>Хотите построить свой собственный дом?</h3>
                    </div>
                    <p>Оставьте вашу информацию и наши специалисты свяжутся с вами в ближайшее время </p>
                    <form action="submit">
                        <p>Ваше имя</p>
                        <input placeholder="Введите ваше имя" type="text" />
                        <p>Ваш телефон</p>
                        <input placeholder="Введите телефон" type="text" />
                        <p>Сообщение</p>
                        <textarea cols="80" rows="8" placeholder="Введите сообщение" />
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
function About() {
    return (
        <div className="about">
            <BredCrums />
            <div className="about-content container">
                <h3 className="about-content-header">Строительство коттеджей и домов под ключ от компании «Stoim Kak Mojem»</h3>
                <p>
                    Основная специализация компании «Stoim Kak Mojem» — строительство домов. Мы не первый год работаем в этой сфере и предлагаем полный спектр услуг по возведению жилых зданий, включающий:<br />
                </p>
                <ul>
                    <li>проектирование;</li>
                    <li>все виды строительных и отделочных работ;</li>
                    <li>монтаж и подключение инженерных систем.</li>
                </ul>
                <p>
                    Мы не пользуемся услугами третьих лиц. Такой подход гарантирует четкий контроль строительства коттеджей на всех этапах. Для проектирования и возведения домов мы задействуем профессионалов с внушительным опытом. Инженеры, строители и отделочники компании «Stoim Kak Mojem» досконально знают свое дело.<br />
                    Выберите понравившийся дом в разделе «Проекты» или закажите возведение коттеджа по индивидуальному дизайну. В нашей компетенции — строительство домов любой сложности. Примеры работ доступны в разделе «Галерея».<br />
                    <b>Гарантия качества материалов</b><br />
                    Мы предлагаем строительство домов под ключ из:
                </p >
                <ul>
                    <li>оцилиндрованного бруса;</li>
                    <li>кирпича;</li>
                    <li>блоков;</li>
                    <li>клееного бруса.</li>
                </ul>
                <p>
                    Также в нашей компетенции — быстрое возведение каркасных коттеджей.<br />
                    Прежде, чем построить дом под ключ, специалисты закупят необходимые материалы. Мы наладили прямые поставки качественного сырья от ведущих заводов-производителей. Это значительно снижает стоимость предлагаемых нами работ.<br />
                    Чтобы построить максимально надежный дом под ключ, мы обрабатываем несущие конструкции, кровли и перекрытия высокоэффективными защитными составами. Возведенные нами коттеджи десятилетиями сохраняют первозданный внешний вид и не требуют наружного косметического ремонта.<br />
                    <b>Индивидуальный подход к заказчикам</b><br />
                    Сотрудничество с компанией «Stoim Kak Mojem» — это возможность построить дом под ключ, который удовлетворит вас по всем параметрам. В процессе работы над проектами мы учитываем все требования и пожелания заказчиков.<br />
                    Строить дом с нами — это шанс получить максимально уютный коттедж своей мечты при минимуме затрат. Вы сможете наблюдать за ходом работ или принять готовый проект, не опасаясь за то, что мы сделаем что-нибудь не так. Специалисты уделяют пристальное внимание деталям.<br />
                    <b>Как заказать строительство домов .</b><br />
                    Чтобы построить дом под ключ качественно, в максимально сжатые сроки, свяжитесь с нами наиболее удобным способом. Специалисты помогут с выбором и доработкой проекта или создадут его с нуля по намеченным вами идеям.<br />
                    После согласования всех деталей мы подготовим выгодное коммерческое предложение. Когда мы заключим договор, вам останется лишь ждать установленного срока и принять готовый к эксплуатации коттедж.<br />

                </p>
            </div>

        </div>
    )

}
function PageError() {
    return (
        <div className="error">
            <BredCrums />
            <div className="error-page container">
                <img src="./img/dom/404.PNG" alt="error" />
                <h3>Ошибка 404</h3>
                <p>Что то пошло не так, пожалуйста попробуйте сново позже.<br />Вожно страница находится на техническом обслуживании или вы задали не правельный адрес.</p>
            </div>
        </div>
    )
}
function PageSwitcher() {
    const store = React.useContext(Store)
    function paging() {
        switch (store.storeState.page) {
            case "main":
                return <MainPage />
            case "contacts":
                return <Contacts />
            case "about":
                return <About />
            case "service":
                return <Service />
            default:
                return <PageError />
        }
    }

    return (
        <>
            {paging()}
        </>
    )
}
function App() {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <>
            <Store.Provider value={{ storeState: state, storeDispatch: dispatch }}>
                <Header />
                <PageSwitcher />
                <Footer />
                <Information />
            </Store.Provider>

        </>
    )
}

const domContainer = document.querySelector('#main');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);