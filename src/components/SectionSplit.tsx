type Props = {
  title: string;
  subtitle: string;
  text: string;
  imgSrc: string;
  imgSrcMobile?: string;
  mdReverse?: boolean;
  smReverse?: boolean;
  children?: React.ReactNode;
  className?: string;
};

function SectionSplit({
  title,
  subtitle,
  text,
  imgSrc,
  imgSrcMobile,
  mdReverse = false,
  smReverse = false,
  children,
  className = '',
}: Props) {
  return (
    <>
      <section
        className={`hero flex flex-col pt-15 md:pt-30 md:pb-0 md:flex-row ${
          smReverse ? "flex-col-reverse" : ""
        } ${mdReverse ? "md:flex-row-reverse" : ""} ${className}`}
      >
        {/* text Content */}
        <div className="md:w-1/2 h-full">
          <div className="m-auto flex flex-col items-center w-full gap-5 h-full px-5 py-10 md:px-10 md:py-15">
            <h1 className="text-secondary font-semibold text-sm text-center bg-muted rounded-lg p-2">
              {title}
            </h1>
            <h2 className="text-brand font-bold text-2xl md:text-4xl text-center">
              {subtitle}
            </h2>
            <p className="text-muted font-semibold text-base md:text-lg text-center">
              {text}
            </p>
            {children}
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 h-full flex justify-center items-center">
          {/* Mobile Image */}
          <img
            src={imgSrcMobile}
            alt={title}
            className="w-full max-w-full block md:hidden"
          />
          {/* Desktop Image */}
          <img
            src={imgSrc}
            alt={title}
            className="w-full max-w-full hidden md:block h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default SectionSplit;
