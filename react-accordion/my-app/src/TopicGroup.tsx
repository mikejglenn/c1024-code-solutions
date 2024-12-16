import './TopicGroup.css';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topic: Topic;
  value: number;
  onTitleClick: (topicId: number) => void;
};

export function TopicGroup({ topic, value, onTitleClick }: Props) {
  return (
    <div style={{ width: '300px' }}>
      <div className="title" onClick={() => onTitleClick(topic.id)}>
        {topic.title}
      </div>
      <div
        className="content"
        style={{ display: topic.id === value ? 'block' : 'none' }}>
        {topic.content}
      </div>
    </div>
  );
}
