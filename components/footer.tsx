import Logo from "../images/icons/footer/logo_sdaem.svg"
import VK from "../images/icons/footer/ant-design_instagram-outlinedVK.svg"
import Insta from "../images/icons/footer/ant-design_instagram-outlinedInsta.svg"
import Face from "../images/icons/footer/ant-design_instagram-outlinedface_book.svg"
import Secure from "../images/icons/footer/securecode.png"
import Visa from "../images/icons/footer/visa_PNG30.png"
import Visa_vere from "../images/icons/footer/verified-by-visa 1.png"
import Belkarit from "../images/icons/footer/logotip-belkart-v-odnom-tsvete.png"
import MasterCard from "../images/icons/footer/1280px-Mastercard-logo 1.png"
import WebMoney from "../images/icons/footer/0d8393af235bf41046d806ecd014ca9d 1webmoney.png"


function footer() {
    return (
        <div className="footer">
            <div className="information">
                <img src={Logo} alt="information-logo" />
                <p>СДАЁМ БАЙ</p>
                <p className="ingormation-text">ИП Шушкевич Андрей Викторович <br /> УНП 192602485 Минским горисполкомом <br /> 10.02.2016 <br /> 220068,
                    РБ, г. Минск, ул. Осипенко, 21, кв.23 <br /> +375 29 621 48 33, sdaem@sdaem.by <br /> Режим работы: 08:00-22:00 </p>
            </div>

            <div className="selects">
                <div className="types-of-area">
                    <ul>
                        <li>Коттеджи и усадьбы</li>
                        <li>Бани и сауны</li>
                        <li>Авто на прокат</li>
                    </ul>
                </div>
                <div className="aparts">
                    <p>Квартиры</p>
                    <ul className="aparts-city">
                        <li>Квартиры в Минске</li>
                        <li>Квартиры в Гомеле</li>
                        <li>Квартиры в Бресте</li>
                        <li>Квартиры в Витебске</li>
                        <li>Квартиры в Гродно</li>
                        <li>Квартиры в Могилеве</li>
                    </ul>
                </div>
                <div className="news">
                    <ul>
                        <li>Новости</li>
                        <li>Размещение и тарифы</li>
                        <li>Объявления на карте</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                <div className="social-and-paymant-img">
                    <p>Мы в соцсетях</p>
                    <div className="social-and-paymant-img_social"><img src={Insta} alt="Insta" /><img src={VK} alt="VK" /><img src={Face} alt="Face" /></div>
                    <div className="social-and-paymant-img_paymant"><img src={Visa} alt="Visa" /><img src={WebMoney} alt="Webpay" /><img src={Visa_vere} alt="Visa_vere" /><img src={MasterCard} alt="MasterCard" /><img src={Secure} alt="MasterCard secured" /><img src={Belkarit} alt="Belkarit" /></div>
                </div>
            </div>
        </div>
    )
}

export default footer;