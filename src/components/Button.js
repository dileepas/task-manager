import PropTypes from 'prop-types'

const Button = (props) => {

    return (
        <button
            className='btn'
            style={{backgroundColor: props.color}}
            onClick={props.onClick}>
            {props.text}
        </button>
    )
}

Button.defaultProps = {
    color:'red'
}

Button.prototype = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick: PropTypes.func
}

export default Button