import { Link } from "react-daisyui";

const DonationCard = ({ card }) => {

    const { id, picture, category, title, price, color_cat_bg, color_card_bg, color_text_button } = card || {}

    return (
        <div>
            <div style={{background: color_card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                <button style={{color: color_text_button, background: color_cat_bg}} className="block font-sans text-base rounded-md font-medium leading-relaxed antialiased px-2 mb-2">{category}</button>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p style={{color: color_text_button}} className="text-xl mb-5">${price}</p>
                    <Link to={`/card/${id}`}><button style={{background: color_text_button}} className="p-1 md:p-2 lg:p-3 text-white rounded-md font-semibold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;