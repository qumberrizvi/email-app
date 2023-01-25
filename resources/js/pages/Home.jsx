import {useState} from "react";
import {apiService} from "../services/api.service";

export default function Home() {
    const [mailSent, setMailSent] = useState(false);
    const [error, setError] = useState(false);

    const handleSend = () => {
        apiService.notify()
            .then(() => {
                setMailSent(true);
                setError(false);
            })
            .catch(() => {
                setError(true);
            })

    }

    return (
        <>
            {
                (!mailSent) ?
                    <span className={"centered"}>
                <button className={"send-button"} onClick={handleSend}>
                    <span className={"emoji"}>✉️</span> Send mails</button>
            </span> :
                    <span className={"centered success-message"}>
                <span className={"emoji"}>📨</span>Mails are on their way!</span>
            }

            {
                (error) && (<span className={"error-message"}>
                <span className={"emoji"}>📮</span>Something went wrong!</span>)
            }
        </>
    );
}
