/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const Button = ({ title, styles, link }) => {
    return (
        <Link to={link} className={styles}>
            {title}
        </Link>
    )
}

export default Button