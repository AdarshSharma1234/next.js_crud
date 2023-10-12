'use client'

export default function Student({ params }) {
    console.log(params)
    return (
        <div>
            <h4>student_details</h4>
            <h3>Name:{params.student}</h3>
        </div>
    )
}



