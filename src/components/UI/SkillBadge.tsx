import React, { useState } from 'react';

interface SkillBadgeProps {
  name: string;
  level: number;
  className?: string;
}

const levelLabels = ['Introduction', 'Beginner', 'Intermediate', 'Advanced'];
const levelColors = ['#60A5FA', '#818CF8', '#A78BFA', '#C084FC'];

const SkillBadge: React.FC<SkillBadgeProps> = ({ 
  name, 
  level,
  className = '' 
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div 
        className={`p-2.5 hover:bg-container/50 rounded-lg transition-all duration-300 ${className}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="text-sm font-medium mb-1.5">{name}</div>
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                i < level 
                  ? 'bg-secondary' 
                  : 'bg-border'
              }`}
              style={{
                backgroundColor: i < level ? levelColors[i] : undefined,
                opacity: i < level ? 1 : 0.2
              }}
            />
          ))}
        </div>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-secondary text-white text-xs rounded shadow-lg whitespace-nowrap z-10">
            {levelLabels[level - 1]}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillBadge;