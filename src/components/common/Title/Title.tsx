import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <div className="text-center text-3xl font-semibold">{title}</div>;
};

export default Title;
