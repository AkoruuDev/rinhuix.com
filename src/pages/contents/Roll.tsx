import { CommingSoon } from "../../services/commingSoon/CommingSoon";

function Roll() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the Roll path</>
            }
        </>
    )
}

export {
    Roll,
}