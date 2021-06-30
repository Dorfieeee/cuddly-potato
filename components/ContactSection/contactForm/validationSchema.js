import * as yup from "yup";

export default yup.object().shape({
    name: yup.string().required("Uveďte Vaše jméno").label("Jméno"),
    tel: yup
        .string()
        .matches(/\d/g, "Tel. číslo musí obsahovat pouze číslice")
        .min(9, "Tel.číslo má alespoň 9 číslic")
        .label("Tel. číslo"),
    email: yup.string().when("tel", {
        is: (tel) => !tel,
        then: yup
            .string()
            .email("Neplatný formát emailu (john@email.com)")
            .required("Uveďte, prosím, alespoň email"),
        otherwise: yup
            .string()
            .email("Neplatný formát emailu (john@email.com)"),
    }),
    subject: yup
        .string()
        .required("Uveďte předmět zprávy")
        .max(100, "Nemůže být delší jak 100 znaků")
        .label("Předmět"),
    body: yup
        .string()
        .required("Tělo zprávy nesmí být prázdné")
        .min(30, "Musí obsahovat alespoň 30 znaků")
        .max(2000, "Nemůže být delší jak 2000 znaků")
        .label("Tělo zprávy"),
});
