import * as React from "react";
const NonbinarySymbol = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M140 84.902V63.486l17.419 10.73a12 12 0 0 0 12.588-20.433L150.879 42l19.128-11.783a12 12 0 0 0-12.588-20.434L128 27.906 98.581 9.783a12 12 0 0 0-12.588 20.434L105.121 42 85.993 53.783a12 12 0 1 0 12.588 20.434L116 63.487v21.415a80 80 0 1 0 24 0ZM128 220a56 56 0 1 1 56-56 56.063 56.063 0 0 1-56 56Z" />
  </svg>
);
export default NonbinarySymbol;
