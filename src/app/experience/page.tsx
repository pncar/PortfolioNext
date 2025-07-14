
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
        <div key={key} className="py-6">
          <p className="text-xs text-primary-400">{exp.fields.period}</p>
          <h3 className="font-semibold text-brand-400 gap-x-1 flex items-center text-lg"><BiChevronRight/>{exp.fields.position}</h3>
          <p className="font-semibold text-sm">{exp.fields.company}</p>
          <div className="gap-y-2 divide-y divide-primary-700/50">
            <div className="rich-text-div text-primary-800 dark:text-primary-400">
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