import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaAt,
    FaFingerprint,
    FaUserTie,
} from "react-icons/fa";
import kontakty from "../../kontakty";

const { address, tel, email } = kontakty;

export default {
    id: "kontakty",
    title: "Jak se můžeme spojit",
    kontakty: {
        title: "Moje vizitka",
        person: {
            fname: kontakty.persons.main.fname,
            lname: kontakty.persons.main.lname,
            icon: FaUserTie,
        },
        ico: { value: kontakty.ico.value, link: kontakty.ico.link, icon: FaFingerprint },
        options: {
            telefon: { value: tel, icon: FaPhoneAlt },
            email: { value: email, icon: FaAt },
            adresa: { value: address, icon: FaMapMarkerAlt },
        },
    },
};
