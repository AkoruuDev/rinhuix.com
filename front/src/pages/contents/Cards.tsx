import { CommingSoon } from "../../services/CommingSoon";

function Cards() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the Cards path</>
            }
        </>
    )
}

export {
    Cards,
}