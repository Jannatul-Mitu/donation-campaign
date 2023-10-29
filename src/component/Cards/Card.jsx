import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({card}) => {

    const {id, picture, category, title, color_cat_bg, color_card_bg, color_text_button} = card || {}

    return (
        <Link to={`/card/${id}`}>
        <div style={{background: color_card_bg}} className="relative flex max-w-[24rem] flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img className="w-full"
                        src={picture}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-4">
                    <button style={{color: color_text_button, background: color_cat_bg}} className="block font-sans text-base rounded-md font-medium leading-relaxed antialiased px-2">{category}</button>
                    <h3 style={{color: color_text_button}} className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{title}</h3>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    card: PropTypes.object
  };

export default Card;