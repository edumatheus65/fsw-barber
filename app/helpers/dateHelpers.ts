import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export const formatDate = (date: Date) => {
    return format(date, "EEEE ',' dd 'de' MMMM", {
        locale: ptBR
    })
}

export const formatDayMonth = (date: Date) => {
    const formatedDate = format(date, "dd 'de' MMMM", {
        locale: ptBR
    })
    return formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
}