import { CommingSoon } from "../../services/CommingSoon";

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