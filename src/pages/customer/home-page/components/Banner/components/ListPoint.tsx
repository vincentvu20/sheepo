interface ListPointProps {
  point: string;
  description: string;
}

export const ListPoint = ({ point, description }: ListPointProps) => {
  return (
    <div className="font-santoshi">
      <h6 className="text-black text-4xl font-bold">{point}</h6>
      <p className="text-base font-normal leading-[22px] text-black60">
        {description}
      </p>
    </div>
  );
};
