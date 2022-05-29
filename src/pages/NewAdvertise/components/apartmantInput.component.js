import React from 'react';

function ApartmantInputComponent(props) {
    return (
        <>
            <div className='mt-8'>
                <h3 className="text-lg">متراژ</h3>
                <input className='mt-4 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400' type="text" placeholder='متراژ به متر مربع' name="meter" id=""/>

            </div>

            <div className='mt-8'>
                <h3 className="text-lg">ودیعه</h3>
                <input className='mt-4 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400' type="text" placeholder='ودیعه به تومان' name="pish" id=""/>

            </div>

            <div className='mt-8'>
                    <h3 className="text-lg">اجارهٔ ماهانه</h3>
                <input className='mt-4 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400' type="text" placeholder='اجاره به تومان'  name="ejare" id=""/>

            </div>

            <div className='mt-8'>
                <h3 className="text-lg">ودیعه و اجاره</h3>
                <select className='mt-4 text-gray-500 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400' type="text" placeholder='' name="tamdid" id="">
                    <option className='hidden ' value=""> انتخاب</option>
                    <option value="yes">قابل تمدید </option>
                    <option value="no">غیر قابل تمدید</option>
                </select>

            </div>


            <div className='mt-8'>
                <h3 className="text-lg">مناسب برای</h3>
                <select className='mt-4 text-gray-500 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400' type="text"  name="family" id="">
                    <option className='hidden ' value=""> انتخاب</option>
                    <option value="yes">خانواده</option>
                    <option value="no">مجرد و خانواده</option>
                </select>

            </div>

            <div className='mt-8'>
                <h3 className="text-lg">تعداد اتاق</h3>
                <input className='mt-4 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400' type="number" placeholder='تعداد به عدد' name="room" id=""/>

            </div>

            <div className='mt-8'>
                <h3 className="text-lg">طبقه</h3>
                <input className='mt-4 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400' type="number" placeholder='شماره طبقه به عدد' name="floor" id=""/>

            </div>

            <div className='mt-8'>
                <h3 className="text-lg">آسانسور</h3>
                <select className='mt-4 text-gray-500 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400' type="text"  name="elevator" id="">
                    <option className='hidden ' value=""> انتخاب</option>
                    <option value="yes">دارد </option>
                    <option value="no">ندارد</option>
                </select>

            </div>

            <div className='mt-8'>
                <h3 className="text-lg">پارکینگ</h3>
                <select className='mt-4 text-gray-500 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400' type="text"  name="parking" id="">
                    <option className='hidden ' value=""> انتخاب</option>
                    <option value="yes">دارد </option>
                    <option value="no">ندارد</option>
                </select>

            </div>

            <div className='mt-8'>
                <h3 className="text-lg">انباری</h3>
                <select className='mt-4 text-gray-500 w-full border-2 border-gray-300 p-2 rounded outline-0 focus:border-2 focus:border-red-400' type="text"  name="warehouse" id="">
                    <option className='hidden ' value=""> انتخاب</option>
                    <option value="yes">دارد </option>
                    <option value="no">ندارد</option>
                </select>

            </div>
        </>
    );
}

export {ApartmantInputComponent};