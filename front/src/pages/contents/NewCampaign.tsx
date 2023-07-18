import { CommingSoon } from "../../services/CommingSoon";

function NewCamp() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the NewCamp path</>
            }
        </>
    )
}

export {
    NewCamp,
}