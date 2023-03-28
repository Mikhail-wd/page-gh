import styles from "./podtversdenie.module.sass"

function podtversdenie(){
    return(
        <div className={styles.background}>

            <div className={styles.window}>
                <h2>Ваше письмо отправлено!</h2>
                <p>Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.</p>
                <button className={styles["button-to-accept"]}> Закрыть окно</button>
            </div>

        </div>
    )
}
export default podtversdenie;