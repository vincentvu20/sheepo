export interface TitleSectionProps {
  name: string;
  className?: string;
}

export const TitleSection = ({ name, className }: TitleSectionProps) => {
  return (
    <div className="text-black text-5xl font-bold font-integralCF">
      <h1 className={className}>{name}</h1>
    </div>
  );
};
