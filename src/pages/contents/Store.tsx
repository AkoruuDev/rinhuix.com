import { CommingSoon } from "../../services/commingSoon/CommingSoon";

function Store() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the Store path</>
            }
        </>
    )
}

export {
    Store,
}