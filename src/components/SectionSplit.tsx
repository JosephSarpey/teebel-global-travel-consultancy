type Props = {
  title: string;
  subtitle: string;
  text: string;
  imgSrc: string;
  mdReverse?: boolean;
  smReverse?: boolean;
};

function SectionSplit({
  title,
  subtitle,
  text,
  imgSrc,
  mdReverse = false,
  smReverse = false,
}: Props) {
  return (
    <>
      <section
        className={`hero flex flex-col md:flex-row py-10 md:pt-15 ${
          smReverse ? "flex-col-reverse" : ""
        } ${mdReverse ? "md:flex-row-reverse" : ""}`}
      >
        {/* text Content */}
        <div className={`md:w-1/2`}>
          <div className="m-auto flex flex-col items-center w-full gap-5 h-full px-5 py-10 md:px-10 md:py-15">
            <h1 className={`text-secondary font-semibold text-sm text-center bg-muted rounded-lg p-2`}>{title}</h1>
            <h2 className={`text-brand font-bold text-3xl md:text-4xl text-center`}>{subtitle}</h2>
            <p className={`text-muted font-semibold text-lg text-center`}>{text}</p>
          </div>
        </div>

        {/* Image Content */}
        <div className={`md:w-1/2 position-contain flex justify-center items-center`}>
          <img src={imgSrc} alt={title} className="max-w-full" />
        </div>
      </section>
    </>
  );
}

export default SectionSplit;
