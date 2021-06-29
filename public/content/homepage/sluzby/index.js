import images from "./svg"

const dummyBody = [
    "realizace, rekonstrukce a opravy rozvodů vody (měď, plast)",
    "realizace venkovních vodovodních rozvodů a vodovodních přípojek",
    "montáž a výměna van, WC, sprchových koutů a pisoárů",
    "montáž a výměna baterií, sifonů, umyvadel a dřezů",
]

export default {
    title: "V čem se specializuji",
    sluzby: [
        {
            name: "Voda",
            body: dummyBody,
            img: images.Water,
        },
        {
            name: "Topení",
            body: dummyBody,
            img: images.Heating,
        },
        {
            name: "Plyn",
            body: dummyBody,
            img: images.Gas,
        },
        {
            name: "Kanalizace",
            body: dummyBody,
            img: images.Drainage,
        }
    ]
}