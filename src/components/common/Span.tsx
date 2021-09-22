interface SpanProps {
  className: string;
  children?: React.ReactNode;
}
const Span: React.FC<SpanProps> = ({ className, children }: SpanProps) => (
  <span className={className}>{children}</span>
);

export default Span;
