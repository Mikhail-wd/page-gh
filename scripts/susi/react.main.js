function Carosel() {
    const [dataCar, setDataCar] = React.useState([
        {
            title: "Отметь день рождение вместе с нами",
            content: "Дарим скидку 10% в честь дня рождения. Вводи промокод Happy в корзине",
            img: "./img/susi/dn-com-tild3663-3664-4333-b238-343566613665-photo-240x240.jpg"
        },
        {
            title: "Скачивай мобильное приложение",
            content: "Дарим скидку 10% в честь дня рождения. Вводи промокод Happy в корзине",
            img: "./img/susi/9esjrgiufpa-290x290.jpg"
        },
        {
            title: "Забери со скидкой по пути",
            content: "10% скидка на заказ с собойул. Бэра 28А",
            img: "./img/susi/cfs.jpg"
        }
    ])
    function caroControll(controll) {
        if (controll === "right") {
            let sortArr = dataCar.slice(1)
            setDataCar([...sortArr, dataCar[0]])
        } else {
            let sortArr = dataCar.slice(0, dataCar.length - 1)
            setDataCar([dataCar[dataCar.length - 1], ...sortArr])
        }

    }
    return (
        <div className="search-carossel">
            <div className="search-carossel__controll">
                <svg onClick={() => caroControll("left")} className="carossel_left-arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg>
                <svg onClick={() => caroControll("right")} className="carossel_right-arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg>
            </div>
            <div className="search-carossel__paging"></div>
            <div id="caro-content" className="caro-content">
                {dataCar.map(index =>
                    <div key={Math.random() * 1000}>
                        <div>
                            <h3>{index.title}</h3>
                            <p> {index.content}</p>
                            <p className="yes-but">Скидка действует два дня до и день после дня рождения* </p>
                        </div>
                        <img src={index.img} alt={Math.random() * 1000} />
                    </div>
                )}
            </div>
        </div>
    )
}

function Slider({ dataArr, condition }) {
    const [boxWidth, setboxWidth] = React.useState(null)
    const [data, setData] = React.useState(dataArr)
    const [imgIndex, setImgIndex] = React.useState(0)

    function moveSlider(controll) {
        if (controll === "right") {
            if (imgIndex >= (data.length-1) ) {
                setImgIndex(0)
            } else {
                setImgIndex(imgIndex + 1)
            }
        } else {
            if (imgIndex <= (data.length) && imgIndex != 0) {
                setImgIndex(imgIndex - 1)
            } else {
                setImgIndex(0)
            }
        }

    }
    
    React.useEffect(()=>{
        if (document.querySelector(".content-plates").offsetWidth >=1200){
            setboxWidth(300) 
        } if (document.querySelector(".content-plates").offsetWidth >=600 && document.querySelector(".content-plates").offsetWidth <=1199){
            setboxWidth(410)
        } if (document.querySelector(".content-plates").offsetWidth <=599){
            setboxWidth(540)
        }
    },imgIndex)
    return (
        <div className="content-popular">
            <div className="content__controll">
                <svg onClick={() => moveSlider("left")} className="content_left-arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg>
                <p>Хиты продаж</p>
                <svg onClick={() => moveSlider("right")} className="content_right-arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg>
            </div>
            <div className="content-plates" style={{ marginRight: `${imgIndex * (boxWidth)}px` }}>
                {data.map(index =>
                    <div key={index.id} >
                        <img src={index.img} alt={index.name} />
                        <h3>{index.name}</h3>
                        <p><span>Количество</span><span></span><span>{index.amount} шт.</span></p>
                        <p><span>Вес</span><span></span><span>{index.weight} гр.</span></p>
                        <p>{index.price} ₽</p>
                        <button>Выбрать</button>
                    </div>
                )}
            </div>
        </div>
    )
}

function ModalMenu({ activeModal }) {
    return (
        <div className="modal-menu">
            <div className="modal-menu_options">
                <h3>
                    <svg onClick={() => activeModal()} className="content_left-arrow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                    </svg>
                    <span>Меню</span>
                </h3>
                <div className="modal-menu_slice"></div>
                <ul>
                    <li>Акционные товары</li>
                    <li>Ролы</li>
                    <li>Суши</li>
                    <li>Салаты</li>
                    <li>Супы</li>
                    <li>Напитки</li>
                </ul>
                <div className="modal-menu_slice"></div>
                <ul>
                    <li>Доставка и оплата</li>
                    <li>Отзывы</li>
                    <li>Контакты</li>
                </ul>
            </div>
        </div>
    )
}

