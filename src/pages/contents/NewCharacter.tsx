import { CommingSoon } from "../../services/CommingSoon";

function NewChar() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the NewChar path</>
            }
        </>
    )
}

export {
    NewChar,
}