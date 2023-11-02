import React from "react";

const PlayButton = (args: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...args}>play</button>;
};

export default PlayButton;
