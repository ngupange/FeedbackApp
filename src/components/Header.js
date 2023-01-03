import PropTypes from 'prop-types'
function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor

    }
    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

// If nothing passed as props from APP component then use this
Header.defaultProps = {
    text: 'Feedbaack UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

// Validation for our props
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}
export default Header