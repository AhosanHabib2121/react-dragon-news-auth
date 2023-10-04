import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ singleNews }) => {
    const { title, image_url, details, _id } = singleNews;
    return (
        <div className="card card-compact bg-base-100 border pb-5 mb-8">
            <figure><img src={image_url} alt="not found"  className=' w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{ title }</h2>
                {
                    details.length > 200
                        ? <p>{details.slice(0, 200)} <Link
                            to = {`/newsDetails/${_id}`}
                            className=' text-blue-500 font-semibold'>Read More...</Link></p>
                        : <p>{ details }</p>
                }
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    singleNews: PropTypes.object
}
export default NewsCard;