function Basket({activeBasket}) {
    return (
        <div className="basket-wrapper">
            <div className="basket-body">
                <h3><span>Корзина</span><span onClick={()=>activeBasket()}>+</span></h3>
                <div className="basket-list">
                    <div>
                        <div className="basker-list_leftCol">
                            <img src="./img/susi/megapol.jpg" alt="polis"/>
                            <p>Сет мегаполис</p>
                        </div>
                        <div  className="basker-list_rightCol">
                            <p>3500 ₽</p>
                            <div>
                                <span>-</span>
                                <span>0</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="basker-list_leftCol">
                            <img src="./img/susi/megapol.jpg" alt="polis"/>
                            <p>Сет мегаполис</p>
                        </div>
                        <div  className="basker-list_rightCol">
                            <p>3500 ₽</p>
                            <div>
                                <span>-</span>
                                <span>0</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <button>
                        Вернутся</button>
                    <button>
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    )
}

function App() {
    const [toggleMenu, setToggleMenu] = React.useState(false)
    const [toggleBasket, setToggleBasket] = React.useState(false)
    const [data, stData] = React.useState([
        {
            id: 3124,
            name: "Сет мегаполис",
            price: 1820,
            amount: 80,
            weight: 2300,
            content: "Хот с курицей, Спайс с курицей, Овощной, Гуанчжоу, Цезарь, Хокайдо, Маки с курицей, Торонто, Маки с томатом, Спайс с крабом, имбирь, соевый соус, васаби.",
            condition: "hit",
            img: "./img/susi/megapol.jpg"
        },
        {
            id: 3126,
            name: "Сет №12",
            price: 920,
            amount: 32,
            weight: 1120,
            content: "Изуми, Шиитаке, Ика, Биг Хот с окунем, имбирь, соевый соус, васаби.В составе роллов: окунь, грибы Шиитаке, кальмар, сыр творожный, майонез, огурцы, томаты. лук порей, омлет Тамаго.",
            condition: null,
            img: "./img/susi/set12.jpg"
        },
        {
            id: 3125,
            name: "Фудзияма",
            price: 360,
            amount: 8,
            weight: 269,
            content: "Рис, нори, лосось, томат, кунжут, соус для запекания. ",
            condition: null,
            img: "./img/susi/fudzi.jpg"
        },
        {
            id: 3127,
            name: "Том ям с морепродуктами",
            price: 580,
            amount: 1,
            weight: 475,
            content: "Ролл жареный (рис для суши, лосось микс, сыр филадельфия, огурец, кляр, сухари панко)            Ролл запеченный(рис для суши, сыр филадельфия, огурец, лосось микс, соус для запекания)            Ролл запеченный в кунжуте(рис для суши, соус спайс, лосось микс, огурец, соус для запекания, кунжут)            Ролл с икрой тобико(рис для суши, томат, огурец, лосось микс, соус с икрой тобико)            Ролл лук фри(рис для суши, салат чука, лук фри, соус ореховый, лосось микс)            Ролл в стружке тунца(рис для суши, лосось темпупа, огурец, лук порей, икра тобико, стружка тунца), имбирь, васаби, соевый соус.",
            condition: null,
            img: "./img/susi/tomas.jpg"
        },
        {
            id: 3128,
            name: "Сет Киото ",
            price: 1910,
            amount: 42,
            weight: 1400,
            content: "Креветка тигровая, мидии, кокосовое молоко, паста том ям, кальмары, шампиньоны, рис для суши, лимон.",
            condition: null,
            img: "./img/susi/tokyo.jpg"
        },
        {
            id: 3129,
            name: "Креветки темпура",
            price: 380,
            amount: 1,
            weight: 175,
            content: "Тигровые креветки, панировочные сухари, кляр.  ",
            condition: null,
            img: "./img/susi/shrimpy.jpg"
        },
        {
            id: 3130,
            name: "Сет Хот Чикен",
            price: 1080,
            amount: 20,
            weight: 1175,
            content: "Хокайдо, Этна, Биг хот с курицей, Хот с курицей(2шт), имбирь, соевый соус, васаби.",
            condition: null,
            img: "./img/susi/cfs.jpg"
        },
        {
            id: 3131,
            name: "Сет Фэнси Хрючево",
            price: 1280,
            amount: 50,
            weight: 1875,
            content: "Ролл Бекон, Запечённый с беконом, Жареный с беконом, Ролл Тамаго, Запечённый со снежным крабом, Спайс бекон, имбирь, васаби, соевый соус.",
            condition: null,
            img: "./img/susi/piggyset.jpg"
        }
    ])

    function toggleBasketBody() {
        setToggleBasket(!toggleBasket)
        if (toggleBasket === false) {
            let body = document.querySelector("body")
            body.classList.add("overflow")
        } else {
            let body = document.querySelector("body")
            body.classList.remove("overflow")
        }
    }
    function toggleMenuBody() {
        setToggleMenu(!toggleMenu)
        if (toggleMenu === false) {
            let body = document.querySelector("body")
            body.classList.add("overflow")
        } else {
            let body = document.querySelector("body")
            body.classList.remove("overflow")
        }
    }
    return (
        <>
            {toggleBasket == false ? null : <Basket activeBasket={() => toggleBasketBody()} />}
            {toggleMenu == false ? null : <ModalMenu activeModal={() => toggleMenuBody()} />}
            <header>
                <div className="logo-header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="logo">
                        <path d="M24.7,34.9a4.35,4.35,0,0,0-6,1.5,4.49,4.49,0,0,0,1.1,6.1,4.35,4.35,0,0,0,6-1.5,4.31,4.31,0,0,0-1.1-6.1m-.4,30.2c12.7-9.3,19.6-28.2,19-41.2C29.2,21.1,14,29.4,2.2,43.2-1.7,67.7,45.6,92.8,81,95.2c10.8.7,22.4,3.2,27.6,14.2,5.1-24.1,23.2-26.2,23.2-26.2-13.1-5.2-29.3,3-29.3,3-15.3,7.4-34.1,4.6-45.3-7.3-18.9-20.1-24-18-24-18C27.6,64.9,24.3,65.1,24.3,65.1ZM57.6,27.8a49.51,49.51,0,0,0-10.5-3.4c.2,10.7-3.8,23.2-10.4,32.8a18.27,18.27,0,0,1,4.3,2c3.6,2.1,5.8,1.1,8.4-1.4A58.57,58.57,0,0,0,62,40C64.1,35.3,65,31.1,57.6,27.8ZM48.9,55.9s11.5-18.4,7.6-26.3C66.9,32.6,57,47.5,48.9,55.9ZM75.5,40.3c-7.2-7-8.4-4.4-9.9-1A60.65,60.65,0,0,1,46.1,62.9a28.33,28.33,0,0,1,2.8,2.3c2.5,2.4,6,2.3,10.1.5A54.89,54.89,0,0,0,75,54.3C78.3,50.9,81.7,46.3,75.5,40.3ZM57.2,64.8s16.2-11.3,17-23.5C78.9,47.4,77,54.5,57.2,64.8ZM96.5,76.6c-3.2-12-6.5-7-9.5-5.4A46.17,46.17,0,0,1,60,76a31.75,31.75,0,0,0,6.7,5.4,36.29,36.29,0,0,0,25.7,4.2C96.7,84.7,97.7,81.2,96.5,76.6ZM71.7,82.5S91,85.1,95,76.1C96.6,82.2,91.8,88.3,71.7,82.5Zm16.4-26c-5.1-8.6-7.4-4.1-9-2.3-6.9,7.9-17.3,13.7-25.9,15a26.62,26.62,0,0,1,2.4,2.3c2.3,2.3,5.1,3,8.4,3a42.13,42.13,0,0,0,20.3-5.3C90.2,66,91.5,62.1,88.1,56.5ZM62.6,73.4S86.3,68,85.1,54.2C91.7,63.8,84.4,72.1,62.6,73.4ZM42.8,17.8c-.2,1-.4,2-.7,3A43.73,43.73,0,0,1,69,30.6c.4-.9.9-1.8,1.4-2.7A46.66,46.66,0,0,0,42.8,17.8M64.5,1.3a6.49,6.49,0,0,0,2.7,5.9,3.44,3.44,0,0,0-3.8,2.2,3.53,3.53,0,0,0,2.2,4.3,3.39,3.39,0,0,0,4.5-1.8,3.28,3.28,0,0,0,.1-1.7A9.86,9.86,0,0,0,74,9.5a4.05,4.05,0,0,0-.3,3.4,3.49,3.49,0,0,0-3.4,2.3,3.67,3.67,0,0,0,2.2,4.3,3.07,3.07,0,0,0,4.2-3.8,22.23,22.23,0,0,0,5-.9,7.11,7.11,0,0,0-1.2,4.3c-3.7.5-6.9,3.7-9.3,7.5A49.15,49.15,0,0,0,43,16.3c.6-4.4.2-9-2.3-11.7a6.91,6.91,0,0,0,1.9-4,19.08,19.08,0,0,0,3.2,3.9,3.09,3.09,0,0,0,.8,5.6,3.66,3.66,0,0,0,4.5-1.8,3.57,3.57,0,0,0-1.1-4,4.37,4.37,0,0,0,2-2.8,8.62,8.62,0,0,0,2.4,3,3,3,0,0,0-1,1.4,3.48,3.48,0,0,0,2.2,4.3,3.48,3.48,0,0,0,4.5-1.8,3.41,3.41,0,0,0-1.5-4.2A7,7,0,0,0,64.5,1.3Z" ></path>
                    </svg>
                    <h1><span>Turbo fish</span><span>Доставка японской кухни</span></h1>
                </div>
                <button className="btn city"><span>Тамбов</span> <span className="arrow-down"><div></div><div></div></span></button>
                <div className="nav">
                    <ol>
                        <li><a>доставка и оплата</a></li>
                        <li><a>отзывы</a></li>
                        <li><a>контакты</a></li>
                    </ol>
                </div>
                <div className="media">
                    <ul>
                        <li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.62,2.75H7.38c-2.59,0-4.62,2.04-4.62,4.62v9.25c0,2.59,2.04,4.62,4.62,4.62h9.25c2.59,0,4.62-2.04,4.62-4.62V7.38c0-2.59-2.04-4.62-4.62-4.62Zm2.77,13.88c0,1.57-1.2,2.78-2.77,2.78H7.38c-1.57,0-2.78-1.2-2.78-2.78V7.38c0-1.57,1.2-2.78,2.78-2.78h9.25c1.57,0,2.77,1.2,2.77,2.78v9.25ZM12,7.38c-2.59,0-4.62,2.03-4.62,4.62s2.03,4.62,4.62,4.62,4.62-2.03,4.62-4.62-2.03-4.62-4.62-4.62Zm0,7.4c-1.57,0-2.78-1.2-2.78-2.78s1.2-2.78,2.78-2.78,2.78,1.2,2.78,2.78-1.2,2.78-2.78,2.78Zm4.62-8.33c.51,0,.93,.41,.93,.93s-.41,.93-.93,.93-.93-.41-.93-.93,.41-.93,.93-.93Z"></path></svg></a></li>
                        <li><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.92,13.03c-.39-.49-.28-.71,0-1.15,0,0,3.21-4.43,3.54-5.93h0c.16-.55,0-.95-.79-.95h-2.62c-.67,0-.98,.35-1.14,.73,0,0-1.34,3.2-3.23,5.27-.61,.6-.89,.79-1.23,.79-.16,0-.42-.19-.42-.74V5.95c0-.66-.19-.95-.74-.95h-4.13c-.42,0-.67,.31-.67,.59,0,.62,.95,.77,1.04,2.52v3.8c0,.83-.15,.99-.49,.99-.89,0-3.06-3.21-4.34-6.89-.26-.71-.51-1-1.19-1H.9c-.75,0-.9,.35-.9,.73,0,.68,.89,4.07,4.15,8.55,2.17,3.06,5.23,4.72,8.01,4.72,1.67,0,1.88-.37,1.88-1,0-2.92-.15-3.2,.69-3.2,.39,0,1.06,.19,2.62,1.67,1.78,1.75,2.08,2.53,3.07,2.53h2.62c.75,0,1.13-.37,.91-1.09-.5-1.53-3.87-4.67-4.02-4.88Z"></path></svg></a></li>
                    </ul>
                    <div className="burger" onClick={() => toggleMenuBody()}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="phone">
                        <span>+7 (9233) 21-14-22</span><br />Ежедневно с 10:00 до 18:00
                    </div>
                </div>
            </header>
            <div className="content search">
                <div className="search-leftCol">
                    <h2><div className="burger-menu"><div></div><div></div><div></div></div><span>Меню</span></h2>
                    <ul>
                        <li>Акционные товары</li>
                        <li>Сеты</li>
                        <li>Поке/Боулы</li>
                        <li>Комбо наборы</li>
                        <li>Суси</li>
                        <li>Ролы</li>
                        <li>Салаты</li>
                        <li>Закуски</li>
                        <li>Супы</li>
                        <li>Напитки</li>
                    </ul>
                </div>
                <div className="search-rightCol">
                    <div className="search-header">
                        <div className="search-bar">
                            <button className="btn"><span>Везде</span> <span className="arrow-down"><div></div><div></div></span></button>
                            <input placeholder="Поиск в каталоге" />
                            <svg className="search-glass" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                            </svg>
                        </div>
                        <div className="basket" onClick={()=>toggleBasketBody()}>
                            <p>Корзина</p>
                        </div>
                    </div>
                    <div className="tags-search">
                        <div>#Трава с рисом</div>
                        <div>#Трава с рисом</div>
                        <div>#Трава с рисом</div>
                        <div>#Трава с рисом</div>
                        <div>#Трава с рисом</div>
                        <div>#Трава с рисом</div>
                        <div>#Трава с рисом</div>
                        <div>#Трава с рисом</div>
                    </div>
                    <Carosel />
                    <div className="our-options">
                        <div>
                            <div className="our-options__text">
                                <svg viewBox="0 0 56 56">
                                    <path d="M52.13,2.21H45.47a.83.83,0,0,0-.83.83v.83H27.27a4.49,4.49,0,0,0-2.15.55L17,8.86H7.2c-1.4,0-2.5,1.47-2.5,3.33s1,3.13,2.22,3.31L3.17,28.2v0a4.29,4.29,0,0,0-.12,1V53a.83.83,0,0,0,.83.83H41.31a.83.83,0,0,0,.83-.83V29.31A3.85,3.85,0,0,0,42,28.14L38.51,16.35A4.49,4.49,0,0,0,43,12.19h1.68v1.67a.83.83,0,0,0,.83.83h6.66a.83.83,0,0,0,.83-.83V3A.83.83,0,0,0,52.13,2.21Zm-45.76,10c0-1,.49-1.66.83-1.66H31l-3.32,3.33H7.2C6.86,13.86,6.37,13.21,6.37,12.19Zm25.91,16a4.29,4.29,0,0,0-.12,1V52.13H4.7V29.24a3,3,0,0,1,.07-.59L8.65,15.52h17.5a3.67,3.67,0,0,0,5.4,4.77l4-3.12-3.26,11ZM37.15,50l2.15,2.15H35Zm3.23-21.37a2.37,2.37,0,0,1,.1.7V51L38,48.46v-18a.83.83,0,1,0-1.66,0v18L33.82,51V29.24a3,3,0,0,1,.07-.59l3.26-11Zm4.26-18.08h-2a1.33,1.33,0,0,0-1.33,1.33,2.83,2.83,0,0,1-2.83,2.83h-2a1.16,1.16,0,0,0-.72.24l-5.19,4a2,2,0,0,1-2.65-3l5.7-5.7a.82.82,0,0,0,0-1.17A.83.83,0,0,0,33,8.86H20.45l5.46-3a3,3,0,0,1,1.36-.34H44.64ZM51.3,13h-5V3.87h5Zm.83-10.81A.83.83,0,0,1,53,3V13.86a.83.83,0,0,1-.83.83H45.47a.83.83,0,0,1-.83-.83V12.19H43a4.49,4.49,0,0,1-4.45,4.16L42,28.14a3.85,3.85,0,0,1,.17,1.17V53a.83.83,0,0,1-.83.83H3.87A.83.83,0,0,1,3,53V29.24a4.29,4.29,0,0,1,.12-1v0L6.92,15.5c-1.26-.18-2.22-1.57-2.22-3.31S5.8,8.86,7.2,8.86H17l8.15-4.44a4.49,4.49,0,0,1,2.15-.55H44.64V3a.83.83,0,0,1,.83-.83h6.66M46.3,13h5V3.87h-5V13M20.45,8.86H33a.83.83,0,0,1,.59.25.82.82,0,0,1,0,1.17L27.88,16a2,2,0,0,0-.16,2.64,2,2,0,0,0,2.81.35l5.19-4a1.16,1.16,0,0,1,.72-.24h2a2.83,2.83,0,0,0,2.83-2.83,1.33,1.33,0,0,1,1.33-1.33h2v-5H27.27a3,3,0,0,0-1.36.34l-5.46,3m-13.25,5H27.66L31,10.53H7.2c-.34,0-.83.65-.83,1.66s.49,1.67.83,1.67m19,1.66H8.65L4.77,28.65a3,3,0,0,0-.07.59V52.13H32.16V29.24a4.29,4.29,0,0,1,.12-1v0l3.26-11-4,3.12a3.72,3.72,0,0,1-2.25.76,3.67,3.67,0,0,1-3.15-5.53M33.82,51l2.5-2.49v-18a.83.83,0,1,1,1.66,0v18L40.48,51V29.31a2.37,2.37,0,0,0-.1-.7l-3.23-11-3.26,11a3,3,0,0,0-.07.59V51M35,52.13h4.3L37.15,50,35,52.13M52.13,2h-7.7V3.66H27.27A4.68,4.68,0,0,0,25,4.24l-8.1,4.42H7.2c-1.52,0-2.7,1.55-2.7,3.53a3.36,3.36,0,0,0,2.16,3.47L3,28.14v0a4.73,4.73,0,0,0-.13,1.06V54H42.35V29.31a4.26,4.26,0,0,0-.18-1.23L38.78,16.55a4.71,4.71,0,0,0,4.37-4.15h1.28v2.5h8.74V2ZM46.51,4.08h4.58v8.74H46.51V4.08ZM21.26,8.66,26,6.06a2.77,2.77,0,0,1,1.26-.32H44.43v4.58H42.64a1.54,1.54,0,0,0-1.54,1.54,2.62,2.62,0,0,1-2.62,2.62h-2a1.37,1.37,0,0,0-.85.29l-5.19,4a1.77,1.77,0,0,1-1.1.38,1.83,1.83,0,0,1-1.42-.69A1.8,1.8,0,0,1,28,16.13l5.7-5.7A1,1,0,0,0,34,9.7a1.07,1.07,0,0,0-.3-.74,1,1,0,0,0-.74-.3Zm-14.06,5c-.18,0-.62-.51-.62-1.46s.44-1.45.62-1.45H30.48l-2.91,2.91Zm1.61,2.08h17a3.88,3.88,0,0,0,5.88,4.72l3.49-2.72L32.09,28.14v0A4.8,4.8,0,0,0,32,29.24V51.92h-27V29.24A1.88,1.88,0,0,1,5,28.71l3.83-13Zm25.29,13,3-10.34,3,10.3a2.3,2.3,0,0,1,.09.64V50.45l-2.08-2.08V29.46H36.11V48.37L34,50.45V29.24a1.88,1.88,0,0,1,.07-.53Zm1.4,23.21,1.65-1.65,1.65,1.65Z"></path>
                                </svg>
                                <div>
                                    <h3>Бесплатная доставка</h3>
                                    <p>Среднее время доставки по городу - 60 минут. <br />От 600 рублей - домчим за 10 минут!*</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="our-options__text">
                                <svg viewBox="0 0 56 56">
                                    <path d="M43,2.5H14.55v3H43a7.49,7.49,0,0,1,7.32,6.07H23.52a21,21,0,1,0,0,41.94H28A7.48,7.48,0,0,0,35.47,46V44.54H23.52a6,6,0,0,1-6-6,6.09,6.09,0,0,1,3-5.29,6,6,0,0,0,5.93,5.19v-3a3,3,0,0,1-3-3h3a6,6,0,0,0,6,6v-3a3,3,0,0,1-3-3h3a6,6,0,0,0,6,6v-3a3,3,0,0,1-3-3v0a19.5,19.5,0,0,0,18-19.37v-1.5h-.11A10.5,10.5,0,0,0,43,2.5ZM8.77,22.18A25.29,25.29,0,0,0,15,35.86a9,9,0,0,0-.41,2.7q0,.34,0,.69a13.25,13.25,0,0,1-6.66,2.27,18,18,0,0,1-2.43-9,17.74,17.74,0,0,1,3.28-10.3ZM32.23,47.52a4.5,4.5,0,0,1-4.23,3H23a9,9,0,0,0,.51-3ZM20.5,47a4.67,4.67,0,0,1,0,.52,5.94,5.94,0,0,1-.61,2.63,18,18,0,0,1-10-5.86,16,16,0,0,0,5.46-2A9,9,0,0,0,20.5,47Zm-4-14a22.33,22.33,0,0,1-4.9-13.93,18,18,0,0,1,12-4.52h2.27a13.43,13.43,0,0,0,0,14.94H23.52A8.87,8.87,0,0,0,16.46,33ZM34,29.49H29.65a10.46,10.46,0,0,1,0-14.94H50.44A16.51,16.51,0,0,1,34,29.49Zm1.49-11.95h3v3h-3Z"></path>
                                </svg>
                                <div>
                                    <h3>Свежие продукты</h3>
                                    <p>Только свежие продукты и оригинальные рецепты от казахских поваров.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="our-options__text">
                                <svg viewBox="0 0 56 56"><path d="M32.6,54a19.81,19.81,0,0,1-14-5.8L7.8,37.43A19.84,19.84,0,0,1,5.37,12.36a4.4,4.4,0,0,1,3.23-1.9,4.65,4.65,0,0,1,3.73,1.33L18.57,18a4.57,4.57,0,0,1,0,6.46l-2.15,2.16a1.51,1.51,0,0,0,0,2.15L27.19,39.58a1.51,1.51,0,0,0,2.15,0l2.16-2.15a4.57,4.57,0,0,1,6.46,0l6.25,6.24a4.65,4.65,0,0,1,1.33,3.73,4.4,4.4,0,0,1-1.9,3.23A19.75,19.75,0,0,1,32.6,54ZM8.9,13.49a1.38,1.38,0,0,0-1,.58A16.78,16.78,0,0,0,10,35.27L20.73,46.05a16.78,16.78,0,0,0,21.2,2.06,1.38,1.38,0,0,0,.58-1,1.58,1.58,0,0,0-.46-1.27l-6.24-6.25a1.54,1.54,0,0,0-2.16,0L31.5,41.74a4.59,4.59,0,0,1-6.47,0L14.26,31a4.59,4.59,0,0,1,0-6.47l2.16-2.15a1.54,1.54,0,0,0,0-2.16L10.17,14a1.58,1.58,0,0,0-1.27-.46ZM30.56,29.31a1.53,1.53,0,0,1-.94-1.41V23.07a4.58,4.58,0,0,1-3-4.31V6.57A4.58,4.58,0,0,1,31.15,2H49.43A4.58,4.58,0,0,1,54,6.57V18.76a4.58,4.58,0,0,1-4.57,4.57H37.87L32.22,29a1.54,1.54,0,0,1-1.66.33Zm.59-24.26a1.53,1.53,0,0,0-1.53,1.52V18.76a1.53,1.53,0,0,0,1.53,1.52,1.52,1.52,0,0,1,1.52,1.53v2.41l3.49-3.49a1.53,1.53,0,0,1,1.08-.45H49.43A1.52,1.52,0,0,0,51,18.76V6.57a1.52,1.52,0,0,0-1.52-1.52Zm3,6.09a1.53,1.53,0,1,1-1.52,1.52A1.52,1.52,0,0,1,34.19,11.14Zm6.1,0a1.53,1.53,0,1,1-1.53,1.52A1.52,1.52,0,0,1,40.29,11.14Zm6.09,0a1.53,1.53,0,1,1-1.52,1.52A1.53,1.53,0,0,1,46.38,11.14Z"></path>
                                </svg>
                                <div>
                                    <h3>Принимаем заказы</h3>
                                    <p>Ежедневно с 10:00 до последнего клиента.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {data === undefined ? null : <Slider dataArr={data} />}
            <footer>
                <div className="footer-info">
                    <ul>
                        <li>Информация</li>
                        <li><a>О нас</a></li>
                        <li><a>Доставка и оплата</a></li>
                        <li><a>Возврат и обмен товаров</a></li>
                        <li><a>Политика конфиденциальности</a></li>
                    </ul>
                    <ul>
                        <li>Служба поддержки</li>
                        <li><a>Контакты</a></li>
                        <li><a>Карта сайта</a></li>
                    </ul>
                    <ul>
                        <li>Дополнительно</li>
                        <li><a>Акции</a></li>
                        <li><a>Вакансии</a></li>
                    </ul>
                    <ul>
                        <li>Блог компании</li>
                        <li><a>Новости</a></li>
                        <li><a>Полезные статьи</a></li>
                        <li><a>Рецепты</a></li>
                    </ul>
                </div>
                <p>Turbo Fish @ 2024 <br />Подготовлен Mikhail</p>
            </footer>
        </>

    )
}



const domContainer = document.querySelector('#main');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);