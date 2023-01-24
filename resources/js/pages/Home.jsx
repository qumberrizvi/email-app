import {useState} from "react";

export default function Home() {
    const [mailSent, setMailSent] = useState(false);

    const handleSend = () => {
        setMailSent(true);
    }

    return (
        (!mailSent) ?
            <span>
                <button onClick={handleSend}>🚀 Send</button>
            </span> :
            <span>✅ Mails are being sent!</span>
    );
}
