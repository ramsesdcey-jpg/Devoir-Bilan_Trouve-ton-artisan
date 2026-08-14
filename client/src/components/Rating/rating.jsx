import "./rating.scss";

function Rating({ note }) {
    const stars = [];

    for (let index = 1; index <= 5; index += 1) {
        if (index <= Math.floor(note)) {
            stars.push("★");
        } else {
            stars.push("☆");
        }
    }

   return (
        <div
            className="rating"
            aria-label={`Note : ${note} sur 5`}
        >
            <span className="rating__stars" aria-hidden="true">
                {stars.join("")}
            </span>
        </div>
    );
}

export default Rating;