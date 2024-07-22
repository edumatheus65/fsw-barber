import { addHours, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (date: Date) => {
  return format(date, "EEEE ',' dd 'de' MMMM", {
    locale: ptBR,
  });
};

export const formatDayMonth = (date: Date) => {
  const formatedDate = format(date, "dd 'de' MMMM", {
    locale: ptBR,
  });
  return formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
};

export const formatDateHour = (date: Date) => {
  const adjustedDate = addHours(date, 3);
  const formattedHour = format(
    adjustedDate,
    "'Para' dd 'de' MMMM 'às' HH':'mm'.'",
    {
      locale: ptBR,
    }
  );
  return formattedHour.charAt(0).toUpperCase() + formattedHour.slice(1);
};
