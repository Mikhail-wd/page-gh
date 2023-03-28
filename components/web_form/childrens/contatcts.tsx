import styles from "./contacts.module.sass"
import mark from "../../../images/icons/contacts/Frame 708.svg"
import phone from "../../../images/icons/contacts/Frame 706.svg"
import cellphone from "../../../images/icons/contacts/Frame 709.svg"
import telega from "../../../images/icons/contacts/Frame 701.svg"
import watsap from "../../../images/icons/contacts/Frame 702.svg"
import mail from "../../../images/icons/contacts/Frame 710.svg"
import clock from "../../../images/icons/contacts/Frame 711.svg"
import alert from "../../../images/icons/contacts/alert 1.svg"
import {ReactComponent as Mailgrey} from "../../../images/icons/contacts/mail 1.svg"
import {ReactComponent as User} from "../../../images/icons/contacts/user 1.svg"
import insta from "../../../images/icons/contacts/ant-design_instagram-outlinedinsta.svg"
import vk from "../../../images/icons/contacts/ant-design_instagram-outlinedvk.svg"
import facebo from "../../../images/icons/contacts/ant-design_instagram-outlinedface.svg"

function contacts() {
    return (
        <div className={styles["main-frame"]}>
            <div className={styles.info}>
                <h1>Контакты</h1>
                <p>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
                <ul>
                    <li><img src={mark} alt="mark" /> <p>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p> </li>
                    <li><img src={cellphone} alt="cellphone" /> <p>+ 375 29 621-48-33</p> <img src={phone} alt="phone" /><img src={telega} alt="instagram" /><img src={watsap} alt="watsap" /> </li>
                    <li><img src={mail} alt="mail" /><p><a href="###">sdaem@sdaem.by</a></p></li>
                    <li><img src={clock} alt="clock" /><p>Режим работы: 08:00-22:00</p></li>
                </ul>
                <p>ИП Шушкевич Андрей Викторович <br />УНП 192602485 Минским горисполкомом 10.02.2016</p>
                <div>
                    <img src={alert} alt="alert" /><p>Администрация сайта не владеет информацией о наличии свободных квартир</p>
                </div>
            </div>
            <div className={styles.communication}>
                <form action="submit">
                    <div>
                        <p>Ваше имя</p>
                        <input type="text" placeholder="Имя" />
                        <User width={20} height={20} opacity={0.3} fill={'#686868'} />
                    </div>
                    <div>
                        <p>Ваша электронная почта</p>
                        <input type="mail" placeholder="email" />
                        <Mailgrey width={20} height={20} opacity={0.3} fill={'#686868'}/>
                    </div>
                    <div>
                        <p>Ваше сообщение</p>
                        <textarea placeholder="Сообшение" />
                    </div>
                </form>
                <button className={styles["button-to-send"]}>Отправить</button>
            </div>
            <div className={styles.media}>
                <img src={insta} alt="instagram" />
                <img src={vk} alt="vk" />
                <img src={facebo} alt="facebook" />
            </div>
        </div>
    )
}

export default contacts;