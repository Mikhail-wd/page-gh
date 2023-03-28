import styles from "./autorisation.module.sass"
import { ReactComponent as UserOf } from '../../../images/icons/autorisation/user1autoris.svg'
import { ReactComponent as PasswordOf } from '../../../images/icons/autorisation/password1autoris.svg'

function autorisation() {
    return (
        <div className={styles.background}>
            <div className={styles.autorisation}>
                <h1>Авторизация</h1>
                <p>Авторизируйтесь, чтобы начать публиковать свои объявления</p>
                <form action={styles.submit}>
                    <input type="text" placeholder="Логин" />
                    <span className={styles["wrapper-user"]}><UserOf fill="#686868" opacity={0.3} /></span>
                    <input type="text" placeholder="Пароль" />
                    <span className={styles["wrapper-password"]}><PasswordOf fill="#686868" opacity={0.3} /></span>
                </form>
                <label className={styles.slider}>
                    <input type="checkbox" className={styles["autor-check"]} />
                    <span></span>
                </label>

                <p>Запомнить меня</p>
                <p className={styles.forgot}><strong>Забыли пароль?</strong></p>
                <button> <strong>Войти</strong> </button>
                <p>Еще нет аккаунта? <span><strong>Создайте аккаунт</strong></span></p>

            </div>
        </div>

    )
}

export default autorisation;