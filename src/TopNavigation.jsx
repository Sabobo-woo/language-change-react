import UserInfo from "./UserInfo"
import LanguageContext from "./LanguageContext"
import { useContext } from "react";

export default function TopNavigation() {

    const { language } = useContext(LanguageContext);
    return (
        <div className="top-navigation">
            {
                language == 'en' ?
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">What we do</a>
                        <a href="#">Contact</a>
                    </nav>

                    :

                    <nav>
                        <a href="#">Domu</a>
                        <a href="#">Co delame</a>
                        <a href="#">Kontakt</a>
                    </nav>
            }
            <UserInfo />

        </div>
    )
}