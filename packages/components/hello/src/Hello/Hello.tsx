import { FC } from "react";

export type HelloProps = {
  name: string;
}

export const Hello: FC<HelloProps> = ({ name }) => {
  return <h1>Hello { name }</h1>;
};
