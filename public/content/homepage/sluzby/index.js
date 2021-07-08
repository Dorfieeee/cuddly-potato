import images from "./svg";

export default {
    title: "V čem se specializujeme",
    sluzby: [
        {
            name: "Voda",
            hrefName: "voda",
            body: [
                "Realizujeme montáž, rekonstrukci a opravu vodoinstalace s jejím dodáním",
                "S radostí namontujeme či vyměníme Vaši vanu, záchod, sprchový kout...",
                "vodovodních baterií, sifonů, ventilů a vodoměrů",
                "klozety",
                "umyvadla",
                "moduly pro závěsné WC ",
                "pisoáry",
            ],
            img: images.Water,
        },
        {
            name: "Topení",
            hrefName: "topeni",
            body: [
                "Realizujeme dodávku a montáž ústředního vytápění",
                "Provádíme montáž kotlů, radiátorů, armatur...",
                "oběhová čerpadla",
                "kotelny, výměníkové stanice",
                "podlahové vytápění",
            ],
            img: images.Heating,
        },
        {
            name: "Plyn",
            hrefName: "plyn",
            body: [
                "Realizujeme dodávku a montáž plynoinstalace",
                "Provádíme montáž plynových kotlů, sporáků a rozvodů...",
                "plynofikace kotelen",
                "plynofikace obcí",
                "revize"
            ],
            img: images.Gas,
        },
        {
            name: "Kanalizace",
            hrefName: "kanalizace",
            body: [
                "Realizujeme montáže rozvodů kanalizačního potrubí...",
                "kanalizace venkovní a dešťová",
                "kanalizace v objektech",
                "revizní šachty",
                "čištění kanalizace ",
                "výkopové práce ",
            ],
            img: images.Drainage,
        },
    ],
};
