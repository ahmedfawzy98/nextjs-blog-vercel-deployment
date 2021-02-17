import Image from 'next/image';

const ProfileImage = () => (
  <Image
    src="../public/images/profile.jpg"
    height={144}
    width={144}
    alt="Ahmed Fawzy"
  >
  </Image>
);

export default ProfileImage;
