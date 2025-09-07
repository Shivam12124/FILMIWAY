import { Star } from "lucide-react";

export default function ReviewsSection({ reviews }) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <section className="reviews-section">
      <div className="section-container">
        <h2 className="section-title">Reviews</h2>
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{review.author}</h4>
                  {review.author_details?.rating && (
                    <div className="review-rating">
                      <Star size={14} fill="currentColor" />
                      <span>{review.author_details.rating}/10</span>
                    </div>
                  )}
                </div>
                <div className="review-date">
                  {new Date(review.created_at).toLocaleDateString()}
                </div>
              </div>
              <p className="review-content">
                {truncateText(review.content, 300)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
