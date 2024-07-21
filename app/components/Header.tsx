import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3babb51eaa04e0f4f9062c5fa9e210d1e0d63d95189247ac07ee7fd8de51bac4?apiKey=1201a0c6cc654f13b50ffdd8cb5d2549&" 
        alt="Landing page header image" 
        className="w-full aspect-[1.96] max-w-[1802px] max-md:max-w-full" 
      />
    </div>
  );
};

export default Header;