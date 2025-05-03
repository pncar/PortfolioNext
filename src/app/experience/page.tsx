
import GoBack from "@/app/components/GoBack";
import { getExperience } from "@/lib/contentful";
import { BiChevronRight } from "react-icons/bi";
const Experience = async () => {
  const experience = await getExperience();
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Experience</h1>
      <div className="space-y-3">
      {experience.reverse().map((exp:any,key:number)=>
        <div key={key} className="p-4 px-6 rounded-md bg-primary-800 bg-gradient-to-r from-primary-900 to-primary-800 shadow-lg space-y-1 border border-primary-800">
          <p className="text-xs text-primary-400">{exp.fields.period}</p>
          <h3 className="font-semibold text-brand-400 gap-x-1 flex items-center text-lg"><BiChevronRight/>{exp.fields.position}</h3>
          <p className="font-semibold text-sm">{exp.fields.company}</p>
          <div className="gap-y-2 divide-y divide-primary-700/50 text-sm">
            {exp.fields.items.map((expitem:any,key:number)=>
              <div key={key} className="py-3 text-primary-700">
                • <span className="text-primary-300">{expitem}</span>
              </div>
            )}
          </div>
        </div>
      )}
      </div>
      <GoBack/>
	  </div>
  );
}

export default Experience;