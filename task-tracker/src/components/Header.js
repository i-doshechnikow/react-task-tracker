import PropTypes from 'prop-types';
import Button from "./Button";

const Header = (props) => {
    const onClick = () => {
        console.log('hi!');
    }

    return (
        <div className={'header'}>
            <h1>{props.title}</h1>
            <Button text={'add'} color={'white'} onClick={onClick}/>
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