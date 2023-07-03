import { CommingSoon } from "../../services/commingSoon/CommingSoon";

function Library() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the Library path</>
            }
        </>
    )
}

export {
    Library,
}