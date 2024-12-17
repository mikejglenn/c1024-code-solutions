import type { Topic } from './TopicGroup';
import { TopicGroup } from './TopicGroup';
import { useState } from 'react';

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [openId, setOpenId] = useState<number>();

  return topics.map((topic) => (
    <TopicGroup
      key={topic.id}
      topic={topic}
      isOpen={openId === topic.id}
      onTitleClick={() =>
        openId === topic.id ? setOpenId(undefined) : setOpenId(topic.id)
      }
    />
  ));
}
