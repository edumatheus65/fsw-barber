"use client";

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPin, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../../../_components/ui/sheet"
import SideMenu from "@/app/_components/side-menu";

interface BarbershopInfoProps {
    barbershop: Barbershop
}

const BabershopInfo = ({ barbershop }: BarbershopInfoProps) => {
    const router = useRouter()

    const handleBackClick = () => {
        router.replace('/')
    }
    return (
        <div>
            <div className="h-[250px] w-full relative">
                <Button size="icon" variant="outline" className="z-50 absolute top-4 left-4">
                    <ChevronLeftIcon
                        onClick={handleBackClick}
                    />
                </Button>

                <Sheet>
                    <SheetTrigger>
                        <Button size="icon" variant="outline" className="z-50 absolute top-4 right-4">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className='p-0'>
                        <SideMenu />
                    </SheetContent>
                </Sheet>

                <Image
                    src={barbershop.imageUrl}
                    fill
                    alt={barbershop.name}
                    style={{ objectFit: "cover" }}
                    className="opacity-75"
                />
            </div>

            <div className="px-5 py-3 pb-6 border-b border-solid border-secondary">
                <h1 className="text-xl font-bold">{barbershop.name}</h1>
                <div className="flex items-center gap-1 mt-2">
                    <MapPin className="text-primary" size={18} />
                    <p>{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <StarIcon className="text-primary" size={18} />
                    <p>5.0 (889 avaliações)</p>
                </div>
            </div>

        </div>
    );
}

export default BabershopInfo;