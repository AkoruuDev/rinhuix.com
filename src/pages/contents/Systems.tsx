import { CommingSoon } from "../../services/CommingSoon";

function Systems() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the Systems path</>
            }
        </>
    )
}

export {
    Systems,
}