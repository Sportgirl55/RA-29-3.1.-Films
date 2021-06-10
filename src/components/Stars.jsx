import PropTypes from 'prop-types';
import Star from "./Star";

function Stars(props) {
  let count = props.count;
  if (count > 5 || count < 1) {
    return null;
  } else {
    return (
      <ul className="card-body-stars u-clearfix">
        <li>
          {[...Array(count)].map((item, index) => <Star key={index} />)}
        </li>
      </ul>
    )
  }


}

export default Stars;



Stars.propTypes ={
  count: PropTypes.number
}


