import { db } from "@/app/_lib/prisma";
import BabershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-itm";

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    };
};

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {

    if (!params.id) {
        // TODO: redirect to home page
        return null;
    }
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true
        }
    })

    if (!barbershop) {
        return null;
    }

    return (
        <div>
            <BabershopInfo barbershop={barbershop} />

            <div className="px-5 flex flex-col gap-4 py-6">
                {barbershop.services.map((service) => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

export default BarbershopDetailsPage;