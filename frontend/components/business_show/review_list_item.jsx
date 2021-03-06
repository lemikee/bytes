import React from "react";
import { Link } from "react-router-dom";

const ReviewListItem = ({
  business,
  review,
  author,
  currentUser,
  deleteReview,
}) => {
  const { rating, body } = review;
  const clickHandler = (id) => {
    return () => deleteReview(id);
  };

  const editLink = () => {
    if (currentUser && review.user_id === currentUser.id) {
      return (
        <li>
          <Link to={`/restaurant/${business.id}/edit/${review.id}`}>
            <div className="review-link">
              <i className="material-icons">create</i>
              <span>Edit review</span>
            </div>
          </Link>
        </li>
      );
    } else {
      return <div></div>;
    }
  };

  const deleteBtn = () => {
    if (currentUser && review.user_id === currentUser.id) {
      return (
        <button onClick={clickHandler(review.id)}>
          <span>
            <i className="material-icons">delete</i>
          </span>
        </button>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <li className="business-show-review">
      <div className="review-sidebar">
        <div className="review-item-user-profile">
          <img className="review-user-pic" src={author.photo}></img>
          <div className="review-user-info">
            <p className="review-user-name">
              {author.first_name} {author.last_name[0]}.
            </p>
            <p className="review-user-zip">{author.zip_code}</p>
          </div>
        </div>
        <ul className="review-sidebar-links">
          <li>
            <Link to={"/"}>
              <div className="review-link">
                <i className="material-icons">share</i>
                <span className="review-first-link">Share review</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <div className="review-link">
                <i className="material-icons">code</i>
                <span>Embed review</span>
              </div>
            </Link>
          </li>
          {editLink()}
        </ul>
      </div>

      <div className="review-item-body">
        <div className="review-item-stars">
          <img
            className={`stars-medium-${rating * 2}` + " stars-medium"}
            src="https://i.imgur.com/UkZkm0D.png"
          ></img>
          <span className="review-item-date">
            {review.updated_at.substring(5, 7) +
              "/" +
              review.updated_at.substring(8, 10) +
              "/" +
              review.updated_at.substring(0, 4)}
          </span>
        </div>
        <p className="review-body">{body}</p>

        <div className="review-item-footer">
          <div className="review-item-footer-arrange">{deleteBtn()}</div>
        </div>
      </div>
    </li>
  );
};

export default ReviewListItem;
