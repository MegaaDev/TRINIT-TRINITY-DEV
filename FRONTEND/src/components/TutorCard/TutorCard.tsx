import React, { FC } from 'react';
import { Card, Image, Text, Badge } from '@mantine/core';

interface CourseCardProps {}

const TutorCard: FC<CourseCardProps> = ({}) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      className="w-[400px] h-fit cursor-pointer transition-all"
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
          <p className="font-semibold text-xl">German Crash Course</p>
        </div>
        <div className="flex gap-2">
          <Badge color="pink">Greek</Badge>
          <Badge color="blue">Intermediate</Badge>
        </div>
      </div>{' '}
      <div className="flex flex-col mt-4 mb-4">
        <div className="mb-2">
          <Text fw={500}>Day Slots</Text>
        </div>
        <div className="flex gap-2">
          <Badge color="gray">Monday</Badge>
          <Badge color="gray">Sunday</Badge>
        </div>
      </div>
      <div className="flex flex-col mt-4 mb-4">
        <div className="mb-2">
          <Text fw={500}>Time Slots</Text>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge color="teal">3:00PM - 4:00PM</Badge>
          <Badge color="teal">3:00PM - 4:00PM</Badge>
          <Badge color="teal">5:00PM - 5:00PM</Badge>
        </div>
      </div>
      <button
        className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md "
        onClick={() => {
          window.location.href = '/mycourses/1';
        }}
      >
        Manage
      </button>
    </Card>
  );
};

export default TutorCard;
