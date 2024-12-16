import type { Topic } from './TopicGroup';
import { TopicGroup } from './TopicGroup';
import { useState } from 'react';

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [isOpen, setIsOpen] = useState(0);

  return topics.map((topic) => (
    <TopicGroup
      key={topic.id}
      topic={topic}
      value={isOpen}
      onTitleClick={(topicOpen) =>
        setIsOpen(topicOpen === isOpen ? 0 : topicOpen)
      }
    />
  ));
}
