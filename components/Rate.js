import Rate from "rc-rate"
import PropTypes from "prop-types"
import "rc-rate/assets/index.css"

export default function CustomRate({value, ...props}) {
    return <Rate value={value} {...props} />
}

CustomRate.propTypes = {
    value: PropTypes.number.isRequired
}

