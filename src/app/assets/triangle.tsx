import * as React from "react";
const Triangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 1000 100"
    {...props}
  >
    <path d="M500 98.9 0 6.1V0h1000v6.1L500 98.9z" />
  </svg>
);
export default Triangle;
