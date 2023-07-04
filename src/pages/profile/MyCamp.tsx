import { CommingSoon } from "../../services/CommingSoon";

function MyCamp() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the MyCamp path</>
            }
        </>
    )
}

export {
    MyCamp,
}