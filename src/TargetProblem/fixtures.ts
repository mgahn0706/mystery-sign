import useMysterySign from "@/hooks/useMysterySign";

interface TargetProblemDataType {
  round: number;
  first: string;
  second: string;
}

const TargetProblemData: TargetProblemDataType[] = [
  {
    round: 0,
    first: "0",
    second: "0",
  },
  {
    round: 1,
    first: "10",
    second: "20",
  },
];

export default TargetProblemData;
