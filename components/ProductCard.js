import PropTypes from "prop-types"
import styles from "@/components/ProductCard.module.scss"
import Link from "next/link"

export default function ProductCard({ title, src, id }) {
    return <div className={`${styles.card} p-3 mb-4`}>
        <div>
            <img className="d-block w-100" src={src} alt={title} />
        </div>
        <h1 className={`${styles.card_title} mt-4`}>
            <strong><Link href={`/products/${id}`}>{title}</Link></strong>
        </h1>
    </div>
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}