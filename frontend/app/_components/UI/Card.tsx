const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const classes = `${className} border rounded-lg shadow-card dark:shadow-darkCard py-4 px-4 my-8`;
  return <div className={classes}>{children}</div>;
};

export default Card;
