/* eslint-disable react/prop-types */


const Button = ({ title, styles, link }) => {
    return (
        <a href={link} className={styles}>
            {title}
        </a>
    )
}

export default Button