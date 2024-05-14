import { db } from "@/app/_lib/prisma";
import BabershopInfo from "./_components/barbershop-info";

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
        }
    })

    if (!barbershop) {
        return null;
    }
    
    return (
        <BabershopInfo barbershop={barbershop} />
    );
}

export default BarbershopDetailsPage;