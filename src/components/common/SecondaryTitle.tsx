interface TitleProps {
  title: string;
}

const SecondaryTitle: React.FC<TitleProps> = (props: TitleProps) => {
  return <h3>{props.title}</h3>;
};

export default SecondaryTitle;
