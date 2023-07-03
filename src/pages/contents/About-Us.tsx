import { CommingSoon } from "../../services/commingSoon/CommingSoon";

function AboutUs() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the AboutUs path</>
            }
        </>
    )
}

export {
    AboutUs,
}