
// interface CertificationCardProps {
//   title: string;
//   issuer: string;
//   icon: React.ReactNode;
//   certificateLink: string;
// }

// const CertificationCard: React.FC<CertificationCardProps> = ({
//   title,
//   issuer,
//   icon,
//   certificateLink,
// }) => {
    import React from "react";

    type CertificationCardProps = {
      title: string;
      issuer: string;
      icon: React.ReactNode;
      certificateLink: string;
    };
    
    function CertificationCard({
      title,
      issuer,
      icon,
      certificateLink,
    }: CertificationCardProps): JSX.Element {
      return (
        <div className="p-4 rounded-xl border shadow-md hover:shadow-lg transition">
          <div className="flex items-center space-x-4">
            <div className="text-3xl">{icon}</div>
            <div>
              <h2 className="font-semibold text-lg">{title}</h2>
              <p className="text-sm text-gray-500">Issued by {issuer}</p>
              <a
                href={certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      );
    }
    
    export default CertificationCard;
    
