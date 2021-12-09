import PropTypes from 'prop-types';
import Button from "./Button";

const Header = (props) => {
    const { onAddClick, toggleForm } = props;

    return (
        <div className={'header'}>
            <h1>{props.title}</h1>
            <Button text={toggleForm ? 'hide form' : 'add'} color={toggleForm ? 'red' : 'white'} onClick={onAddClick}/>
        </div>
    )
};

Header.defaultProps = {
    title: 'Tasks Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}

const headingStyles = {color: 'red', backgroundColor: 'black'};

export default Header;