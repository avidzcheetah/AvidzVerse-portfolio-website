import RotatingCircle from './RotatingCircle';

const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="relative w-64 h-64 lg:w-96 lg:h-96">
        <RotatingCircle />
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQEbRB-AADspKQ/profile-displayphoto-shrink_800_800/B56ZPpHzJJGQAc-/0/1734782957746?e=1740614400&v=beta&t=_gMgPWVRYEbKgT3FMQp2XrVWvLt-vmbCJeCRbgS1FXo"
          alt="Avidz"
          className="absolute inset-0 m-auto rounded-full w-[90%] h-[90%] object-cover border-4 border-[var(--color-primary)] shadow-xl"
        />
      </div>
    </div>
  );
};