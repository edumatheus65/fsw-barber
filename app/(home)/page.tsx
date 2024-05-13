import BookingItem from "../_components/booking-item";
import Header from "../_components/header";
import { formatDate } from "../helpers/dateHelpers";
import Search from "./_components/search";

const Home = () => {
  const formattedDate = formatDate(new Date());

  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-semibold">Olá Miguel</h2>
        <p className="capitalize text-sm">{formattedDate}</p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs mb-3 text-gray-400 font-bold">Agendamentos</h2>
        <BookingItem />
      </div>
    </div>

  );
}

export default Home;