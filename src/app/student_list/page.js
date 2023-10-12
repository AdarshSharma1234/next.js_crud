
import Link from "next/link";

export default function Student_list() {

    const students = [
        { name: 'Anil', age: 12 },
        { name: 'Adarsh', age: 14 },
        { name: 'Neeraj', age: 25 }
    ];
      
    console.log("=====>>>", students)

    return (
        <div>
            <h5>Student List</h5>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        <Link href={`/student_list/${student.name}`}>
                            {student.name}
                        </Link>
                        <span>{student.age}</span>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};



  
  
  
 
 







