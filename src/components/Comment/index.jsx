import PropTypes from "prop-types";

Comment.propTypes = {
  email: PropTypes.string,
  date: PropTypes.string,
  hour: PropTypes.string,
  text: PropTypes.string,
};

export default function Comment({ email, date, hour, text }) {
  return (
    <div className="comment">
      <h3>{email}</h3>
      <p>
        Em {date}, {hour}
      </p>
      <p>{text}</p>
    </div>
  );
}
