import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

import { Fraction } from "@/lib/math/fraction";

const Home = () => {
  const test = new Fraction(1, 2);
  const test2 = new Fraction(3, 4);

  "a_{i+1} = \\frac{a_{i}}{3a_{i} + 5}"

  const expression = `${test.toTeX()} + ${test2.toTeX()} = ${test.add(test2).toTeX()}`;

  return (
    <>
      <BlockMath>{expression}</BlockMath>
    </>
  );
};

export default Home;
