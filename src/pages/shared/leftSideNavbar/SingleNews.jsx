import PropTypes from 'prop-types';

const SingleNews = ({ singleData }) => {
    const { photo, title,category,date} = singleData;
    return (
        <div className="card card-compact">
            <figure><img  src={photo} className=" rounded-lg" alt="not found" /></figure>
            <div className="mt-4">
                <h2 className="card-title ">{ title }</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className=" ">
                    <h3>{category}</h3>
                    <h3>{date}</h3>
                </div>
            </div>
        </div>
    );
};

SingleNews.propTypes = {
    singleData: PropTypes.object.isRequired
}

export default SingleNews;