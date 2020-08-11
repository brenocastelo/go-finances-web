const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(date);
};

export default formatDate;
