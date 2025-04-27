import React from 'react';
import { CurrentActivity as CurrentActivityType } from '../../content/types';

interface CurrentActivityProps {
  activity: CurrentActivityType;
}

const CurrentActivity: React.FC<CurrentActivityProps> = ({ activity }) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-container/50 transition-colors duration-300 h-[72px]">
      <span className="text-xl flex-shrink-0">{activity.emoji}</span>
      <div className="flex-1">
        <h4 className="font-medium text-sm line-clamp-1">{activity.title}</h4>
        <p className="text-text-secondary text-xs mt-0.5 line-clamp-2">{activity.description}</p>
      </div>
    </div>
  );
};

export default CurrentActivity;