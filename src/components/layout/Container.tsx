import { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full md:w-[85%] lg:w-[70%] xl:w-[62%] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
