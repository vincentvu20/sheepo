interface BrowseByDressStyleCardProps {
  thumbnail: string;
  name: string;
}

export const BrowseByDressStyleList = [
  {
    thumbnail: 'casual.png',
    name: 'Casual',
  },
  {
    thumbnail: 'formal.png',
    name: 'Formal',
  },
  {
    thumbnail: 'party.png',
    name: 'Party',
  },
  {
    thumbnail: 'gym.png',
    name: 'Gym',
  },
];

export const BrowseByDressStyleCard = ({
  thumbnail,
  name,
}: BrowseByDressStyleCardProps) => {
  return (
    <div className="flex justify-center">
      <div
        className="flex justify-center w-[310px] md:w-full h-[190px] md:h-full rounded-[20px] bg-cover bg-no-repeat md:mb-0 mb-3 relative"
        style={{ backgroundImage: `url(${thumbnail})` }}>
        <p className="absolute left-6 mt-4 font-bold text-2xl">{name}</p>
      </div>
    </div>
  );
};
