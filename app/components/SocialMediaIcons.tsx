import Image from "next/image";
import { allIcons } from "../helpers/icons";

interface SocialMediaIconsProps {
  small?: boolean;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ small }) => {
  const myClass =
    "flex h-10 w-10 bg-primary-blue rounded-xl items-center justify-center cursor-pointer hover:bg-white hover:text-primary-blue transition-all duration-600 ease-in-out border border transprent hover:border-primary-blue" +
    (small ? " social-media-small" : "");
  return (
    <div className="flex flex-row items-center gap-3 ">
      <a
        target="_blank"
        href="https://www.instagram.com/solvo_engineers"
        className={myClass}
      >
        {allIcons.socialMedia.insta(20, 20)}
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/company/solvoengineers"
        className={myClass}
      >
        {allIcons.socialMedia.linkedin(20, 20)}
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/solvo_engineers"
        className={myClass}
      >
        {allIcons.socialMedia.whatsapp(20, 20)}
      </a>
      <a target="_blank" href="https://t.me/solvoengineers" className={myClass}>
        {allIcons.socialMedia.messanger(20, 20)}
      </a>
    </div>
  );
};

export default SocialMediaIcons;
