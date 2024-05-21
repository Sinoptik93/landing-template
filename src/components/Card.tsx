import { twMerge } from 'tailwind-merge';

const Card = () => {
    const baseStyles = 'p-4 bg-white rounded-lg shadow-md';
    const mobileStyles = 'p-6';
    const tabletStyles = 'md:p-8';
    const desktopStyles = 'lg:p-10';
    const hoverStyles = 'hover:bg-gray-100';

    const cardClasses = twMerge(
        baseStyles,
        mobileStyles,
        tabletStyles,
        desktopStyles,
        hoverStyles
    );

    return (
        <div className={cardClasses}>
            <h2 className="text-xl font-bold">Card Title</h2>
            <p className="text-gray-700">This is a card component with responsive styles.</p>
        </div>
    );
};

export default Card;
