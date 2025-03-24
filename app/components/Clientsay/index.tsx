import Image from "next/image";
import avatar from "../../../public/assets/clientsay/avatars.png"
import user from "../../../public/assets/clientsay/user.png"
import { useTranslations } from "next-intl";
const Clientsay = () => {

    const t=useTranslations("homepage.Clientsay")
    return (
        <div className="mx-auto max-w-2xl py-40 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="bg-image-what text-center">
        {/* Titre */}
        <h3 className="text-navyblue text-4xl lg:text-6xl font-semibold">
          {t("title")}.
        </h3>
        
        {/* Description */}
        <h4 className="text-lg font-normal text-darkgray mt-4">
          {t("description1")} <br /> {t("description2")}
        </h4>

        {/* Image principale */}
        <div className="relative hidden lg:block">
          <Image src={avatar} alt="avatar-image" width={1061} height={733} className="mx-auto" />

          {/* Bloc utilisateur */}
          <div className="absolute bottom-40 left-80 text-center">
            <Image
              src={user}
              alt="user-image"
              width={168}
              height={168}
              className="mx-auto pt-10 lg:pb-10"
            />
            <div className="inline-block bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-base font-normal text-darkgray">
                {t("p")} <br /> {t("p1")} <br /> {t("p2")}.
              </p>
              <h3 className="text-2xl font-medium py-2">{t("h3")}</h3>
              <h4 className="text-sm font-normal">{t("h4")}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Clientsay;
