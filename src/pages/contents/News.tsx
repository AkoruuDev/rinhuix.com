import { CommingSoon } from "../../services/commingSoon/CommingSoon";

function News() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the News path</>
            }
        </>
    )
}

export {
    News,
}