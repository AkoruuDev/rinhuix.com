import { CommingSoon } from "../../services/CommingSoon";

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