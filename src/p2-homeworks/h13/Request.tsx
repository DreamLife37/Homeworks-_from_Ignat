import {RequestsAPI} from "./RequestsAPI";
import {useState} from "react";

export const Request = () => {
    let [checkbox, setCheckbox] = useState(true)
    let [response, setResponse] = useState('')

    const buttonRequest = () => {
        RequestsAPI.postRequest(checkbox)
            .then(res => setResponse(res.data.errorText))
            .catch(error => (setResponse(error.response.data.errorText)))
    }
    return <div>
        <div>{response ? (`Статус запроса: ${response}`) : ' '}</div>
        <input checked={checkbox} type={"checkbox"} onChange={event => setCheckbox(event.currentTarget.checked)}/>
        <button onClick={buttonRequest}>Отправить</button>
    </div>
}