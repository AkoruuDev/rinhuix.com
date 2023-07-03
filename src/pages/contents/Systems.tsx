import { CommingSoon } from "../../services/commingSoon/CommingSoon";

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