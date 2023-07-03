import { CommingSoon } from "../../services/commingSoon/CommingSoon";

function MyChars() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the MyChars path</>
            }
        </>
    )
}

export {
    MyChars,
}