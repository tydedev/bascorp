import React from "react";

const useScroll = () => {
  const [scroll, setScroll] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scroll;
};

export default useScroll;
