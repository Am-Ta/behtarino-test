import { Container } from "react-bootstrap";
import styles from "./Layout.module.scss"

export default function Layout({ children }) {
    return <div className={styles.wrapper}>
        <Container className="py-5 h-100">
            {children}
        </Container>
    </div>
}