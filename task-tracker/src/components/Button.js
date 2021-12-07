import PropTypes from 'prop-types'

const Button = (props) => {
    return <button onClick={props.onClick} className={'btn'} style={{color: props.color}}>{props.text}</button>
}

Button.defaultProps = {
    color: 'red',
    text: 'Add',
    onClick: () => {},
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
export default Button;