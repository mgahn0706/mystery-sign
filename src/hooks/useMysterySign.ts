import { prob1 } from "@/MysterySignFunction";

interface useMysterySignProps {
  first: string;
  second: string;
  round: number;
}

export default function useMysterySign({
  first,
  second,
  round,
}: useMysterySignProps) {
  switch (round) {
    case 1:
      return prob1(first, second);
    default:
      return "알수 없는 에러";
  }
}
