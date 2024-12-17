import './TopicGroup.css';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topic: Topic;
  isOpen: boolean;
  onTitleClick: () => void;
};

export function TopicGroup({ topic, isOpen, onTitleClick }: Props) {
  return (
    <div style={{ width: '300px' }}>
      <div className="title" onClick={onTitleClick}>
        {topic.title}
      </div>
      {isOpen && <div className="content">{topic.content}</div>}
    </div>
  );
}
