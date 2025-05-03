import { ExternalLink } from 'lucide-react';
// interface ProjectCardProps {
//     title: string;
//     description: string;
//     tags: string[];
//     github: string;
//     Colab: string;
//   }
  
//   const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, github ,Colab}) => {
//     return (
//       <div className="rounded-2xl shadow-md p-4 bg-white dark:bg-gray-900 flex flex-col justify-between h-full">
//         <div>
//           <h3 className="text-xl font-semibold">{title}</h3>
//           <p className="text-sm mt-2">{description}</p>
//           <div className="flex flex-wrap gap-2 mt-4">
//             {tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
        
//         {/* GitHub Redirect Button */}
//         <div className="mt-4">
//           <a
//             href={github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline font-medium"
//           >
//             <ExternalLink size={16} />
//             View on GitHub
//           </a>
//           {Colab && (
//     <a
//       href={Colab}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-green-600 hover:underline font-medium"
//     >
//       <ExternalLink size={16} />
//       Open in Colab
//     </a>
//   )}
//         </div>
//       </div>
//     );
//   };
//   export default ProjectCard;
const ProjectCard = ({
  title,
  description,
  tags,
  github,
  Colab,
  image,
}: {
  title: string;
  description: string;
  tags: string[];
  github: string;
  Colab: string;
  image: string;
  
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      
      {/* Image on top */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>

        {/* Project Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-semibold"
        >
          View on GitHub →
        </a>
        {Colab && (
    <a
      href={Colab}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:underline font-medium"
    >
      <ExternalLink size={16} />
      Open in Colab
    </a>
  )}
      </div>
    </div>
  );
};

export default ProjectCard;

  