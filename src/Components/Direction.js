import {Link} from "react-router-dom";

const Direction = ({path, text}) => {
    return (

            <div className='directions'>
                <Link to={path}>
                    {text}
                </Link>
            </div>

    )
}

export default Direction;
