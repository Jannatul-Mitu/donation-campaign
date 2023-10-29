import swal from "sweetalert";

const CardDetails = ({ card }) => {

    const { id, picture, description, title, price, color_cat_bg, color_card_bg, color_text_button } = card || {}

    const handleAddToDonation = () => {
        const addedDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))
        if(!donationItems) {
            addedDonationArray.push(card)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal("Good job!", "Thank you for your support! Your donation is greatly appreciated.", "success");
        }
        else{
            addedDonationArray.push(...donationItems, card)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal("Good job!", "Thank you for your support! Your donation is greatly appreciated.", "success");
        }
    }

    return (
        <div className="flex justify-center mx-5 lg:mx-0">
            <div className="relative flex w-full flex-col bg-white bg-clip-border text-gray-700">

                <div> 
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none z-0">
                    <img className="w-full lg:h-[900px] rounded-md"
                        src={picture}
                        alt="ui/ux review check"
                    />
                </div>

                <div className="bg-black w-full py-7 md:py-10 lg:py-12 absolute z-10 mt-[-55px] md:mt-[-80px] lg:mt-[-96px] rounded-b-md opacity-[50%]">
                </div>

                <div className=" absolute z-20 mt-[-43px] md:mt-[-60px] lg:mt-[-70px] ml-3 md:ml-5 lg:ml-6">
                <button onClick={handleAddToDonation} style={{background: color_text_button}} className="p-1 md:p-2 lg:p-3 text-white rounded-md font-semibold">Donate ${price}</button>
                </div>
                </div>

                <div className="space-y-5 mt-10">
                    <h4 className="block font-sans text-2xl lg:text-4xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">{title}</h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;