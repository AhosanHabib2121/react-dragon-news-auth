import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GoShareAndroid } from "react-icons/go";

const NewsCard = ({ singleNews }) => {
    const { title, image_url, details, _id, author } = singleNews;
    return (
        <div className="card card-compact bg-base-100 border pb-5 mb-8">
            <div className='flex  justify-between items-center px-5 bg-[#F3F3F3]'>
                {/* content part */}
                <div className=' py-4 flex  items-center gap-4'>
                    <img src={author?.img} className=' w-16 rounded-full' alt="not found" />
                    <div>
                        <h2 className=' text-[#403F3F] text-base font-semibold'>{ author?.name}</h2>
                        <h4 className=' text-[#706F6F] text-sm font-normal'>{author?.published_date?.slice(0, 10)}</h4>
                    </div>
                </div>
                {/* icon part */}
                <div>
                    <GoShareAndroid className=' w-7 h-7'></GoShareAndroid>
                </div>
            </div>
            <h2 className=" text-[#403F3F] text-xl font-bold px-5 py-5">{ title }</h2>
            <figure><img src={image_url} alt="not found"  className=' w-full' /></figure>
            <div className="card-body">

                {
                    details.length > 200
                        ? <p className=' text-[#706F6F] text-base font-normal'>{details.slice(0, 200)} <Link
                            to = {`/newsDetails/${_id}`}
                            className=' text-orange-500 font-semibold' >Read More...</Link></p>
                        : <p className=' text-[#706F6F] text-base font-normal'>{ details }</p>
                }
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    singleNews: PropTypes.object
}
export default NewsCard;