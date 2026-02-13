import styles from './styles/welcomescreen.module.css'
import { BsGrid } from "react-icons/bs";
import { SiBento } from "react-icons/si";


const WelcomeScreen = () => {
    return (
        <div className={styles.welcomeScreen_wrapper}>
            <div className={styles.welcomeScreen_header}>
                <div><BsGrid /></div>
                <div>
                    <p className={styles.date}>Friday, February 13</p>
                </div>
                <div><SiBento /></div>
            </div>
            <div className={styles.welcomeScreen_body}>
                <div className={styles.welcomeScreen_image}>

                </div>
                <div className={styles.welcomeScreen_input}>
                    <h1 className={styles.title}>What does your soul is hungry for?</h1>
                    <input type="text" placeholder="Type your goal here..." className={styles.goalInput} />
                </div>
                <div className={styles.welcomeScreen_button}>
                    <button>Let's cook! 🍳</button>
                    <span className={styles.button_description}>Press <span className={styles.enter}>enter</span> to manifest</span>
                </div>
            </div>
            <div className={styles.welcomeScreen_footer}>
                <p className={styles.quote}>"The Journey of a thousand miles begins with a single step."</p>
            </div>
        </div>
    )
}

export default WelcomeScreen;