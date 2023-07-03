import { CommingSoon } from "../../services/commingSoon/CommingSoon";

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