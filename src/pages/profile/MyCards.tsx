import { CommingSoon } from "../../services/commingSoon/CommingSoon";

function MyCards() {
    const wait = true;

    return (
        <>
            {
                wait ?
                <CommingSoon /> :
                <>It ts the MyCards path</>
            }
        </>
    )
}

export {
    MyCards,
}