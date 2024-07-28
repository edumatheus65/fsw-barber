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

export const formatMonth = (date: Date) => {
  const formatedMonth = format(date, "MMMM", {
    locale: ptBR,
  });
  return formatedMonth.charAt(0).toUpperCase() + formatedMonth.slice(1);
};

export const formatDay = (date: Date) => {
  const formatedDay = format(date, "dd", {
    locale: ptBR,
  });
  return formatedDay.charAt(0).toUpperCase() + formatedDay.slice(1);
};

export const formatHour = (date: Date) => {
  const addedHours = new Date(date.getTime());
  addedHours.setHours(addedHours.getHours() + 3);

  const formatedHour = format(addedHours, "hh:mm", {
    locale: ptBR,
  });
  return formatedHour.charAt(0).toUpperCase() + formatedHour.slice(1);
};
