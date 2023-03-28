import styles from "./registration.request.module.sass"

function request(){
    return (
        <div className={styles.window}>
            <h2>Подтвердите регистрацию</h2>
            <p>Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.</p>
            <button className={styles["button-to-accept"]}>Понятно</button>

        </div>
    )
}

export default request;