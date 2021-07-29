const sleep = async (ms) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });

export default function onSubmit(values, actions) {
    let response,
        statusTimeout = 3 * 1000;
        
    const setInitial = async ({ reset } = {}) => {
        await sleep(statusTimeout);
        reset ? actions.resetForm("initial") : actions.setStatus("initial");
    };

    // disables another submission
    actions.setSubmitting(true);
    response = fetch("/api/contact", {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
    })
        .then(async (response) => {
            // enables another submission
            actions.setSubmitting(false);

            // change status
            if (response.ok) {
                actions.setStatus("success");
                setInitial({ reset: true });
            } else {
                actions.setStatus("error");
                setInitial();
            }
        })
        .catch(async (error) => {
            actions.setSubmitting(false);
            actions.setStatus("error");
            setInitial();
        });
}
