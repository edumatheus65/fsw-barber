import BookingItem from "../_components/booking-item";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import { formatDate } from "../helpers/dateHelpers";
import Search from "./_components/search";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
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
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
          AGENDAMENTOS
        </h2>
        {/* <BookingItem /> */}
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <div className="px-5 mt-6 mb-[4.5rem]">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
          Populares
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
