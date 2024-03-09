import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { FC, useEffect, useState } from 'react'

interface CoursePageProps {
  
}

const CoursePage: FC<CoursePageProps> = ({  }) => {



    const [calenderSchedule, setCalenderSchedule] = useState<{
        Monday: string[][];
        Tuesday: string[][];
        Wednesday: string[][];
        Thursday: string[][];
        Friday: string[][];
        Saturday: string[][];
        Sunday: string[][];
      }>({
        Monday: [["2:00", "4:00"], ["6:00", "8:00"]],
        Tuesday: [],
        Wednesday: [],
        Thursday: [["3:00","7:00"]],
        Friday: [],
        Saturday: [],
        Sunday: [],
      });

      const [selectedSlots, setSelectedSlots] = useState<{
        Monday: number[];
        Tuesday: number[];
        Wednesday: number[];
        Thursday: number[];
        Friday: number[];
        Saturday: number[];
        Sunday: number[];
      }>({
        Monday: [0],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
      });

      const [bookedSlots, setBookedSlots] = useState<{
        Monday: number[];
        Tuesday: number[];
        Wednesday: number[];
        Thursday: number[];
        Friday: number[];
        Saturday: number[];
        Sunday: number[];
      }>({
        Monday: [1],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
      });

      const [opened, { open, close }] = useDisclosure(false);

      useEffect(()=>{
            
      }, [])

  return (
    <div className="h-full w-full p-10">
        <Modal opened={opened} onClose={close} title="Confirmation" centered>
            <div>
            <div>
                Are you sure you want to buy this course for ${Object.keys(selectedSlots).reduce((total, day) => total + selectedSlots[day as keyof typeof selectedSlots].length, 0) * 20} ?

            </div>
            <div className='flex mt-3 px-2 text-white justify-between items-center'>
            <div>
                <button  onClick={()=>{
                    close()
                }} className='bg-[#37ac5e] py-1 px-4 rounded-md hover:bg-[#4cd57a] active:bg-[#37b460] transition-all'>
                    YES
                </button>
            </div>
            <div className='bg-[#e13f33] py-1 px-4 rounded-md hover:bg-[#fb5d52] active:bg-[#bb4138] transition-all'>
                <button onClick={close} >
                    NO
                </button>
            </div>
            </div>
            </div>
        </Modal>
    <div
        className=" h-[100%] w-full px-[40px] flex flex-col overflow-scroll pt-8 relative"
        style={{ boxShadow: '0px 8px 50px rgba(0, 0, 0, 0.05)' }}
      >
        <div className='h-[150px] bgBanner absolute top-0 left-0 right-0'>

        </div>
        <div className='absolute z-10'>
            <div className='font-bold text-[25px] flex flex-col'>
            100 Days of German
            </div>
            <div>
            Tutor: <span className='font-normal'>Megaa</span>
            </div>
        </div>
        <div className='flex flex-col pt-[126px]'>
            <div className='font-bold text-[22px]'>
                About This Course :
            </div>
            <div className='text-[16px]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt aliquid dolor laudantium ab. Necessitatibus quos accusamus, adipisci sunt dolore deleniti soluta eos distinctio cupiditate sint molestiae nostrum consectetur tempora magni eius error in unde, laboriosam nesciunt labore. Voluptate optio alias, ut earum veritatis saepe vitae, explicabo distinctio voluptatem corporis, expedita eaque deleniti officia deserunt aut quos corrupti esse enim harum vero placeat magnam dolore accusantium! Voluptates dolorem sit molestias cumque quod quas error quidem accusantium, similique alias quo facere adipisci, impedit mollitia! Dolore, consequatur! Nihil, ipsum? Natus, porro! Est, incidunt quis. Est omnis rerum suscipit laudantium voluptas iste ipsam excepturi!
            </div>
        </div>
        <div className=" rounded-[10px] p-2 w-[800px] ">
      <div className=" rounded-[10px]  flex flex-col h-full">
        <div className="w-full rounded-[5px] mt-2 h-[60px] -2 pl-3 pr-3 flex items-center justify-between text-[22px] overflow-hidden ">
          <div>Course Slots Available</div>
          <div>
          </div>
        </div>
        <div className="w-full h-full flex overflow-hidden">
          <div className="w-[25%] h-full border-r-2 overflow-hidden ">
            {Object.keys(calenderSchedule).map((day, index) => {
              return (
                <div
                  key={index}
                  className="h-[45px] text-[18px]  flex justify-center items-center"
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="w-[75%] overflow-hidden">
            {Object.keys(calenderSchedule).map((day, index) => {
              const dayKey = day as keyof typeof calenderSchedule;
              return (
                <div
                  key={index}
                  className={`h-[45px] text-[18px]  flex gap-2 pl-2 pr-2 overflow-x-scroll items-center`}
                >
                  {calenderSchedule[dayKey].filter((slot, index)=>{
                        return !bookedSlots[dayKey].includes(index)
                    }).length > 0 ? (
                    calenderSchedule[dayKey].filter((slot, index)=>{
                        return !bookedSlots[dayKey].includes(index)
                    }).map((slot, index) => {
                      return (
                        <div className={`rounded ${bookedSlots[dayKey].includes(index)?"bg-[#434343c6] text-white ":"bg-[#434343c6] cursor-pointer hover:bg-[#42a4f9] active:bg-[#3a96e6] "} ${selectedSlots[dayKey].includes(index)?"activeSlot":""}  min-w-[150px] transition-all text-white p-1 text-[14px] text-center`}
                        onClick={()=>{
                            if(bookedSlots[dayKey].includes(index)){
                                return;
                            }
                            if(selectedSlots[dayKey].includes(index)){
                                setSelectedSlots({...selectedSlots, [dayKey]: selectedSlots[dayKey].filter((slot)=>slot!=index)})
                            }else{
                                setSelectedSlots({...selectedSlots, [dayKey]: [...selectedSlots[dayKey], index]})
                            }
                        
                        }}
                        >
                          <span key={index} className="text-[16px]">
                            {slot[0]} - {slot[1]}
                          </span>
                        </div>
                      );
                    })
                  ) : (
                    <span className="text-[#3b3b3b8a]">No Slots Available</span>
                  )}
                   
                </div>

                
              );
            })}
          </div>
        </div>
      </div>
        </div>
        <div className='flex flex-col mt-4 gap-2'>
            <div className='font-bold text-[20px]'>
                More Details :
            </div>
            <div className='pl-6'>
            <div>
                Language : German
            </div>
            <div>
                Level : Beginner
            </div>
            <div>
                Pricing per slot : $20
            </div>
            <div>
                Course Start Date : March 11, 2024
            </div>
            <div>
                Course Duration : 3 Months
            </div>
            </div>
        </div>

        <div className='my-6 flex justify-between items-center'>
            <div>
                <span className='font-bold text-[18px]'> Total Price :</span> ${Object.keys(selectedSlots).reduce((total, day) => total + selectedSlots[day as keyof typeof selectedSlots].length, 0) * 20}</div>
            <div>
            <button onClick={open} className='py-2 px-4 bg-[#3591E2] hover:bg-[#3d9ef3] active:bg-[#3078b7] transition-all text-white rounded-md'>
                Bye Now
            </button>
           </div>
        </div>
    </div>
    </div>
  )
}

export default CoursePage;