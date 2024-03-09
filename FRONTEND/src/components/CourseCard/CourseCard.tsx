import React, { FC } from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

interface CourseCardProps {}

const CourseCard: FC<CourseCardProps> = ({}) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      className="w-[300px] h-fit  cursor-pointer transition-all"
      withBorder
    >
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={80}
          alt="Norway"
        />
      </Card.Section>

      <div className="flex flex-col mt-4 mb-4">
        <div className="mb-2">
          <Text fw={500}>German Crash Course</Text>
        </div>
        <div className="flex gap-2">
          <Badge color="pink">Greek</Badge>
          <Badge color="blue">Intermediate</Badge>
        </div>
      </div>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>
      <button className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md ">
        View More
      </button>
    </Card>
  );
};

export default CourseCard;
