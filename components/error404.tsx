import Ydots from "../images/icons/error404/Group 654.svg"
import Wdots from "../images/icons/error404/Group 655.svg"
import House from "../images/icons/error404/home-run 1.svg"
import Bad404 from "../images/error404/404.svg"


function badPage() {
    return (
        <div className="error404">
            <div className="blure">
                <img className="error404_yellow-dots" src={Ydots} alt="Ydots" />
                <h1>Ошибка 404</h1>
                <p className="error404_info">Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
                <button><img src={House} alt="House" /> <p>Вернуться на главную</p> </button>
                <img className="error404_post-cod" src={Bad404} alt="Bad404"/>
                <img className="error404_white-dots" src={Wdots} alt="Wdots" />
            </div>

        </div>
    )
}
export default badPage;
