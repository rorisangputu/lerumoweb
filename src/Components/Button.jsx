/* eslint-disable react/prop-types */


const Button = ({ title, styles }) => {
    return (
        <button className={styles}>
            {title}
        </button>
    )
}

export default Button