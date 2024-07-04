import React from 'react';
import './timeline.css';
import Image from 'next/image';

const Timeline = () => {
    return (
        <div className="timeline-container mt-10">


            <div className='flex justify-center items-center mt-10'>
                <h2 className=' text-2xl sm:text-3xl font-bold my-5 underline decoration-yellow-400'>Educational Qualifications</h2>
            </div>


            <ul>
                <li className='hover:scale-105 transition-all duration-500 cursor-pointer shadow-md shadow-gray-400' style={{ "--accent-color": "#000000" }}>

                    <div className="date">1989</div>
                    <div className='flex justify-center items-center'>
                        <Image
                            src='/prof-1.jpg'
                            height={100}
                            width={400}
                            alt='Dr. Ilyas'
                        />
                    </div>
                    <div className="title">12th: Crosthwaite Girls Inter College, Allahabad</div>
                    {/* <div ="descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!</div> */}
                </li>
                <li className='hover:scale-105 transition-all duration-500 cursor-pointer shadow-md shadow-gray-400' style={{ "--accent-color": "#facc15" }}>
                    <div className="date">1992</div>
                    <div className='flex justify-center items-center'>
                        <Image
                            src='/prof-2.jpg'
                            height={100}
                            width={400}
                            alt='Dr. Ilyas'
                        />
                    </div>
                    <div className="title">B.Sc: EWING Christian College, Allahabad University, Allahabad</div>
                    {/* <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div> */}
                </li>
                <li className='hover:scale-105 transition-all duration-500 cursor-pointer shadow-md shadow-gray-400' style={{ "--accent-color": "#000000" }}>
                    <div className="date">1995</div>
                    <div className='flex justify-center items-center'>
                        <Image
                            src='/prof-3.jpg'
                            height={100}
                            width={400}
                            alt='Dr. Ilyas'
                        />
                    </div>
                    <div className="title">M.Sc: Department of Wildlife Sciences, Aligarh Muslim University</div>
                    {/* <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.</div> */}
                </li>
                <li className='hover:scale-105 transition-all duration-500 cursor-pointer shadow-md shadow-gray-400' style={{ "--accent-color": "#facc15" }}>
                    <div className="date">2001</div>
                    <div className='flex justify-center items-center'>
                        <Image
                            src='/prof-4.jpg'
                            height={100}
                            width={400}
                            alt='Dr. Ilyas'
                        />
                    </div>
                    <div className="title">P.hD: Department of Wildlife Sciences, Aligarh Muslim University</div>
                    {/* <div className="descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div> */}
                </li>
                {/* <li className='hover:scale-105 transition-all duration-500 cursor-pointer shadow-md shadow-gray-400' style={{ "--accent-color": "#000000" }}>
                    <div className="date">2022</div>
                    <div className="title">Title 5</div>
                    <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
                </li> */}

            </ul>
        </div>
    )
}

export default Timeline;
