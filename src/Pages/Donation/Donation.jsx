import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [donation, setDonation] = useState([])

    const [noFound, setNoFound] = useState(false)

    const [seeAll, setSeeAll] = useState(false)

    useEffect(() => {

        const donationItems = JSON.parse(localStorage.getItem('donation'))
        
        if(donationItems) {
            setDonation(donationItems)
        }
        else{
            setNoFound('No Data Found')
        }

    }, [])

    return (
        <div>
            {
                noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : 
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5">
                        {
                            seeAll ? donation.map((card) => (<DonationCard key={card.id} card={card}></DonationCard>)) :
                            donation.slice(0,4).map((card) => (<DonationCard key={card.id} card={card}></DonationCard>))
                        }
                    </div>
                    <div className="flex justify-center items-center mt-10">
                    {
                        donation.length > 4 && <div onClick={()=>setSeeAll(true)} >{!seeAll && <button className="bg-green-800 px-5 py-2 text-white rounded-md font-semibold">See All</button>}</div> 
                    }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;