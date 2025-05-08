
import GoBack from "@/app/components/GoBack";
import { getExperience } from "@/lib/contentful";
import { BiChevronRight } from "react-icons/bi";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const Experience = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const experience = await getExperience() as any[];
  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Experience</h1>
      <div className="space-y-3">
      {experience.reverse().map((exp,key:number)=>
        <div key={key} className="p-4 px-6 rounded-md bg-primary-800 bg-gradient-to-r from-primary-950/30 via-primary-700/30 to-primary-900/30 shadow-lg space-y-1 border border-primary-800">
          <p className="text-xs text-primary-400">{exp.fields.period}</p>
          <h3 className="font-semibold text-brand-400 gap-x-1 flex items-center text-lg"><BiChevronRight/>{exp.fields.position}</h3>
          <p className="font-semibold text-sm">{exp.fields.company}</p>
          <div className="gap-y-2 divide-y divide-primary-700/50 text-sm">
            <div className="rich-text-div">
              {documentToReactComponents(exp.fields.description)}
            </div>
          </div>
        </div>
      )}
      </div>
      <GoBack/>
	  </div>
  );
}

export default Experience;