import styles from "./Button.module.scss"


export default function Button({children}) {
    return <button className={`${styles.bttn} py-3 px-4 fw-bold`}>{children}</button>
}
