import { CommingSoon } from "../../services/commingSoon/CommingSoon";

function SignIn() {
    const wait = true;

    return (
        <div>
            {
                wait ?
                <CommingSoon /> :
                <>This is the / path</>
            }
        </div>
    )
}

export {
    SignIn
}