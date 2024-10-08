import Header from "../_components/header";
import { db } from "../_lib/prisma";
import { formatDate } from "../helpers/dateHelpers";
import Search from "./_components/search";
import BarbershopItem from "./_components/barbershop-item";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import BookingItem from "../_components/booking-item";

const Home = async () => {
  const session = await getServerSession(authOptions);

  const [barbershops, recommendedBarbershops, confirmedBookings] =
    await Promise.all([
      db.barbershop.findMany({}),
      db.barbershop.findMany({
        orderBy: {
          id: "asc",
        },
      }),
      session?.user
        ? db.booking.findMany({
            where: {
              userId: (session.user as any).id,
              date: {
                gte: new Date(),
              },
            },
            include: {
              service: true,
              barbershop: true,
            },
          })
        : Promise.resolve([]),
    ]);

  const formattedDate = formatDate(new Date());

  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-semibold">
          {session?.user
            ? `Olá ${session.user.name?.split(" ")[0]}`
            : `Olá vamos agendar um corte hoje!`}
        </h2>
        <p className="capitalize text-sm">{formattedDate}</p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
          AGENDAMENTOS
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {confirmedBookings.map((booking) => (
            <BookingItem key={booking.id} booking={booking} />
          ))}
        </div>
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <div key={barbershop.id} className="min-w-[167px] max-w-[167px]">
              <BarbershopItem barbershop={barbershop} />
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 mt-6 mb-[4.5rem]">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
          Populares
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {recommendedBarbershops.map((barbershop) => (
            <div key={barbershop.id} className="min-w-[167px] max-w-[167px]">
              <BarbershopItem barbershop={barbershop} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
