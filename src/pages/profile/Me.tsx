import { CommingSoon } from "../../services/commingSoon/CommingSoon";

function Me() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the Me path</>
            }
        </>
    )
}

export {
    Me,
}