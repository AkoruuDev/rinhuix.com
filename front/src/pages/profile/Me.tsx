import { CommingSoon } from "../../services/CommingSoon";

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