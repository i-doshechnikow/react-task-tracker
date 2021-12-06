import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div className={'header'}>
            <h1>{props.title}</h1>
            <button className={'btn'}>Add</button>
        </div>
    )
};

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}

const headingStyles = {color: 'red', backgroundColor: 'black'};

export default Header;