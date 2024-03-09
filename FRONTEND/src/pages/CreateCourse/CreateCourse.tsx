import Calender from './../../components/Calender/Calender';
import Edit from './../../../public/edit.png';
import Done from './../../../public/done.png';
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

import { UserContext } from '../../Context/UserContextProvider';
import { useContext, useEffect, useState } from 'react';
import { NumberInput, Select, Switch, TagsInput } from '@mantine/core';
import 'dayjs/locale/ru';
import '@mantine/dates/styles.css';
import {
  DatesProvider,
  MonthPickerInput,
  DatePickerInput,
} from '@mantine/dates';

const CreateCourse = () => {
  const [languages] = useState([
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Russian',
    'Italian',
    'Portuguese',
    'Dutch',
  ]);
  const { user, setUser } = useContext(UserContext);

  console.log(user);
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState([
    'Beginner',
    'Intermediate',
    'Advanced',
    'Exam Level',
  ]);
  const [mode, setMode] = useState('idle');
  const Slots = () => {
    return (
      <div className="w-full">
        <div className="w-full h-[80px] flex flex-row justify-between items-center gap-10 pr-5">
          <div className="w-[300px] h-[70%] bg-[#7272f1] rounded-[10px] flex items-center justify-center font-semibold  text-xl text-[white]">
            7:00AM - 8:00AM
          </div>

          <div className="w-[300px] flex flex-row gap-4">
            Student:{' '}
            <div className="flex flex-row gap-1">
              <span>
                <div className="h-[20px] w-[20px] rounded-[50%] flex flex-row bg-[#7272f1]"></div>
              </span>{' '}
              <p>Megaa</p>
            </div>
          </div>
          <div className="h-[50px] w-[200px] rounded-[5px] flex flex-row justify-center items-center text-white font-semibold cursor-pointer bg-[#000000]">
            Go live
          </div>
        </div>
      </div>
    );
  };
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [courseDuration, setCourseDuration] = useState<number>(0);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [pricing, setPricing] = useState(0);
  const [totalPricing, setTotalPricing] = useState(0);
  const [weeklyClasses, setWeeklyClasses] = useState(0);

  const handlePricingChange = (value) => {
    const price = parseInt(value);
    setPricing(price);
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleCourseDurationChange = (value) => {
    const duration = parseInt(value);
    setCourseDuration(duration);
  };

  useEffect(() => {
    if (startDate && courseDuration) {
      const endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + courseDuration);
      setEndDate(endDate);
    }
  }, [startDate, courseDuration]);
  return (
    <div className="h-full w-full p-10 flex flex-col gap-5 ">
      <div className="w-full h-[50%] flex flex-row justify-between ">
        <div
          className=" w-[48%] h-full flex flex-col text-3xl gap-2 font-medium p-6"
          style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
        >
          <input
            type="text"
            className="border-b-[2px] py-2 font-merium  border-gray-300 outline-0"
            placeholder="Enter Course Name"
          />
          <div className="w-full flex mt-3 justify-between gap-5">
            {' '}
            <p className="font-bold text-lg text-customBlue">Description: </p>
            <textarea
              className="text-[#2e2e2e] rounded-lg w-full border-[3px] font-medium text-lg h-[80px]"
              defaultValue={description}
              // onChange={(e) => {
              //   props.setDescription(e.target.value);
              // }}
            />
          </div>
          <Select
            label="Language"
            placeholder="Pick Language"
            data={languages}
            styles={{
              label: {
                color: '#7272f1',
                fontWeight: 'bold', // Change this to your desired color
              },
            }}
            searchable
          />
          <TagsInput
            label="Level tags"
            placeholder="Select Level tags"
            data={level}
            maxDropdownHeight={200}
            styles={{
              label: {
                color: '#7272f1',
                fontWeight: 'bold', // Change this to your desired color
              },
            }}
            // onChange={(selectedOptions) => {
            //   console.log(selectedOptions);
            //   setFormDataUpdate((prevData) => ({
            //     ...prevData,
            //     Languages: selectedOptions,
            //   }));
            // }}
          />{' '}
        </div>
        <div
          className="w-[50%] flex flex-row justify-center rounded-lg  overflow-y-scroll"
          style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
        >
          <Calender />
        </div>
      </div>
      <div className="h-[50%] w-full flex  gap-8 flex-row">
        {' '}
        <div
          className="h-full w-[60%] px-10 py-5 overflow-hidden "
          style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
        >
          <div className="flex flex-row gap-5">
            <div className="h-full w-1/2 flex flex-col gap-5">
              {' '}
              <NumberInput
                label="Weekly Classes limit"
                description="Monthly class = 4 x Weekly class"
                placeholder="Enter weekly Classes Count"
                styles={{
                  label: {
                    color: '#7272f1',
                    fontWeight: 'bold', // Change this to your desired color
                  },
                }}
                onChange={(value) => setWeeklyClasses(Number(value))}
              />
              <NumberInput
                label="Pricing per Class"
                description="in ₹"
                placeholder="Enter weekly Classes Count"
                styles={{
                  label: {
                    color: '#7272f1',
                    fontWeight: 'bold', // Change this to your desired color
                  },
                }}
                onChange={(value) => handlePricingChange(Number(value))}
              />
            </div>
            <div className="h-full w-1/2  flex flex-col gap-6">
              {' '}
              <NumberInput
                label="Course Duration"
                description="in Months"
                placeholder="Enter Course duration"
                value={courseDuration}
                styles={{
                  label: {
                    color: '#7272f1',
                    fontWeight: 'bold', // Change this to your desired color
                  },
                }}
                onChange={(value: string | number) =>
                  handleCourseDurationChange(value)
                }
              />
              <DatesProvider
                settings={{
                  locale: 'en',
                  firstDayOfWeek: 0,
                  weekendDays: [0],
                  timezone: 'UTC',
                }}
              >
                <DatePickerInput
                  mt="md"
                  label="Start date"
                  placeholder="Pick start Date"
                  value={startDate}
                  styles={{
                    label: {
                      color: '#7272f1',
                      fontWeight: 'bold', // Change this to your desired color
                    },
                  }}
                  onChange={handleStartDateChange}
                />
              </DatesProvider>
              {endDate && (
                <p className="text-[#686868] text-lg">
                  Course End Date:{' '}
                  <span className="font-semibold">
                    {endDate.toDateString()}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="h-full justify-between  w-[40%] flex flex-col">
          <div
            className="h-[47%]  w-full px-10 py-5 overflow-hidden"
            style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
          >
            <div className="flex flex-row items-center gap-4 ">
              {' '}
              <p className="font-semibold text-customBlue">
                {' '}
                Is it Certified?
              </p>{' '}
              <Switch size="lg" onLabel="YES" offLabel="NO" />
            </div>
          </div>
          <div
            className="h-[47%] flex justify-center items-center w-full px-10 py-5 overflow-hidden"
            style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
          >
            <div>
              <div
                style={{ boxShadow: '0px 10px 30px rgba(100, 100, 250, 0.5)' }}
                className="h-[50px] w-[200px] rounded-[5px] flex flex-row justify-center items-center text-white font-semibold cursor-pointer transition-all bg-customBlue hover:bg-[#7a89e0]"
              >
                Create Course
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateCourse;
