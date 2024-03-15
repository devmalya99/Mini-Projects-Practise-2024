import Link from "next/link";


const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
]

export default function Home() {
  return (
    <>
    <h1 className="text-3xl">About Our Team Members</h1>
    <ul>
      {
        details.map((each)=>(
          <div key={each.id} className="px-4 p-2 bg-gray-400 rounded-md mt-2 mb-2">
            <li 
          className="text-2xl"
          >
            <Link
             href={`/about/${each.id}`}>
              {each.name}-- {each.role}
              </Link>
            
          </li>
          </div>
          
          
        )
        )
      }

    </ul>
    </>
  );
}
