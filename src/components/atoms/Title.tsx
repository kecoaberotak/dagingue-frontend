const Title: React.FC<{ className: string; title: string; subTitle: string }> = ({ className, title, subTitle }) => {
  return (
    <section className={className}>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </section>
  );
};

export default Title;
