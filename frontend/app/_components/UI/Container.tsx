const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const classes = `${className} md:flex flex-wrap gap-6 justify-center`;
  return <div className={classes}>{children}</div>;
};

export default Container;
