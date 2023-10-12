export default function Lectur({ params }) {
    console.log(params)
    return (
        <div>
            <h5>Study_lectur class Day {params.lectur[0]}</h5>
            <h3>Lectur{params.lectur[1]}</h3>
        </div>
    )
}