interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  return <h2>{props.title}</h2>;
};

export default Title;
