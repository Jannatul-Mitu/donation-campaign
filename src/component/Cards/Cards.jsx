import Card from "./Card";
import PropTypes from 'prop-types';

const Cards = ({cards}) => {
    console.log(cards);


    return (
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 lg:mx-0 mt-10">
            {
                cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.object
  };

export default Cards;