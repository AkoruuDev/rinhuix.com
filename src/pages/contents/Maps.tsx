import { CommingSoon } from "../../services/commingSoon/CommingSoon";

function Maps() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the Maps path</>
            }
        </>
    )
}

export {
    Maps,
}