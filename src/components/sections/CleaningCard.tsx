import type { FC } from "react";

interface CleaningCardProps {
    title: string;
    description: string;
    image: string;
    isActive?: boolean;
}

const CleaningCard: FC<CleaningCardProps> = ({ title, description, image, isActive }) => {
    return (
        <div
            className={`relative flex flex-col items-start p-6 bg-white shadow-md rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${isActive ? "border-b-4 border-primary" : ""
                }`}
        >
            <img
                src={image} // image dans /public/images/
                alt={title}
                className="h-56 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-[.9rem] md:text-[1.4rem] font-heading font-bold text-secondary mb-2">
                {title}
            </h3>
            <p className="leading-relaxed text-[.95rem] md:text-[1.07rem] max-w-3xl text-black/70 mx-auto">
                {description}
            </p>
        </div>
    );
};

export default CleaningCard;
