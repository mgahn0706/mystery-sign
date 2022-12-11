export const prob1 = ({ first, second }: { first: string; second: string }) => {
  return Number(first) * (Number(second) - 1);
};

export const prob2 = ({ first, second }: { first: string; second: string }) => {
  let result = 0;
  for (let i = 0; i < first.length; i++) {
    result += Number(first[i]);
  }

  for (let j = 0; j < second.length; j++) {
    result += Number(second[j]);
  }
  return result;
};

export const prob3 = ({ first, second }: { first: string; second: string }) => {
  return Number(first) * Number(second);
};

export const prob4 = ({ first, second }: { first: string; second: string }) => {
  return Number(first) / Number(second);
};

export const prob5 = ({ first, second }: { first: string; second: string }) => {
  return Number(first + second);
};

export const prob6 = ({ first, second }: { first: string; second: string }) => {
  return Number(first) + Number(second);
};

export const prob7 = ({ first, second }: { first: string; second: string }) => {
  return Number(first) + Number(second);
};

export const prob8 = ({ first, second }: { first: string; second: string }) => {
  return Number(first) + Number(second);
};

export const prob9 = ({ first, second }: { first: string; second: string }) => {
  return Number(first) + Number(second);
};

export const prob10 = ({
  first,
  second,
}: {
  first: string;
  second: string;
}) => {
  return Number(first) + Number(second);
};

export const prob11 = ({
  first,
  second,
}: {
  first: string;
  second: string;
}) => {
  return Number(first) + Number(second);
};
