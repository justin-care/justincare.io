import { useState } from "react";

const ProjectCard = ({ name, description, liveUrl, tags, githubUrl, caseStudyUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionCharacterLimit = 100;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div role="button" tabIndex={0} aria-expanded={isExpanded} className={`relative ${isExpanded ? "fixed inset-0 z-50 flex items-center justify-center bg-white max-w-80" : "w-80 h-60"} rounded-lg shadow-lg border border-gray-300 dark:border-gray-600 p-4 bg-gray-100 dark:bg-gray-800 transition-all duration-300 ease-in-out transform ${isExpanded ? "scale-100" : "hover:scale-105"}`}onClick={toggleExpand} onKeyDown={(e) => {if (e.key === "Enter" || e.key === " ") {toggleExpand();}}}>
      {isExpanded ? (
        <div className="flex flex-col items-center justify-center gap-6 p-4">
          <h2 className="text-3xl font-bold font-teko tracking-widest">{name}</h2>
          <p className="text-lg text-center">{description}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1.5 font-bold text-sm bg-blue-200 text-blue-800 rounded-full user-select-none">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-4 justify-center mt-4">
            {
                liveUrl === "https://justincare.io/" ? <a href="#header" className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">View Live Demo</a> : <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">View Live Demo</a>
            }
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2  text-white bg-blue-500 hover:bg-blue-600 rounded-md">View Repo</a>
            {
                caseStudyUrl ? <a href={caseStudyUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">View Case Study</a> : null
            }
          </div>
          <button onClick={(e) => {e.stopPropagation();toggleExpand();}}className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">✕</button>
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full cursor-pointer">
          <h3 className="text-3xl font-bold text-center font-teko tracking-widest">{name}</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1.5 font-bold text-sm bg-blue-200 text-blue-800 rounded-full user-select-none">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 text-center">{description.substring(0, descriptionCharacterLimit)}{description.length > descriptionCharacterLimit ? "..." : ""}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
