import Checkbox from '@/components/Checkbox';
import RemoveBtn from '@/components/RemoveBtn';

import Link from 'next/link';
import React from 'react'


export const fetchTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};



const page = async () => {
  const topics = 
    await fetchTopics();
  return (
    <div>
       {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>

         <Checkbox id={t._id}/>
            
            
            
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="flex gap-2 ">
            <RemoveBtn id={t._id} />
            <Link href={`/edit/${t._id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              EDIT
            </Link>
          </div>
        </div>
      ))}

    </div>
  )
}

export default page