import { CommingSoon } from "../../services/CommingSoon";

function SignUp() {
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
    SignUp
}