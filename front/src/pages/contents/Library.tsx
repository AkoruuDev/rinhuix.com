import { CommingSoon } from "../../services/CommingSoon";

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