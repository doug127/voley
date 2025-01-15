import { MailSVG } from "../../components/SVG/Mail";
import { PhoneSVG } from "../../components/SVG/Phone";
import { LocationSVG } from "../../components/SVG/location";
import { FacebookSVG } from "../../components/SVG/Facebook";
import { InstagramSVG } from "../../components/SVG/Instagram";
import { XSVG } from "../../components/SVG/X";
import { TiktokSVG } from "../../components/SVG/Tiktok";
import FooterStyles from "./Footer.module.css";

export const Footer = () => {
  const title = `text-white pb-6 font-semibold text-lg`;
  const liStyles = `text-white flex flex-row pl-0 py-4 ml-0`;
  const pStyles = `text-white ml-6`;
  const container = `p-4 `;
  return (
    <>
      <footer
        className={`flex justify-evenly items-baseline ${FooterStyles.footer}`}
      >
        <div
          className={`ml-20 mr-4 p-10 text-white ${FooterStyles.container1}`}
        >
          <h2 className={`${title} text-left`}>Contacto</h2>
          <ul className={`flex flex-col text-left`}>
            <li className={`${liStyles}`}>
              <LocationSVG />
              <p className={`${pStyles}`}>Ubicación</p>
            </li>
            <li className={`${liStyles}`}>
              <PhoneSVG />
              <p className={`${pStyles}`}>+58-414-5074493</p>
            </li>
            <li className={`${liStyles}`}>
              <MailSVG />
              <p className={`${pStyles}`}>example@mail.com</p>
            </li>
          </ul>
        </div>
        <div className={`mx-4 p-10 ${FooterStyles.container2}`}>
          <h2 className={`${title} text-center`}>
            E.C.I.D
            <br />
            Mesa De Cavacas
          </h2>
          <p className={`${pStyles}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            nihil reprehenderit asperiores sit voluptatem expedita. Magnam
            delectus quisquam, velit non dicta repudiandae quas iure.
          </p>
          <div className={`pt-10 flex justify-evenly`}>
            <FacebookSVG />
            <InstagramSVG />
            <XSVG />
            <TiktokSVG />
          </div>
        </div>
        <div
          className={`mr-20 ml-4 p-10 items-stretch ${FooterStyles.container3}`}
        >
          <h2 className={`${title}  text-left`}>Horarios</h2>
          <ul className={`flex flex-col`}>
            <li className={`list-disc list-inside ${liStyles}`}>
              Lunes a Viernes de 3:30pm a 6:00pm
            </li>
            <li className={`list-disc list-inside ${liStyles}`}>
              Sábados de 9:00am a 12:00pm
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
