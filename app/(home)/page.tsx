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
    </div>

  );
}

export default Home;