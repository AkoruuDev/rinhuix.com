import { CommingSoon } from "../../services/commingSoon/CommingSoon";

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