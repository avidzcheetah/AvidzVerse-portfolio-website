import RotatingCircle from './RotatingCircle';

const ProfileImage = () => {
  return (
    <div className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto">
      <div className="relative w-full h-full">
        <RotatingCircle />
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQEbRB-AADspKQ/profile-displayphoto-shrink_800_800/B56ZPpHzJJGQAc-/0/1734782957746?e=1740614400&v=beta&t=_gMgPWVRYEbKgT3FMQp2XrVWvLt-vmbCJeCRbgS1FXo"
          alt="Avidz"
          className="absolute inset-0 rounded-full w-full h-full object-cover border-4 border-[var(--color-primary)] shadow-xl"
        />
      </div>
    </div>
  );
};

export default ProfileImage;