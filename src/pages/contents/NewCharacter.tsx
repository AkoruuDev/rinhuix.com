import { CommingSoon } from "../../services/commingSoon/CommingSoon";

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