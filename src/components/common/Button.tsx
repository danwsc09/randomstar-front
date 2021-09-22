interface ButtonProps {
  className: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
  <button className={props.className}>{props.children}</button>
);

export default Button;
