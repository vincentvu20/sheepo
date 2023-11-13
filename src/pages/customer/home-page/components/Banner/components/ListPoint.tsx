interface ListPointProps {
  point: string;
  description: string;
}

export const ListPoint = ({ point, description }: ListPointProps) => {
  return (
    <div className="font-santoshi">
      <h6 className="text-black sm:text-4xl text-2xl font-bold">{point}</h6>
      <p className="sm:text-base text-xs font-normal leading-[22px] text-black60">
        {description}
      </p>
    </div>
  );
};
